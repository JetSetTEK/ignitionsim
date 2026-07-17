# CLAUDE.md — IgnitionSim

## What this is
Static authority site for **sim hardware**. The engineer's guide to building a simulator that survives the room, the mounting, the software, and the weekend. Astro 5 + Netlify, no backend or user accounts. Five themed bays: racing, golf, flight, space, and marine. **Robert Pruitt** is the named author and accountable editor. The bench crew are disclosed AI-assisted editorial personas. Voice: expert, honest-broker, engineer-precise, visually aspirational, occasionally snarky, and never careless about money or compatibility.

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

## Required standards

Read these before public content, curator, homepage, hub, card, image, or publishing work:

- `docs/GOLD-STANDARD-IGNITIONSIM.md`
- `docs/ARTICLE-GOLD-STANDARD-V2.md`
- `docs/CURATOR-BIBLE-IGNITIONSIM.md`
- `docs/PUZZLEWICK-TO-IGNITIONSIM-STANDARD.md`
- `docs/SOURCE-LEXICON-IGNITIONSIM.md`

## Non-negotiables
- The site is a simulator-world editorial workshop, not a generic store, SaaS blog, dark AI gallery, or marketplace grid. Per-bay worlds live in `[data-bay]` tokens and `src/lib/worlds.ts`: racing is pit lane/garage, golf is a private practice bay, flight is a cockpit, space is a command station, and marine is a bridge. `--ember (#FF5E1A)` remains the brand spark and primary CTA.
- Sell the dream first, then prove the system with exact real hardware, installation/use photography, official screenshots, manuals, and practical diagrams.
- Product evidence is real. AI-generated scenes can supply curator, environment, and emotion, but never fake hardware, game UI, telemetry, labels, screens, or installation proof.
- Curators do useful work. They measure, install, tune, drive, fly, swing, wire, compare, and diagnose. Portrait stickers and repeated poses fail the standard.
- The old configurators are lab assets, not the centerpiece, until their catalogs and compatibility data are complete enough to beat a guide.
- Every article: Article + (when FAQs present) FAQPage + BreadcrumbList JSON-LD, Robert Pruitt byline → /about (Person schema), `lastReviewed`-style dates.
- **AISEO**: `public/llms.txt`, complete JSON-LD, AI-crawler-welcome `public/robots.txt`, fast static LCP, internal linking guides → configurator. Built to be the citable answer.
- **Never fabricate** price, stock, specs or compatibility. Prices are approximate and dated; mark "around $X" when unsure; render without missing fields. Catalog/research data only.
- **Never scrape-and-republish** Reddit/forum content. Trend/inspiration signal only → original writing. (Research lives in `pipeline/research/<bay>.json`.)
- FTC + affiliate-network disclosure on every page with product links (`/disclosure`, site-wide footer line in `src/data/site.json`).
- Commerce is Amazon-only until Robert explicitly approves another affiliate relationship. Every visible retail-style product card must link its product photo, product name, and purchase CTA to the same exact `https://www.amazon.com/dp/ASIN?tag=ignitionsim-20` destination. Never use Amazon search results, generic retailer pages, manufacturer stores, specialist stores, bundles, accessories, or adjacent models as shopping fallbacks. When an exact ASIN is unavailable, discuss the product only as editorial text and do not render a retail-style product card. Official/manual/forum/reviewer links may remain only as clearly labeled editorial evidence.
- Accessibility: visible focus, `prefers-reduced-motion` honored (sliders/animations gated), alt text in site voice.

## Content model
- Articles: `src/content/articles/<bay>/<slug>.md` (collection schema in `src/content.config.ts`). URL = `/<bay>/<slug>`.
- Frontmatter: title, description, bay, type (buying-guide|comparison|how-to|gear-explainer|ecosystem-upgrade-path|diy), primaryKeyword, author, publishDate, updatedDate?, heroImage (`/images/<bay>/<slug>.jpg`), heroAlt, excerpt, featured, readingTime, faqs[{q,a}] (rendered EXPANDED + power FAQPage schema), related[slugs].
- Bays defined in `src/data/bays.json`; brand/site in `src/data/site.json`.

## Images
Follow `docs/ARTICLE-GOLD-STANDARD-V2.md` and `docs/SOURCE-LEXICON-IGNITIONSIM.md`. Official/manufacturer product, installation, manual, and game/software evidence comes first. AI generation is reserved for clearly labeled dream scenes, curator action, and atmosphere. Hybrid images use generated environments plus exact real product/screen pixels at correct scale. Every generated prompt varies action, camera, location, emotional beat, and lighting; changing only the background is not variety.

## Publishing

Public articles must be certified, pass `npm run audit:quality`, `npm run gold-audit`, and `npm run build`, appear on every applicable discovery surface, use exact direct affiliate destinations, and pass desktop plus 390px mobile QA. Push to `main`, watch the isolated Netlify `ignitionrig` deploy to `ready`, verify the live URL, then run IndexNow. A local build or Git push alone is not publication.

## Roadmap (post-launch)
Phase 2: per-bay configurator catalogs (flight/space/marine/golf), GitHub Actions stock/price pipeline → `/drops` + `/feeds/drops.xml` + beehiiv alerts, affiliate-network applications + link router, gear pages with Product/Offer schema. Gate review: expand only after racing proves the model.
