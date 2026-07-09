# IgnitionSim SEO/GEO Growth Runbook

Last updated: 2026-07-09.

## Weekly Crawl Sprint

1. Run `npm run seo:priority`.
2. Submit or refresh `https://ignitionsim.com/sitemap-index.xml` in Google Search Console.
3. Inspect the top 20 URLs in `reports/ignitionsim-seo-priority-urls.json`.
4. Request indexing for priority URLs that are live, canonical, certified, and not already indexed.
5. Run `npm run seo:indexnow` after publishing or refreshing priority guides.

## Analytics Setup

IgnitionSim can run Umami and GA4 at the same time. Umami is already configured in `src/data/site.json`.

GA4 status:

1. GA4 property: `IgnitionSim`.
2. GA4 property ID observed in setup flow: `p544937061`.
3. Web stream: `https://ignitionsim.com`.
4. Measurement ID in `src/data/site.json`: `G-7XB7ZDLV7E`.
5. Deploy.
6. Visit the live site and click one Amazon buy link, one article next-step link, one Sim Stream card, and one newsletter form test.
7. In GA4 Admin -> Events, mark these as key events after they appear:
   - `buy_click`
   - `newsletter_signup`
   - `article_next_guide_click`
   - `article_next_bay_click`
   - `internal_recommendation_click`

Supporting events now emitted by code:

- `scroll_depth`
- `engaged_reader_45s`
- `article_next_stream_click`
- `article_next_starter_click`
- `article_next_games_click`
- `article_next_curator_click`

## Search Console Setup

Preferred property: URL-prefix property for `https://ignitionsim.com/`, verified through the deployed GA4 tag. If Google requires a meta token, paste it into `site.analytics.googleSiteVerification`, deploy, then verify.

After verification, submit `https://ignitionsim.com/sitemap-index.xml`.

## Public Surface Rules

- Certified articles only: `goldStatus: "certified"` and `draft !== true`.
- Public homepage, bay pages, Sim Stream, sitemap, and `llms.txt` should not advertise refresh/archived/draft pages.
- Product claims need real product images, verified gear links, and clear affiliate paths.
- AI/editorial dream scenes are allowed only when labeled and supported by real product proof nearby.

## Revenue Focus

Priority order remains:

1. Golf launch monitors, projectors, screens, mats, enclosures, software.
2. Racing wheelbases, pedals, cockpits, displays, haptics, motion.
3. Flight and space controls with high-intent game routing.
4. Marine as a long-tail authority bay.
