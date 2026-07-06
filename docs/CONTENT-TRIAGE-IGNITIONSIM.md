# IgnitionSim Content Triage

Current library: 101 articles across racing, flight, space, marine, and golf. The library is worth keeping, but the public strategy must favor the strongest buyer-intent pages while older, duplicate, or thinner pieces stay hidden as refresh candidates until they can carry real product/use/install imagery and article-specific editorial judgment.

## Decision
- Clean-slate rule: only `goldStatus: "certified"` articles are public.
- Homepage, Sim Stream, category pages, guides, sitemap, and related slots must never surface duplicate, draft, refresh, archived, generic-card, placeholder-card, or missing-art articles.
- Existing incomplete articles stay in the repo as `refresh` by default and are not deleted.
- Duplicate topics are consolidated behind the strongest page. The weaker duplicate remains a refresh candidate until it has a distinct buyer question, distinct product proof, and a better reason to exist than "more keywords."
- Keep the content engine front and center.
- Keep gear/product data in the repo, but do not treat gear pages, brand pages, or best-of rankings as public SEO surfaces until they pass the product-review standard. They may exist as noindexed lab/support pages while review snapshots, low-star warnings, and source checks are added.
- `npm run gold-audit` now includes public-surface QA: homepage/stream IDs must exist, be certified, have real card files, avoid duplicate card art, and avoid generic labels such as "Product proof," "Control map," "Display wall," or "Cockpit fit."
- Backburner public tools until the data layer is strong enough to earn trust.
- Refresh articles rather than deleting them unless a page is inaccurate, obsolete, or too thin to rescue.

## Certified Starter Set
These are the current public article paths. They should be visible from homepage, bay pages, guides, related articles, and sitemap output. Everything else is a refresh candidate until upgraded. As of the July 1, 2026 media audit, every certified article must pass `npm run gold-audit`: at least 8 inline visuals, no unverified gear imagery, no missing image files, no placeholder markers, and no internal gear links to unverified product pages.

- `racing/active-pedals-vs-load-cell-hydraulic-2026.md`
- `racing/console-direct-drive-2026.md`
- `racing/sim-rig-buyer-map-2026.md`
- `racing/direct-drive-upgrade-ladder-2026.md`
- `racing/cockpit-rigidity-wheel-stand-vs-8020-2026.md`
- `racing/diy-motion-vs-bass-shakers-2026.md`
- `racing/triple-monitor-vs-ultrawide-vs-vr-2026.md`
- `flight/msfs-home-cockpit-buyer-map-2026.md`
- `flight/yoke-throttle-rudder-head-tracking-order-2026.md`
- `space/star-citizen-hosas-buyer-map-2026.md`
- `space/star-citizen-hosas-upgrade-path-2026.md`
- `golf/golf-launch-monitors-under-5000-2026.md`
- `golf/golf-mats-screens-enclosures-2026.md`
- `golf/home-golf-simulator-build-sheet-2026.md`
- `golf/home-golf-simulator-under-10000-2026.md`
- `golf/launch-monitor-ladder-2026.md`

## Demoted During Media Audit
These topics still matter, but they were moved back to `refresh` because the public page depended on blocked, procedural, or insufficiently verified product media.

- `flight/flightsimexpo-2026-hardware-buyer-map.md`
- `marine/marine-sim-hardware-reality.md`
- `space/vkb-vs-virpil-vs-winwing-space-sticks-2026.md`

## Tier 2: Refresh Into Strong Earners
These already match high-intent searches. Add real product photos, current source shelves, low-star warning checks, comparison tables, and clearer buy/wait verdicts.

- Racing: `best-sim-racing-setup-under-1000-2026.md`, `best-sim-racing-wheelbases-2026.md`, `best-wheel-for-iracing-2026.md`, `moza-vs-fanatec-vs-simagic.md`, `pedals-over-power.md`, `triple-monitor-vs-ultrawide-vs-vr-2026.md`, `best-ffb-settings-iracing-acc-lmu-2026.md`
- Flight: `best-flight-sim-hardware-2026.md`, `best-flight-sim-setup-beginners.md`, `honeycomb-vs-thrustmaster-tca.md`, `head-tracking-trackir-vs-tobii-msfs.md`, `flight-sim-usb-hub-wiring-multi-panel.md`, `vr-vs-monitor-flight-sim.md`
- Space: `hosas-vs-hotas.md`, `best-beginner-hosas-under-300.md`, `best-space-sim-controllers-2026.md`, `best-hotas-for-star-citizen.md`, `stream-deck-button-box-space-sim.md`, `mounting-your-hosas-monstertech.md`
- Golf: `golf-simulator-room-size.md`, `golf-simulator-cost.md`, `skytrak-vs-bushnell-launch-pro-vs-gc3.md`, `best-golf-launch-monitor-under-1000.md`, `golf-simulator-impact-screen-enclosure.md`, `golf-simulator-projector-guide.md`, `best-golf-simulator-software.md`
- Audit-demoted rescues: `flight/flightsimexpo-2026-hardware-buyer-map.md`, `marine/marine-sim-hardware-reality.md`, `space/vkb-vs-virpil-vs-winwing-space-sticks-2026.md`

## Duplicate/Quality Guardrails
- If two certified articles answer the same purchase question, keep the one with the strongest current product photos, source shelf, buy/wait verdict, and curator point of view public. Move the weaker one to `refresh`.
- If a public card uses a generic label, repeated product image, white-box-only cutout, abstract/generated fallback, or text that could belong to any article, the article does not get homepage or stream priority.
- If an article includes internal planning language, placeholder markers, or generic proof-stack copy, the build must fail before deploy.
- If the article cannot show what the reader is buying, installing, using, or comparing, it is not ready for the $10k/month standard.

## Tier 3: Keep, But Do Not Lead With Yet
These can work as long-tail support pages after a source/photo refresh. They should not dominate homepage or first-click paths until improved.

- Marine hardware DIY and controller pages.
- Narrow calibration/settings pages.
- Individual reviews that lack real product photos or current seller-review checks.
- Speculative crossover/game wildcard pieces until we can support them with real user examples.

## Fill-In Priorities
1. Product-photo pipeline for the top 40 products by affiliate potential.
2. Racing cluster refresh: direct drive, cockpit rigidity, pedals, displays, haptics.
3. Golf cluster refresh: launch monitors, room sizing, enclosures, projectors, software.
4. Flight cluster refresh: MSFS cockpit buyer path, controls order, head tracking, USB/power planning.
5. Space cluster refresh: Star Citizen HOSAS, VKB/Virpil/WinWing, mounting, button layers.
6. Marine stays honest and niche: "hardware reality" first, DIY only where useful.

## Success Test
A refreshed article should help a serious builder answer:
- What should I buy first?
- What should I avoid?
- What will make setup painful?
- What fits my room, desk, cockpit, platform, and budget?
- Where do I verify current reviews and price before I click buy?
