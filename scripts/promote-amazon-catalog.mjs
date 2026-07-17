import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const CANDIDATES_PATH = path.join(ROOT, 'reports/amazon-catalog-candidates.json');
const OUTPUT_PATH = path.join(ROOT, 'src/data/amazon-products.json');
const TAG = 'ignitionsim-20';
const VERIFIED_AT = '2026-07-17';

// These search-result matches are not the exact catalog product: they are
// accessories, bundles, another region's listing, or an adjacent model.
const DENIED_AUTO_MATCHES = new Set([
  'ascher-formula',
  'bridge-command-free-sim',
  'honeycomb-alpha-xpc',
  'logitech-g-flight-rudder-pedals',
  'logitech-pro-flight-radio-panel',
  'logitech-rs50-system',
  'logitech-rs-wheel',
  'meta-quest-3',
  'meta-quest-3-marineverse-vr',
  'moza-es',
  'moza-ks-gt',
  'moza-srp-lite',
  'nvidia-rtx-5080',
  'nvidia-rtx-5090',
  'rapsodo-mlm2pro',
  'thrustmaster-t598',
  'thrustmaster-tca-quadrant-airbus',
]);

// Manually opened and title-checked on Amazon.com. These overrides either add
// products the search parser missed or replace an adjacent search result.
const MANUAL_EXACT = {
  'dayton-bst-1': ['B01CDDPJTI', 'Dayton Audio BST-1 High Power Pro Tactile Bass Shaker'],
  'benq-lk936st': ['B0BRBQ3ZHH', 'BenQ LK936ST 4K Ultra HD Short-Throw Laser DLP Projector'],
  'benq-ah700st': ['B0GNZ6NS78', 'BenQ AH700ST Full HD Short-Throw Laser Golf Simulator Projector'],
  'optoma-gt2100hdr': ['B0C4KWSFBW', 'Optoma GT2100HDR Short Throw Laser Projector'],
  'steelseries-arctis-nova-7': ['B0B15QM5LL', 'SteelSeries Arctis Nova 7 Wireless Gaming Headset'],
  'govee-rgbic-bars': ['B0B6CQ2LQ2', 'Govee RGBIC Gaming Light Bars H6047'],
  'sabrent-powered-usb-hub': ['B0797NZFYP', 'Sabrent HB-BU10 10-Port 60W Powered USB 3.0 Hub'],
  'garmin-approach-r10': ['B095QX1FSR', 'Garmin Approach R10 Portable Golf Launch Monitor'],
  'garmin-approach-r50': ['B0DM6NYRYN', 'Garmin Approach R50 Premium Golf Launch Monitor and Simulator'],
  'bushnell-launch-pro': ['B0FYR5FMFF', 'Bushnell Launch Pro i Circle B Edition'],
  'logitech-g-pro-flight-yoke-system': ['B01M00OQBE', 'Logitech G PRO Flight Yoke System'],
  'thrustmaster-tca-quadrant-airbus': ['B086J7D78J', 'Thrustmaster TCA Quadrant Airbus Edition'],
  'thrustmaster-tca-sidestick-airbus': ['B0BG3DH3GW', 'Thrustmaster TCA Sidestick Airbus X Edition'],
  'thrustmaster-tpr-rudder': ['B07DQY8LVC', 'Thrustmaster TPR Pendular Rudder Pedals'],
  'meta-quest-3': ['B0DDWH41HB', 'Meta Quest 3 512GB'],
  'meta-quest-3-marineverse-vr': ['B0DDWH41HB', 'Meta Quest 3 512GB'],
  'meta-quest-3s': ['B0DDJZW3C9', 'Meta Quest 3S 256GB'],
  'pimax-crystal-super': ['B0GQYT4CGH', 'Pimax Crystal Super 50 PPD VR Headset'],
  'nlr-gt-track': ['B07KFY7TKC', 'Next Level Racing GTTrack Simulator Cockpit'],
  'gt-omega-apex': ['B07HM6DR81', 'GT Omega APEX Steering Wheel Stand'],
  'fanatec-gt-dd-pro': ['B0FBGYPD49', 'Fanatec Gran Turismo DD Pro'],
  'samsung-odyssey-oled-g9-49': ['B0DQD7548D', 'Samsung Odyssey G9 OLED 49-inch Curved 240Hz Gaming Monitor'],
  'samsung-odyssey-neo-g9-57': ['B0CDQM55C9', 'Samsung 57-inch Odyssey Neo G9 G95NC Dual 4K Gaming Monitor'],
  'thrustmaster-mfd-cougar-pack': ['B002HH9TRY', 'Thrustmaster MFD Cougar Flight Sim Multi-Function Display Set'],
  'thrustmaster-t16000m-space-duo': ['B076XKZML8', 'Thrustmaster T.16000M FCS Space Sim Duo'],
  'vkb-t-rudder-mk4': ['B01G6GT4A8', 'VKB T-Rudder Mk.IV Flight Simulator Pedals'],
  'flightscope-mevo-gen2': ['B0FK8M3VLB', 'FlightScope Mevo Gen2 Golf Launch Monitor'],
  'foresight-gc3': ['B0GKQJP29N', 'Foresight Sports GC3S Launch Monitor'],
  'raildriver-ship-throttle': ['B0002APWXS', 'RailDriver USB Desktop Train Cab Controller'],
  'elgato-stream-deck-mk2': ['B09738CV2G', 'Elgato Stream Deck MK.2'],
};

const candidates = JSON.parse(await fs.readFile(CANDIDATES_PATH, 'utf8'));
const promoted = {};

for (const [id, record] of Object.entries(candidates.accepted || {})) {
  if (DENIED_AUTO_MATCHES.has(id)) continue;
  promoted[id] = {
    asin: record.asin,
    title: record.title,
    url: `https://www.amazon.com/dp/${record.asin}?tag=${TAG}`,
    verification: record.verification,
    verifiedAt: record.verifiedAt || VERIFIED_AT,
  };
}

for (const [id, [asin, title]] of Object.entries(MANUAL_EXACT)) {
  promoted[id] = {
    asin,
    title,
    url: `https://www.amazon.com/dp/${asin}?tag=${TAG}`,
    verification: 'Amazon.com detail page opened and product title matched manually',
    verifiedAt: VERIFIED_AT,
  };
}

const sorted = Object.fromEntries(Object.entries(promoted).sort(([left], [right]) => left.localeCompare(right)));
await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(sorted, null, 2)}\n`);

console.log(`Promoted ${Object.keys(sorted).length} exact Amazon product mappings.`);
console.log(`Wrote ${path.relative(ROOT, OUTPUT_PATH)}.`);
