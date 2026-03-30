# SCP Foundation — React SPA

A single-page application built with React + Vite displaying classified SCP Foundation documents.

## Features

- Single Page Application (no page reloads)
- JSON-driven SCP content (SCP-002 through SCP-006)
- Active nav highlighting
- Responsive — works on desktop and mobile
- Vitest + Testing Library test suite (15 tests)

## Getting Started

```bash
npm install
npm run dev
```

## Testing

```bash
npm run test          # run tests once
npm run test:watch    # watch mode
npm run test:coverage # coverage report
```

## Build & Deploy

```bash
npm run build   # outputs to /dist
```

Deploy the `/dist` folder to **GitHub Pages**, **Netlify**, or **Vercel**.

### GitHub Pages (Vite)
1. Set `base: './'` in `vite.config.js` ✅ (already done)
2. Push to GitHub
3. In repo Settings → Pages → Deploy from `gh-pages` branch, or use the [vite-plugin-gh-pages](https://www.npmjs.com/package/vite-plugin-gh-pages) workflow

### Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click Add New Project and import your GitHub repo
3. Set Framework Preset to `Vite`
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click Deploy

## Project Structure

```
scp-foundation/
├── public/
│   ├── bg3.png          ← Homepage background (plague doctor)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── NavMenu.jsx  ← Navigation bar
│   │   ├── NavMenu.css
│   │   ├── HomePage.jsx ← Landing page
│   │   ├── HomePage.css
│   │   ├── SCPPage.jsx  ← SCP document viewer
│   │   └── SCPPage.css
│   ├── data/
│   │   └── scpData.json ← All SCP content as JSON
│   ├── test/
│   │   ├── setup.js
│   │   └── App.test.jsx ← Full UI test suite
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```
