// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IgnitionSim.com — the engineer's guide to sim hardware.
// Static SSG on Netlify. Canonical domain: https://ignitionsim.com
export default defineConfig({
  site: 'https://ignitionsim.com',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/_'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // local images live in src/ and public/; allow remote during dev if needed
    domains: [],
  },
});
