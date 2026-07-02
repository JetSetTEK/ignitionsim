# Research Pack: Best Budget Marine Sim Setup for Under $200

- **Article:** Best Budget Marine Sim Setup for Under $200 (Without Wasting Money)
- **Slug:** `marine/best-budget-marine-sim-setup`
- **Curator:** Gus Calder (marine)
- **Date researched:** 2026-07-02

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Saitek Pro Flight Throttle Quadrant $69.99, 3 analog levers, 3 two-way toggles = 9 programmable commands, adjustable mounting clamps | Logitech G official | https://www.logitechg.com/en-us/shop/p/flight-simulator-throttle-quadrant | 2026-07-02 | Throttle-quadrant section, ladder, table, FAQ | High | Official list price $69.99; frequently discounted below on sale — noted as "wait for a sale" |
| Bridge Command is free/open-source (GPLv2), current version 5.9, now with PCVR VR support | Bridge Command official + GitHub | https://www.bridgecommand.co.uk/ ; https://github.com/bridgecommand/bc | 2026-07-02 | $0 tier, hero, FAQ, table | High | v5.9 confirmed; VR support new in recent release |
| Bridge Command DIY controls: BU0836 board + three ~10k LINEAR pots (2 throttles, 1 wheel) + optional horn push-button; string-around-pot-shaft friction trick | Bridge Command "Making a controller" guide | https://www.bridgecommand.co.uk/Doc/Current/makethrottle.html | 2026-07-02 | DIY section, forum callout, FAQ, table | High | Guide does NOT state a parts cost — "$60 in parts" is our estimate, flagged as approximate |
| Leo Bodnar BU0836A £33 (~$42), solder version, 8 analog axes 12-bit, 32 buttons/16 encoders | Leo Bodnar official | https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=204 | 2026-07-02 | DIY section (text-only, no verified image), table | High | Exact Bridge Command reference part; text/link only (no verified photo) |
| Leo Bodnar BU0836X £59.99 (~$77), solderless push-in, 8 analog axes 12-bit, 32 buttons, USB Type B, driver-free Win/Mac/Linux | Leo Bodnar official | https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=180 | 2026-07-02 | DIY gearpick (VERIFIED image), table | High | Correct product ID is 180 (the reference article linked 214 — corrected here) |
| Leo Bodnar BBI-32 with connectors (solderless), 32 digital inputs / up to 16 encoders | Leo Bodnar official | https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=205 | 2026-07-02 | Extras gearpick (VERIFIED image), table | Medium | "With connectors" version is product 205; ~$53 estimate from prior data, flagged approximate |
| T.16000M FCS: H.E.A.R.T Hall-effect (16000x16000), 4 axes incl. twist rudder, 16 buttons, 8-way hat; ~$74–88 street | Thrustmaster official + Amazon | https://www.thrustmaster.com/en-us/products/t-16000m-fcs/ ; https://www.amazon.com/ThrustMaster-2960773-Thrustmaster-T16000M-FCS/dp/B01MQEDEEW | 2026-07-02 | Not embedded as gearpick in budget cut, but verified for cross-refs | High | Verified image exists; kept for rudder cross-reference to hardware-reality article |
| Meta Quest price hike (from 2026-04-19): Quest 3S 128GB $349.99, 3S 256GB $449.99, Quest 3 512GB $599.99 | Meta official blog | https://www.meta.com/blog/update-meta-quest-pricing/ | 2026-07-02 | VR section, warn callout, table, FAQ | High | Prices UPDATED vs old marine.json data ($499–649) — corrected in body |
| MarineVerse Sailing Club $29.99 one-time (Meta Store + Steam), 4.4 stars, NauticEd course integration, 8 locations | Meta Store + Quest Store DB | https://www.meta.com/experiences/marineverse-sailing-club/2465388190184288/ | 2026-07-02 | VR section, FAQ | High | $29.99 one-time — CORRECTS the old "~$13/month Sailing Pass" note in marine.json (flagged as possibly stale) |
| JoyToKey = free shareware controller→keyboard/mouse mapper | JoyToKey official | https://joytokey.net/en/ | 2026-07-02 | Glue-software section, verdict | High | Confirmed free download; license purchase optional |
| Sailaway III exists on Steam (app 2631870); free demo status unconfirmed for 2026 | Steam | https://store.steampowered.com/app/2631870/Sailaway_III/ | 2026-07-02 | $0 tier (flagged "check current") | Medium | Could NOT confirm a live free demo in 2026 — written as "check current" |
| Professional Ship Simulator (ex-Nautic XP): 9 axes, 50+ buttons, rudder deadzone for HOTAS/controller, Steam Early Access 2026, price TBD | Prior canonical (marine.json) + Steam search | https://store.steampowered.com/search/?term=professional+ship+simulator | 2026-07-02 | "Watch, don't buy" section (VERIFIED image), table | Medium | Unreleased; specs from prior research, price explicitly TBD |

## Community pattern notes (paraphrased in our voice)
- The most-repeated DIY-helm lesson: the board and pots are trivial; the *friction* is the whole build. A bare 10k pot won't hold a throttle setting. The Bridge Command builders' fix (string wrapped around the pot shaft, anchored under tension for drag) is the make-or-break trick. Paraphrased from the official build guide, not quoted.
- Recurring budget regret across the bay: buying a racing wheel first. Engine levers (a throttle quadrant) deliver more felt immersion per dollar, and a wheel is often reduced to binary left/right by keyboard-only titles.
- The free-first pattern: play a week on a pad before buying, and let the controls you *wish* were physical dictate the purchase — it's almost never "a wheel" first.

## Credible warnings / caveats
- Analog-axis support is the gate: a wheel or throttle does nothing proportional in a keyboard-only title; a $250 wheel can equal two arrow keys. Verify per-title BEFORE buying.
- Force feedback is wasted money in marine — titles don't support it; never pay the G923-over-G29 premium for FFB.
- Prices move: the April 2026 Meta Quest hike is the live example. Treat any year-old price as "check current."
- A DIY helm is a real project (fabrication, wiring, friction), not an afternoon.
- Leo Bodnar boards ship from the UK — add shipping and lead time to the "~$60" build estimate.

## Products discussed
| Product | Gear page | Amazon (search) / Official | Local image | Verified? |
| --- | --- | --- | --- | --- |
| Bridge Command (free sim) | /marine/gear/bridge-command-free-sim | https://www.bridgecommand.co.uk/Download | /images/gear/marine/bridge-command-free-sim.jpg | YES (embedded, hero) |
| Leo Bodnar BU0836X (solderless) | /marine/gear/leobodnar-bu0836x-diy-board | leobodnar.com product 180 | /images/gear/marine/leobodnar-bu0836x-diy-board.jpg | YES (embedded) |
| Arduino Leonardo | /marine/gear/arduino-leonardo-diy-hid | Arduino+Leonardo | /images/gear/marine/arduino-leonardo-diy-hid.jpg | YES (embedded) |
| PXN CB1 Button Box | /marine/gear/pxn-cb1-button-box | PXN+CB1+Button+Box | /images/gear/marine/pxn-cb1-button-box.jpg | YES (embedded) |
| Leo Bodnar BBI-32 | /marine/gear/leobodnar-bbi-32-button-box-interface | leobodnar.com product 205 | /images/gear/marine/leobodnar-bbi-32-button-box-interface.jpg | YES (embedded) |
| Professional Ship Simulator | /marine/gear/professional-ship-simulator-context | Steam search | /images/gear/marine/professional-ship-simulator-context.jpg | YES (embedded) |
| Meta Quest 3 / 3S (MarineVerse) | /marine/gear/meta-quest-3-marineverse-vr | Meta+Quest+3S | /images/gear/marine/meta-quest-3-marineverse-vr.jpg | YES (embedded) |
| Logitech G Saitek Throttle Quadrant | /marine/gear/logitech-saitek-throttle-quadrant-telegraph | Logitech+G+Saitek+Pro+Flight+Throttle+Quadrant | /images/gear/marine/logitech-saitek-throttle-quadrant-telegraph.jpg | **NO — needs real photo (budget MVP; text+link only)** |
| Logitech G29 (as helm) | /marine/gear/logitech-g29-helm | Logitech+G+G29+Driving+Force | /images/gear/marine/logitech-g29-helm.jpg | **NO — needs real photo (stretch buy; text+link only)** |
| Leo Bodnar BU0836A (solder) | /marine/gear/leobodnar-bu0836a-diy-board | leobodnar.com product 204 | /images/gear/marine/leobodnar-bu0836a-diy-board.jpg | **NO — needs real photo (exact Bridge Command part; text+link only)** |

## Unresolved / for Codex to re-check
- **Saitek quadrant, G29, BU0836A have NO verified product image** — they are the three most budget-relevant items yet appear text-only in the body. Source real photos before they can become body visuals or before certification. This is the primary certification blocker.
- **BBI-32 "~$53" and BU0836A "~$42" USD figures** are conversions/estimates from GBP list prices before shipping — confirm current USD landed cost (incl. UK shipping) before quoting hard numbers.
- **Sailaway free demo status in 2026** — could not confirm a live free demo; written as "check current." Verify before certifying.
- **MarineVerse pricing model** — body says $29.99 one-time (per Meta Store). Old marine.json said "free download + ~$13/month Sailing Pass." Confirm whether it is now a paid one-time app, still free-with-pass, or both, before certifying.
- **Professional Ship Simulator** — unreleased, price TBD; recheck for a release date / price before any hard claim.
- Leo Bodnar product-ID drift: the reference article linked BU0836X as product 214 and BBI-32 as 204, but live pages resolve BU0836X=180, BU0836A=204, BBI-32-with-connectors=205. This article uses the corrected IDs — Codex should re-verify all Leo Bodnar deep links on the reference article too.
