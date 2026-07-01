import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const productsDir = path.join(root, 'src/data/products');
const verifiedOut = path.join(root, 'src/data/verified-product-images.json');

const sources = {
  // Racing: bases, pedals, rigs, display/VR, haptics.
  'moza-r5': 'https://us.mozaracing.com/products/r5-racing-bundle',
  'moza-r9': 'https://us.mozaracing.com/products/r9-wheel-base',
  'moza-r12': 'https://us.mozaracing.com/products/r12-wheel-base',
  'moza-r16': 'https://us.mozaracing.com/products/r16-wheel-base',
  'moza-r21': 'https://us.mozaracing.com/products/r21-wheel-base',
  'moza-crp2': 'https://us.mozaracing.com/products/crp2-load-cell-pedals',
  'moza-mbooster-active-pedal': 'https://us.mozaracing.com/products/mbooster-active-pedal',
  'moza-r3-xbox-bundle': 'https://us.mozaracing.com/products/r3-racing-wheel-and-pedals',
  'logitech-g-pro': 'https://www.logitechg.com/en-us/products/driving/pro-racing-wheel.html',
  'logitech-rs50-system': 'https://www.logitechg.com/en-us/products/driving/rs50-system.html',
  'fanatec-gt-dd-pro': 'https://fanatec.com/us/en/p/sim-racing-bundles/crd-9020007-8nm-us/gran-turismo-dd-pro-8nm-qr2l-us',
  'fanatec-csl-dd': 'https://fanatec.com/us/en/p/wheel-bases/csl-dd-qr2-us',
  'fanatec-clubsport-dd': 'https://fanatec.com/us/en/p/wheel-bases/clubsport-dd-qr2-us',
  'fanatec-clubsport-dd-plus': 'https://fanatec.com/us/en/p/wheel-bases/clubsport-dd-plus-qr2-us',
  'fanatec-podium-dd': 'https://fanatec.com/us/en/p/wheel-bases/podium-wheel-base-dd1-qr2-us',
  'simucube-2-sport': 'https://simucube.com/en-us/simucube-2-sport/',
  'simucube-activepedal-pro': 'https://simucube.com/en-us/simucube-activepedal-pro/',
  'asetek-invicta': 'https://www.asetek.com/simsports/us/product/invicta-direct-drive-wheelbase-27nm/',
  'asetek-forte': 'https://www.asetek.com/simsports/us/product/forte-direct-drive-wheelbase-18nm/',
  'asetek-invicta-pedals': 'https://www.asetek.com/simsports/us/product/invicta-s-series-brake-and-throttle/',
  'simagic-evo-sport': 'https://simagic.com/pages/detail-simagic-alpha-evo-sport-9nm-direct-drive-wheel-base',
  'simagic-evo': 'https://simagic.com/pages/detail-simagic-alpha-evo-12nm-direct-drive-wheel-base',
  'simagic-evo-pro': 'https://simagic.com/pages/detail-simagic-alpha-evo-pro-18nm-direct-drive-wheel-base',
  'simagic-evo-ultra': 'https://simagic.com/pages/detail-simagic-alpha-evo-ultra-28nm-direct-drive-wheel-base',
  'simagic-p2000': 'https://simagic.com/pages/detail-simagic-p2000-r200-hydraulic-pedal-set',
  'heusinkveld-sprint': 'https://heusinkveld.com/shop/sim-pedals/sim-pedals-sprint/',
  'sim-lab-p1x': 'https://sim-lab.eu/products/p1x-pro-sim-racing-cockpit',
  'gt-omega-apex': 'https://gtomega.com/products/apex-steering-wheel-stand',
  'nlr-gt-track': 'https://nextlevelracing.com/products/next-level-racing-gttrack/',
  'buttkicker-gamer-pro': 'https://thebuttkicker.com/products/buttkicker-gamer-pro',
  'samsung-odyssey-oled-g9-49': 'https://www.samsung.com/us/computing/monitors/oled-monitor/49-odyssey-oled-g9-g95sc-dual-qhd-neo-quantum-pro-processor-curved-smart-gaming-monitor-ls49cg954snxza/',
  'meta-quest-3': 'https://www.meta.com/quest/quest-3/',
  'pimax-crystal-light': 'https://pimax.com/products/pimax-crystal-light',
  'asus-tuf-vg27aq': 'https://www.asus.com/displays-desktops/monitors/tuf-gaming/tuf-gaming-vg27aq/',

  // Golf: launch monitors, projectors, screens, enclosures, mats.
  'garmin-approach-r10': 'https://www.garmin.com/en-US/p/695391',
  'garmin-approach-r50': 'https://www.garmin.com/en-US/p/736810/',
  'skytrak-plus': 'https://skytrakgolf.com/products/skytrak-plus',
  'skytrak-st-max': 'https://www.skytrakgolf.com/products/launch-monitor',
  'bushnell-launch-pro': 'https://bushnellgolfeurope.com/product/launch-pro/',
  'uneekor-eye-xo2': 'https://uneekor.com/products/eye-xo2',
  'uneekor-eye-mini': 'https://uneekor.com/products/eye-mini',
  'uneekor-eye-mini-core': 'https://mygolfspy.com/news-opinion/uneekors-eye-mini-core-amazon-exclusive-brings-launch-monitor-tech-to-the-masses/',
  'foresight-gc3': 'https://www.foresightsports.com/products/gc3-launch-monitor',
  'foresight-gcquad': 'https://www.foresightsports.com/products/gcquad-launch-monitor',
  'foresight-falcon': 'https://www.foresightsports.com/products/falcon',
  'flightscope-mevo-gen2': 'https://www.flightscopemevo.com/products/mevo-gen2',
  'rapsodo-mlm2pro': 'https://rapsodo.com/products/mlm2pro',
  'full-swing-kit': 'https://www.fullswinggolf.com/kit-launch-monitor/',
  'benq-lk936st': 'https://www.benq.com/en-us/business/golf-simulator-projector/lk936st.html',
  'optoma-gt2100hdr': 'https://www.optomausa.com/product-details/gt2100hdr',
  'sig10-enclosure': 'https://shopindoorgolf.com/products/sig10-golf-simulator-enclosure',
  'sigpro-4x7-mat': 'https://shopindoorgolf.com/products/sigpro-4-x-7-golf-mat',
  'sigpro-premium-impact-screen': 'https://shopindoorgolf.com/products/sigpro-premium-golf-impact-screen',
  'sigpro-side-barrier-netting': 'https://shopindoorgolf.com/products/sigpro-side-barrier-netting',
  'sig-landing-pad-turf': 'https://shopindoorgolf.com/products/landing-pad-turf',
  'fiberbuilt-studio-mat': 'https://fiberbuiltgolf.com/products/studio-mat',
  'country-club-elite-mat': 'https://www.realfeelgolfmats.com/product/country-club-elite-real-feel-golf-mat/',
  'carls-place-diy-enclosure': 'https://shop.carlofet.com/golf-simulator-enclosure-kit-with-impact-screen',

  // Flight.
  'moza-ay210-ffb-yoke': 'https://us.mozaracing.com/products/moza-ay210-yoke',
  'moza-mtq-throttle-quadrant': 'https://us.mozaracing.com/products/mtq-throttle-quadrant',
  'thrustmaster-tca-sky-yoke': 'https://www.thrustmaster.com/products/tca-yoke-pack-boeing-edition/',
  'thrustmaster-tca-yoke-boeing': 'https://www.thrustmaster.com/products/tca-yoke-pack-boeing-edition/',
  'thrustmaster-tca-sidestick-airbus': 'https://www.thrustmaster.com/products/tca-sidestick-airbus-edition/',
  'thrustmaster-tca-quadrant-airbus': 'https://www.thrustmaster.com/products/tca-quadrant-airbus-edition/',
  'thrustmaster-hotas-warthog': 'https://www.thrustmaster.com/products/hotas-warthog/',
  'honeycomb-alpha-yoke': 'https://flyhoneycomb.com/products/alpha-flight-controls',
  'honeycomb-bravo-throttle': 'https://flyhoneycomb.com/products/bravo-throttle-quadrant',
  'honeycomb-charlie-pedals': 'https://flyhoneycomb.com/products/charlie-rudder-pedals',
  'logitech-g-pro-flight-yoke-system': 'https://www.logitechg.com/en-us/products/flight/flight-simulator-yoke-system.945-000023.html',
  'logitech-g-flight-rudder-pedals': 'https://www.logitechg.com/en-us/products/flight/flight-simulator-rudder-pedals.945-000024.html',
  'logitech-pro-flight-radio-panel': 'https://www.logitechg.com/en-us/products/flight/flight-simulator-radio-panel.945-000029.html',
  'logitech-pro-flight-multi-panel': 'https://www.logitechg.com/en-us/products/flight/flight-simulator-multi-panel.945-000028.html',
  'winwing-fcu-efis-combo-a320': 'https://winwingsim.com/view/goods-details.html?id=550',
  'winwing-mcdu-a320': 'https://winwingsim.com/view/goods-details.html?id=554',
  'winwing-pap-3-mcp': 'https://winwingsim.com/view/goods-details.html?id=557',
  'winwing-pfp-3n-boeing-fmc': 'https://winwingsim.com/view/goods-details.html?id=558',
  'turtle-beach-velocityone-flight-stick': 'https://www.turtlebeach.com/products/velocity-one-flight-stick',
  'turtle-beach-velocityone-rudder-pedals': 'https://www.turtlebeach.com/products/velocityone-rudder',
  'vkb-t-rudder-mk4': 'https://www.vkbcontrollers.com/products/t-rudders-mk-v-rudder-pedals',
  'naturalpoint-trackir-5': 'https://www.trackir.com/trackir5/',
  'tobii-eye-tracker-5': 'https://gaming.tobii.com/product/eye-tracker-5/',
  'desktop-pilot-10-port-usb-hub': 'https://www.desktopaviator.com/products/model_2190/index.htm',

  // Space / HOTAS.
  'vkb-gladiator-nxt-evo-space-combat-edition': 'https://www.505mastersgames.com/vkb-gladiator-nxt-evo-space-combat-edition-premium-right-hand-1',
  'vkb-gladiator-nxt-evo-omni-throttle': 'https://www.thinkofsim.com/products/vkb-gladiator-nxt-evo-omni-throttle',
  'vkb-gunfighter-mk4-base': 'https://www.vkbcontrollers.com/blogs/news/gunfighter-iv-base-only-and-grip-upgrade-kits-available-now',
  'vkb-mcg-pro-grip': 'https://www.vkbcontrollers.com/products/mcg-modern-combat-grip-add-on',
  'vkb-stecs-standard-mk2-throttle': 'https://www.thinkofsim.com/th/products/stecs-space-throttle-system-standard',
  'virpil-constellation-alpha-grip': 'https://virpil-controls.us.com/vpc-constellation-alpha-r.html',
  'virpil-warbrd-d-base': 'https://virpil-controls.us.com/vpc-warbrd-d-base.html',
  'virpil-mongoost-50cm3-throttle': 'https://www.racingwheelbrasil.com.br/produtos/vpc-mongoost-50cm3-throttle-virpil-back-order/',
  'winwing-ursa-minor-space': 'https://winwingsim.com/view/goods-details.html?id=546',
  'winwing-orion-2-base': 'https://winwingsim.com/view/goods-details.html?id=314',
  'winwing-orion-2-hotas-f16ex': 'https://winwingsim.com/view/goods-details.html?id=378',
  'winwing-ursa-minor-combat-throttle-metal': 'https://winwingsim.com/view/goods-details.html?id=555',
  'thrustmaster-t16000m-fcs': 'https://www.thrustmaster.com/products/t-16000m-fcs/',
  'thrustmaster-t16000m-fcs-hotas': 'https://www.thrustmaster.com/products/t-16000m-fcs-hotas/',
  'logitech-x52-pro-hotas': 'https://www.logitechg.com/en-us/products/space/x52-pro-space-flight-simulator-controller.945-000022.html',
  'monstertech-table-mount': 'https://www.monster.tech/en/product/joystick-hotas-table-mount/',
  'elgato-stream-deck-xl': 'https://www.elgato.com/us/en/p/stream-deck-xl',
  'thrustmaster-mfd-cougar-pack': 'https://www.thrustmaster.com/products/mfd-cougar-pack/',

  // Marine / DIY bridge.
  'leobodnar-bu0836x-diy-board': 'https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=180',
  'leobodnar-bbi-32-button-box-interface': 'https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=205',
  'leobodnar-bu0836a-diy-board': 'https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=204',
  'pxn-cb1-button-box': 'https://www.e-pxn.com/products/racing-wheel/pxn-cb1',
  'logitech-saitek-pro-flight-switch-panel': 'https://www.logitechg.com/en-us/products/flight/flight-simulator-switch-panel.945-000030.html',
  'logitech-saitek-radio-panel-rotary': 'https://www.logitechg.com/en-us/products/flight/flight-simulator-radio-panel.945-000029.html',
  'logitech-saitek-throttle-quadrant-telegraph': 'https://www.logitechg.com/en-us/products/flight/flight-simulator-throttle-quadrant.945-000032.html',
  'thrustmaster-twcs-throttle-engine-lever': 'https://www.thrustmaster.com/products/twcs-throttle/',
  'thrustmaster-t16000m-rudder': 'https://www.thrustmaster.com/products/t-16000m-fcs/',
  'arduino-leonardo-diy-hid': 'https://store-usa.arduino.cc/products/arduino-leonardo-with-headers',
  'logitech-g923-helm': 'https://www.logitechg.com/en-us/products/driving/g923-trueforce-sim-racing-wheel.html',
  'logitech-g29-helm': 'https://www.logitechg.com/en-us/products/driving/driving-force-racing-wheel.html',
  'raildriver-ship-throttle': 'https://raildriver.com/products/raildriver.php',
  'meta-quest-3-marineverse-vr': 'https://www.meta.com/quest/quest-3/',
  'bridge-command-free-sim': 'https://www.bridgecommand.co.uk/',
  'professional-ship-simulator-context': 'https://store.steampowered.com/app/292180/Professional_Ship_Simulator/',
};

const acceptExisting = new Set([
  '/images/gear/racing/thrustmaster-t598.webp',
  '/images/gear/racing/moza-r3-xbox-bundle.png',
  '/images/gear/racing/fanatec-clubsport-dd-plus.webp',
  '/images/gear/racing/asus-tuf-vg27aq.png',
  '/images/gear/racing/pimax-crystal-light.png',
  '/images/gear/racing/moza-mbooster-active-pedal.png',
  '/images/gear/flight/thrustmaster-tca-sky-yoke.png',
]);

const imagePath = (product) => Array.isArray(product.images) && product.images.length ? product.images[0] : product.image;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function normalizeUrl(raw, base) {
  if (!raw) return null;
  let value = String(raw)
    .replace(/\\u0026/g, '&')
    .replace(/\\\//g, '/')
    .replace(/&amp;/g, '&')
    .replace(/^http:\/\//, 'https://')
    .trim();
  value = value.replace(/\\+$/g, '').replace(/^["']|["']$/g, '');
  if (!value || value.startsWith('data:') || value.startsWith('blob:')) return null;
  try {
    return new URL(value, base).href;
  } catch {
    return null;
  }
}

function tokensFor(product) {
  return [
    product.id,
    product.brand,
    product.model,
    product.type,
  ].join(' ').toLowerCase().split(/[^a-z0-9]+/).filter((t) => t.length > 2);
}

function extractCandidates(html, base) {
  const found = [];
  const add = (value) => {
    const url = normalizeUrl(value, base);
    if (url) found.push(url);
  };

  for (const match of html.matchAll(/<meta[^>]+(?:property|name)=["'](?:og:image(?::secure_url)?|twitter:image(?::src)?)["'][^>]+content=["']([^"']+)["']/gi)) add(match[1]);
  for (const match of html.matchAll(/<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["'](?:og:image(?::secure_url)?|twitter:image(?::src)?)["']/gi)) add(match[1]);
  for (const match of html.matchAll(/<(?:img|source)[^>]+(?:src|data-src|data-master|data-zoom-image)=["']([^"']+)["']/gi)) add(match[1]);
  for (const match of html.matchAll(/srcset=["']([^"']+)["']/gi)) {
    match[1].split(',').forEach((part) => add(part.trim().split(/\s+/)[0]));
  }
  for (const match of html.matchAll(/https?:\\?\/\\?\/[^"'<> ]+\.(?:jpe?g|png|webp)(?:\?[^"'<> ]*)?/gi)) add(match[0]);

  return [...new Set(found)]
    .filter((url) => !/\.(css|js|json|svg|ico|mp4|webm|woff2?)(?:$|\?)/i.test(url))
    .filter((url) => !/(favicon|icon-|logo|apple-touch|payment|paypal|klarna|visa|mastercard|flag|sprite|avatar|placeholder|tracking|pixel|jquery|cloudflare|bundle)/i.test(url));
}

function scoreCandidate(url, product) {
  const lower = decodeURIComponent(url).toLowerCase();
  const tokens = tokensFor(product);
  const tokenScore = tokens.reduce((sum, token) => sum + (lower.includes(token) ? 10 : 0), 0);
  const sizeScore = /1024|1200|1600|1920|2048|large|grande|master|original/i.test(lower) ? 18 : 0;
  const productScore = /product|products|cdn|media|image|files|shop|upload/i.test(lower) ? 8 : 0;
  const penalty = /logo|banner|hero-mobile|thumb|thumbnail|small|75x|96|icon|swatch/i.test(lower) ? 25 : 0;
  return tokenScore + sizeScore + productScore - penalty;
}

async function productRecords() {
  const files = (await fs.readdir(productsDir)).filter((file) => file.endsWith('.json'));
  const all = [];
  for (const file of files) {
    const records = JSON.parse(await fs.readFile(path.join(productsDir, file), 'utf8'));
    all.push(...records);
  }
  return all;
}

async function fetchText(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 25000);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) IgnitionSim/1.0 product-media',
        accept: 'text/html,application/xhtml+xml',
      },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.text();
  } finally {
    clearTimeout(timer);
  }
}

async function fetchBuffer(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30000);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) IgnitionSim/1.0 product-media',
        accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        referer: new URL(url).origin,
      },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return Buffer.from(await response.arrayBuffer());
  } finally {
    clearTimeout(timer);
  }
}

async function writeProductImage(product, url) {
  const outRel = imagePath(product);
  const outAbs = path.join(publicDir, outRel.replace(/^\//, ''));
  const input = await fetchBuffer(url);
  const source = sharp(input, { animated: false, limitInputPixels: 80_000_000 });
  const meta = await source.metadata();
  if (!meta.width || !meta.height || meta.width < 280 || meta.height < 220) {
    throw new Error(`tiny image ${meta.width || '?'}x${meta.height || '?'}`);
  }
  if (meta.width / meta.height > 5 || meta.height / meta.width > 5) {
    throw new Error(`bad aspect ${meta.width}x${meta.height}`);
  }
  await fs.mkdir(path.dirname(outAbs), { recursive: true });
  const pipeline = source
    .rotate()
    .resize(1200, 900, { fit: 'contain', background: '#ffffff' })
    .flatten({ background: '#ffffff' });
  if (/\.webp$/i.test(outRel)) {
    await pipeline.webp({ quality: 88 }).toFile(outAbs);
  } else if (/\.png$/i.test(outRel)) {
    await pipeline.png({ compressionLevel: 9 }).toFile(outAbs);
  } else {
    await pipeline.jpeg({ quality: 88, mozjpeg: true }).toFile(outAbs);
  }
  return { outRel, width: meta.width, height: meta.height };
}

async function ingest(product) {
  const source = sources[product.id];
  if (!source) return { status: 'missing-source', product };
  const html = await fetchText(source);
  const candidates = extractCandidates(html, source)
    .map((url) => ({ url, score: scoreCandidate(url, product) }))
    .sort((a, b) => b.score - a.score);
  if (!candidates.length) return { status: 'no-candidates', product, source };
  const errors = [];
  for (const candidate of candidates.slice(0, 10)) {
    try {
      const result = await writeProductImage(product, candidate.url);
      return { status: 'ok', product, source, imageUrl: candidate.url, ...result };
    } catch (error) {
      errors.push(`${candidate.url} :: ${error.message}`);
    }
  }
  return { status: 'failed', product, source, errors };
}

async function seedAcceptedExisting(products, verified) {
  for (const product of products) {
    const rel = imagePath(product);
    if (!acceptExisting.has(rel)) continue;
    try {
      const meta = await sharp(path.join(publicDir, rel.replace(/^\//, ''))).metadata();
      if (meta.width >= 500 && meta.height >= 500) verified.add(rel);
    } catch {
      // Leave it out; the public surface can wait for a clean image.
    }
  }
}

async function main() {
  const products = await productRecords();
  const byId = new Map(products.map((product) => [product.id, product]));
  const verified = new Set();

  await seedAcceptedExisting(products, verified);

  for (const id of Object.keys(sources)) {
    const product = byId.get(id);
    if (!product) {
      console.log(`- skip ${id}: not in product data`);
      continue;
    }
    try {
      const result = await ingest(product);
      if (result.status === 'ok') {
        verified.add(result.outRel);
        console.log(`+ ${id} <= ${result.width}x${result.height} from ${new URL(result.source).hostname}`);
      } else {
        console.log(`! ${id}: ${result.status}`);
      }
    } catch (error) {
      console.log(`! ${id}: ${error.message}`);
    }
    await sleep(250);
  }

  const sorted = [...verified].sort();
  await fs.writeFile(verifiedOut, `${JSON.stringify(sorted, null, 2)}\n`);
  console.log(`Verified product images: ${sorted.length}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
