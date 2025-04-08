const fs = require('fs');
const glob = require('glob');

// Fix paths inside all HTML files
const files = glob.sync('out/**/*.html');
files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf-8');
    const modifiedContent = content.replace(/\/_next/g, './next'); // Ensure correct paths
    fs.writeFileSync(file, modifiedContent, 'utf-8');
});

// Rename "_next" directory to "next"
const sourcePath = 'out/_next';
const destinationPath = 'out/next';

fs.rename(sourcePath, destinationPath, (err) => {
    if (err) {
        console.error('Failed to rename "_next" directory to "next".', err);
    } else {
        console.log('Renamed "_next" directory to "next" successfully.');
    }
});
