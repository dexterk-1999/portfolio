import { defineConfig } from 'astro/config';

// Set SITE_URL when you know the live address (for canonical links and social previews).
const site = process.env.SITE_URL || undefined;

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory' },
});
