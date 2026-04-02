# Legal Logic landing — rebuild v4

Повністю перезібрана статична версія лендингу під Cloudflare Pages без frontend framework і без build step.

## Склад

- `index.html` — головна сторінка
- `main.css` — стилі
- `main.js` — sticky header, FAQ, CTA hooks, form UX і submit
- `functions/api/lead.js` — мінімальна Pages Function для форми
- `_headers` — security/caching headers
- `_redirects` — aliases для privacy-policy і terms-of-use
- `privacy-policy.html` — тимчасова legal page
- `terms-of-use.html` — тимчасова legal page
- `assets/og/legal-logic-og.png` — OG image

## Деплой на Cloudflare Pages

1. Завантажте весь вміст каталогу в репозиторій.
2. У Cloudflare Pages створіть проект з preset `None`.
3. Build command залиште порожнім.
4. Build output directory — `/`.
5. Додайте environment variable:
   - `LEAD_WEBHOOK_URL`
6. Задеплойте проект.

## Локальний запуск

### Простий preview

```bash
python -m http.server 8787
```

### Preview разом із Pages Function

```bash
wrangler pages dev .
```

## Контакти і домен

Усі production-значення вже вшиті статично в HTML:

- `https://legallogic.org/`
- `hello@legallogic.org`
- `https://t.me/legallogic`

Якщо зміниться домен або контакти, оновіть `index.html` і за потреби `privacy-policy.html` / `terms-of-use.html`.

## Форма

Фронтенд відправляє `POST /api/lead` у JSON. Function:

- перевіряє required fields;
- перевіряє email;
- перевіряє honeypot `website`;
- обмежує часті повторні запити;
- форвардить лід у зовнішній webhook через `LEAD_WEBHOOK_URL`.

## Що ще потрібно зробити перед реальним launch

- замінити тимчасові legal pages на фінальні тексти;
- підключити Cloudflare Web Analytics або іншу аналітику;
- перевірити реальний webhook та end-to-end submit flow;
- пройти ручний QA на 360 / 390 / 430 / 768 / 1024 / 1280.
