const WINDOW_SECONDS = 60;
const MAX_REQUESTS_PER_WINDOW = 8;
const rateLimitStore = new Map();

function json(body, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set('content-type', 'application/json; charset=utf-8');
  headers.set('cache-control', 'no-store');
  headers.set('x-content-type-options', 'nosniff');
  return new Response(JSON.stringify(body), { ...init, headers });
}

function getClientKey(request) {
  return request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for') || 'anonymous';
}

function isRateLimited(key) {
  const now = Date.now();
  const windowStart = now - WINDOW_SECONDS * 1000;
  const entries = (rateLimitStore.get(key) || []).filter((timestamp) => timestamp > windowStart);

  if (entries.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitStore.set(key, entries);
    return true;
  }

  entries.push(now);
  rateLimitStore.set(key, entries);
  return false;
}

function sanitize(value) {
  return String(value || '').trim().replace(/\s+/g, ' ');
}

function validate(payload) {
  const errors = [];
  const requiredFields = ['name', 'company', 'email', 'interest', 'message'];

  requiredFields.forEach((field) => {
    if (!sanitize(payload[field])) errors.push(field);
  });

  const email = sanitize(payload.email);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('email');
  }

  if (sanitize(payload.website)) {
    errors.push('honeypot');
  }

  return errors;
}

async function forwardToWebhook(env, lead) {
  if (!env.LEAD_WEBHOOK_URL) {
    return { delivered: false, reason: 'missing_webhook' };
  }

  const response = await fetch(env.LEAD_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'user-agent': 'legal-logic-pages-function/1.0',
    },
    body: JSON.stringify({
      source: 'legal-logic-landing',
      lead,
      receivedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error('Webhook delivery failed');
  }

  return { delivered: true };
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: 'POST, OPTIONS',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'content-type',
      'Access-Control-Max-Age': '86400',
    },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const clientKey = getClientKey(request);

  if (isRateLimited(clientKey)) {
    return json({ ok: false, error: 'Занадто багато спроб. Спробуйте ще раз трохи пізніше.' }, { status: 429 });
  }

  let payload;

  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: 'Некоректний формат запиту.' }, { status: 400 });
  }

  const errors = validate(payload);
  if (errors.length) {
    return json({ ok: false, error: 'Будь ласка, перевірте заповнення форми.' }, { status: 400 });
  }

  const lead = {
    name: sanitize(payload.name),
    company: sanitize(payload.company),
    email: sanitize(payload.email),
    messenger: sanitize(payload.messenger),
    interest: sanitize(payload.interest),
    message: sanitize(payload.message),
    url: request.headers.get('referer') || '',
    ip: clientKey,
  };

  try {
    const result = await forwardToWebhook(env, lead);

    return json({
      ok: true,
      delivered: result.delivered,
    });
  } catch {
    return json({ ok: false, error: 'Не вдалося доставити заявку. Перевірте webhook або спробуйте ще раз.' }, { status: 502 });
  }
}
