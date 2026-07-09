import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const key = process.env.INDEXNOW_KEY || 'c86530c50d7ddcdd0b1c70726de1a375';
const reportPath = join(root, 'reports/ignitionsim-seo-priority-urls.json');
const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');
const limitArg = process.argv.find((arg) => arg.startsWith('--limit='));
const limit = Number(limitArg?.split('=')[1] || process.env.INDEXNOW_LIMIT || 50);
const report = JSON.parse(await readFile(reportPath, 'utf8'));
const urlList = report.urls.slice(0, limit).map((item) => item.url);
const payload = {
  host: 'ignitionsim.com',
  key,
  keyLocation: `https://ignitionsim.com/${key}.txt`,
  urlList,
};

if (dryRun) {
  console.log(`indexnow dry-run: ${urlList.length} URLs`);
  console.log(JSON.stringify(payload, null, 2));
  process.exit(0);
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify(payload),
});

if (![200, 202].includes(response.status)) {
  const text = await response.text().catch(() => '');
  console.error(`IndexNow failed: HTTP ${response.status}`);
  if (text) console.error(text.slice(0, 1000));
  process.exit(1);
}

console.log(`IndexNow accepted ${urlList.length} IgnitionSim URLs: HTTP ${response.status}`);
