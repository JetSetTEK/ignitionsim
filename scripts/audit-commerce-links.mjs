import fs from 'node:fs';
import path from 'node:path';

const ROOTS = ['src/content', 'src/components', 'src/pages'];
const EXTENSIONS = new Set(['.astro', '.md', '.mdx', '.html']);
const AMAZON_PRODUCT_RE = /^https:\/\/www\.amazon\.com\/dp\/([A-Z0-9]{10})\?tag=ignitionsim-20(?:&[^\s"']*)?$/i;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const files = ROOTS.flatMap(walk).filter((file) => EXTENSIONS.has(path.extname(file)));
const failures = [];
let monetizedLinks = 0;

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const anchors = source.match(/<a\b[\s\S]*?<\/a>/gi) || [];

  for (const anchor of anchors) {
    const isMonetized = /\brel=["'][^"']*\bsponsored\b[^"']*["']/i.test(anchor)
      || /\bdata-buy-link(?:=["'][^"']*["'])?/i.test(anchor)
      || /\bdata-event=["'][^"']*(?:buy|amazon|purchase)[^"']*["']/i.test(anchor)
      || /\bclass=["'][^"']*(?:\b(?:gp|gear|product)-buy\b|\bamazon\b)[^"']*["']/i.test(anchor)
      || />\s*(?:buy|shop|order|check price|view deal)\b/i.test(anchor);
    if (!isMonetized) continue;

    monetizedLinks += 1;
    const href = anchor.match(/\bhref=["']([^"']+)["']/i)?.[1] || '';

    // Dynamic commerce links are checked at their rendering component. Static
    // links have no excuse: they must identify one exact Amazon product.
    if (!href) continue;
    if (href.startsWith('/') || href.startsWith('#')) continue;
    if (!AMAZON_PRODUCT_RE.test(href)) {
      failures.push(`${path.relative(process.cwd(), file)}: ${href}`);
    }
  }
}

if (failures.length) {
  console.error('\nCommerce audit failed. Monetized links must be exact Amazon product pages:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  console.error('\nUse an official/manufacturer link as a normal citation when no exact ASIN is verified.');
  process.exit(1);
}

console.log(`Commerce audit passed: ${monetizedLinks} monetized link declarations checked.`);
