// Generic, resumable image fetcher for IgnitionSim.
// Reads a manifest JSON [{ prompt, out, w, h, seed }] and downloads each from
// Pollinations Flux SEQUENTIALLY (their queue is 1 request/IP). Skips files
// that already exist and are non-trivial, so reruns are cheap and resumable.
//
// Usage: node scripts/fetch-images.mjs [manifestPath]
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const manifestPath = process.argv[2] || join(root, 'pipeline', 'image-manifest.json');
const IMG_DIR = join(root, 'public', 'images');
const DELAY = 2500;
const MIN_BYTES = 6000;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function exists(p) {
  try { const s = await stat(p); return s.size > MIN_BYTES; } catch { return false; }
}

async function fetchOne(item, idx) {
  const outAbs = join(IMG_DIR, item.out);
  if (await exists(outAbs)) { console.log(`✓ skip (exists) ${item.out}`); return true; }
  const w = item.w || 1600, h = item.h || 720, seed = item.seed ?? idx + 1;
  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(item.prompt)}`
    + `?width=${w}&height=${h}&seed=${seed}&nologo=true&model=flux&enhance=true`;
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 90000);
      const res = await fetch(url, { signal: ctrl.signal, headers: { 'User-Agent': 'IgnitionSim/1.0' } });
      clearTimeout(t);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < MIN_BYTES) throw new Error('tiny response ' + buf.length);
      await mkdir(dirname(outAbs), { recursive: true });
      await writeFile(outAbs, buf);
      console.log(`★ wrote ${item.out} (${(buf.length / 1024).toFixed(0)} KB, ${w}x${h})`);
      return true;
    } catch (e) {
      console.log(`  …retry ${attempt}/4 ${item.out}: ${e.message}`);
      await sleep(DELAY * attempt);
    }
  }
  console.log(`✗ FAILED ${item.out}`);
  return false;
}

const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
console.log(`Fetching ${manifest.length} images from ${manifestPath}`);
let ok = 0;
for (let i = 0; i < manifest.length; i++) {
  if (await fetchOne(manifest[i], i)) ok++;
  await sleep(DELAY);
}
console.log(`Done. ${ok}/${manifest.length} present.`);
