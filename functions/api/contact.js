const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });

const redirect = (url, status = 303) =>
  new Response(null, {
    status,
    headers: {
      Location: url,
      'cache-control': 'no-store',
    },
  });

const escapeHtml = (value = '') =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const wantsJson = (request) => {
  const accept = request.headers.get('accept') || '';
  return accept.includes('application/json');
};

const respond = (request, payload, status = 200) => {
  if (wantsJson(request)) {
    return json(payload, status);
  }

  if (status >= 200 && status < 300) {
    return redirect('/?form=success#contact');
  }

  return redirect('/?form=error#contact');
};

export async function onRequestPost(context) {
  try {
    const request = context.request;
    const contentType = request.headers.get('content-type') || '';

    if (!contentType.includes('multipart/form-data') && !contentType.includes('application/x-www-form-urlencoded')) {
      return respond(request, { ok: false, error: 'Unsupported content type.' }, 415);
    }

    const formData = await request.formData();
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const company = String(formData.get('company') || '').trim();
    const interest = String(formData.get('interest') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const website = String(formData.get('website') || '').trim();
    const startedAt = Number(formData.get('started_at') || 0);

    if (website) {
      return respond(request, { ok: true }, 200);
    }

    if (!name || !email || !interest || !message) {
      return respond(request, { ok: false, error: 'Заповніть обов’язкові поля.' }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return respond(request, { ok: false, error: 'Вкажіть коректний email.' }, 400);
    }

    if (name.length > 80 || email.length > 120 || company.length > 120 || message.length > 1800) {
      return respond(request, { ok: false, error: 'Один із полів перевищує допустиму довжину.' }, 400);
    }

    const age = Date.now() - startedAt;
    if (!startedAt || age < 2500 || age > 1000 * 60 * 60 * 24) {
      return respond(request, { ok: false, error: 'Форма не пройшла anti-spam перевірку.' }, 400);
    }

    const resendApiKey = context.env.RESEND_API_KEY;
    const resendTo = context.env.RESEND_TO;
    const resendFrom = context.env.RESEND_FROM || 'Legal Logic <onboarding@resend.dev>';

    if (!resendApiKey || !resendTo) {
      return respond(request, { ok: false, error: 'Не налаштовано відправку листів на сервері.' }, 500);
    }

    const bodyHtml = `
      <h2>Новий запит з Legal Logic landing</h2>
      <p><strong>Ім’я:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Компанія:</strong> ${escapeHtml(company || '—')}</p>
      <p><strong>Інтерес:</strong> ${escapeHtml(interest)}</p>
      <p><strong>Повідомлення:</strong></p>
      <p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: resendFrom,
        to: [resendTo],
        reply_to: email,
        subject: `Legal Logic inquiry — ${interest}`,
        html: bodyHtml,
      }),
    });

    if (!resendResponse.ok) {
      const errorPayload = await resendResponse.text();
      console.error('Resend API error:', errorPayload);
      return respond(request, { ok: false, error: 'Не вдалося надіслати запит. Спробуйте ще раз.' }, 502);
    }

    return respond(request, { ok: true }, 200);
  } catch (error) {
    console.error('Contact form error:', error);
    return respond(context.request, { ok: false, error: 'Внутрішня помилка сервера.' }, 500);
  }
}
