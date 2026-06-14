// Stage Creative-Commons (commercial-licensed) photo CANDIDATES for review.
// Fetches from Openverse, downloads to pipeline/cc-candidates/<bay>/, writes a
// manifest with title/license/creator/url for vetting before anything is published.
import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const OUT = join(root, 'pipeline', 'cc-candidates');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const QUERIES = {
  flight: ['flight simulator cockpit', 'home flight simulator setup'],
  golf: ['indoor golf simulator', 'golf simulator screen'],
  racing: ['racing simulator cockpit', 'sim racing wheel setup'],
  space: ['flight simulator joystick', 'spaceship cockpit'],
  marine: ['ship bridge controls', 'boat helm wheel'],
};

const manifest = [];
for (const [bay, queries] of Object.entries(QUERIES)) {
  let n = 0;
  for (const q of queries) {
    try {
      const r = await fetch(`https://api.openverse.org/v1/images/?q=${encodeURIComponent(q)}&license_type=commercial&page_size=4&orientation=landscape`, { headers: { 'User-Agent': 'IgnitionSim/1.0' } });
      const j = await r.json();
      for (const res of (j.results || []).slice(0, 3)) {
        try {
          const ir = await fetch(res.url, { headers: { 'User-Agent': 'IgnitionSim/1.0' } });
          if (!ir.ok) continue;
          const buf = Buffer.from(await ir.arrayBuffer());
          if (buf.length < 8000) continue;
          n++;
          const rel = `${bay}/${bay}-${n}.jpg`;
          await mkdir(join(OUT, bay), { recursive: true });
          await writeFile(join(OUT, rel), buf);
          manifest.push({ bay, file: rel, query: q, title: res.title, license: res.license + ' ' + (res.license_version || ''), creator: res.creator, source: res.source, landing: res.foreign_landing_url, kb: Math.round(buf.length / 1024) });
        } catch {}
        await sleep(300);
      }
    } catch (e) { console.log(bay, q, 'err', e.message); }
    await sleep(400);
  }
}
await mkdir(OUT, { recursive: true });
await writeFile(join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
manifest.forEach((m) => console.log(`${m.bay}\t${m.file}\t[${m.license}]\t${(m.title || '').slice(0, 44)}`));
console.log(`\nStaged ${manifest.length} candidates → pipeline/cc-candidates/`);
