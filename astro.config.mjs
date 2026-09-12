// @ts-check
import { defineConfig } from 'astro/config';
import pagefind from './src/integrations/pagefind.mjs';

export default defineConfig({
  integrations: [pagefind()],
});
