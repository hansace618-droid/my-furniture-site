// @ts-check
import { defineConfig } from 'astro/config';
import pagefind from "@pagefind/astro";

export default defineConfig({
  integrations: [pagefind()],
});
