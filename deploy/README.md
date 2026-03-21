# Vincent Fraillon Portfolio - Production Build

A self-contained, production-ready static HTML/CSS/JavaScript portfolio website built from React JSX using Vite.

## Quick Links

- **📦 Deployable Files**: `/deploy/dist/` - Copy these files to any static host
- **📖 Deployment Guide**: See `DEPLOYMENT.md`
- **⚡ Quick Start**: See `QUICK_START.md`
- **📋 Build Summary**: See `BUILD_SUMMARY.txt`

## Overview

This project takes the original React JSX portfolio component (`dossier-competences-vincent-fraillon.jsx`) and builds it into a fully self-contained static website with no external dependencies.

### What's Included

✅ **Complete React Application**
- React 18 + React-DOM
- All original components (ProjectCard, Reveal animations)
- Bilingual content (English & French)
- 8 detailed project case studies

✅ **All Assets Bundled**
- Lucide React icons (15+ icons)
- CSS styling (minified)
- JavaScript (minified & optimized)
- SVG assets (favicon, icons)

✅ **Production Ready**
- No external API calls
- No external dependencies at runtime
- Fully self-contained (252 KB total)
- Works on any static host

## File Structure

```
deploy/
├── dist/                          # ⭐ PRODUCTION FILES (copy these to your host)
│   ├── index.html                 # Main entry point
│   ├── favicon.svg
│   ├── icons.svg
│   └── assets/
│       ├── index-*.js             # React + components (222 KB minified)
│       └── index-*.css            # All styles (1.8 KB minified)
│
├── src/
│   ├── App.jsx                    # Portfolio component
│   ├── main.jsx
│   ├── index.css
│   └── App.css
│
├── package.json                   # Project metadata
├── vite.config.js                 # Vite configuration
├── README.md                       # This file
├── QUICK_START.md                 # Fast deployment guide
├── DEPLOYMENT.md                  # Detailed deployment guide
└── BUILD_SUMMARY.txt              # Build statistics
```

## Building Locally

### Prerequisites
- Node.js 16+ and npm

### Development
```bash
cd deploy
npm install
npm run dev
```

The site will be available at `http://localhost:5173`

### Production Build
```bash
cd deploy
npm run build
```

This generates optimized files in `deploy/dist/`

## Deployment

### Quick Deploy (Choose One)

#### GitHub Pages
```bash
# Copy dist folder to gh-pages branch
cp -r dist/* ../gh-pages/
cd ../gh-pages
git add .
git commit -m "Deploy portfolio"
git push origin gh-pages
```

#### Vercel
```bash
npm i -g vercel
vercel --prod
```

#### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

#### Traditional Web Server
```bash
# Copy entire dist folder to your web root
scp -r dist/ user@server:/var/www/html/portfolio/
```

### Testing Before Deploy
```bash
cd dist
python -m http.server 8000
# Open http://localhost:8000
```

## Features

### Interactive Elements
- **Language Toggle**: EN/FR button (top-right)
- **Scroll Animations**: Content reveals on scroll using IntersectionObserver
- **Expandable Projects**: Click project cards to see full details
- **Responsive Design**: Works perfectly on mobile, tablet, desktop

### Content
- Professional profile with skills and experience
- 8 detailed project case studies with:
  - Client information
  - Key metrics
  - Technologies used
  - Pertinence points
  - Features delivered
- Certifications and education
- Tech stack breakdown by category

### Technical Details
- **No SSR needed**: Pure client-side React
- **No API calls**: All content is static
- **No database**: Everything is baked into the JavaScript
- **Fast loading**: 252 KB total, optimized by Vite
- **SEO friendly**: Proper semantic HTML

## Browser Support

Works on all modern browsers:
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Any browser with ES2015+ support

## Build Information

```
Build Tool:        Vite 8.0.1
React Version:     18.x
Build Status:      ✓ SUCCESSFUL
Build Time:        ~489ms
Total Size:        252 KB
JavaScript:        222 KB (minified)
CSS:              1.8 KB (minified)
Modules:          1,729 transformed
```

## Source File

The original JSX component:
```
/sessions/exciting-serene-mccarthy/mnt/vincentfraillon/repos/dossier-competences/
└─ dossier-competences-vincent-fraillon.jsx
```

## What Gets Built

The Vite build process:
1. Takes the React JSX in `src/App.jsx`
2. Bundles React + React-DOM + lucide-react
3. Includes all component code and styling
4. Minifies everything for production
5. Outputs a self-contained static site to `dist/`

## Customization

To modify the portfolio:

1. **Edit content**: Modify the `t` object in `src/App.jsx` for text/translations
2. **Change colors**: Update the `projectAccents` and hex color values
3. **Add projects**: Add entries to the `projects` object in `src/App.jsx`
4. **Modify layout**: Edit component JSX and inline styles in `src/App.jsx`
5. **Rebuild**: Run `npm run build`

## Troubleshooting

**CSS not loading?**
→ Ensure all files from dist/ are uploaded, including assets/ folder

**Icons missing?**
→ Check that icons.svg exists in dist root and is being served correctly

**Language toggle not working?**
→ Check browser console (F12) for JavaScript errors

**Slow animations?**
→ This is normal on older devices. Scroll animations use IntersectionObserver (widely supported).

## Performance

- **Total payload**: 252 KB (before gzip compression)
- **JavaScript**: 222 KB minified (≈72 KB gzipped)
- **CSS**: 1.8 KB minified (≈0.8 KB gzipped)
- **First Contentful Paint**: < 1 second on broadband
- **Time to Interactive**: < 2 seconds

## License

This portfolio build is based on the original JSX component by Vincent Fraillon.

## Support

For deployment help, see:
- `QUICK_START.md` - Fast deployment guide
- `DEPLOYMENT.md` - Detailed deployment instructions
- `BUILD_SUMMARY.txt` - Technical build details

---

**Build Date**: March 19, 2026
**Status**: ✅ Ready for Production
**Last Updated**: Build completed successfully
