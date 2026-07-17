import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const PRODUCT_DIR = path.join(ROOT, 'src/data/products');
const REPORT_PATH = path.join(ROOT, 'reports/amazon-catalog-candidates.json');
const TAG = 'ignitionsim-20';
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126.0.0.0 Safari/537.36';
const ACCESSORY_WORDS = new Set([
  'adapter', 'alignment', 'bag', 'case', 'cover', 'holder', 'mount',
  'protector', 'replacement', 'skin', 'stand',
]);
const STOP_WORDS = new Set([
  'a', 'add', 'and', 'as', 'black', 'edition', 'for', 'in', 'only',
  'the', 'to', 'universal', 'with',
]);

const VERIFIED_SEEDS = {
  'arduino-leonardo-diy-hid': ['B0786LJQ8K', 'Arduino Leonardo with Headers'],
  'cammus-c5': ['B0CSGD9T7L', 'CAMMUS C5 direct-drive wheel and pedal bundle'],
  'elgato-stream-deck-xl': ['B07RL8H55Z', 'Elgato Stream Deck XL'],
  'evercade-vs-r-exp-r': ['B0D1VYPWLH', 'Evercade VS-R'],
  'fanatec-csl-dd': ['B0FBGZHFN3', 'Fanatec CSL DD QR2 wheelbase 5 Nm'],
  'honeycomb-bravo-throttle': ['B07SK43CJ6', 'Honeycomb Bravo Throttle Quadrant'],
  'logitech-g-pro': ['B08W27XX75', 'Logitech G PRO Racing Wheel for PlayStation/PC'],
  'logitech-g29-helm': ['B00Z0UWWYC', 'Logitech G29 Driving Force wheel and pedals'],
  'logitech-g923-helm': ['B07PGGDJSG', 'Logitech G923 TRUEFORCE wheel and pedals'],
  'logitech-saitek-throttle-quadrant-telegraph': ['B01M00UHE3', 'Logitech G Saitek Pro Flight Throttle Quadrant'],
  'naturalpoint-trackir-5': ['B00KQPETHO', 'TrackIR 5 with TrackClip PRO bundle'],
  'pimax-crystal-light': ['B0G6YYW3PB', 'Pimax Crystal Light'],
  'thrustmaster-hotas-warthog': ['B00371R8P4', 'Thrustmaster HOTAS Warthog'],
  'thrustmaster-t16000m-fcs': ['B01MQEDEEW', 'Thrustmaster T.16000M FCS stick'],
  'thrustmaster-t16000m-rudder': ['B01MQEDEEW', 'Thrustmaster T.16000M FCS stick'],
  'thrustmaster-t16000m-fcs-hotas': ['B01N2PE8CZ', 'Thrustmaster T.16000M FCS HOTAS'],
  'thrustmaster-tpr-rudder': ['B07DQY8LVC', 'Thrustmaster TPR Pendular Rudder pedals'],
  'thrustmaster-th8a': ['B005L0Z2BQ', 'Thrustmaster TH8A shifter'],
  'tobii-eye-tracker-5': ['B0897GCBWW', 'Tobii Eye Tracker 5'],
  'turtle-beach-velocityone-flight': ['B09JM8SX8G', 'Turtle Beach VelocityOne Flight Universal Control System'],
  'turtle-beach-velocityone-flight-stick': ['B0BHTPP71M', 'Turtle Beach VelocityOne Flightstick'],
  'turtle-beach-velocityone-flightstick': ['B0BHTPP71M', 'Turtle Beach VelocityOne Flightstick'],
  'turtle-beach-velocityone-rudder-pedals': ['B0B7NTLKF2', 'Turtle Beach VelocityOne Universal Rudder pedals'],
  'uneekor-eye-mini-core': ['B0FPHVNCQ7', 'Uneekor EYE MINI CORE'],
};

function decode(value = '') {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replace(/&#\d+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalize(value = '') {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/['"]/g, '')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokens(value = '') {
  return normalize(value)
    .split(' ')
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

function parseResults(html) {
  const starts = [...html.matchAll(/<div role="listitem" data-asin="([A-Z0-9]{10})"[^>]*data-component-type="s-search-result"/g)];
  const results = [];

  for (let index = 0; index < Math.min(starts.length, 10); index += 1) {
    const section = html.slice(starts[index].index, starts[index + 1]?.index || html.length);
    const labels = [...section.matchAll(/aria-label="([^"]+)"/g)]
      .map((match) => decode(match[1]))
      .filter((label) => label
        && !/amazon'?s choice|best seller|climatepartner|ratings?|stars?|add to cart|stock|delivery|options|featured|sponsored/i.test(label));
    const title = labels[0] || '';
    if (title && !results.some((result) => result.asin === starts[index][1])) {
      results.push({ asin: starts[index][1], title });
    }
  }

  return results;
}

function scoreCandidate(product, candidate) {
  const query = `${product.brand} ${product.model}`;
  const queryTokens = tokens(query);
  const titleTokens = new Set(tokens(candidate.title));
  const brandTokens = tokens(product.brand);
  const modelTokens = tokens(product.model);
  const matched = queryTokens.filter((token) => titleTokens.has(token));
  const missingModel = modelTokens.filter((token) => !titleTokens.has(token));
  const brandMatches = brandTokens.every((token) => titleTokens.has(token));
  const titleAccessory = [...ACCESSORY_WORDS].some((word) => titleTokens.has(word));
  const queryAccessory = [...ACCESSORY_WORDS].some((word) => queryTokens.includes(word));
  const bundleMismatch = /\bbundle\b/i.test(candidate.title) && !/\bbundle|pack|system\b/i.test(query);
  const renewed = /\brenewed|used|refurbished\b/i.test(candidate.title);

  let score = queryTokens.length ? matched.length / queryTokens.length : 0;
  if (brandMatches) score += 0.16;
  if (missingModel.length === 0 && modelTokens.length) score += 0.18;
  if (titleAccessory && !queryAccessory) score -= 0.65;
  if (bundleMismatch) score -= 0.22;
  if (renewed) score -= 0.5;

  return {
    score: Number(score.toFixed(3)),
    brandMatches,
    missingModel,
    rejected: renewed || (titleAccessory && !queryAccessory),
  };
}

async function fetchResults(product) {
  const query = `${product.brand} ${product.model}`
    .replace(/\s+\(as [^)]+\)/gi, '')
    .replace(/\s+\(.*?\)/g, '');
  const url = `https://www.amazon.com/s?k=${encodeURIComponent(query)}`;
  const response = await fetch(url, {
    headers: {
      'accept-language': 'en-US,en;q=0.9',
      'user-agent': USER_AGENT,
    },
  });
  const html = await response.text();
  const candidates = parseResults(html)
    .map((candidate) => ({ ...candidate, ...scoreCandidate(product, candidate) }))
    .sort((left, right) => right.score - left.score);
  return { query, status: response.status, candidates };
}

const files = (await fs.readdir(PRODUCT_DIR)).filter((file) => file.endsWith('.json')).sort();
const productMap = new Map();
for (const file of files) {
  const list = JSON.parse(await fs.readFile(path.join(PRODUCT_DIR, file), 'utf8'));
  for (const product of list) {
    if (!productMap.has(product.id)) productMap.set(product.id, product);
  }
}

const products = [...productMap.values()];
const report = {
  generatedAt: new Date().toISOString(),
  tag: TAG,
  accepted: {},
  review: {},
};

for (let index = 0; index < products.length; index += 1) {
  const product = products[index];
  const seed = VERIFIED_SEEDS[product.id];
  if (seed) {
    report.accepted[product.id] = {
      asin: seed[0],
      title: seed[1],
      url: `https://www.amazon.com/dp/${seed[0]}?tag=${TAG}`,
      verification: 'existing exact-product evidence in repository',
      verifiedAt: '2026-07-17',
    };
    continue;
  }

  try {
    const result = await fetchResults(product);
    const best = result.candidates[0];
    const accepted = best
      && !best.rejected
      && best.brandMatches
      && best.missingModel.length === 0
      && best.score >= 1;
    const record = {
      product: `${product.brand} ${product.model}`,
      query: result.query,
      status: result.status,
      candidates: result.candidates.slice(0, 5),
    };
    if (accepted) {
      report.accepted[product.id] = {
        asin: best.asin,
        title: best.title,
        url: `https://www.amazon.com/dp/${best.asin}?tag=${TAG}`,
        verification: 'exact brand and model token match in Amazon product results',
        verifiedAt: '2026-07-17',
      };
    } else {
      report.review[product.id] = record;
    }
  } catch (error) {
    report.review[product.id] = {
      product: `${product.brand} ${product.model}`,
      error: error.message,
    };
  }

  if ((index + 1) % 10 === 0) {
    console.log(`Resolved ${index + 1}/${products.length}`);
  }
  await new Promise((resolve) => setTimeout(resolve, 220));
}

await fs.mkdir(path.dirname(REPORT_PATH), { recursive: true });
await fs.writeFile(REPORT_PATH, `${JSON.stringify(report, null, 2)}\n`);
console.log(`Accepted ${Object.keys(report.accepted).length} exact products.`);
console.log(`Queued ${Object.keys(report.review).length} ambiguous or unavailable products for review.`);
console.log(`Wrote ${path.relative(ROOT, REPORT_PATH)}.`);
