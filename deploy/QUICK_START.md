# Quick Start Guide - Vincent Fraillon Portfolio

## Deployment Path
```
/sessions/exciting-serene-mccarthy/mnt/vincentfraillon/repos/dossier-competences/deploy/dist/
```

## Files to Deploy
All files in the `dist/` directory are production-ready. Simply copy them to your web host.

### Directory Structure
```
dist/
├── index.html              (Main entry point)
├── favicon.svg            (Browser tab icon)
├── icons.svg              (Icon assets)
└── assets/
    ├── index-D2vo0Nh9.js   (React + all components + Lucide icons)
    └── index-nqMpL4T3.css  (All styling)
```

## Test Locally (Before Deploying)
```bash
# Option 1: Using Python
cd /sessions/exciting-serene-mccarthy/mnt/vincentfraillon/repos/dossier-competences/deploy/dist
python -m http.server 8000
# Then open: http://localhost:8000

# Option 2: Using Node.js
npx http-server
# Then open: http://localhost:8080
```

## Deploy to Popular Platforms

### GitHub Pages
```bash
# Copy dist folder contents to gh-pages branch
cp -r dist/* docs/
git add docs/
git commit -m "Deploy portfolio"
git push origin main
```

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd deploy
vercel --prod
```

### Netlify
```bash
# Drag and drop the 'dist' folder to Netlify.com
# Or use CLI:
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Traditional Server (Apache/Nginx)
```bash
# Copy dist folder to web root
scp -r dist/ user@server:/var/www/html/portfolio/
```

## What's Included
- ✓ React 18 + React-DOM
- ✓ Lucide React icons (15+ icons)
- ✓ All components from original JSX
- ✓ Bilingual content (English/French)
- ✓ Scroll reveal animations
- ✓ Responsive design
- ✓ No external dependencies needed at runtime

## Features to Test After Deployment
1. **Language Toggle**: Click the "EN/FR" button in top-right
2. **Scroll Animations**: Scroll down to see elements fade in
3. **Project Cards**: Click on project titles to expand/collapse
4. **Responsive Design**: Resize browser or view on mobile
5. **Links**: All links should work (currently internal links)

## File Sizes
- **Total**: 252 KB
- **JavaScript**: 222 KB (minified)
- **CSS**: 1.8 KB (minified)
- **Static assets**: ~14 KB

## Browser Support
Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Any browser with ES2015+ support

## No Configuration Needed
- No environment variables
- No API keys
- No database setup
- No build process on the server
- Works as-is from any static host

## Troubleshooting

**CSS not loading?**
- Check that all files are in the assets/ folder
- Verify the paths in index.html match your deployment structure

**Icons not showing?**
- Ensure icons.svg is in the root dist folder
- Check browser console for 404 errors

**Language toggle not working?**
- Check console for JavaScript errors
- Verify JavaScript file is loading

**Animations not smooth?**
- This is expected on older devices
- Test in Chrome DevTools device emulation

## Support
For issues, check:
1. Browser console (F12 → Console tab)
2. Network tab for 404s or failed requests
3. That all files from dist/ are uploaded correctly

---
**Build Date**: March 19, 2026
**Build Tool**: Vite 8.0.1
**Ready to Deploy**: ✓ YES
