# Legal Logic landing v5

Нова статична версія лендингу в більш product-led / Linear-inspired напрямку: чистіша композиція, м'якша типографіка, світла нейтральна палітра з фіолетово-індиговим акцентом, оновлені назви пакетів і окремий стартовий формат `Contract System Review`.

## Структура

- `index.html` — основна сторінка
- `main.css` — уся стилістика
- `main.js` — sticky header, FAQ, tracking hooks, form UX
- `functions/api/lead.js` — Pages Function для форми
- `_headers`, `_redirects` — конфігурація для Cloudflare Pages
- `privacy-policy.html`, `terms-of-use.html` — тимчасові legal pages
- `assets/og/legal-logic-og.png` — OG image

## Контакти

У коді вже зашиті:

- `hello@legallogic.org`
- `https://t.me/legallogic`
- `https://legallogic.org/`

Якщо потрібно змінити їх, оновіть `index.html` і legal pages.

## Форма

Форма надсилає `POST /api/lead` у Pages Function. Для production додайте env var:

- `LEAD_WEBHOOK_URL`

Без цього заявки не будуть доставлятися у зовнішній workflow.

## Локальний запуск

### Статично

```bash
python -m http.server 8787
```

### З Pages Functions

```bash
wrangler pages dev .
```

## Деплой

1. Завантажте проект у Git-репозиторій.
2. Створіть Pages project у Cloudflare.
3. Build preset — `None`.
4. Build command — порожньо.
5. Output directory — `/`.
6. Додайте `LEAD_WEBHOOK_URL`.

## Що ще бажано зробити перед production

- замінити тимчасові legal pages на фінальні;
- перевірити copy та при потребі дошліфувати конкретні секції;
- додати Cloudflare Web Analytics або GA4;
- за потреби оновити OG image під фінальний launch.
