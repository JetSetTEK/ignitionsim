# Research Pack: The Marine Sim Hardware Reality Check

- **Article:** The Marine Sim Hardware Reality Check: Why There's No 'Boat Wheel' (And What You Actually Buy)
- **Slug:** `marine/marine-sim-hardware-reality`
- **Curator:** Gus Calder (marine)
- **Date researched:** 2026-07-02
- **Revenue tier:** B
- **Angle:** Honest reality of marine/boating sim hardware in 2026 — there is essentially no purpose-built consumer gear; the bay runs on repurposed racing wheels, flight throttle quadrants, button boxes and DIY boards. What works, what to skip, and the software gate (analog-axis support) that decides whether any of it functions. Media-demoted rescue: 5 unverified gear images were removed; article now honestly flags its own photo gaps.

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| No dedicated consumer marine helm controller; bay runs on repurposed racing/flight gear + DIY | Product DB synthesis + Bridge Command DIY docs | https://www.bridgecommand.co.uk/ | 2026-07-02 | Verdict, intro, market | High | Core thesis; corroborated by every product's "repurpose" framing |
| Logitech G29 ~$200 sale, G923 ~$300; 900°, FFB wasted in marine (no marine FFB support) | Logitech G official + product DB | https://www.logitechg.com/en-us/products/driving/g29-driving-force-racing-wheel.html | 2026-07-02 | Helm section, FAQ, table | High | eSail cited in DB as no-FFB example; G923 TrueForce unused in marine |
| Saitek Pro Flight Throttle Quadrant ~$50–70; 3 analog levers → twin throttles + thruster; daisy-chainable | Logitech G official + product DB | https://www.logitechg.com/en-us/products/flight/pro-flight-throttle-quadrant.html | 2026-07-02 | Quiet-hero section, table | High | Best value in bay; analog caveat applies |
| Thrustmaster TWCS: 80mm slide rail, 16-bit axis, single throttle | Thrustmaster official | https://www.thrustmaster.com/products/twcs-throttle/ | 2026-07-02 | Smooth-lever gearpick, table | High | Twin-screw needs 2nd axis |
| Thrustmaster T.16000M: H.E.A.R.T. Hall-effect twist axis = rudder | Thrustmaster official | https://www.thrustmaster.com/products/t-16000m-fcs/ | 2026-07-02 | Rudder gearpick, table | High | Rudder-axis sims only; Pro Ship Sim adds rudder deadzone |
| RailDriver ~$220; train-cab levers repurposed; needs vJoy/JoyToKey mapping | P.I. Engineering official | https://raildriver.com/ | 2026-07-02 | Crossover gearpick, table | High | Pricey repurpose; lever feel is the draw |
| Bridge Command free/open-source; official DIY wheel+throttle guide; BU0836 + 3× 10k linear pots + string-friction trick | Bridge Command wiki | https://www.bridgecommand.co.uk/wiki/index.php?title=Building_your_own_controls | 2026-07-02 | DIY section, forum callout, verdict | High | The niche's only "native" hardware spec |
| Leo Bodnar BU0836X: 8 analog axes 12-bit, 32 buttons, solderless push-in, HID no drivers | Leo Bodnar official | https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=214 | 2026-07-02 | DIY gearpick, stack | High | Verified image = X (not the A the guide names) |
| Leo Bodnar BBI-32: digital-only, 32 inputs → chainable to 132, solderless | Leo Bodnar official | https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=204 | 2026-07-02 | Bridge-switch gearpick, stack | High | Complements BU0836; no analog |
| Arduino Leonardo ATmega32u4 native USB HID via ArduinoJoystickLibrary; ~$25 | Arduino + library repo | https://github.com/MHeironimus/ArduinoJoystickLibrary | 2026-07-02 | Code-it-yourself gearpick | High | Uno can't do HID without reflash; Leonardo/Micro can |
| PXN CB1: 19 controls / 30 functions, USB-C driver-free; racing-marketed | Product DB (marine-extra) | https://www.amazon.com/s?k=PXN+CB1+Button+Box&tag=ignitionsim-20 | 2026-07-02 | Off-the-shelf gearpick, stack | Medium | All-digital; map to marine commands |
| Meta Quest 3 ~$499 / 3S ~$329; MarineVerse hand-tracked tiller+sheet; NauticEd courses; ~$13/mo Sailing Pass | Meta official + product DB | https://www.meta.com/quest/quest-3/ | 2026-07-02 | VR gearpick, warnings | High | Sailing-only; VR comfort warning |
| Professional Ship Simulator (ex-Nautic XP): 9 axes, 50+ buttons, rudder deadzone; Steam EA 2026 | Product DB + Steam search | https://store.steampowered.com/search/?term=professional+ship+simulator | 2026-07-02 | Bright-spot gearpick, FAQ | Medium | Unreleased; price TBD; EA caveats |
| Analog-axis gate: many titles keyboard-only → wheel = binary L/R, throttle dead; glue software (vJoy/JoyToKey/Xpadder/x360ce) mandatory for several | Product DB synthesis + compatibility map article | /marine/marine-sim-controller-support | 2026-07-02 | The-gate section, tip callout, stack | High | Single biggest trap in the bay |

## Community / builder patterns (paraphrased in our voice)
- **Friction is the whole DIY game.** A bare 10k pot flops loosely; the throttle won't hold. The Bridge Command builders' string-around-the-shaft trick supplies drag — the difference between a toy and a real throttle. Sort friction before fabricating the enclosure. (Used as the "From the builders" callout.)
- **FFB is wasted money in marine.** Marine titles almost never support force feedback and a car wheel doesn't feel like a boat wheel — so don't pay the G923 premium over the G29 for it.
- **One rig, many disciplines.** The bay explicitly runs on cross-pollination; plan a shared base across racing/flight/marine rather than buying marine-specific anything.

## Credible warnings / caveats (used in warn callout)
- Nothing here is plug-and-play marine hardware — everything is a repurpose or a build.
- A DIY helm is a genuine project (fabrication, wiring, friction), not an afternoon.
- Free ship sims (Bridge Command) look dated; the polished tier is sailing-only VR or six-figure professional bridges — nothing consumer-grade in between.
- VR sailing can trigger motion discomfort; start short. It covers sailing only, not ship-handling or fishing.

## Products discussed
| Product | Gear page | Amazon / official (link) | Local image | Verified? | Shown as |
| --- | --- | --- | --- | --- | --- |
| Thrustmaster TWCS Throttle | /marine/gear/thrustmaster-twcs-throttle-engine-lever | Thrustmaster+TWCS+Throttle | /images/gear/marine/thrustmaster-twcs-throttle-engine-lever.jpg | YES | gearpick |
| Thrustmaster T.16000M FCS | /marine/gear/thrustmaster-t16000m-rudder | Thrustmaster+T.16000M+FCS | /images/gear/marine/thrustmaster-t16000m-rudder.jpg | YES | gearpick |
| RailDriver | /marine/gear/raildriver-ship-throttle | RailDriver+Desktop+Train+Cab+Controller | /images/gear/marine/raildriver-ship-throttle.jpg | YES | gearpick |
| Leo Bodnar BU0836X | /marine/gear/leobodnar-bu0836x-diy-board | leobodnar.com (direct) | /images/gear/marine/leobodnar-bu0836x-diy-board.jpg | YES | gearpick |
| Leo Bodnar BBI-32 | /marine/gear/leobodnar-bbi-32-button-box-interface | leobodnar.com (direct) | /images/gear/marine/leobodnar-bbi-32-button-box-interface.jpg | YES | gearpick |
| Arduino Leonardo | /marine/gear/arduino-leonardo-diy-hid | Arduino+Leonardo | /images/gear/marine/arduino-leonardo-diy-hid.jpg | YES | gearpick |
| PXN CB1 | /marine/gear/pxn-cb1-button-box | PXN+CB1+Button+Box | /images/gear/marine/pxn-cb1-button-box.jpg | YES | gearpick |
| Meta Quest 3 (MarineVerse) | /marine/gear/meta-quest-3-marineverse-vr | Meta+Quest+3 | /images/gear/marine/meta-quest-3-marineverse-vr.jpg | YES | gearpick |
| Professional Ship Simulator | /marine/gear/professional-ship-simulator-context | Steam (search) | /images/gear/marine/professional-ship-simulator-context.jpg | YES | gearpick (context) |
| Logitech G29 (as helm) | /marine/gear/logitech-g29-helm | Logitech+G+G29+Driving+Force | /images/gear/marine/logitech-g29-helm.jpg | **NO — needs real photo** | text + link |
| Logitech G923 (as helm) | /marine/gear/logitech-g923-helm | Logitech+G+G923+Racing+Wheel | /images/gear/marine/logitech-g923-helm.jpg | **NO — needs real photo** | text + link |
| Saitek Pro Flight Throttle Quadrant | /marine/gear/logitech-saitek-throttle-quadrant-telegraph | Logitech+G+Saitek+Pro+Flight+Throttle+Quadrant | /images/gear/marine/logitech-saitek-throttle-quadrant-telegraph.jpg | **NO — needs real photo** | text + link |
| Leo Bodnar BU0836A (soldered) | /marine/gear/leobodnar-bu0836a-diy-board | leobodnar.com | /images/gear/marine/leobodnar-bu0836a-diy-board.jpg | **NO — needs real photo (verified X used instead)** | text mention only |

## Note on hero image
`/images/marine/marine-sim-hardware-reality.jpg` is the bespoke per-article marine BAY hero illustration (every marine article carries one at `/images/marine/<slug>.jpg`). It physically exists on disk and is verified-by-existence; it is NOT a gear product shot, so it is intentionally outside the `verified-product-images.json` manifest (which governs `/images/gear/...` product photos only).

## Unresolved / for a future pass
- **Source real marine-context photos for the two most-recommended items** (Logitech G29/G923 helm, Saitek throttle quadrant). They are the community defaults but appear text-only here because no verified image exists. This is the single biggest visual gap — sourcing them would let the helm and the "quiet hero" throttle become proper shotgrid/gearpick visuals.
- BU0836A (soldered) has no verified image; verified BU0836X (solderless) stands in for the DIY board visual. Fine as-is, but a BU0836A photo would let the Bridge Command guide reference the exact board it names.
- Confirm current Logitech G29 sale pricing (fluctuates ~$200–$330) and Quest 3 tier pricing before quoting hard numbers in future refreshes.
- Professional Ship Simulator: no fixed Steam app URL yet (search link used); update to the direct store page once it lists.
