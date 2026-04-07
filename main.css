:root {
  --bg: #090b11;
  --bg-elevated: rgba(16, 18, 27, 0.88);
  --bg-panel: rgba(15, 18, 28, 0.84);
  --bg-panel-strong: rgba(18, 22, 34, 0.94);
  --bg-panel-soft: rgba(13, 16, 25, 0.72);
  --text: #f5f7fb;
  --muted: #9fa8bd;
  --muted-strong: #c5ccda;
  --line: rgba(155, 170, 204, 0.14);
  --line-strong: rgba(155, 170, 204, 0.24);
  --accent: #8aa6ff;
  --accent-strong: #6f7dff;
  --accent-soft: rgba(138, 166, 255, 0.14);
  --success: #8dd8b3;
  --danger: #ff9ca3;
  --shadow-soft: 0 24px 60px rgba(4, 8, 18, 0.36);
  --shadow-card: 0 18px 40px rgba(3, 8, 18, 0.26);
  --radius-xs: 12px;
  --radius-sm: 16px;
  --radius-md: 22px;
  --radius-lg: 30px;
  --radius-xl: 38px;
  --container: 1200px;
  --space-1: 0.5rem;
  --space-2: 0.75rem;
  --space-3: 1rem;
  --space-4: 1.25rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 2.5rem;
  --space-8: 3rem;
  --space-9: 4rem;
  --space-10: 5rem;
  --transition-fast: 160ms ease;
  --transition-base: 260ms ease;
  --font-stack: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background:
    radial-gradient(56rem 28rem at 8% 6%, rgba(83, 105, 255, 0.08), transparent 72%),
    radial-gradient(48rem 24rem at 88% 14%, rgba(116, 78, 255, 0.07), transparent 74%),
    radial-gradient(42rem 22rem at 18% 62%, rgba(90, 116, 255, 0.045), transparent 76%),
    linear-gradient(180deg, #090b11 0%, #090c13 38%, #080b11 100%);
  color: var(--text);
  font-family: var(--font-stack);
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

img,
svg {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  color: inherit;
}

.skip-link,
.sr-only {
  position: absolute;
}

.skip-link {
  position: fixed;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  border: 0;
  background: transparent;
  color: transparent;
  z-index: -1;
}

.skip-link:focus,
.skip-link:focus-visible {
  width: auto;
  height: auto;
  overflow: visible;
  white-space: normal;
  clip: auto;
  clip-path: none;
  top: 12px;
  left: 12px;
  z-index: 1000;
  padding: 0.65rem 0.9rem;
  border-radius: 999px;
  background: #fff;
  color: #0a0d14;
}

.sr-only {
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.page-shell {
  position: fixed;
  inset: 0;
  z-index: -2;
  overflow: hidden;
  pointer-events: none;
}

.page-shell::before,
.page-shell::after {
  content: "";
  position: fixed;
  inset: -12vh -8vw;
  pointer-events: none;
  z-index: -1;
}

.page-shell::before {
  background:
    radial-gradient(60rem 24rem at 18% 24%, rgba(122, 144, 255, 0.06), transparent 70%),
    radial-gradient(54rem 22rem at 82% 68%, rgba(105, 85, 255, 0.05), transparent 72%);
  filter: blur(24px);
  opacity: 0.92;
}

.page-shell::after {
  background:
    radial-gradient(44rem 18rem at 50% 42%, rgba(95, 116, 255, 0.03), transparent 74%);
  filter: blur(28px);
  opacity: 0.7;
}

.ambient {
  position: absolute;
  border-radius: 999px;
  filter: blur(80px);
  opacity: 0.42;
}

.ambient-a {
  top: -8%;
  left: -10%;
  width: 34rem;
  height: 34rem;
  background: radial-gradient(circle, rgba(115, 143, 255, 0.12), transparent 64%);
}

.ambient-b {
  top: 18%;
  right: -10%;
  width: 30rem;
  height: 30rem;
  background: radial-gradient(circle, rgba(105, 85, 255, 0.11), transparent 66%);
}

.ambient-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6), transparent 75%);
  opacity: 0.25;
}

.container {
  width: min(var(--container), calc(100% - 2rem));
  margin: 0 auto;
}

.section {
  position: relative;
  padding: var(--space-10) 0;
}

.section-tight {
  padding-top: var(--space-7);
  padding-bottom: var(--space-7);
}

.section-density::before {
  display: none;
}

.section-head {
  display: grid;
  gap: 0.85rem;
  margin-bottom: var(--space-7);
}

.section-head.narrow,
.faq-narrow {
  width: min(100%, 760px);
  margin-inline: auto;
  text-align: center;
}

.section-head.left-aligned {
  max-width: 760px;
}

.section-head.compact {
  margin-bottom: var(--space-6);
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  gap: 0.45rem;
  min-height: 1.75rem;
  padding: 0.3rem 0.7rem;
  border: 1px solid rgba(129, 148, 214, 0.18);
  border-radius: 999px;
  background: rgba(16, 21, 35, 0.6);
  color: var(--muted-strong);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

h1,
h2,
h3,
p,
ul,
dl {
  margin: 0;
}

h1,
h2,
h3 {
  line-height: 1.03;
  letter-spacing: -0.03em;
}

h1 {
  max-width: 12ch;
  font-size: clamp(2.9rem, 5vw, 5.4rem);
}

h2 {
  font-size: clamp(2rem, 3.3vw, 3.1rem);
}

h3 {
  font-size: clamp(1.15rem, 2vw, 1.35rem);
}

p,
li,
dd,
dt,
span,
label,
input,
select,
textarea,
button {
  font-size: 1rem;
}

p {
  color: var(--muted);
}

.panel {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0)),
    linear-gradient(180deg, rgba(18, 22, 34, 0.95), rgba(12, 15, 24, 0.92));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), var(--shadow-card);
}

.panel::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.04), transparent 35%);
  pointer-events: none;
}

.card-quiet,
.definition-card,
.trust-mini,
.action-card,
.diagnostic-card,
.testimonial-card,
.flow-step,
.faq-item,
.pricing-card,
.product-card,
.service-group,
.boundary-shell,
.review-shell {
  transition: border-color var(--transition-base), background-color var(--transition-base), transform var(--transition-base), box-shadow var(--transition-base);
}

.card-quiet,
.definition-card,
.trust-mini,
.diagnostic-card,
.testimonial-card,
.action-card,
.flow-step {
  padding: 1.5rem;
}

.button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 3.25rem;
  padding: 0.8rem 1.15rem;
  border: 1px solid transparent;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: -0.01em;
  transition:
    transform var(--transition-fast),
    border-color var(--transition-fast),
    background-color var(--transition-fast),
    box-shadow var(--transition-fast),
    color var(--transition-fast);
}

.button:hover {
  transform: translateY(-1px);
}

.button:active {
  transform: translateY(0);
}

.button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible,
button:focus-visible,
a:focus-visible {
  outline: 2px solid rgba(143, 172, 255, 0.95);
  outline-offset: 2px;
}

.button-primary {
  background: linear-gradient(180deg, #8eabff, #6e7eff 88%);
  color: #091019;
  box-shadow: 0 14px 34px rgba(92, 104, 255, 0.3);
}

.button-primary:hover {
  box-shadow: 0 18px 40px rgba(92, 104, 255, 0.34);
}

.button-secondary {
  border-color: rgba(135, 150, 198, 0.24);
  background: rgba(17, 21, 31, 0.84);
  color: var(--text);
}

.button-secondary:hover {
  border-color: rgba(135, 150, 198, 0.42);
  background: rgba(20, 24, 35, 0.95);
}

.button[disabled] {
  cursor: not-allowed;
  opacity: 0.64;
  transform: none;
}

.button-full {
  width: 100%;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  transition: background-color var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base), backdrop-filter var(--transition-base);
}

.site-header::before {
  content: "";
  position: absolute;
  inset: 0;
  border-bottom: 1px solid transparent;
  transition: inherit;
}

.site-header.is-scrolled::before,
.site-header.is-open::before {
  border-bottom-color: rgba(142, 155, 189, 0.12);
  background: rgba(10, 12, 19, 0.7);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.header-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 5rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.brand-mark {
  width: 2rem;
  height: 2rem;
}

.brand-text,
.footer-brand {
  font-size: 1rem;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 1.1rem;
}

.site-nav > a {
  color: var(--muted-strong);
  font-size: 0.94rem;
  transition: color var(--transition-fast);
}

.site-nav > a:hover {
  color: var(--text);
}

.nav-cta {
  min-height: 2.75rem;
  padding: 0.55rem 0.95rem;
  border: 1px solid rgba(139, 152, 196, 0.18);
  border-radius: 999px;
  background: rgba(18, 22, 33, 0.8);
}

.mobile-toggle {
  display: none;
  width: 3rem;
  height: 3rem;
  padding: 0;
  border: 1px solid rgba(135, 150, 198, 0.16);
  border-radius: 999px;
  background: rgba(15, 18, 28, 0.82);
}

.mobile-toggle span:not(.sr-only) {
  position: absolute;
  left: 50%;
  width: 1rem;
  height: 2px;
  border-radius: 999px;
  background: var(--text);
  transform: translateX(-50%);
  transition: transform var(--transition-fast), opacity var(--transition-fast), top var(--transition-fast);
}

.mobile-toggle span:nth-child(2) { top: 1.12rem; }
.mobile-toggle span:nth-child(3) { top: 1.76rem; }

.mobile-toggle[aria-expanded="true"] span:nth-child(2) {
  top: 1.45rem;
  transform: translateX(-50%) rotate(45deg);
}

.mobile-toggle[aria-expanded="true"] span:nth-child(3) {
  top: 1.45rem;
  transform: translateX(-50%) rotate(-45deg);
}

.hero {
  padding-top: calc(var(--space-10) + 1.5rem);
  padding-bottom: var(--space-9);
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
  gap: var(--space-7);
  align-items: center;
}

.hero-copy {
  display: grid;
  gap: 1.35rem;
}

.hero-lead {
  max-width: 62ch;
  font-size: clamp(1.05rem, 1.6vw, 1.15rem);
  color: var(--muted-strong);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 0.25rem;
}

.micro-proof,
.signal-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.micro-proof span,
.signal-chip,
.pill,
.step-index,
.block-tag,
.tiny-label,
.scene-label,
.scene-status,
.product-tag,
.pricing-badge,
.group-title,
.example-line,
.capacity-line,
.diagnostic-dot,
.testimonial-meta,
.form-status,
.helper-text,
.note-box,
.form-copy p,
.footer-copy,
.closing-note,
.section-note,
.proof-kicker,
.field-error {
  color: var(--muted);
}

.micro-proof span,
.signal-chip,
.pill {
  min-height: 2.15rem;
  padding: 0.4rem 0.7rem;
  border: 1px solid rgba(137, 150, 190, 0.14);
  border-radius: 999px;
  background: rgba(15, 18, 28, 0.62);
  font-size: 0.88rem;
}

.hero-scene {
  position: relative;
}

.scene-frame {
  position: relative;
  min-height: 520px;
  border: 1px solid rgba(141, 155, 195, 0.12);
  border-radius: var(--radius-xl);
  background:
    radial-gradient(circle at 22% 18%, rgba(112, 130, 255, 0.16), transparent 24%),
    radial-gradient(circle at 80% 74%, rgba(99, 80, 255, 0.14), transparent 20%),
    linear-gradient(180deg, rgba(17, 21, 31, 0.88), rgba(10, 13, 21, 0.96));
  box-shadow: var(--shadow-soft), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  overflow: hidden;
}

.scene-frame::before {
  content: "";
  position: absolute;
  inset: 1.2rem;
  border-radius: calc(var(--radius-xl) - 0.9rem);
  border: 1px solid rgba(136, 150, 194, 0.08);
  pointer-events: none;
}

.scene-traces {
  position: absolute;
  inset: 0;
}

.trace-path {
  fill: none;
  stroke: rgba(126, 147, 255, 0.18);
  stroke-width: 1.3;
}

.trace-node {
  fill: rgba(147, 167, 255, 0.7);
  opacity: 0.68;
  animation: pulse 4.5s ease-in-out infinite;
}

.scene-panel {
  position: absolute;
}

.scene-primary {
  top: 4.1rem;
  right: 3.15rem;
  width: min(100%, 27.5rem);
  padding: 1.4rem;
  border: 1px solid rgba(144, 158, 203, 0.18);
  border-radius: 1.75rem;
  background:
    linear-gradient(180deg, rgba(24, 29, 44, 0.94), rgba(14, 17, 27, 0.95));
  box-shadow: 0 26px 60px rgba(5, 9, 20, 0.38), inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.scene-header,
.scene-footer,
.scene-columns,
.product-card-head,
.pricing-top,
.form-footer,
.footer-inner,
.header-inner,
.field-row,
.services-groups,
.service-row,
.product-facts div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.scene-header,
.scene-footer {
  gap: 0.8rem;
}

.scene-label,
.scene-status,
.block-tag,
.tiny-label,
.product-tag,
.pricing-badge,
.group-title,
.step-index,
.proof-kicker {
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.72rem;
}

.scene-status,
.pricing-badge {
  color: #d7ddff;
}

.scene-doc {
  margin: 1rem 0 1.15rem;
  padding: 1rem;
  border: 1px solid rgba(144, 158, 203, 0.12);
  border-radius: 1rem;
  background: rgba(11, 14, 22, 0.76);
}

.doc-row {
  height: 0.52rem;
  margin-bottom: 0.65rem;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(238, 242, 255, 0.16), rgba(238, 242, 255, 0.06));
}

.doc-row:last-child {
  margin-bottom: 0;
}

.doc-title {
  width: 58%;
}

.doc-row.short {
  width: 42%;
}

.scene-columns {
  gap: 0.9rem;
  align-items: stretch;
}

.scene-block {
  flex: 1 1 0;
  display: grid;
  gap: 0.7rem;
  padding: 1rem;
  border: 1px solid rgba(144, 158, 203, 0.12);
  border-radius: 1rem;
  background: rgba(11, 14, 22, 0.62);
}

.highlight-block {
  border-color: rgba(141, 156, 255, 0.22);
  background: linear-gradient(180deg, rgba(25, 31, 49, 0.9), rgba(16, 20, 31, 0.85));
}

.scene-block ul,
.feature-list,
.clean-list {
  display: grid;
  gap: 0.55rem;
  padding-left: 1rem;
}

.scene-block li,
.feature-list li,
.clean-list li {
  color: var(--muted-strong);
}

.scene-footer {
  margin-top: 1rem;
  justify-content: flex-start;
  gap: 0.55rem;
}

.scene-card {
  width: 13rem;
  padding: 1rem;
  border: 1px solid rgba(142, 156, 197, 0.15);
  border-radius: 1.15rem;
  background: rgba(15, 18, 28, 0.88);
  box-shadow: 0 20px 45px rgba(4, 8, 18, 0.28);
  display: grid;
  gap: 0.4rem;
}

.scene-card strong {
  font-size: 0.98rem;
  line-height: 1.18;
}

.scene-card span {
  font-size: 0.87rem;
  color: var(--muted);
}

.scene-card-a {
  top: 3rem;
  left: 2.2rem;
}

.scene-card-b {
  top: 13.6rem;
  left: 3rem;
}

.scene-card-c {
  bottom: 3.1rem;
  left: 7rem;
}

.card-grid {
  display: grid;
  gap: 1rem;
}

.four-up {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.three-up {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.two-up {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.card-quiet p,
.definition-card p,
.trust-mini p,
.diagnostic-card p,
.testimonial-card p,
.action-card p,
.flow-step p,
.product-fit,
.pricing-fit,
.pricing-descriptor,
.service-row span,
.boundary-shell p,
.faq-panel p,
.form-copy p {
  margin-top: 0.7rem;
}

.diagnostics {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.diagnostic-card {
  min-height: 12rem;
}

.diagnostic-dot {
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
  margin-bottom: 1.15rem;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(145, 167, 255, 0.9), rgba(145, 167, 255, 0.12));
  box-shadow: 0 0 14px rgba(109, 122, 255, 0.2);
}

.flow-shell {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.flow-line {
  position: absolute;
  top: 4.55rem;
  left: 15%;
  right: 15%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(137, 152, 198, 0.22), transparent);
}

.flow-step {
  position: relative;
}

.step-index {
  display: inline-flex;
  min-width: 2.35rem;
  min-height: 2.35rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  border-radius: 999px;
  border: 1px solid rgba(140, 155, 200, 0.18);
  background: rgba(15, 19, 28, 0.85);
}

.signal-row {
  margin-top: 1.3rem;
  justify-content: center;
}

.signal-row.left-aligned {
  justify-content: flex-start;
}

.trust-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(0, 0.82fr);
  gap: 1rem;
}

.trust-main {
  min-height: 100%;
  padding: 2rem;
}

.trust-main h2,
.review-copy h2,
.form-copy h2 {
  max-width: 14ch;
  margin-top: 0.95rem;
}

.trust-main p {
  max-width: 64ch;
  margin-top: 1rem;
  color: var(--muted-strong);
}

.trust-side {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.testimonial-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.testimonial-card {
  min-height: 11rem;
}

.proof-kicker {
  margin-bottom: 0.9rem;
}

.testimonial-meta {
  display: block;
  margin-top: 1rem;
  font-size: 0.88rem;
}

.review-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(18rem, 0.88fr);
  gap: 1rem;
  padding: 1.2rem;
  border-radius: var(--radius-lg);
}

.review-copy {
  padding: 1rem;
}

.review-copy p {
  margin-top: 0.9rem;
  max-width: 62ch;
}

.split-copy {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.split-copy h3 {
  font-size: 1rem;
  margin-bottom: 0.85rem;
}

.product-card {
  align-self: stretch;
  padding: 1.25rem;
  background:
    radial-gradient(circle at top, rgba(109, 128, 255, 0.14), transparent 32%),
    linear-gradient(180deg, rgba(22, 26, 40, 0.96), rgba(14, 16, 24, 0.96));
}

.product-card-head {
  align-items: flex-start;
  gap: 1rem;
}

.price,
.pricing-price {
  font-size: clamp(1.7rem, 2.8vw, 2.35rem);
  font-weight: 650;
  letter-spacing: -0.03em;
  color: var(--text);
}

.price span,
.pricing-price span {
  margin-left: 0.2rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--muted);
}

.product-facts {
  display: grid;
  gap: 0.85rem;
  margin: 1.1rem 0 1.2rem;
}

.product-facts div {
  align-items: baseline;
  gap: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(138, 151, 190, 0.1);
}

.product-facts dt {
  color: var(--muted);
}

.product-facts dd {
  color: var(--muted-strong);
  text-align: right;
}

.note-box {
  margin-top: 1rem;
  padding: 0.95rem 1rem;
  border: 1px solid rgba(142, 157, 199, 0.14);
  border-radius: 1rem;
  background: rgba(12, 15, 24, 0.82);
  font-size: 0.92rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.pricing-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
}

.pricing-card-featured {
  order: 0;
  border-color: rgba(130, 148, 255, 0.24);
  background:
    radial-gradient(circle at top, rgba(107, 127, 255, 0.14), transparent 32%),
    linear-gradient(180deg, rgba(22, 27, 42, 0.98), rgba(15, 18, 30, 0.98));
  box-shadow: 0 30px 70px rgba(6, 10, 22, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.pricing-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: inline-flex;
  min-height: 1.8rem;
  align-items: center;
  padding: 0 0.65rem;
  border: 1px solid rgba(139, 156, 255, 0.18);
  border-radius: 999px;
  background: rgba(20, 26, 41, 0.9);
}

.pricing-top {
  gap: 1rem;
  align-items: flex-start;
}

.pricing-card .feature-list {
  margin: 1.25rem 0 1.1rem;
}

.capacity-line,
.example-line,
.section-note,
.helper-text,
.form-status,
.closing-note,
.footer-copy,
.field-error {
  font-size: 0.92rem;
}

.section-note {
  margin-top: 1.1rem;
  text-align: center;
}

.services-shell,
.boundary-shell {
  padding: 1.4rem;
}

.services-groups {
  align-items: stretch;
  gap: 1rem;
}

.service-group {
  flex: 1 1 0;
  padding: 1.2rem;
}

.group-title {
  margin-bottom: 1rem;
}

.service-row {
  gap: 1rem;
  padding: 0.95rem 0;
  border-bottom: 1px solid rgba(138, 151, 190, 0.1);
}

.service-row:last-child {
  border-bottom: 0;
}

.service-row strong {
  flex: 0 0 auto;
  font-size: 0.98rem;
}

.boundary-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
  margin-top: 1.25rem;
}

.boundary-list span {
  padding: 0.95rem 1rem;
  border: 1px solid rgba(138, 151, 190, 0.12);
  border-radius: 1rem;
  background: rgba(13, 16, 25, 0.7);
  color: var(--muted-strong);
}

.closing-note {
  margin-top: 1rem;
}

.faq-section {
  padding-top: var(--space-9);
}

.faq-list {
  display: grid;
  gap: 0.8rem;
}

.faq-item {
  padding: 0;
}

.faq-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.15rem 1.25rem;
  border: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
}

.faq-trigger span:first-child {
  font-weight: 600;
}

.faq-icon {
  position: relative;
  flex: 0 0 auto;
  width: 1rem;
  height: 1rem;
}

.faq-icon::before,
.faq-icon::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0.75rem;
  height: 2px;
  border-radius: 999px;
  background: var(--muted-strong);
  transform: translate(-50%, -50%);
  transition: transform var(--transition-base), opacity var(--transition-base);
}

.faq-icon::after {
  transform: translate(-50%, -50%) rotate(90deg);
}

.faq-trigger[aria-expanded="true"] .faq-icon::after {
  opacity: 0;
}

.faq-panel {
  overflow: hidden;
  padding: 0 1.25rem 1.15rem;
}

.form-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 1rem;
  align-items: start;
}

.form-panel {
  padding: 1.35rem;
}

.contact-form {
  display: grid;
  gap: 1rem;
}

.field-row {
  gap: 1rem;
  align-items: stretch;
}

.field {
  flex: 1 1 0;
  display: grid;
  gap: 0.55rem;
}

label {
  color: var(--muted-strong);
  font-size: 0.92rem;
}

input,
select,
textarea {
  width: 100%;
  min-height: 3.35rem;
  padding: 0.9rem 1rem;
  border: 1px solid rgba(138, 151, 190, 0.14);
  border-radius: 1rem;
  background: rgba(11, 14, 22, 0.85);
  color: var(--text);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast), background-color var(--transition-fast);
}

textarea {
  min-height: 8.5rem;
  resize: vertical;
}

input::placeholder,
textarea::placeholder,
select:invalid {
  color: #7f8699;
}

input:hover,
select:hover,
textarea:hover {
  border-color: rgba(138, 151, 190, 0.2);
}

input:focus,
select:focus,
textarea:focus {
  border-color: rgba(143, 172, 255, 0.54);
  box-shadow: 0 0 0 4px rgba(126, 145, 255, 0.11);
  background: rgba(14, 18, 28, 0.96);
}

.field.is-error input,
.field.is-error select,
.field.is-error textarea {
  border-color: rgba(255, 156, 163, 0.54);
  box-shadow: 0 0 0 4px rgba(255, 156, 163, 0.1);
}

.field-error {
  min-height: 1rem;
  color: var(--danger);
}

.hp-field {
  position: absolute !important;
  left: -9999px !important;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.form-footer {
  gap: 1rem;
  align-items: center;
}

.form-status {
  min-height: 1.4rem;
}

.form-status.is-error {
  color: var(--danger);
}

.form-status.is-success {
  color: var(--success);
}

.form-panel.is-success {
  padding: 0;
}

.success-panel {
  padding: 1.6rem;
}

.success-panel h3 {
  margin-bottom: 0.7rem;
}

.site-footer {
  position: relative;
  padding: 1.5rem 0 2rem;
}

.site-footer::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 1px;
  background: rgba(136, 149, 189, 0.12);
}

.footer-inner {
  gap: 1rem;
  align-items: flex-start;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 1rem 1.25rem;
}

.footer-links a {
  color: var(--muted-strong);
  font-size: 0.94rem;
}

.footer-links a:hover {
  color: var(--text);
}

.fade-in {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 700ms ease, transform 700ms ease;
}

.fade-in.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.drift {
  animation: drift 10s ease-in-out infinite;
}

.drift-slow {
  animation-duration: 14s;
}

.drift-reverse {
  animation-direction: reverse;
  animation-duration: 12s;
}

@keyframes drift {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -8px, 0); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.88; }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .fade-in,
  .drift,
  .drift-slow,
  .drift-reverse,
  .trace-node {
    animation: none !important;
    transition: none !important;
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 1180px) {
  .diagnostics {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .hero-grid,
  .review-shell,
  .trust-layout,
  .form-layout {
    grid-template-columns: 1fr;
  }

  .hero-copy,
  .form-copy,
  .review-copy,
  .trust-main {
    max-width: none;
  }

  .hero-scene {
    order: 2;
  }
}

@media (max-width: 1024px) {
  .section {
    padding: var(--space-9) 0;
  }

  .four-up,
  .testimonial-row,
  .pricing-grid,
  .boundary-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .three-up,
  .flow-shell {
    grid-template-columns: 1fr;
  }

  .flow-line {
    display: none;
  }

  .services-groups,
  .trust-side,
  .split-copy {
    display: grid;
    grid-template-columns: 1fr;
  }

  .scene-frame {
    min-height: 460px;
  }

  .scene-primary {
    right: 2rem;
    width: min(100%, 24rem);
  }

  .scene-card-c {
    left: 4rem;
  }
}

@media (max-width: 820px) {
  .site-nav {
    position: absolute;
    top: calc(100% - 0.35rem);
    right: 0;
    left: 0;
    display: none;
    flex-direction: column;
    align-items: stretch;
    padding: 0.85rem;
    border: 1px solid rgba(141, 155, 189, 0.12);
    border-radius: 1.2rem;
    background: rgba(10, 12, 19, 0.92);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    box-shadow: var(--shadow-soft);
  }

  .site-nav.is-open {
    display: flex;
  }

  .site-nav > a,
  .nav-cta {
    min-height: 3rem;
    display: flex;
    align-items: center;
    padding: 0 0.85rem;
    border-radius: 0.9rem;
  }

  .nav-cta {
    justify-content: center;
  }

  .mobile-toggle {
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
  }

  .hero {
    padding-top: calc(var(--space-9) + 0.5rem);
  }

  h1 {
    max-width: 14ch;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-actions .button {
    width: 100%;
  }

  .diagnostics,
  .four-up,
  .three-up,
  .two-up,
  .testimonial-row,
  .pricing-grid,
  .boundary-list {
    grid-template-columns: 1fr;
  }

  .pricing-card-featured {
    order: -1;
  }

  .field-row,
  .footer-inner {
    flex-direction: column;
    align-items: stretch;
  }

  .footer-links {
    justify-content: flex-start;
  }

  .form-footer {
    flex-direction: column;
    align-items: stretch;
  }

  .form-footer .button {
    width: 100%;
  }

  .scene-frame {
    min-height: 390px;
  }

  .scene-primary {
    inset: 4.8rem 1rem auto 1rem;
    width: auto;
  }

  .scene-card {
    width: 11.25rem;
  }

  .scene-card-a {
    top: 1rem;
    left: 1rem;
  }

  .scene-card-b {
    top: auto;
    bottom: 1rem;
    left: 1rem;
  }

  .scene-card-c {
    display: none;
  }
}

@media (max-width: 560px) {
  .container {
    width: min(var(--container), calc(100% - 1rem));
  }

  .section {
    padding: var(--space-8) 0;
  }

  .header-inner {
    min-height: 4.45rem;
  }

  .hero-lead {
    font-size: 1rem;
  }

  .scene-frame {
    min-height: 330px;
    border-radius: 1.7rem;
  }

  .scene-primary {
    inset: 4.45rem 0.75rem auto 0.75rem;
    padding: 1rem;
    border-radius: 1.3rem;
  }

  .scene-columns,
  .scene-footer {
    gap: 0.5rem;
  }

  .scene-block {
    padding: 0.8rem;
  }

  .scene-block ul,
  .scene-card span,
  .scene-card .tiny-label {
    display: none;
  }

  .scene-card {
    width: calc(50% - 1rem);
    padding: 0.75rem;
  }

  .scene-card strong {
    font-size: 0.84rem;
  }

  .micro-proof,
  .signal-row {
    gap: 0.45rem;
  }

  .micro-proof span,
  .signal-chip,
  .pill {
    font-size: 0.8rem;
  }

  .panel,
  .services-shell,
  .boundary-shell,
  .review-shell,
  .form-panel,
  .trust-main,
  .product-card,
  .pricing-card,
  .flow-step,
  .card-quiet,
  .diagnostic-card,
  .definition-card,
  .action-card,
  .testimonial-card,
  .trust-mini,
  .service-group {
    border-radius: 1.15rem;
  }

  .faq-trigger {
    padding: 1rem;
  }

  .faq-panel {
    padding: 0 1rem 1rem;
  }
}
