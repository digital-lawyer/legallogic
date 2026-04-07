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
  let lastFocusedBeforeMenu = null;

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

  const setMenuButtonState = (expanded) => {
    if (!navToggle) return;
    navToggle.setAttribute('aria-expanded', String(expanded));
    navToggle.setAttribute('aria-label', expanded ? 'Закрити меню' : 'Відкрити меню');
    const srText = navToggle.querySelector('.sr-only');
    if (srText) srText.textContent = expanded ? 'Закрити меню' : 'Відкрити меню';
  };

  const getFocusableNavItems = () => {
    if (!nav) return [];
    return Array.from(nav.querySelectorAll('a[href], button:not([disabled])'));
  };

  const closeNav = ({ restoreFocus = true } = {}) => {
    if (!nav || !navToggle) return;
    nav.classList.remove('is-open');
    setMenuButtonState(false);
    header?.classList.remove('is-open');
    if (restoreFocus && lastFocusedBeforeMenu instanceof HTMLElement) {
      lastFocusedBeforeMenu.focus();
    }
    lastFocusedBeforeMenu = null;
  };

  const openNav = () => {
    if (!nav || !navToggle) return;
    lastFocusedBeforeMenu = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    nav.classList.add('is-open');
    setMenuButtonState(true);
    header?.classList.add('is-open');
    const firstLink = getFocusableNavItems()[0];
    if (firstLink instanceof HTMLElement) firstLink.focus();
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (nav && navToggle) {
    setMenuButtonState(false);

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
          closeNav({ restoreFocus: false });
        }
      });
    });

    document.addEventListener('click', (event) => {
      if (!nav.classList.contains('is-open')) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!header?.contains(target)) {
        closeNav({ restoreFocus: false });
      }
    });

    document.addEventListener('keydown', (event) => {
      if (!nav.classList.contains('is-open')) return;

      if (event.key === 'Escape') {
        event.preventDefault();
        closeNav();
        return;
      }

      if (event.key === 'Tab') {
        const focusables = getFocusableNavItems();
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const current = document.activeElement;

        if (event.shiftKey && current === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && current === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 820) {
        closeNav({ restoreFocus: false });
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

  const setFieldError = (fieldElement, message = '') => {
    const wrapper = fieldElement.closest('.field');
    if (!wrapper) return;
    const errorNode = wrapper.querySelector('.field-error');
    const hasError = Boolean(message);
    wrapper.classList.toggle('is-error', hasError);
    fieldElement.setAttribute('aria-invalid', hasError ? 'true' : 'false');
    if (errorNode) errorNode.textContent = message;
  };

  const validateField = (field) => {
    const value = field.value.trim();

    if (field.hasAttribute('required') && !value) {
      return 'Це поле обов’язкове.';
    }

    if (field instanceof HTMLInputElement && field.type === 'email' && value) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return 'Вкажіть коректний email.';
      }
    }

    return '';
  };

  const validateForm = () => {
    if (!form) return false;
    let valid = true;
    const fields = form.querySelectorAll('input, select, textarea');

    fields.forEach((field) => {
      if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement)) return;
      if (field.name === 'website' || field.type === 'hidden') return;
      const message = validateField(field);
      setFieldError(field, message);
      if (message) valid = false;
    });

    return valid;
  };

  const renderSuccessPanel = () => {
    if (!formPanel) return;
    formPanel.classList.add('is-success');
    formPanel.innerHTML = `
      <div class="success-panel panel">
        <div class="eyebrow">Запит надіслано</div>
        <h3>Дякую. Запит отримано.</h3>
        <p>Повернемось із короткою відповіддю після перегляду контексту.</p>
      </div>
    `;
  };

  const applyServerFallbackState = () => {
    const params = new URLSearchParams(window.location.search);
    const formState = params.get('form');

    if (formState === 'success') {
      renderSuccessPanel();
      pushTrackingEvent('form_success', { source: 'server_redirect' });
      history.replaceState({}, document.title, `${window.location.pathname}#contact`);
      return;
    }

    if (formState === 'error' && formStatus) {
      formStatus.textContent = 'Не вдалося надіслати запит. Спробуйте ще раз.';
      formStatus.className = 'form-status is-error';
      history.replaceState({}, document.title, `${window.location.pathname}#contact`);
    }
  };

  if (form && formPanel && formStatus) {
    startedAtInput.value = String(Date.now());
    applyServerFallbackState();

    form.addEventListener('input', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement)) return;
      const message = validateField(target);
      setFieldError(target, message);
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
          source: 'ajax',
        });

        renderSuccessPanel();
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
