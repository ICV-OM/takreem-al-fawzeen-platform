import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const htmlPath = join(distDir, 'index.html');
const outputDir = join(root, 'standalone');
const outputPath = join(outputDir, 'alriyadah.html');

let html = readFileSync(htmlPath, 'utf8');

html = html.replace(
  /<script type="module" crossorigin src="\.\/(assets\/[^\"]+\.js)"><\/script>/,
  (_match, assetPath) => {
    const script = readFileSync(join(distDir, assetPath), 'utf8');
    return `<script type="module">\n${script}\n</script>`;
  },
);

html = html.replace(
  /<link rel="stylesheet" crossorigin href="\.\/(assets\/[^\"]+\.css)">/,
  (_match, assetPath) => {
    const stylesheet = readFileSync(join(distDir, assetPath), 'utf8');
    return `<style>\n${stylesheet}\n</style>`;
  },
);

html = html.replace(
  '</head>',
  '  <meta name="standalone" content="true" />\n  <!-- افتح هذا الملف مباشرة في المتصفح بدون خادم محلي. -->\n  </head>',
);

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, html);

console.log(`Standalone browser file created: ${outputPath}`);
