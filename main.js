(() => {
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-nav]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const fadeTargets = document.querySelectorAll('.fade-in');
  const accordion = document.querySelector('[data-accordion]');
  const form = document.querySelector('[data-contact-form]');
  const formPanel = document.querySelector('[data-form-panel]');
  const formStatus = document.querySelector('[data-form-status]');
  const startedAtInput = document.querySelector('[data-started-at]');
  const trackableElements = document.querySelectorAll('[data-track]');

  const pushTrackingEvent = (eventName, details = {}) => {
    const payload = {
      event: 'legal_logic_ui',
      ui_event: eventName,
      ...details,
    };

    window.dispatchEvent(new CustomEvent('legal-logic:track', { detail: payload }));

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(payload);
    }
  };

  const updateHeader = () => {
    if (!header) return;
    const isScrolled = window.scrollY > 16;
    header.classList.toggle('is-scrolled', isScrolled);
  };

  const closeNav = () => {
    if (!nav || !navToggle) return;
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    header?.classList.remove('is-open');
  };

  const openNav = () => {
    if (!nav || !navToggle) return;
    nav.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
    header?.classList.add('is-open');
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (nav && navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.contains('is-open');
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 820) {
          closeNav();
        }
      });
    });

    document.addEventListener('click', (event) => {
      if (!nav.classList.contains('is-open')) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!header?.contains(target)) {
        closeNav();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 820) {
        closeNav();
      }
    });
  }

  if ('IntersectionObserver' in window && fadeTargets.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -6% 0px',
      }
    );

    fadeTargets.forEach((target) => observer.observe(target));
  } else {
    fadeTargets.forEach((target) => target.classList.add('is-visible'));
  }

  if (accordion) {
    const items = accordion.querySelectorAll('.faq-item');

    const closeItem = (item) => {
      const button = item.querySelector('.faq-trigger');
      const panel = item.querySelector('.faq-panel');
      if (!button || !panel) return;
      button.setAttribute('aria-expanded', 'false');
      panel.hidden = true;
    };

    const openItem = (item) => {
      const button = item.querySelector('.faq-trigger');
      const panel = item.querySelector('.faq-panel');
      if (!button || !panel) return;
      button.setAttribute('aria-expanded', 'true');
      panel.hidden = false;
    };

    items.forEach((item) => {
      const button = item.querySelector('.faq-trigger');
      if (!button) return;

      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        items.forEach((other) => {
          if (other !== item) closeItem(other);
        });
        if (isExpanded) {
          closeItem(item);
        } else {
          openItem(item);
        }
      });
    });
  }

  trackableElements.forEach((element) => {
    element.addEventListener('click', () => {
      pushTrackingEvent(element.dataset.track || 'unknown_click', {
        target_text: element.textContent?.trim() || '',
      });
    });
  });

  const setFieldError = (fieldElement, hasError) => {
    const wrapper = fieldElement.closest('.field');
    if (!wrapper) return;
    wrapper.classList.toggle('is-error', hasError);
  };

  const validateForm = () => {
    if (!form) return false;
    let valid = true;
    const requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach((field) => {
      const input = field;
      let fieldValid = true;

      if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement || input instanceof HTMLSelectElement) {
        if (!input.value.trim()) {
          fieldValid = false;
        }

        if (fieldValid && input.type === 'email') {
          fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
        }
      }

      setFieldError(input, !fieldValid);
      if (!fieldValid) valid = false;
    });

    return valid;
  };

  if (form && formPanel && formStatus) {
    startedAtInput.value = String(Date.now());

    form.addEventListener('input', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement)) return;
      if (target.required || target.type === 'email') {
        setFieldError(target, false);
      }
      formStatus.textContent = '';
      formStatus.className = 'form-status';
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      formStatus.textContent = '';
      formStatus.className = 'form-status';

      if (!validateForm()) {
        formStatus.textContent = 'Перевірте обов’язкові поля.';
        formStatus.classList.add('is-error');
        const firstError = form.querySelector('.field.is-error input, .field.is-error select, .field.is-error textarea');
        if (firstError instanceof HTMLElement) {
          firstError.focus();
        }
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      if (!(submitButton instanceof HTMLButtonElement)) return;

      submitButton.disabled = true;
      submitButton.textContent = 'Надсилаємо…';

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: formData,
        });

        const payload = await response.json().catch(() => ({}));

        if (!response.ok || payload.ok !== true) {
          throw new Error(payload.error || 'Не вдалося надіслати форму.');
        }

        pushTrackingEvent('form_success', {
          interest: String(formData.get('interest') || ''),
        });

        formPanel.classList.add('is-success');
        formPanel.innerHTML = `
          <div class="success-panel panel">
            <div class="eyebrow">Запит надіслано</div>
            <h3>Дякую. Запит отримано.</h3>
            <p>Повернемось із короткою відповіддю після перегляду контексту.</p>
          </div>
        `;
      } catch (error) {
        formStatus.textContent = error instanceof Error ? error.message : 'Сталася помилка. Спробуйте ще раз.';
        formStatus.classList.add('is-error');
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Надіслати запит';
      }
    });
  }
})();
