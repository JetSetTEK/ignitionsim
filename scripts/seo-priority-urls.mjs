import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const site = JSON.parse(await readFile(join(root, 'src/data/site.json'), 'utf8'));
const growth = JSON.parse(await readFile(join(root, 'src/data/growth-priorities.json'), 'utf8'));
const priorityIds = new Set([...(growth.cornerstoneArticleIds || []), ...(growth.streamLeadArticleIds || [])]);

const frontmatter = (source) => {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  const data = {};
  if (!match) return data;
  for (const line of match[1].split('\n')) {
    const item = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!item) continue;
    data[item[1]] = item[2].trim().replace(/^['"]|['"]$/g, '');
  }
  return data;
};
const isCertified = (data) => data.goldStatus === 'certified' && data.draft !== 'true';
const imageCount = (source) =>
  [...source.matchAll(/!\[[^\]]*]\(([^)]+)\)/g), ...source.matchAll(/<img\s+[^>]*src=["']([^"']+)["']/g)].length;
const faqCount = (source) => (source.match(/\n\s*q:\s*["']/g) || []).length;
const recencyScore = (date) => {
  const ts = +new Date(date || 0);
  if (!ts) return 0;
  const days = (Date.now() - ts) / 86400000;
  if (days <= 14) return 30;
  if (days <= 45) return 22;
  if (days <= 100) return 14;
  if (days <= 180) return 8;
  return 2;
};
const typeScore = (type) => ({
  'buying-guide': 16,
  comparison: 14,
  'ecosystem-upgrade-path': 12,
  'gear-explainer': 9,
  'how-to': 8,
  diy: 7,
}[type] || 5);

async function loadArticles() {
  const out = [];
  const artRoot = join(root, 'src/content/articles');
  for (const bay of await readdir(artRoot)) {
    const dir = join(artRoot, bay);
    for (const file of (await readdir(dir)).filter((item) => item.endsWith('.md'))) {
      const source = await readFile(join(dir, file), 'utf8');
      const data = frontmatter(source);
      if (!isCertified(data)) continue;
      const slug = file.replace(/\.md$/, '');
      const id = `${bay}/${slug}`;
      const visuals = imageCount(source);
      const faqs = faqCount(source);
      let score = 0;
      if (priorityIds.has(id)) score += 90;
      if (data.revenueTier === 'A') score += 36;
      else if (data.revenueTier === 'B') score += 16;
      if (bay === 'golf') score += 18;
      if (bay === 'racing') score += 16;
      if (bay === 'flight' || bay === 'space') score += 9;
      score += typeScore(data.type);
      score += recencyScore(data.updatedDate || data.publishDate);
      if (data.featured === 'true') score += 10;
      if (data.primaryKeyword) score += 6;
      if (visuals >= 12) score += 8;
      else if (visuals >= 8) score += 5;
      if (faqs >= 5) score += 5;
      out.push({
        id,
        url: `${site.url}/${bay}/${slug}/`,
        title: data.title,
        description: data.description,
        bay,
        type: data.type,
        revenueTier: data.revenueTier || 'B',
        primaryKeyword: data.primaryKeyword || '',
        published: data.publishDate || '',
        updated: data.updatedDate || data.publishDate || '',
        visuals,
        faqs,
        priorityScore: Math.round(score),
      });
    }
  }
  return out.sort((a, b) => b.priorityScore - a.priorityScore || +new Date(b.updated) - +new Date(a.updated));
}

const urls = await loadArticles();
const report = {
  generatedAt: new Date().toISOString(),
  site: site.url,
  sitemap: `${site.url}/sitemap-index.xml`,
  counts: {
    urls: urls.length,
    tierA: urls.filter((item) => item.revenueTier === 'A').length,
    golf: urls.filter((item) => item.bay === 'golf').length,
    racing: urls.filter((item) => item.bay === 'racing').length,
  },
  urls,
};

await mkdir(join(root, 'reports'), { recursive: true });
await writeFile(join(root, 'reports/ignitionsim-seo-priority-urls.json'), JSON.stringify(report, null, 2));
await writeFile(join(root, 'reports/ignitionsim-seo-priority-urls.txt'), [
  '# IgnitionSim SEO priority URLs',
  `Generated: ${report.generatedAt}`,
  `Sitemap: ${report.sitemap}`,
  '',
  ...urls.slice(0, 80).map((item, index) => `${index + 1}. ${item.url} [${item.bay}, ${item.type}, tier ${item.revenueTier}, score ${item.priorityScore}]`),
  '',
].join('\n'));

console.log(`seo-priority: wrote ${urls.length} URLs -> reports/ignitionsim-seo-priority-urls.json and reports/ignitionsim-seo-priority-urls.txt`);
console.log(`seo-priority: sitemap ${report.sitemap}`);
urls.slice(0, 12).forEach((item, index) => console.log(`${index + 1}. ${item.url}`));
