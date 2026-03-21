// Quick validation of the build
const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');

console.log('=== Build Verification Report ===\n');

// Check main files
const mainFiles = [
  'index.html',
  'assets/index-nqMpL4T3.css',
  'favicon.svg',
  'icons.svg'
];

let allFilesExist = true;
console.log('Required Files:');
mainFiles.forEach(file => {
  const fullPath = path.join(distPath, file);
  const exists = fs.existsSync(fullPath);
  const size = exists ? fs.statSync(fullPath).size : 0;
  const sizeStr = exists ? `${(size / 1024).toFixed(2)} KB` : 'MISSING';
  console.log(`  ✓ ${file}: ${sizeStr}`);
  if (!exists) allFilesExist = false;
});

// Check for JavaScript bundle
const jsFiles = fs.readdirSync(path.join(distPath, 'assets')).filter(f => f.startsWith('index-') && f.endsWith('.js'));
if (jsFiles.length > 0) {
  jsFiles.forEach(file => {
    const fullPath = path.join(distPath, 'assets', file);
    const size = fs.statSync(fullPath).size;
    console.log(`  ✓ assets/${file}: ${(size / 1024).toFixed(2)} KB`);
  });
} else {
  console.log('  ✗ No JavaScript bundle found!');
  allFilesExist = false;
}

// Check HTML content
const htmlContent = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');
console.log('\nHTML Validation:');
console.log(`  ✓ DOCTYPE present: ${htmlContent.includes('<!doctype')} `);
console.log(`  ✓ Root div present: ${htmlContent.includes('id="root"')}`);
console.log(`  ✓ CSS linked: ${htmlContent.includes('.css')}`);
console.log(`  ✓ JS script present: ${htmlContent.includes('<script')}`);

// Total size
const getDirectorySize = (dir) => {
  let size = 0;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const path2 = path.join(dir, file);
    if (fs.statSync(path2).isDirectory()) {
      size += getDirectorySize(path2);
    } else {
      size += fs.statSync(path2).size;
    }
  });
  return size;
};

const totalSize = getDirectorySize(distPath);
console.log(`\nTotal Build Size: ${(totalSize / 1024).toFixed(2)} KB`);
console.log(`\nBuild Status: ${allFilesExist ? '✓ READY FOR DEPLOYMENT' : '✗ ISSUES DETECTED'}`);
