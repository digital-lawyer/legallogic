# Legal Logic landing

Статичний MVP-лендинг для Cloudflare Pages з мінімальним JavaScript і однією Pages Function для форми.

## Структура

```text
legal-logic-landing/
├── index.html
├── main.css
├── main.js
├── _headers
├── _redirects
├── README.md
└── functions/
    └── api/
        └── contact.js
```

## Локальний запуск

Можна відкрити `index.html` напряму для перевірки верстки.
Для локального тесту Pages Function:

```bash
npm install -g wrangler
wrangler pages dev .
```

## Cloudflare Pages

- Framework preset: `None`
- Build command: leave empty
- Build output directory: `/`
- Root directory: repository root

## Environment variables

Для форми через Resend додайте в Cloudflare Pages:

- `RESEND_API_KEY`
- `RESEND_TO`
- `RESEND_FROM` (optional)

Без цих змінних форма віддасть помилку налаштування бекенду.

## Що замінити перед production

- canonical URL і OG URL в `index.html`
- `og:image`
- email і Telegram в footer
- buyer-facing copy на фінальну версію
- ціни й місткість пакетів
- реальні testimonial quotes
- якщо потрібно, тексти privacy page та посилання на неї
