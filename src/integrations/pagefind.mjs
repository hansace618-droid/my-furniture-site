/**
 * Pagefind Astro integration — guarantees the search index is built
 * on EVERY `astro build`, regardless of how the build command is invoked
 * (works even when Cloudflare runs a bare `astro build` instead of
 * `npm run build`, which previously skipped the postbuild script).
 */
import { execSync } from 'node:child_process';
import { cpSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export default function pagefind() {
  return {
    name: 'tars-home-pagefind',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const dist = fileURLToPath(dir);
        logger.info('Building Pagefind search index...');
        execSync(`npx pagefind --site "${dist}"`, { stdio: 'inherit' });

        const uiSource = 'node_modules/@pagefind/default-ui/ui';
        const indexDir = dist + '/pagefind';
        if (existsSync(uiSource)) {
          mkdirSync(indexDir, { recursive: true });
          cpSync(uiSource + '/pagefind-ui.css', indexDir + '/pagefind-ui.css');
          cpSync(uiSource + '/pagefind-ui.js', indexDir + '/pagefind-ui.js');
          logger.info('Pagefind UI copied to ' + indexDir);
        }
      },
    },
  };
}
