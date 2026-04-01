# Legal Logic landing

Статичний production-ready MVP-лендинг для Cloudflare Pages з однією формою заявки, FAQ accordion, sticky header, anchor navigation, CTA hooks і легкою Pages Function для обробки форми.

## Структура

- `index.html` — єдина сторінка лендингу
- `main.css` — уся стилізація
- `main.js` — sticky header, FAQ, form UX, inline validation, CTA tracking hooks
- `functions/api/lead.js` — Pages Function для прийому форми і форварду у webhook
- `_headers` — security/caching headers для статичних файлів
- `_redirects` — redirect для `index.html`
- `assets/og/legal-logic-og.svg` — Open Graph image

## Як оновлювати контент

Основний buyer-facing контент зібраний у `index.html`. Для ручного оновлення:

1. Знайдіть потрібну секцію за її `id` або заголовком.
2. Замініть текст прямо в HTML.
3. Якщо змінюєте CTA, збережіть `data-track` і `data-prefill-*`, щоб не зламати аналітичні hooks і prefill форми.
4. Якщо змінюєте SEO, оновіть `title`, `meta description`, `og:*`, canonical URL і `data-site-url` на `<html>`.

## Налаштування контактів

У `index.html` уже зафіксовані production-safe значення для домену `https://legallogic.org`, email `hello@legallogic.org` і Telegram `https://t.me/legallogic`. Якщо ці дані зміняться, оновіть їх прямо в HTML-розмітці.

## Локальний запуск

Можна перевірити як звичайний статичний сайт.

### Варіант 1: Python

```bash
python -m http.server 8787
```

Потім відкрийте `http://localhost:8787`.

### Варіант 2: Wrangler для Pages Functions

Щоб протестувати і сторінку, і `/api/lead` локально:

```bash
npm install -g wrangler
wrangler pages dev .
```

## Форма

### Як працює

Фронтенд надсилає `POST /api/lead` у JSON-форматі. Function:

- перевіряє required fields;
- перевіряє email;
- відсікає ботів через honeypot `website`;
- обмежує часті повторні запити в пам'яті процесу;
- форвардить заявку у зовнішній webhook через `LEAD_WEBHOOK_URL`.

### Рекомендований production-сценарій

Найпростіший стабільний варіант — передавати заявку у будь-який зовнішній endpoint, який ви вже контролюєте:

- Make webhook
- Zapier webhook
- n8n webhook
- власний backend endpoint
- CRM intake webhook

### Environment variable

У Cloudflare Pages -> Settings -> Environment variables додайте:

- `LEAD_WEBHOOK_URL` = ваш webhook URL

Без цього endpoint поверне помилку доставки.

## Деплой на Cloudflare Pages

### Git-based deploy

1. Створіть Git-репозиторій і завантажте в нього ці файли.
2. У Cloudflare Dashboard відкрийте **Workers & Pages**.
3. Натисніть **Create application** -> **Pages**.
4. Оберіть **Import an existing Git repository**.
5. Підключіть репозиторій.
6. Build settings:
   - Framework preset: `None`
   - Build command: залиште порожнім
   - Build output directory: `/`
7. Додайте env var `LEAD_WEBHOOK_URL`.
8. Запустіть deploy.

### Direct Upload

Якщо не хочете Git integration:

```bash
npm install -g wrangler
wrangler pages deploy . --project-name legal-logic
```

## Rollback

Cloudflare Pages підтримує rollback через попередні deployment-и.

1. Відкрийте проект у Cloudflare Pages.
2. Перейдіть у вкладку Deployments.
3. Оберіть попередній стабільний deployment.
4. Виконайте rollback через інтерфейс.

## Що перевірити перед production

- підключити реальний `LEAD_WEBHOOK_URL`;
- перевірити `/privacy-policy` і `/terms-of-use` або замінити посилання на готові URL;
- за потреби вставити snippet Cloudflare Web Analytics перед `</body>`;
- оновити `assets/og/legal-logic-og.svg`, якщо потрібен брендований OG із фінальним доменом або іншою графікою.
