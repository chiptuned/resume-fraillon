# Vincent Fraillon Portfolio - Deployment Guide

## Overview
This directory contains a production-ready static HTML/CSS/JavaScript build of the Vincent Fraillon portfolio website. It was built using Vite + React from the original JSX component.

## Deployable Files Location
All production-ready files are in: `/deploy/dist/`

### Files in dist/
- `index.html` - Main entry point (456 bytes)
- `assets/index-*.js` - Bundled and minified JavaScript (~222 KB)
- `assets/index-*.css` - Compiled and minified CSS (~1.8 KB)
- `favicon.svg` - Favicon
- `icons.svg` - Icon assets

**Total Size**: ~252 KB

## Key Features
- **Self-contained**: Single HTML file with all CSS and JavaScript bundled
- **Production-ready**: All assets are minified and optimized
- **Framework-free at runtime**: No need for Node.js or npm to serve
- **Responsive**: Works on all screen sizes
- **Bilingual**: English/French language toggle via fixed button (top-right)

## How to Deploy

### Option 1: Simple Static Hosting
Copy the entire `dist/` directory to any static web host:
- GitHub Pages
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any traditional web server (Apache, Nginx, etc.)

### Option 2: Local Testing
To test locally before deployment:
```bash
cd deploy/dist/
python -m http.server 8000
# or with Node.js:
npx http-server
```
Then open `http://localhost:8000` in your browser.

## Build Information
- **Built with**: Vite 8.0.1
- **React version**: 18.x
- **Lucide React icons**: All 15+ icons bundled
- **Build time**: ~489ms
- **Compression**: GZip enabled

## Original Source
Source JSX file: `dossier-competences-vincent-fraillon.jsx`

Components included:
- Scroll reveal animations (IntersectionObserver-based)
- Bilingual content (English/French)
- Project cards with expandable details
- Experience timeline
- Skills & technology stack display
- Education & certifications
- Responsive layout with inline styles

## Testing Checklist
- [ ] Language toggle (FR/EN button, top-right) works
- [ ] Scroll animations reveal content smoothly
- [ ] All project cards expand/collapse
- [ ] Responsive on mobile, tablet, desktop
- [ ] No console errors
- [ ] All images and icons load correctly
- [ ] Navigation smooth scrolling works

## Notes
- The build uses inline styles throughout (no external stylesheets beyond the bundled CSS)
- No external API calls - completely static
- All content is hardcoded (i18n dictionary included)
- The site is SEO-friendly with proper semantic HTML
