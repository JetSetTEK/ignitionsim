# Research Pack: Professional Ship Simulator 2026 Hardware Setup

- **Article:** Professional Ship Simulator 2026 Hardware Setup: Dual Throttles, Conning Stick & Generic Boards
- **Slug:** `marine/professional-ship-simulator-2026-hardware-setup`
- **Curator:** Gus Calder (marine)
- **Date researched:** 2026-07-02

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| PSS Early Access 2026, completion targeted mid-2027; dev SWE Systems, pub Aerosoft; radar w/ AIS/CPA, sonar, radio; modding NOT at launch; price unchanged through EA; 9 vessels | Steam (official) | https://store.steampowered.com/app/3636930/Professional_Ship_Simulator/ | 2026-07-02 | Intro, input section, setup-tax, verdict, FAQ, Sources | High | Steam page does NOT state a mappable-button or axis count; controller-support tag present |
| "over 100 mappable buttons in the fully-interactive cockpit, along with several control axes"; previously Nautic XP; EA 2026; modding on roadmap (harbors/ships/scenarios); vessel list | Simulation Daily (coverage of reveal) | https://simulationdaily.com/news/professional-ship-simulator-announced/ | 2026-07-02 | Input section (100+ figure), setup-tax, Sources | High | Retrieved directly; this is the "100+ buttons" source |
| "over 50 buttons, 9 axes, and a triple-layer keyboard layout"; "fully clickable cockpit"; "every switch, lever, and control is now interactive"; "Choose your preferred controller setup for every ship – from joystick to gamepad"; NMEA + GPX support | Nautic XP official site (legacy name) | https://nauticxp.com/ | 2026-07-02 | Input section (50/9 figure), NMEA/GPX, controller-per-ship, Sources | High | Same game, old name; the 50-vs-100 button + 9-axis discrepancy is surfaced honestly in the body |
| NAUTIS Home = subscription training sim; from ~€5.95/mo (€29.75/6-mo EA price); 20+ ships, 15+ environments; keyboard/mouse + USB controls; dual-screen radar/charts/conning; VSTEP LXP courseware | VSTEP (official) | https://vstepsimulation.com/nautis-home/ | 2026-07-02 | "PSS or NAUTIS Home?" section, FAQ, verdict, Sources | High | Real competing product; anchors the article's angle |
| TWCS: 80 mm slide-rail, 16-bit throttle axis, extra rotary/toggle | Thrustmaster (official) + internal catalog | https://www.thrustmaster.com/products/twcs-throttle/ | 2026-07-02 | Rig 2, gearpick, buy order | High | Specs cross-checked against src/data/products/marine.json |
| T.16000M: H.E.A.R.T Hall-effect, 4 axes incl. twist rudder, 16 buttons | Thrustmaster (official) + retail search | https://www.thrustmaster.com/products/t-16000m-fcs/ | 2026-07-02 | Rig 3, gearpick, buy order | High | Standalone stick ~$75-90; the $169.99 figure seen in search is the HOTAS *bundle* (stick+throttle), not the bare stick — used range, marked check-current |
| Saitek Pro Flight Throttle Quadrant: 3 axis levers + 3 two-way rockers | Amazon listing (title metadata) + internal catalog | https://www.amazon.com/Logitech-Pro-Flight-Throttle-Quadrant/dp/B01M00UHE3 | 2026-07-02 | Function map, buy order (text-only) | Medium | Live price not rendered in fetched HTML; kept as ~$50-70 range, marked check-current. NO verified marine image → text + Amazon link only |
| Bridge Command free/open-source; official DIY wheel+throttle build guide (BU0836 + 10k pots) | Bridge Command (official) | https://www.bridgecommand.co.uk/ | 2026-07-02 | Generic-board section, gearpick | High | Verified image exists; used as free play-today + DIY blueprint |
| Community caution: treat pre-launch input specs as provisional; assign axes last | Steam hub + maritime-sim forums (paraphrased pattern) | https://store.steampowered.com/app/3636930/Professional_Ship_Simulator/ | 2026-07-02 | Forum callout, setup-tax | Medium | Paraphrased in our voice, no quotes |

## Community pattern notes (paraphrased in our voice)

- Recurring skepticism under PSS hype posts: an advertised axis count is a number, not a feel — simmers burned by past "Simulator" titles that shipped without real analog support want the input model verified, not celebrated.
- The most useful early-tester discipline: hold off on ship-specific bindings until the input menu stops changing between hotfixes; buy general-purpose gear (quadrant, stick, button box) that works across every sim, and assign axes last.
- The clickable cockpit reframes the whole purchase: builders realize they want an engine quadrant and a button box far more than a wheel, because a mouse already runs steering acceptably.

## Credible warnings / caveats

- **Button/axis count is unsettled.** Two official sources disagree: reveal coverage says "over 100 buttons"; the legacy Nautic XP site says "over 50 buttons, 9 axes." Do not size hardware to a number that may move. Flagged in body as check-current.
- **"Rudder deadzone for HOTAS rigs" is UNVERIFIED.** The prior version of this article asserted a rudder-deadzone option (and attributed it to "Aerosoft hotfix notes"). I could not confirm it on the current Steam or Nautic XP pages. The rewrite explicitly does NOT treat it as a shipped feature — it's flagged as unverified/check-current. **This corrects a likely-fabricated claim in the old draft.**
- **Early Access is a moving target.** EA opens 2026, completion targeted mid-2027; per-ship bindings can shift between updates.
- **Modding is roadmap, not launch** (custom harbors/ships/scenarios come after EA begins).
- **Retail prices fluctuate.** All hardware prices are approximate 2026 street ranges, marked check-current.

## Products discussed

| Product | Gear page | Amazon (search) / official | Local image | Verified? |
| --- | --- | --- | --- | --- |
| Professional Ship Simulator (context) | /marine/gear/professional-ship-simulator-context | https://store.steampowered.com/app/3636930/ | /images/gear/marine/professional-ship-simulator-context.jpg | YES (also hero) |
| Thrustmaster TWCS Throttle | /marine/gear/thrustmaster-twcs-throttle-engine-lever | Thrustmaster+TWCS+Throttle | /images/gear/marine/thrustmaster-twcs-throttle-engine-lever.jpg | YES |
| Thrustmaster T.16000M FCS | /marine/gear/thrustmaster-t16000m-rudder | Thrustmaster+T.16000M+FCS | /images/gear/marine/thrustmaster-t16000m-rudder.jpg | YES |
| PXN CB1 Button Box | /marine/gear/pxn-cb1-button-box | PXN+CB1+button+box | /images/gear/marine/pxn-cb1-button-box.jpg | YES |
| Leo Bodnar BU0836X | /marine/gear/leobodnar-bu0836x-diy-board | leobodnar.com (official) | /images/gear/marine/leobodnar-bu0836x-diy-board.jpg | YES |
| Leo Bodnar BBI-32 | /marine/gear/leobodnar-bbi-32-button-box-interface | leobodnar.com (official) | /images/gear/marine/leobodnar-bbi-32-button-box-interface.jpg | YES |
| Arduino Leonardo | /marine/gear/arduino-leonardo-diy-hid | Arduino+Leonardo | /images/gear/marine/arduino-leonardo-diy-hid.jpg | YES |
| RailDriver (as ship throttle) | /marine/gear/raildriver-ship-throttle | RailDriver+Desktop+Train+Cab+Controller | /images/gear/marine/raildriver-ship-throttle.jpg | YES |
| Bridge Command (free sim) | /marine/gear/bridge-command-free-sim | bridgecommand.co.uk (official) | /images/gear/marine/bridge-command-free-sim.jpg | YES |
| Saitek Pro Flight Throttle Quadrant | /marine/gear/logitech-saitek-throttle-quadrant-telegraph | Logitech+G+Saitek+Pro+Flight+Throttle+Quadrant | /images/gear/marine/logitech-saitek-throttle-quadrant-telegraph.jpg | **NO — not in verified set → text + Amazon link only** |
| Logitech G29 (as helm) | /marine/gear/logitech-g29-helm | Logitech+G+G29+Driving+Force | /images/gear/marine/logitech-g29-helm.jpg | **NO — not in verified set → text + Amazon link only** |
| NAUTIS Home (VSTEP) | — | vstepsimulation.com/nautis-home | — (no local image) | **NO — official-link only, subscription sim** |

## Unresolved / for Codex to re-check

- **Resolve the PSS button/axis discrepancy** once the Early Access input menu ships: is it 50 or 100+ mappable buttons, and does the shipped title actually expose 9 axes? Body currently presents both figures as check-current.
- **Confirm or kill the "rudder deadzone for HOTAS/controller" feature.** Not verifiable on current official pages (2026-07-02). If it ships, add it back with a real source; if not, the current cautious framing stands.
- **Live retail prices** for Saitek quadrant, TWCS, T.16000M (standalone vs HOTAS bundle), PXN CB1 — fetched pages did not render live prices; all left as check-current ranges.
- **Sourced photos needed** before certification / before either can become a body visual: Saitek Pro Flight Throttle Quadrant (marine context), Logitech G29 (marine context). Both are text-only in the body now.
- **NAUTIS Home** has no local product image; it's official-link only. If we want a shotgrid/gearpick for it, source and verify a real image first.
- Left as `refresh` (NOT certified) per run rules.
