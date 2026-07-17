import fs from 'node:fs';
import path from 'node:path';

const renderedMode = process.argv.includes('--rendered');
const ROOTS = renderedMode ? ['dist'] : ['src/content', 'src/components', 'src/pages'];
const EXTENSIONS = new Set(renderedMode ? ['.html'] : ['.astro', '.md', '.mdx', '.html']);
const AMAZON_PRODUCT_RE = /^https:\/\/www\.amazon\.com\/dp\/([A-Z0-9]{10})\?tag=ignitionsim-20$/i;
const AMAZON_URL_RE = /https?:\/\/(?:www\.)?amazon\.com\/[^\s)"']+/gi;
const COMMERCE_WORDS_RE = /\b(?:amazon|buy|shop|order|purchase|check price|see price|view deal|where to buy|add to cart)\b/i;
const SOURCE_HEADING_RE = /\b(?:sources?|research|references?|evidence|manuals?|documentation|receipts?)\b/i;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function cleanHref(value = '') {
  return value.replaceAll('&amp;', '&').trim();
}

function isCanonicalAmazon(href) {
  return AMAZON_PRODUCT_RE.test(cleanHref(href));
}

function anchorText(anchor) {
  return anchor
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function currentHeading(source, offset) {
  const before = source.slice(0, offset);
  if (renderedMode) {
    return [...before.matchAll(/<h[2-4]\b[^>]*>([\s\S]*?)<\/h[2-4]>/gi)]
      .at(-1)?.[1]
      ?.replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim() || '';
  }
  return [...before.matchAll(/^#{2,4}\s+(.+)$/gm)].at(-1)?.[1] || '';
}

function isMonetized(attributes, label, context = '') {
  return /\brel=["'][^"']*\bsponsored\b[^"']*["']/i.test(attributes)
    || /\bdata-buy-link(?:=["'][^"']*["'])?/i.test(attributes)
    || /\bdata-(?:event|buy-product)=["'][^"']*(?:buy|amazon|purchase|product)[^"']*["']/i.test(attributes)
    || /\bclass=["'][^"']*(?:\b(?:gp|gear|product)-buy\b|\bamazon\b)[^"']*["']/i.test(attributes)
    || COMMERCE_WORDS_RE.test(label)
    || /\b(?:buy|sold)\s+(?:it\s+)?direct\b/i.test(context);
}

const files = ROOTS.flatMap(walk).filter((file) => EXTENSIONS.has(path.extname(file)));
const failures = [];
let monetizedLinks = 0;
let amazonLinks = 0;

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const relative = path.relative(process.cwd(), file);

  for (const match of source.matchAll(AMAZON_URL_RE)) {
    amazonLinks += 1;
    const href = cleanHref(match[0]);
    if (!isCanonicalAmazon(href)) {
      failures.push(`${relative}: non-canonical Amazon URL ${href}`);
    }
  }

  const anchors = [...source.matchAll(/<a\b([^>]*)\bhref=["']([^"']+)["']([^>]*)>([\s\S]*?)<\/a>/gi)];
  for (const match of anchors) {
    const attributes = `${match[1]} ${match[3]}`;
    const href = cleanHref(match[2]);
    if (!/^https?:\/\//i.test(href)) continue;
    const label = anchorText(match[4]);
    const context = source.slice(Math.max(0, match.index - 160), match.index + match[0].length + 80);
    const heading = currentHeading(source, match.index);
    const sourceCitation = SOURCE_HEADING_RE.test(heading)
      && !/\brel=["'][^"']*\bsponsored\b/i.test(attributes)
      && !/\bdata-buy-link/i.test(attributes)
      && !/^(?:buy|shop now|order|check price|view deal)\b/i.test(label);
    if (sourceCitation) continue;
    if (!isMonetized(attributes, label, context)) continue;

    monetizedLinks += 1;
    if (!isCanonicalAmazon(href)) {
      failures.push(`${relative}: monetized link "${label}" points to ${href}`);
    }
  }

  if (!renderedMode && /\.(?:md|mdx)$/i.test(file)) {
    const markdownLinks = [...source.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)(\{:[^}]*\})?/g)];
    for (const match of markdownLinks) {
      const label = match[1].replace(/\s+/g, ' ').trim();
      const href = cleanHref(match[2]);
      const attributes = match[3] || '';
      const context = source.slice(Math.max(0, match.index - 180), match.index + match[0].length + 100);
      const heading = currentHeading(source, match.index);
      const sourceCitation = SOURCE_HEADING_RE.test(heading)
        && !/\bsponsored\b/i.test(attributes)
        && !/\bdata-buy-link/i.test(attributes)
        && !/^(?:buy|shop now|order|check price|view deal)\b/i.test(label);
      if (sourceCitation) continue;
      if (!isMonetized(attributes, label, context)) continue;

      monetizedLinks += 1;
      if (!isCanonicalAmazon(href)) {
        failures.push(`${relative}: monetized Markdown link "${label}" points to ${href}`);
      }
    }

    for (const match of source.matchAll(/\bcheck Amazon\b(?![^\n]*https:\/\/www\.amazon\.com\/dp\/[A-Z0-9]{10}\?tag=ignitionsim-20)/gi)) {
      failures.push(`${relative}: orphaned "check Amazon" text has no exact affiliate destination`);
    }
  }
}

if (failures.length) {
  console.error(`\n${renderedMode ? 'Rendered commerce' : 'Commerce source'} audit failed:\n`);
  for (const failure of [...new Set(failures)]) console.error(`- ${failure}`);
  console.error('\nEvery purchase path must be one exact Amazon product page with tag=ignitionsim-20. Research evidence must be labeled and kept out of buy styling.');
  process.exit(1);
}

console.log(`${renderedMode ? 'Rendered commerce' : 'Commerce source'} audit passed: ${monetizedLinks} monetized links and ${amazonLinks} Amazon URLs checked.`);
