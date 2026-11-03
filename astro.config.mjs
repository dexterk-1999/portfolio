import { defineConfig } from 'astro/config';

// SITE_URL: the live address, e.g. https://example.com (for canonical links and social previews).
// BASE_PATH: only needed when the site lives under a sub-path, e.g. /portfolio on GitHub Pages.
const site = process.env.SITE_URL || undefined;
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
});
