import { execSync } from 'node:child_process';
import { cpSync, mkdirSync, existsSync } from 'node:fs';

// 1) Build the Pagefind search index from the generated static site
execSync('npx pagefind --site dist', { stdio: 'inherit' });

// 2) Copy the Pagefind UI assets next to the generated index so the
//    search page can load them from /pagefind/pagefind-ui.css and .js
const uiSource = 'node_modules/@pagefind/default-ui/ui';
const indexDir = 'dist/pagefind';
if (existsSync(uiSource)) {
  mkdirSync(indexDir, { recursive: true });
  cpSync(uiSource + '/pagefind-ui.css', indexDir + '/pagefind-ui.css');
  cpSync(uiSource + '/pagefind-ui.js', indexDir + '/pagefind-ui.js');
  console.log('[postbuild] Pagefind UI copied to ' + indexDir);
}