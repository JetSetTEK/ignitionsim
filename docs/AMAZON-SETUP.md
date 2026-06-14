# Amazon — full setup (tracking ID, OneLink, product images & direct links)

Associate ID base: **`ignitionsim-20`** (set in `src/data/site.json` → `affiliate.amazonTag`).

## 1. Create the `ignitionsim-20` tracking ID  ← DO THIS NOW
Every gear buy-link is already live with `?tag=ignitionsim-20`, but the ID must exist or clicks won't credit.
- Associates Central → **Account → Manage Your Tracking IDs → Add Tracking ID** → enter exactly **`ignitionsim-20`** → Create.
- (This separates IgnitionSim's earnings from your `puzzlewick-20` store in reporting — same account.)

## 2. OneLink (international earnings)  ← needs a paste from you
OneLink auto-redirects non-US visitors to their local Amazon (amazon.co.uk/.de/.ca/…) with the right regional tag, so you earn on international traffic.
- Associates Central → **Tools → OneLink** → follow the flow to **link your international associate accounts** (accept the country accounts Amazon offers, or join each store).
- It generates a **JavaScript snippet** (a `<script>…</script>` block).
- Paste that whole snippet into `src/data/site.json` → `affiliate.amazonOneLinkScript` (as a JSON string), then `npm run build` + deploy. It's already wired to inject site-wide.

## 3. Real Amazon product photos + direct /dp links — SiteStripe (works TODAY)
No PA-API or sales required — SiteStripe is live the moment you're approved.
1. On any Amazon product page, use the **SiteStripe** bar (top) → **Image** (or Text+Image). Note two things:
   - the **ASIN** (the `B0XXXXXXX` in the product URL `/dp/B0XXXXXXX`), and
   - the **image URL** (an `https://m.media-amazon.com/images/...` link — licensed for Associates to display).
2. Copy `pipeline/amazon-products.template.json` → **`pipeline/amazon-products.json`** and fill the products you care about:
   ```json
   { "moza-r12": { "asin": "B0XXXXXXX", "image": "https://m.media-amazon.com/images/I/....jpg" } }
   ```
   (all 101 product ids are pre-listed in the template)
3. Run: `node scripts/apply-amazon.mjs && npm run build && deploy`
   → that product's buy button becomes a **direct `/dp/ASIN?tag=ignitionsim-20` link**, and the **real Amazon photo** becomes its gear hero + gallery image (hotlinked from `m.media-amazon.com`, compliant).

Start with your top ~20 highest-intent products; expand over time.

## 4. PA-API (full automation — later)
After ~3 qualifying sales in 180 days, Amazon unlocks the Product Advertising API. Send me the PA-API keys then and I'll wire `scripts/fetch-amazon.mjs` to pull ASINs + images + live prices for **all** products automatically — no manual SiteStripe.

## Compliance (already handled)
- "As an Amazon Associate we earn from qualifying purchases" disclosure is site-wide (`/disclosure` + footer + every gear page).
- Buy links use "Check price on Amazon" (no stale prices shown) and `rel="sponsored nofollow"`.
- Amazon images are hotlinked from Amazon's CDN, never re-hosted.
