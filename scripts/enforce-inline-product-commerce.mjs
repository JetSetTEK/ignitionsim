import fs from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = process.cwd();
const CONTENT_ROOT = path.join(ROOT, 'src/content/articles');
const REGISTRY_PATH = path.join(ROOT, 'src/data/amazon-products.json');
const TAG = 'ignitionsim-20';
const GEARPICK_RE = /<aside class="gearpick">[\s\S]*?<\/aside>/gi;
const GEAR_PATH_RE = /\/(racing|flight|space|marine|golf)\/gear\/([a-z0-9-]+)/i;
const PRODUCT_IMAGE_LINK_RE = /<a\b[^>]*\bhref=["']\/(racing|flight|space|marine|golf)\/gear\/([a-z0-9-]+)["'][^>]*>(?=\s*<(?:img|picture)\b)/gi;
const AMAZON_ASIN_RE = /https:\/\/www\.amazon\.com\/(?:dp|gp\/product)\/([A-Z0-9]{10})(?:[/?#][^"'<\s]*)?/i;

async function walk(dir) {
  const files = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

function canonicalAmazonUrl(asin) {
  return `https://www.amazon.com/dp/${asin.toUpperCase()}?tag=${TAG}`;
}

function shoppingAttributes(id) {
  return `target="_blank" rel="sponsored nofollow noopener" data-buy-link="true" data-event="buy_click" data-buy-product="${id}"`;
}

function replaceHrefAndAttributes(anchor, url, id) {
  return anchor
    .replace(/\shref=["'][^"']*["']/i, ` href="${url}"`)
    .replace(/\starget=["'][^"']*["']/gi, '')
    .replace(/\srel=["'][^"']*["']/gi, '')
    .replace(/\sdata-(?:buy-link|event|buy-product)=["'][^"']*["']/gi, '')
    .replace(/>$/, ` ${shoppingAttributes(id)}>`);
}

function normalizeVerifiedCard(card, bay, id, url) {
  const specUrl = bay ? `/${bay}/gear/${id}` : '';
  let next = card;

  next = next.replace(/<a\b[^>]*class=["'][^"']*\bgp-shot\b[^"']*["'][^>]*>/i, (anchor) => (
    replaceHrefAndAttributes(anchor, url, id)
  ));

  next = next.replace(
    /(<span class="gp-name">\s*)<a\b[^>]*>([\s\S]*?)<\/a>(\s*<\/span>)/i,
    `$1<a href="${url}" ${shoppingAttributes(id)}>$2</a>$3`,
  );
  if (!/<span class="gp-name">\s*<a\b/i.test(next)) {
    next = next.replace(
      /<span class="gp-name">([\s\S]*?)<\/span>/i,
      `<span class="gp-name"><a href="${url}" ${shoppingAttributes(id)}>$1</a></span>`,
    );
  }

  const specAction = specUrl ? `<a class="gp-review" href="${specUrl}">Spec card</a>` : '';
  const actions = `<span class="gp-actions">${specAction}<a class="gp-buy" href="${url}" ${shoppingAttributes(id)}>View exact product on Amazon</a></span>`;
  if (/<span class="gp-actions">[\s\S]*?<\/span>/i.test(next)) {
    next = next.replace(/<span class="gp-actions">[\s\S]*?<\/span>/i, actions);
  } else {
    next = next.replace(/(\s*<\/div>\s*<\/aside>\s*)$/i, `\n    ${actions}\n  </div>\n\n</aside>`);
  }

  return next;
}

const registry = JSON.parse(await fs.readFile(REGISTRY_PATH, 'utf8'));
const files = (await walk(CONTENT_ROOT)).filter((file) => /\.(?:md|mdx)$/i.test(file));

let total = 0;
let linked = 0;
let withheld = 0;
let filesChanged = 0;
let productImagesLinked = 0;
const withheldIds = new Map();

for (const file of files) {
  const relative = path.relative(ROOT, file);
  const source = process.argv.includes('--base-head')
    ? execFileSync('git', ['show', `HEAD:${relative}`], { cwd: ROOT, encoding: 'utf8' })
    : await fs.readFile(file, 'utf8');
  const cardsNormalized = source.replace(GEARPICK_RE, (card) => {
    total += 1;
    const gear = card.match(GEAR_PATH_RE);
    const existingAsin = card.match(AMAZON_ASIN_RE)?.[1];
    if (!gear) {
      if (existingAsin) {
        const rawProduct = card.match(/\bdata-buy-product=["']([^"']+)["']/i)?.[1]
          || card.match(/<span class="gp-name">(?:\s*<a\b[^>]*>)?([\s\S]*?)(?:<\/a>)?\s*<\/span>/i)?.[1]
          || `amazon-${existingAsin}`;
        const id = rawProduct
          .replace(/<[^>]+>/g, ' ')
          .replace(/&[a-z0-9#]+;/gi, ' ')
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '') || `amazon-${existingAsin.toLowerCase()}`;
        linked += 1;
        return normalizeVerifiedCard(card, '', id, canonicalAmazonUrl(existingAsin));
      }
      withheld += 1;
      withheldIds.set('unknown-product', (withheldIds.get('unknown-product') || 0) + 1);
      return '<!-- Product card withheld: no stable product id was found. -->';
    }

    const [, bay, id] = gear;
    const asin = existingAsin || registry[id]?.asin;
    if (!asin) {
      withheld += 1;
      withheldIds.set(id, (withheldIds.get(id) || 0) + 1);
      return `<!-- Product card withheld: exact Amazon ASIN not verified for ${id}. -->`;
    }

    linked += 1;
    return normalizeVerifiedCard(card, bay, id, canonicalAmazonUrl(asin));
  });
  const next = cardsNormalized.replace(PRODUCT_IMAGE_LINK_RE, (anchor, _bay, id) => {
    const asin = registry[id]?.asin;
    if (!asin) return anchor;
    productImagesLinked += 1;
    return replaceHrefAndAttributes(anchor, canonicalAmazonUrl(asin), id);
  });

  if (next !== source) {
    await fs.writeFile(file, next);
    filesChanged += 1;
  }
}

const withheldReport = Object.fromEntries(
  [...withheldIds.entries()].sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0])),
);
await fs.mkdir(path.join(ROOT, 'reports'), { recursive: true });
await fs.writeFile(
  path.join(ROOT, 'reports/withheld-inline-product-cards.json'),
  `${JSON.stringify({
    generatedAt: new Date().toISOString(),
    rule: 'No retail-style product card is published without an exact verified Amazon.com ASIN.',
    total,
    linked,
    withheld,
    productImagesLinked,
    withheldProducts: withheldReport,
  }, null, 2)}\n`,
);

console.log(`Inline product commerce normalized: ${linked}/${total} cards linked to exact Amazon products.`);
console.log(`${productImagesLinked} verified editorial product images linked to their exact Amazon products.`);
console.log(`${withheld} unmapped cards withheld across ${Object.keys(withheldReport).length} product ids.`);
console.log(`${filesChanged} article files changed.`);
