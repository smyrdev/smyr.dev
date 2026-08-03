import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://smyr.dev',
  base: '/',
  build: {
      emptyOutDir: false,
  },
  integrations: [
    mdx(),
    sitemap()
  ]
});
