# CLAUDE.md — IgnitionSim

## What this is
Static authority + tools site for **sim hardware**. The engineer's guide to building the perfect simulation rig — racing, flight, space, marine, golf — without the guesswork or the $2,000 mistake. Astro 5 + Netlify, no backend, no user accounts. One configurator engine, five themed bays (racing is the flagship). **Robert Pruitt** = named author/authority. Voice: expert, honest-broker, engineer-precise, lightly cinematic. Information value → passive income (display ads + affiliate, ads-first).

- Live domain: **https://ignitionsim.com** (Cloudflare DNS → Netlify).
- Netlify site: **ignitionrig** (fresh, isolated project — must never touch any other Netlify project).
- Repo: **JetSetTEK/ignitionsim** (GitHub, `main` branch).

## ⛔ Isolation (hard rule)
This project lives ONLY at `/Users/robpruitt/ignitionsim`. It must NEVER read, write, or git-touch `/Users/robpruitt/infohorse-2026` (a separate, live business) or any other project. The Netlify "ignitionrig" site is standalone. Do not switch `gh`/`netlify` CLI auth (both are on the JetSetTEK / jetsettek@gmail.com account, which is correct for this project).

## Stack (pinned)
- Astro 5.18.2 (ESM), @astrojs/sitemap 3.7.3, sharp 0.33.5, Node 22.

## Commands
- `npm run dev` → local dev server
- `npm run build` → static build to `dist/`
- `npm run preview` → preview the build
- `node scripts/make-hero-manifest.mjs` → (re)build the hero/slide image manifest from research
- `node scripts/fetch-images.mjs [manifest.json]` → download images from Pollinations (sequential, resumable, skips existing)
- `node scripts/make-og.mjs` → regenerate the default OG image

## Non-negotiables
- Master shell = Blade Runner / space motif. Per-bay themes via `[data-bay]` token sets in `src/styles/themes.css` (racing=carbon&amber, flight=blueprint cyan, space=neon magenta, marine=steel&teal, golf=fairway gold). `--ember (#FF5E1A)` is the global brand spark and the primary CTA color (`.btn-primary`); it is NEVER recolored per bay. The wordmark stays neutral; only the logo spark recolors per bay.
- The Rig Configurator (`src/components/Configurator.astro`) is the centerpiece: pure front-end, compatibility rules in `src/data/catalog-racing.json`, shareable builds via URL hash, "copy as forum/Reddit markup". Racing first; other bays inherit the engine + a new catalog.
- Every article: Article + (when FAQs present) FAQPage + BreadcrumbList JSON-LD, Robert Pruitt byline → /about (Person schema), `lastReviewed`-style dates.
- **AISEO**: `public/llms.txt`, complete JSON-LD, AI-crawler-welcome `public/robots.txt`, fast static LCP, internal linking guides → configurator. Built to be the citable answer.
- **Never fabricate** price, stock, specs or compatibility. Prices are approximate and dated; mark "around $X" when unsure; render without missing fields. Catalog/research data only.
- **Never scrape-and-republish** Reddit/forum content. Trend/inspiration signal only → original writing. (Research lives in `pipeline/research/<bay>.json`.)
- FTC + affiliate-network disclosure on every page with product links (`/disclosure`, site-wide footer line in `src/data/site.json`).
- Accessibility: visible focus, `prefers-reduced-motion` honored (sliders/animations gated), alt text in site voice.

## Content model
- Articles: `src/content/articles/<bay>/<slug>.md` (collection schema in `src/content.config.ts`). URL = `/<bay>/<slug>`.
- Frontmatter: title, description, bay, type (buying-guide|comparison|how-to|gear-explainer|ecosystem-upgrade-path|diy), primaryKeyword, author, publishDate, updatedDate?, heroImage (`/images/<bay>/<slug>.jpg`), heroAlt, excerpt, featured, readingTime, faqs[{q,a}] (rendered EXPANDED + power FAQPage schema), related[slugs].
- Bays defined in `src/data/bays.json`; brand/site in `src/data/site.json`.

## Images
AI-generated cinematic imagery via Pollinations Flux (atmospheric/hero/slider only — never fake product photos, since specs/compat must stay honest). Heroes/slides at `public/images/<bay>/{hero,slide-1..3}.jpg`; article heroes at `public/images/<bay>/<slug>.jpg`. Pollinations queue is 1 request/IP → `fetch-images.mjs` is sequential and resumable.

## Roadmap (post-launch)
Phase 2: per-bay configurator catalogs (flight/space/marine/golf), GitHub Actions stock/price pipeline → `/drops` + `/feeds/drops.xml` + beehiiv alerts, affiliate-network applications + link router, gear pages with Product/Offer schema. Gate review: expand only after racing proves the model.
