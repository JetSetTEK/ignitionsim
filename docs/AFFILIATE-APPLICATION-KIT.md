# IgnitionSim — Application Kit (image keys + affiliate programs)

You do the signups (they need your identity, tax & payment info — I can't enter those).
Everything below is copy-paste. The moment you have a key or approval, hand it to me and it goes live.

---

## ⚡ DO FIRST — free image keys (2 min each, no cost, no approval wait)
These unlock **real photography across the whole site immediately.**
1. **Unsplash:** https://unsplash.com/developers → "New Application" → accept terms → copy the **Access Key**.
2. **Pexels:** https://www.pexels.com/api/ → "Get Started" → copy the **API key**.
3. Paste either/both to me (or set `UNSPLASH_ACCESS_KEY` / `PEXELS_API_KEY` in env). I run the ingest + deploy.

---

## 💳 Reusable application answers (paste into every form)
- **Site name:** IgnitionSim
- **URL:** https://ignitionsim.com
- **What the site is:** "Independent, engineer-minded review and buying-guide site for simulation hardware — sim racing, flight, space, marine and golf. Features real-photo buyer maps, honest gear reviews, deep per-product pages, and practical setup guidance."
- **Primary categories:** Consumer electronics / gaming peripherals / sporting goods (golf simulators)
- **Audience:** Enthusiasts researching $300–$10,000 hardware purchases; high buying intent.
- **How you drive traffic / promotional methods:** SEO buying guides and comparisons, product research hubs, gear pages, email/newsletter growth, and social research-driven content.
- **Monthly visits:** New site (launched 2026) — be honest; growing via SEO + tools.
- **Disclosure:** FTC + network disclosure is live site-wide at https://ignitionsim.com/disclosure
- **Content count:** 51 original articles, 102 product pages, 5 build tools (real, original content — passes "established site" checks).

---

## 🛒 Programs to join (priority order — full detail in AFFILIATE-PROGRAMS.md)
1. **Amazon Associates** — https://affiliate-program.amazon.com/ (covers every brand; after approval, **SiteStripe** gives licensed product-image URLs + links). Note: ~3 qualifying sales in 180 days to stay active.
2. **Impact** — https://impact.com/ → then apply to brand programs inside: **Fanatec**, **Logitech G**.
3. **CJ (Commission Junction)** — https://www.cj.com/ → **SkyTrak**, **Shop Indoor Golf** (high AOV).
4. **AvantLink** — https://www.avantlink.com/ → golf + outdoor/sporting sim retailers.
5. **Partnerize** — **Sim-Lab** (premium cockpits, up to ~12%).
6. **ShareASale** — https://www.shareasale.com/ → assorted sim/golf merchants.
7. **Boutique/direct:** **MOZA** (UpPromote), **Honeycomb** (Webgains), **Rain or Shine Golf** (direct Shopify), **PlayBetter** (GrowthHero).

> Joining a network solves **product images *and* commissions** at once — most network feeds include licensed image URLs we map straight into the galleries.

---

## 📸 Getting the product photos in (once you have a source)
1. Fill `pipeline/product-images.template.json` → save as `pipeline/product-images.json`, mapping our product ids to your **licensed** image URLs (Amazon SiteStripe / network feed / approved media kit). All 101 product ids are already listed there.
2. I run `node scripts/fetch-product-photos.mjs && npm run build && deploy` — real product shots appear in every product gallery, gear rail, lightbox, article bench, and future builder surface.

(If you give me feed API access, I'll map the feed → that JSON for you automatically — you won't touch it.)
