# Dossier de Compétences — Project Context

## What this is

Personal portfolio / CV website for Vincent Fraillon (Data & AI Engineer, freelance).
Deployed as a static React app on Cloudflare Pages at:

- **FR**: https://cv.fraillon.com
- **EN**: https://resume.fraillon.com

The site auto-detects language from the subdomain (`cv.` → FR, `resume.` → EN).

## Repo structure

```
dossier-competences/
├── deploy/                          # Vite + React 19 project (source of truth)
│   ├── src/App.jsx                  # Main component — all content lives here (bilingual)
│   ├── vite.config.js
│   └── dist/                        # Build output
├── generate_pdf.py                  # Playwright script to export website → one-pager A4 PDFs
├── Vincent_Fraillon_Resume.pdf      # EN one-pager (generated)
├── Vincent_Fraillon_CV.pdf          # FR one-pager (generated)
├── CONTEXT.md                       # This file
└── CLAUDE.md                        # Claude Code / Cowork instructions
```

## How to generate PDFs

The `generate_pdf.py` script uses Playwright (headless Chromium) to:
1. Load the live website (resume.fraillon.com / cv.fraillon.com)
2. Apply DOM tweaks via JS injection:
   - Remove bio paragraphs, replace with a one-sentence intro
   - Remove footer
   - Add email (vincent@q4o.com) to header
   - Remove toggle buttons (dark mode, language)
   - Remove "How?" / "Comment ?" expand buttons
   - Compress spacing aggressively to fit on one A4 page
   - Fix specific text (arrows → words, Cedrus description, remove LBO/ETP mentions)
   - Force light mode
3. Export to A4 PDF with scale=0.82

```bash
pip install playwright --break-system-packages
playwright install chromium
python generate_pdf.py
```

**Note**: The PDFs are generated from the LIVE site. If you change `App.jsx`, you need to rebuild + redeploy before regenerating PDFs, OR add DOM tweaks in the script to patch the content.

## How to build & deploy

**Deployment is fully automatic via Cloudflare Pages.**

Push to `main` on GitHub → Cloudflare Pages auto-builds from `deploy/` and deploys to production. No CI workflow, no wrangler, no manual steps.

Cloudflare Pages config:
- **Project**: `resume-fraillon` on Cloudflare Pages
- **GitHub repo**: `chiptuned/resume-fraillon`
- **Build command**: `npm run build`
- **Build output**: `dist`
- **Root directory**: `deploy`
- **Custom domains**: `cv.fraillon.com`, `resume.fraillon.com`
- **Pages URL**: `resume-fraillon.pages.dev`

To test locally:
```bash
cd deploy
npm install
npm run dev      # dev server
npm run build    # production build → dist/
```

## Key content decisions

- **No long bio** in PDF — replaced with one-sentence intro
- **Intro (EN)**: "Data and AI engineer, 8+ years. From CNRS research to Theodo, then VP Engineering, now freelance. Game theory and music fuel my creativity beyond the terminal."
- **Intro (FR)**: "Ingénieur data et IA, +8 ans d'expérience. Du CNRS à Theodo, puis VP Engineering en ESN, aujourd'hui freelance. La théorie des jeux et la musique nourrissent ma créativité au quotidien."
- **Important**: Vincent was NOT VP Engineering at Theodo — he was VP Engineering at a different ESN (consultancy). Theodo was a separate earlier role.
- **Cedrus description**: "Python engine generating PowerPoint reports from Power BI data" (not "Power BI → PowerPoint")
- **Removed from descriptions**: "(LBO model)" from Colisée, "(5 months FTE)" / "(5 mois ETP)" from Saint-Gobain
- **No footer** in PDF
- **Email**: vincent@q4o.com

## Tech stack (website)

- React 19 + Vite
- Lucide React icons
- No external CSS framework — inline styles
- Dark/light mode toggle
- FR/EN language toggle
- Expandable "How?" / "Comment ?" sections per project

## Owner

Vincent Fraillon — vincent@q4o.com
