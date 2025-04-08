const fs = require("fs");
const path = require("path");

// Paths
const outPath = path.join(__dirname, "out");
const indexPath = path.join(outPath, "index.html");
const fixInlinePath = path.join(outPath, "fixInline.js");

// Read index.html
let indexHtml = fs.readFileSync(indexPath, "utf8");

// Extract inline scripts
const scriptRegex = /<script>(.*?)<\/script>/gs;
const scripts = [...indexHtml.matchAll(scriptRegex)].map((match) => match[1]);

// Create fixInline.js content
const fixInlineJs = scripts.join("\n");

// Write extracted scripts into fixInline.js
fs.writeFileSync(fixInlinePath, fixInlineJs, "utf8");

// Remove inline scripts from index.html and replace with fixInline.js reference
indexHtml = indexHtml.replace(scriptRegex, "");
indexHtml = indexHtml.replace(
    "</body>",
    '<script src="fixInline.js"></script>\n</body>'
);

// Save updated index.html
fs.writeFileSync(indexPath, indexHtml, "utf8");

console.log("✅ Fixed inline scripts and moved them to fixInline.js!");
