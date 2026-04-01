(() => {
  const doc = document;
  const header = doc.querySelector('.site-header');
  const form = doc.getElementById('lead-form');
  const successBox = doc.getElementById('form-success');
  const errorBox = doc.getElementById('form-error');

  const state = {
    submitting: false,
    trackedDepths: new Set(),
  };

  const copy = {
    name: 'Вкажіть ім’я',
    company: 'Вкажіть компанію',
    email: 'Вкажіть коректний email',
    interest: 'Оберіть потрібний варіант',
    message: 'Додайте короткий опис задачі',
    messageAlt: 'Додайте короткий опис, щоб ми зрозуміли запит',
    genericError: 'Не вдалося надіслати заявку. Спробуйте ще раз або напишіть у Telegram чи на email.',
  };

  const trackEvent = (name, detail = {}) => {
    const payload = {
      event: name,
      ...detail,
      path: window.location.pathname,
      ts: Date.now(),
    };

    window.dispatchEvent(new CustomEvent('ll:track', { detail: payload }));

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);

    if (typeof window.gtag === 'function') {
      window.gtag('event', name, detail);
    }

    if (typeof window.plausible === 'function') {
      window.plausible(name, { props: detail });
    }
  };

  const updateHeader = () => {
    if (!header) return;
    header.dataset.scrolled = String(window.scrollY > 10);
  };

  const closeAccordionItem = (item) => {
    const button = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');

    item.classList.remove('is-open');
    button?.setAttribute('aria-expanded', 'false');
    if (panel) panel.hidden = true;
  };

  const openAccordionItem = (item) => {
    const accordion = item.closest('[data-accordion]');
    const button = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');

    accordion?.querySelectorAll('.faq-item').forEach((node) => {
      if (node !== item) closeAccordionItem(node);
    });

    item.classList.add('is-open');
    button?.setAttribute('aria-expanded', 'true');
    if (panel) panel.hidden = false;
  };

  const setupAccordion = () => {
    doc.querySelectorAll('[data-accordion] .faq-item').forEach((item) => {
      const button = item.querySelector('.faq-trigger');
      if (!button) return;

      button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        if (expanded) {
          closeAccordionItem(item);
        } else {
          openAccordionItem(item);
        }
      });
    });
  };

  const setFieldError = (field, message = '') => {
    const group = field.closest('.field-group');
    const errorNode = doc.getElementById(`error-${field.name}`);
    const hasError = Boolean(message);

    group?.classList.toggle('is-invalid', hasError);
    field.setAttribute('aria-invalid', hasError ? 'true' : 'false');

    if (errorNode) {
      errorNode.textContent = message;
    }
  };

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const validateField = (field) => {
    const value = field.value.trim();

    switch (field.name) {
      case 'name':
        return value ? '' : copy.name;
      case 'company':
        return value ? '' : copy.company;
      case 'email':
        if (!value) return copy.email;
        return isValidEmail(value) ? '' : copy.email;
      case 'interest':
        return value ? '' : copy.interest;
      case 'message':
        if (!value) return copy.message;
        return value.length >= 12 ? '' : copy.messageAlt;
      default:
        return '';
    }
  };

  const validateForm = () => {
    const fields = ['name', 'company', 'email', 'interest', 'message']
      .map((name) => form.elements.namedItem(name))
      .filter(Boolean);

    let firstInvalid = null;
    let valid = true;

    fields.forEach((field) => {
      const error = validateField(field);
      setFieldError(field, error);
      if (error && !firstInvalid) firstInvalid = field;
      if (error) valid = false;
    });

    if (!valid && firstInvalid) firstInvalid.focus();

    return valid;
  };

  const setSubmitting = (submitting) => {
    state.submitting = submitting;
    const submitButton = form.querySelector('button[type="submit"]');
    if (!submitButton) return;

    submitButton.disabled = submitting;
    submitButton.textContent = submitting ? 'Надсилаємо…' : 'Надіслати заявку';
  };

  const resetStatus = () => {
    if (errorBox) errorBox.textContent = '';
    if (successBox) successBox.hidden = true;
  };

  const applyPrefillFromTrigger = (trigger) => {
    if (!form || !trigger) return;

    const interestField = form.elements.namedItem('interest');
    const messageField = form.elements.namedItem('message');
    const packageName = trigger.dataset.prefillPackage;
    const interest = trigger.dataset.prefillInterest;

    if (interestField && interest) {
      interestField.value = interest;
      setFieldError(interestField, '');
    }

    if (messageField && packageName && !messageField.value.trim()) {
      messageField.value = `Цікавить пакет ${packageName}.`;
      setFieldError(messageField, '');
    }
  };

  const attachPrefillHandlers = () => {
    doc.querySelectorAll('[data-prefill-interest]').forEach((trigger) => {
      trigger.addEventListener('click', () => applyPrefillFromTrigger(trigger));
    });
  };

  const attachTrackingHandlers = () => {
    trackEvent('page_view');

    doc.querySelectorAll('[data-track]').forEach((element) => {
      element.addEventListener('click', () => {
        const eventName = element.dataset.track;
        if (!eventName) return;
        trackEvent(eventName, {
          text: element.textContent.trim(),
          href: element.getAttribute('href') || '',
        });
      });
    });

    const depthMarks = [50, 75, 90];
    window.addEventListener('scroll', () => {
      const docHeight = doc.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const scrolled = Math.round((window.scrollY / docHeight) * 100);

      depthMarks.forEach((mark) => {
        if (scrolled >= mark && !state.trackedDepths.has(mark)) {
          state.trackedDepths.add(mark);
          trackEvent(`scroll_depth_${mark}`);
        }
      });
    }, { passive: true });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    resetStatus();

    if (state.submitting) return;
    if (!validateForm()) return;

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    trackEvent('form_submit', { interest: payload.interest || '' });
    setSubmitting(true);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.ok !== true) {
        throw new Error(data.error || copy.genericError);
      }

      if (successBox) successBox.hidden = false;
      if (errorBox) errorBox.textContent = '';
      form.reset();
      trackEvent('form_success', { interest: payload.interest || '' });
      successBox?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    } catch (error) {
      if (errorBox) errorBox.textContent = error instanceof Error ? error.message : copy.genericError;
    } finally {
      setSubmitting(false);
    }
  };

  const setupValidation = () => {
    ['name', 'company', 'email', 'interest', 'message'].forEach((name) => {
      const field = form.elements.namedItem(name);
      if (!field) return;

      field.addEventListener('blur', () => setFieldError(field, validateField(field)));
      field.addEventListener('input', () => {
        if (field.closest('.field-group')?.classList.contains('is-invalid')) {
          setFieldError(field, validateField(field));
        }
      });
    });
  };

  updateHeader();
  setupAccordion();
  attachPrefillHandlers();
  attachTrackingHandlers();

  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('resize', updateHeader);

  if (form) {
    setupValidation();
    form.addEventListener('submit', submitForm);
  }
})();
