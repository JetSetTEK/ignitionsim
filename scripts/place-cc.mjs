// Place vetted Creative-Commons photos into bay hero/slide slots + record credit.
// Only the manually-vetted, relevant, commercially-licensed keepers go here.
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const A = (p) => join(root, p);

const jobs = [
  {
    src: 'pipeline/cc-candidates/flight/flight-1.jpg',
    outs: ['public/images/flight/hero.jpg', 'public/images/flight/slide-1.jpg'],
    credit: { file: '/images/flight/slide-1.jpg', source: 'Flickr — CC BY-SA 2.0', photographer: 'SuperJet International', url: 'https://www.flickr.com/photos/48440363@N06/5573438825', query: 'full flight simulator cockpit' },
  },
  {
    src: 'pipeline/cc-candidates/marine/marine-5.jpg',
    outs: ['public/images/marine/hero.jpg', 'public/images/marine/slide-1.jpg'],
    credit: { file: '/images/marine/slide-1.jpg', source: 'Flickr — CC BY 2.0', photographer: 'David Jones', url: 'https://www.flickr.com/photos/45457437@N00/5371845321', query: 'bridge of RMS Queen Mary' },
  },
];

const credits = [];
for (const j of jobs) {
  const buf = await sharp(A(j.src)).resize(1600, 720, { fit: 'cover', position: 'centre' }).jpeg({ quality: 84, mozjpeg: true }).toBuffer();
  for (const o of j.outs) await writeFile(A(o), buf);
  credits.push(j.credit);
  console.log('★ placed real photo →', j.outs.join(', '));
}
await writeFile(A('src/data/photo-credits.json'), JSON.stringify(credits, null, 2));
console.log(`Done. ${credits.length} vetted CC photos placed + credited at /credits.`);
