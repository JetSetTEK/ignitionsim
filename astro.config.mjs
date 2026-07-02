// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// Build a url-path -> lastmod map from article frontmatter (publish/updated dates).
const dateMap = {};
try {
  const artRoot = 'src/content/articles';
  for (const bay of readdirSync(artRoot)) {
    const dir = join(artRoot, bay);
    for (const f of readdirSync(dir)) {
      if (!f.endsWith('.md')) continue;
      const head = readFileSync(join(dir, f), 'utf8').slice(0, 900);
      if (!/goldStatus:\s*["']?certified["']?/.test(head)) continue;
      const upd = (head.match(/updatedDate:\s*"?([0-9-]+)/) || [])[1];
      const pub = (head.match(/publishDate:\s*"?([0-9-]+)/) || [])[1];
      const d = upd || pub;
      if (d) dateMap[`/${bay}/${f.replace(/\.md$/, '')}`] = new Date(d).toISOString();
    }
  }
} catch { /* no articles yet */ }
const BUILD_ISO = new Date().toISOString();

// IgnitionSim.com — static SSG on Netlify. Canonical domain: https://ignitionsim.com
export default defineConfig({
  site: 'https://ignitionsim.com',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '') || '/';
        if (page.includes('/_')) return false;
        if (path === '/best' || path.startsWith('/best/')) return false;
        if (path === '/brand' || path.startsWith('/brand/')) return false;
        if (/^\/(racing|flight|space|marine|golf)\/gear(\/|$)/.test(path)) return false;
        return ![
          '/drops',
          '/alerts',
          '/garage',
          '/racing/configurator',
          '/flight/configurator',
          '/space/configurator',
          '/marine/configurator',
          '/golf/configurator',
        ].includes(path);
      },
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '');
        item.lastmod = dateMap[path] || BUILD_ISO;
        item.changefreq = 'weekly';
        item.priority = path === '' ? 1.0 : 0.7;
        return item;
      },
    }),
  ],
  build: { inlineStylesheets: 'auto' },
  image: { domains: [] },
});
