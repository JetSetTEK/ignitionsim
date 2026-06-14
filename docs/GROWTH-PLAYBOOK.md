# IgnitionSim Growth Playbook

A reusable, portfolio-grade routine for turning IgnitionSim into the site people *and* AI reach for. Built to compound: SEO + AISEO/CEO + a returning-visitor utility + an honest brand.

## The five engines
1. **Search (SEO):** 56 bylined guides + 102 gear pages + 9 ranked best-of lists + 24 brand hubs, hub-and-spoke interlinked. Full JSON-LD, sitemap `lastmod`, fast static LCP.
2. **AI / answer engines (AISEO/CEO):** `llms.txt` + `llms-full.txt` (full corpus), `/methodology` (so AI cites "IgnitionSim's compatibility check" + "the IgnitionSim Verdict"), FAQ/Review/Product schema everywhere. Goal: be the citation in ChatGPT/Perplexity/Google-AI answers.
3. **Utility (return visits):** the compatibility configurators (all 5 bays), the Find-Your-Rig recommender, My Garage, the Stock & Deal Tracker. Reasons to come back that don't depend on SEO.
4. **Share velocity:** auto OG cards on every page, share buttons, shareable builds + shareable Garage + shareable archetype results.
5. **Money:** affiliate (Amazon + networks — see `AFFILIATE-PROGRAMS.md` / `AFFILIATE-APPLICATION-KIT.md`), then display ads at scale, then direct brand sponsorship.

## KPIs to watch (monthly)
| Metric | Source | Why |
|---|---|---|
| Organic impressions / clicks / avg position | Google Search Console | The SEO compounding curve |
| **AI-referral sessions** | analytics: referrers from chatgpt.com / perplexity.ai / gemini.google.com / copilot | Proof the CEO/AISEO layer is landing citations |
| Top landing pages | GSC + analytics | Which guides/gear/lists pull — re-invest there |
| `rigfinder_complete`, `share`, `garage_save`, `buy_click`, `drops_click` | analytics events (already wired via `data-event` + `window.ig.track`) | On-site engagement + intent |
| Newsletter subs | beehiiv (once live) | Owned audience |
| Buy-clicks → affiliate revenue | network dashboards | The actual money |

## Monthly review routine (≈30 min)
1. **GSC:** export top queries + pages; note any page on page-2 of results (positions 11–20) — those are the cheapest wins. Refresh/expand them.
2. **Demand re-point:** re-run the demand-research pass (the agent pattern in this repo) for what's newly hot on Reddit/forums; add 2–4 guides + any new products to the catalog. Update `events.json` with real market moves.
3. **AI-referral check:** are chatgpt/perplexity/gemini referrers growing? If not, deepen `/methodology`, FAQs, and lead-answer paragraphs on the top pages.
4. **Freshness:** bump `updatedDate` on refreshed guides (drives sitemap `lastmod`), re-run `npm run art`/`npm run og` if new content, `npm run build`, deploy.
5. **Catalog hygiene:** verify prices on the top 10 products (they drift); mark approximates.

## Activation checklist (what's waiting on you — flip these on)
- [ ] **Real photos:** an Unsplash/Pexels key (atmospheric) + Amazon SiteStripe URLs / affiliate feed (product) → see `REAL-PHOTOS.md`. Pipelines are built; one command each.
- [ ] **Affiliate programs:** Amazon Associates + Impact/CJ/AvantLink/Partnerize → `AFFILIATE-APPLICATION-KIT.md` (paste-in answers ready).
- [ ] **Analytics:** set `analytics.provider` + `websiteId` + `src` in `src/data/site.json` (Umami or Plausible) — events are already wired and fire automatically once a provider is set.
- [ ] **Search Console + Bing Webmaster:** verify the domain, submit `sitemap-index.xml`.
- [ ] **Stock tracker data:** add vendor product URLs (or an affiliate feed) to `pipeline/track-config.json` → the cron starts posting real RESTOCK/PRICE_DROP events.
- [ ] **beehiiv** newsletter + **Pinterest** (the off-site wave, held by design).

## Portfolio principle
Deep, not thin. One reusable engine (configurator + gear DB + schema + playbook) across many bays/sites. Ads-first, inbound/passive, honest-broker — the trust moat is the moat. (Same playbook spine as the other portfolio sites.)
