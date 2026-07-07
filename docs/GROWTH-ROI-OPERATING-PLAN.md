# IgnitionSim Growth ROI Operating Plan

This is the operating plan for items 2-5 of the growth floor.

## 2. Money-Page Priority List

The living priority file is `src/data/growth-priorities.json`.

Highest ROI clusters:

- Golf launch monitors, room builds, projectors, screens, mats, enclosures, subscriptions.
- Racing wheelbases, pedals, cockpits, monitors, haptics, motion, iRacing/ACC hardware paths.
- Flight/space controls, VR/GPU, head tracking, HOTAS/HOSAS, USB/cable reliability.

## 3. Internal Linking And Surfacing

Every certified article must surface in:

- Homepage cornerstone shelf if it is flagship/high-ROI.
- Sim Stream via `streamLeadArticleIds` or normal newest-first fallback.
- Correct bay page.
- Correct game hub when applicable through `src/data/games.json`.
- Correct curator page through author metadata.
- Related-guide cluster through frontmatter `related`.

## 4. Freshness

Every certified article needs:

- `publishDate`
- `updatedDate` when materially refreshed
- `sourceReviewDate`
- `goldCertifiedDate`
- Current product links and verified product images
- A visible freshness card near the article top

## 5. Conversion Tracking

Tracked events that matter:

- `buy_click`
- `seller_review_check`
- `review_check`
- `newsletter_signup`
- `internal_recommendation_click`
- `scroll_depth`

GA4 can be added later, but Umami currently receives event payloads through `window.ig.track`.
