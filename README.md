# Legal Logic landing

Оновлений MVP-лендинг для Cloudflare Pages з мінімальним JavaScript і однією Pages Function для форми.

## Структура

```text
legal-logic-landing-updated/
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

## Що оновлено

- прибрано ризик білого артефакту від skip-link
- локалізовано зайві англомовні UI-labels
- testimonial row зроблено більш стриманим
- додано aria-invalid, aria-describedby і field-level errors
- додано no-JS fallback для форми через redirect сценарій
- mobile nav отримав Escape, focus handling і коректний aria-label
- hero scene спрощений на малих екранах

## Локальний запуск

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

- `RESEND_API_KEY`
- `RESEND_TO`
- `RESEND_FROM` (optional)
