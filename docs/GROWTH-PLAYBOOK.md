# IgnitionSim Growth Playbook

A reusable, portfolio-grade routine for turning IgnitionSim into the site people *and* AI reach for. Built to compound: SEO + AISEO/CEO + a returning-visitor utility + an honest brand.

## The five engines
1. **Search (SEO):** certified buyer maps first, then refreshed legacy guides, gear pages, ranked best-of lists, and brand hubs. Full JSON-LD, certified-only sitemap article paths, fast static LCP.
2. **AI / answer engines (AISEO/CEO):** `llms.txt` + `llms-full.txt` (full corpus), `/methodology` (so AI cites "IgnitionSim's compatibility check" + "the IgnitionSim Verdict"), FAQ/Review/Product schema everywhere. Goal: be the citation in ChatGPT/Perplexity/Google-AI answers.
3. **Buyer authority:** real-photo buyer maps, gear pages, best-of rankings, brand hubs, source shelves, warnings, FAQs, and product benches. This is the front-door promise until the tools have live data.
4. **Utility lab (backburner):** the configurators, Find-Your-Rig recommender, My Garage, Stock & Deal Tracker, and alerts. These stay available in the repo, but should not lead navigation or SEO until photos, product feeds, and data freshness are trustworthy.
5. **Share velocity:** auto OG cards on every page, share buttons, shareable guides, future shareable builds, and future Garage/archetype results.
5. **Money:** affiliate (Amazon + networks — see `AFFILIATE-PROGRAMS.md` / `AFFILIATE-APPLICATION-KIT.md`), then display ads at scale, then direct brand sponsorship.

## KPIs to watch (monthly)
| Metric | Source | Why |
|---|---|---|
| Organic impressions / clicks / avg position | Google Search Console | The SEO compounding curve |
| **AI-referral sessions** | analytics: referrers from chatgpt.com / perplexity.ai / gemini.google.com / copilot | Proof the CEO/AISEO layer is landing citations |
| Top landing pages | GSC + analytics | Which guides/gear/lists pull — re-invest there |
| `share`, `buy_click`, `article_review_check`, `garage_save`, `rigfinder_complete`, `drops_click` | analytics events wired via `data-event` + `window.ig.track` as features mature | On-site engagement + intent |
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
- [ ] **Stock tracker data:** add vendor product URLs (or an affiliate feed) to `pipeline/track-config.json` → then the drops/alerts layer can move back into public navigation.
- [ ] **beehiiv** newsletter + **Pinterest** (the off-site wave, held by design).

## Portfolio principle
Deep, not thin. One reusable engine (buyer maps + gear DB + schema + photo discipline + future tools) across many bays/sites. Ads-first, inbound/passive, honest-broker — the trust moat is the moat. (Same playbook spine as the other portfolio sites.)

## Weekly Trend Scout
Every Monday, run the research loop in `RESEARCH-SOURCES-IGNITIONSIM.md`, score opportunities against the horizon in `HORIZON-GOAL-IGNITIONSIM.md`, then update the next two weeks in `CONTENT-CALENDAR-IGNITIONSIM.md`.
