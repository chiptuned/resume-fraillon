# CLAUDE.md

## Project overview

Bilingual portfolio/CV website for Vincent Fraillon (Data & AI Engineer).
- **FR**: https://cv.fraillon.com
- **EN**: https://resume.fraillon.com

## Deployment

Cloudflare Pages — fully automatic. Push to `main` triggers build + deploy.

- **Pages project**: `resume-fraillon`
- **Build**: `npm run build` in `deploy/` → outputs to `dist/`
- **No CI workflow needed** — Cloudflare Pages handles everything

## Key files

- `deploy/src/App.jsx` — All content and UI. Both languages live here.
- `deploy/vite.config.js` — Vite config (React plugin only)
- `deploy/public/` — Static assets (favicon, PDFs)
- `scripts/generate_cv_pdfs.py` — ReportLab script that generates the bilingual one-page CV PDFs
- `CONTEXT.md` — Full project context (content decisions, PDF generation, etc.)

## Tech stack

React 19, Vite, Lucide React icons, inline CSS (no framework).
Dark/light mode + FR/EN toggle based on subdomain.

## Common tasks

**Edit site content**: Modify `deploy/src/App.jsx`, push to `main`.

**Regenerate PDFs** (bundled Python runtime with ReportLab):
```bash
python3 scripts/generate_cv_pdfs.py
```
The script writes the two PDFs directly to `deploy/public/`.

**Local dev**:
```bash
cd deploy && npm install && npm run dev
```

## Important notes

- Language detection uses subdomain: `cv.` → FR, `resume.` → EN
- Vincent was NOT VP Engineering at Theodo — that was a different ESN
- Cedrus description: "Python engine generating PowerPoint reports from Power BI data"
