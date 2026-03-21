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
│   └── dist/                        # Build output (may have permission issues, use --outDir flag)
├── cloudflare-deploy/               # Production bundle — drag to Cloudflare Pages or use wrangler
│   ├── index.html
│   └── assets/
├── generate_pdf.py                  # Playwright script to export website → one-pager A4 PDFs
├── Vincent_Fraillon_Resume.pdf      # EN one-pager (generated)
├── Vincent_Fraillon_CV.pdf          # FR one-pager (generated)
├── dossier-competences-vincent-fraillon.md    # Markdown version (detailed, with project refs)
├── dossier-competences-vincent-fraillon.html  # Standalone HTML version
├── dossier-competences-vincent-fraillon.jsx   # Standalone JSX version
├── Dossier de compétences - Vincent Fraillon.pdf        # Old full PDF export (~11MB)
├── Dossier de compétences - Vincent Fraillon AIEHZ.pdf  # Old full PDF export (~11MB)
└── CONTEXT.md                       # This file
```

## How to generate PDFs

The `generate_pdf.py` script uses Playwright (headless Chromium) to:
1. Load the live website (resume.fraillon.com / cv.fraillon.com)
2. Apply DOM tweaks via JS injection:
   - Remove bio paragraphs, replace with a one-sentence intro
   - Remove footer
   - Add email (vincent@fraillon.com) to header
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

```bash
cd deploy
npm install
# Build (use --outDir if dist/ has permission issues)
npx vite build --outDir /tmp/dist-out
# Copy to cloudflare-deploy
rm -rf ../cloudflare-deploy/assets
cp -r /tmp/dist-out/assets ../cloudflare-deploy/assets
cp /tmp/dist-out/index.html ../cloudflare-deploy/index.html
```

Deploy: drag `cloudflare-deploy/` to Cloudflare Pages dashboard, or use `wrangler` CLI (needs `CLOUDFLARE_API_TOKEN`).

## Key content decisions

- **No long bio** in PDF — replaced with one-sentence intro
- **Intro (EN)**: "Data and AI engineer, 8+ years. From CNRS research to Theodo, then VP Engineering, now freelance. Game theory and music fuel my creativity beyond the terminal."
- **Intro (FR)**: "Ingénieur data et IA, +8 ans d'expérience. Du CNRS à Theodo, puis VP Engineering en ESN, aujourd'hui freelance. La théorie des jeux et la musique nourrissent ma créativité au quotidien."
- **Important**: Vincent was NOT VP Engineering at Theodo — he was VP Engineering at a different ESN (consultancy). Theodo was a separate earlier role.
- **Cedrus description**: "Python engine generating PowerPoint reports from Power BI data" (not "Power BI → PowerPoint")
- **Removed from descriptions**: "(LBO model)" from Colisée, "(5 months FTE)" / "(5 mois ETP)" from Saint-Gobain
- **No footer** in PDF
- **Email**: vincent@fraillon.com

## Tech stack (website)

- React 19 + Vite
- Lucide React icons
- No external CSS framework — inline styles
- Dark/light mode toggle
- FR/EN language toggle
- Expandable "How?" / "Comment ?" sections per project

## Owner

Vincent Fraillon — vincent@fraillon.com
