const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const revealItems = document.querySelectorAll("[data-reveal]");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const yearTarget = document.querySelector("[data-year]");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (nav && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Закрити меню" : "Відкрити меню");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Відкрити меню");
    });
  });
}

const handleHeader = () => {
  if (!header) return;
  header.classList.toggle("is-condensed", window.scrollY > 18);
};

handleHeader();
window.addEventListener("scroll", handleHeader, { passive: true });

if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("reveal-ready");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -5% 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const websiteTrap = String(formData.get("website") || "").trim();

    if (websiteTrap) {
      formStatus.textContent = "Заявку не вдалося підготувати. Спробуйте ще раз.";
      return;
    }

    const payload = {
      name: String(formData.get("name") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      messenger: String(formData.get("messenger") || "").trim(),
      requestType: String(formData.get("requestType") || "").trim(),
      details: String(formData.get("details") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.requestType || !payload.details) {
      formStatus.textContent = "Будь ласка, заповніть обов’язкові поля.";
      return;
    }

    const body = [
      "Нова заявка з сайту Legal Logic",
      "",
      `Ім'я: ${payload.name}`,
      `Компанія: ${payload.company || "-"}`,
      `Email: ${payload.email}`,
      `Месенджер / Telegram: ${payload.messenger || "-"}`,
      `Формат запиту: ${payload.requestType}`,
      "",
      "Короткий опис задачі:",
      payload.details,
    ].join("\n");

    const mailto = `mailto:hello@legallogic.org?subject=${encodeURIComponent(
      `Legal Logic — ${payload.requestType}`
    )}&body=${encodeURIComponent(body)}`;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(body);
      }
      formStatus.textContent =
        "Чернетку заявки підготовлено. Також ми скопіювали текст у буфер обміну як запасний варіант.";
    } catch {
      formStatus.textContent =
        "Чернетку заявки підготовлено. Якщо лист не відкриється, напишіть нам напряму на email.";
    }

    window.location.href = mailto;
  });
}
