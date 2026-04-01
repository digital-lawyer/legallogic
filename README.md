# Legal Logic landing

Оновлена статична production-ready версія для Cloudflare Pages після acceptance review.

## Що виправлено

- mobile hero: текстовий блок і CTA йдуть перед visual module
- mobile header: компактний, без другої sticky-стрічки навігації
- SEO і контакти: статично зашиті в HTML
- a11y форми: `aria-describedby` + `aria-errormessage` + коректні live regions
- контраст дрібного тексту: посилено
- CSP: прибрано inline script
- legal links: додані реальні статичні сторінки
- OG image: додано PNG для кращої сумісності

## Файли

- `index.html`
- `main.css`
- `main.js`
- `functions/api/lead.js`
- `_headers`
- `_redirects`
- `privacy-policy.html`
- `terms-of-use.html`
- `assets/og/legal-logic-og.png`
- `assets/og/legal-logic-og.svg`

## Контакти

У footer і сторінці вже стоять:

- `hello@legallogic.org`
- `https://t.me/legallogic`

## Форма

Фронтенд надсилає `POST /api/lead` у JSON.

Потрібно додати environment variable у Cloudflare Pages:

- `LEAD_WEBHOOK_URL=https://your-webhook.example/...`

Без цього форма поверне помилку доставки.

## Локальний запуск

```bash
python -m http.server 8787
```

або

```bash
wrangler pages dev .
```

## Деплой на Cloudflare Pages

### Git-based deploy

- Framework preset: `None`
- Build command: порожньо
- Build output directory: `/`

### Direct upload

```bash
wrangler pages deploy . --project-name legal-logic
```

## Перед продакшеном ще варто перевірити

- реальний webhook
- фінальні тексти Privacy Policy / Terms of Use
- підключення Cloudflare Web Analytics або іншої аналітики
- preview на 360 / 390 / 430 / 768 / 1024 / 1280
