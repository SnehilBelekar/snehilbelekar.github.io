# Snehil Belekar Cv

Personal portfolio and résumé site for **Snehil Belekar** — Senior Technical Architect specialising in DevSecOps, Security Architecture, Multi-Cloud (Azure · AWS · GCP), IoT, and FinOps.

Live at [snehilbelekar.github.io](https://snehilbelekar.github.io)
Blogs at [snehilbelekar.github.io/blogs/](https://snehilbelekar.github.io/blogs)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Vue 3](https://vuejs.org/) with `<script setup>` SFCs |
| Language | TypeScript |
| Build tool | [Vite 6](https://vitejs.dev/) |
| Testing | [Vitest](https://vitest.dev/) + [@vue/test-utils](https://test-utils.vuejs.org/) |
| Accessibility audit | [axe-core](https://github.com/dequelabs/axe-core) via Playwright |
| Deployment | GitHub Pages (pushed from `main`) |

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Install dependencies

```bash
npm install
```

### Run dev server

```bash
npm run dev
# → http://localhost:5173
```

### Build for production

```bash
npm run build
# Output written to dist/
```

### Preview production build

```bash
npm run preview
```

---

## Testing

Run the component unit-test suite:

```bash
npm test
```

Watch mode:

```bash
npm run test:watch
```

### Accessibility audit

Requires a running dev server (`npm run dev`) in a separate terminal:

```bash
node scripts/a11y-audit.mjs
# Results written to reports/a11y-report.json
```

---

## Features

- **Multilingual résumé** — switch between English 🇬🇧, French 🇫🇷, and Dutch 🇳🇱 at runtime via the language selector in the top nav.
- **Sticky navigation** — smooth-scrolls to each résumé section; automatically folds on mobile with a home-toggle button.
- **Core Skills Matrix** — tabular skills overview rendered from typed data, no manual HTML editing required.
- **Static blog** — standalone HTML pages under `/blogs/` with custom Vite dev-server routing so they work in both dev and production.
- **PDF download** — direct link to the latest résumé PDF served from `/resume/`.
- **Accessibility-first** — axe-core audit baked into the project with a JSON report artifact.

---

## Deployment

The site is deployed to GitHub Pages automatically from the `main` branch. After pushing:

```bash
git push origin main
```

GitHub Actions (or the configured Pages workflow) builds and publishes the `dist/` directory.

---

## License

This project is personal portfolio work. Content (text, photos, PDF résumé) is © Snehil Belekar. The source code structure may be freely referenced for learning purposes.
