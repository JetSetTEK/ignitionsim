# Real Photos — how we fill IgnitionSim with licensed imagery

This file supports the broader publishing rules in `docs/GOLD-STANDARD-IGNITIONSIM.md`.

## Gold standard going forward
- Physical rigs, components, boxes, cockpits, launch monitors, yokes, wheels, sticks, pedals, enclosures, and bridge controls should be shown with real product photography, licensed manufacturer/media-kit imagery, Amazon Associates/SiteStripe imagery, affiliate-feed imagery, or photos we own.
- AI-generated imagery is only acceptable for abstract backgrounds, diagrams, non-product concept art, or placeholder mood pieces that cannot be mistaken for a real component. It should not be used to show a rig or product a builder is trying to buy.
- Product thumbnails, galleries, gear rails, configurator option photos, and article “parts bench” panels should use `object-fit: contain` unless the image is an editorial collage or lifestyle hero. Builders need to inspect shape, ports, mounts, knobs, and scale.
- Hard review claims need a source and date. If Amazon or seller star ratings are not captured and dated, link the reader to the live review page instead of publishing a stale number.
- Community claims should be written as pattern reads in our own voice, with the source thread, subreddit, forum, or search linked where possible. Do not paste long forum/Reddit quotes into commercial pages unless we have explicit permission and a clear editorial reason.
- Every major guide should expose: fast buy verdict, warnings, setup tax/weekend-killer, source shelf, product-photo bench, live seller-review checks, and relevant internal links.

The whole visual system is built and live: framed galleries, click-to-expand **lightbox**,
thumbnail **rotators**, and `images[]` on every product. It just needs *licensed* photos.
We never scrape/re-host copyrighted manufacturer or forum/Reddit photos onto the commercial
site — that's DMCA/liability exposure. Below are the legitimate sources, fastest first.

## 1. Atmospheric / lifestyle photography — FREE, 2 minutes (do this first)
Real photography of cockpits, wheels, golf bays, etc. for bay heroes + sliders.
1. Get a free key: Unsplash (https://unsplash.com/developers) and/or Pexels (https://www.pexels.com/api/).
2. Run (key via env, never committed):
   ```
   UNSPLASH_ACCESS_KEY=xxxx PEXELS_API_KEY=yyyy node scripts/fetch-photography.mjs
   npm run build && netlify deploy --prod --dir dist --site <ignitionrig-id>
   ```
3. Photographer credits are recorded automatically and shown at `/credits` (license requirement).
*Not product-specific — these are mood/lifestyle shots. For exact product photos, use #2/#3.*

## 2. Product photos via Amazon Associates — the main product-shot path
Amazon's Associates license lets you display product images.
1. Apply to Amazon Associates (free, fast): https://affiliate-program.amazon.com/
2. Once approved, get product image URLs the easy way — **SiteStripe** on each product page
   gives you an image embed/URL you're licensed to use; or use the Product Advertising API
   (PA-API, unlocks after ~3 qualifying sales) to automate at scale.
3. Drop them into `pipeline/product-images.json` keyed by our product id, e.g.:
   ```json
   { "moza-r12": ["https://m.media-amazon.com/...jpg", "..."], "skytrak-plus": ["..."] }
   ```
   (product ids are the filenames/keys in `src/data/products/*.json`)
4. Run:
   ```
   node scripts/fetch-product-photos.mjs && npm run build && netlify deploy --prod --dir dist --site <id>
   ```
   Photos land in every product's gallery, configurator drawer, lightbox and rotator.

## 3. Affiliate-network product feeds — bulk product photos + revenue
Programs in `docs/AFFILIATE-PROGRAMS.md` (Impact, AvantLink, CJ, Partnerize, ShareASale) provide
**product feeds that include licensed image URLs**. Export the feed (or share API access) and we map
feed → `pipeline/product-images.json`, then run `fetch-product-photos.mjs`. This is the best long-term
source — it's licensed images *and* commissions in one.

## 4. Manufacturer media kits / permission — official product shots
Some brands grant press/affiliate image rights. Use `docs/outreach/manufacturer-image-permission.md`
to request permission (you send it — I can't email on your behalf). On approval, add the supplied URLs
to `pipeline/product-images.json` and run the ingest.

## What I need from you to flip it on
- A free **Unsplash and/or Pexels key** → I run #1 immediately (real photography everywhere in minutes).
- **Amazon Associates** approval → SiteStripe URLs or PA-API keys for real product shots (#2).
- And/or **one affiliate feed** (#3) for bulk product images + revenue.
