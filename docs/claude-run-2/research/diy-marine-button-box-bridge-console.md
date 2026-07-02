# Research Pack: DIY Marine Button Box — Bridge Console

- **Article:** DIY Marine Button Box: Build a Bridge Console for Horn, Lights, Anchor and VHF
- **Slug:** `marine/diy-marine-button-box-bridge-console`
- **Curator:** Gus Calder (marine)
- **Revenue tier:** B
- **Date researched:** 2026-07-02

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| BU0836A £33.00; 8 analog axes, 32 button / 16 encoder inputs, no drivers, USB-B + 0.1" pin headers | Leo Bodnar official product page | https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=204 | 2026-07-02 | Brains table, gearpick/text, FAQ, Sources | High | Price is GBP; ~$42 USD before UK shipping |
| BU0836X £59.99; solderless push-in connectors; same 8 axes / 32 buttons core | Leo Bodnar official product page | https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=180 | 2026-07-02 | Brains table, BU0836X gearpick, buy order | High | The verified-photo board; solderless sibling of BU0836A |
| BBI-32 digital-only, 32 inputs / 16 encoders, chainable to 132, solderless, no drivers, ~$53 | marine-extra.json (site product DB) + Leo Bodnar catalog | https://www.leobodnar.com/shop/index.php?main_page=index&cPath=94 | 2026-07-02 | Solderless-panel section, gearpick | Medium | Price ~$53 from site DB (GBP 40.20); catalog page confirms product family |
| Arduino Pro Micro / ATmega32u4 native USB HID; ArduinoJoystickLibrary supports Leonardo/Micro/32u4 clones; up to 32 buttons; LGPL-3.0; 2.4k stars | MHeironimus ArduinoJoystickLibrary (GitHub) | https://github.com/MHeironimus/ArduinoJoystickLibrary | 2026-07-02 | Brains section, value-king gearpick, Sources | High | Library is open source; boards read as real HID joystick |
| Pro Micro clones cost under $5 (common) | Amazon / Addicore / Micro Center clone listings | https://www.amazon.com/s?k=Arduino+Pro+Micro+ATmega32u4&tag=ignitionsim-20 | 2026-07-02 | Price ($4–$8), brains table | High | Range $4–$8 is conservative; many 3-packs under $15 |
| Pro Micro button-box firmware example (button pin array, order) | BrunoBBS ArduinoJoystickFirmware (GitHub) | https://github.com/BrunoBBS/ArduinoJoystickFirmware | 2026-07-02 | Sources shelf | Medium | Reference firmware for 32u4 button boxes |
| Bridge Command DIY: BU0836 + three ~10k LINEAR pots (2 throttles + wheel) + optional horn push-button; string-friction trick for throttle drag | Bridge Command official DIY doc | https://www.bridgecommand.co.uk/Doc/makethrottle.php | 2026-07-02 | Why-build, brains, buy order, Sources | High | Correct live URL is /Doc/makethrottle.php (old wiki URL 404s) |
| PXN CB1: 19 controls / 9 types, up to 30 programmable functions, driver-free USB-C, RGB, ~540g ABS, desk/VESA; ~$99.99 street (MSRP $129.99) | PXN official + Amazon/Best Buy listings | https://us.e-pxn.com/products/pxn-cb1-racing-button-box-for-american-truck-simulator-farm-simulation | 2026-07-02 | Pro-tip callout, buy order, PXN gearpick (in reference), FAQ | High | Price higher than site DB's ~$80 — flagged "check current" in body |
| Professional Ship Simulator (ex-Nautic XP): fully interactive cockpit, 100+ mappable buttons, rudder deadzone for HOTAS/controller; Aerosoft + SWE Systems reveal Apr 2026; Steam EA 2026 | Steam store page (app 3636930) + reveal coverage | https://store.steampowered.com/app/3636930/Professional_Ship_Simulator/ | 2026-07-02 | "Where it pays off" section + gearpick, Sources | Medium | Live store page reads EA "finished in mid of 2027"; old "9 axes / 50+ buttons" figure NOT re-confirmed — softened to "100+ buttons" + check-current |
| Button-box wiring: row-column matrix, diode-per-button for n-key rollover, encoder CLK/DT/SW pins | Arduino Forum + SimHub + Instructables DIY guides | https://forum.arduino.cc/t/wiring-diagram-for-sim-racing-button-box/1001187 | 2026-07-02 | Build step 4–5, switch-type trap | High | Paraphrased community wiring pattern, not quoted |

## Community pattern notes (paraphrased in our voice)

- **Test the harness in the Windows "USB Game Controllers" panel BEFORE closing the enclosure.** The most-repeated DIY-button-box regret across sim-racing forums: everything gets buttoned up, then a cold solder joint or a swapped encoder pin forces a full teardown. Verify at the OS level first, map in-sim last. (Used as the `callout forum` block.)
- **Latching toggles read as press-and-hold, not a single tap.** Universal first-build gotcha. Fix in the Arduino sketch (detect state change → fire one press) or, on a no-code board, use momentary switches or glue software (JoyToKey/vJoy). Decide this BEFORE ordering switches because it changes the parts list.
- **String-friction trick** (Bridge Command): wrap string around the pot shaft and anchor it under light tension so throttle levers hold position. Relevant to a combined helm+button-box build, not the pure button box — referenced lightly.

## Credible warnings / caveats

- **Latching-switch trap** — biggest silent failure for first-timers; drives the "decide code vs no-code first" advice.
- **No-code boards have no analog inputs** (BBI-32 digital-only) — needs a BU0836 alongside for throttle/wheel axes if you want a combined console.
- **PXN CB1 price moved up** — site DB says ~$80, current street is ~$100 (MSRP $129.99). Flagged check-current.
- **Professional Ship Simulator specifics are shifting** — reveal coverage and the live Steam page disagree on the EA window (2026 vs "mid of 2027") and the exact axis count; softened all hard specs to "100+ buttons" + check-current.
- **Leo Bodnar boards ship from the UK** — add shipping cost and lead time; US makers can source via Ricmotech.

## Products discussed

| Product | Gear page | Amazon / official (search or link) | Local image | Verified? | Treatment |
| --- | --- | --- | --- | --- | --- |
| Arduino Leonardo / Pro Micro (ATmega32u4 HID) | /marine/gear/arduino-leonardo-diy-hid | Amazon: Arduino+Pro+Micro+ATmega32u4 | /images/gear/marine/arduino-leonardo-diy-hid.jpg | YES | Verified gearpick (value king) |
| Leo Bodnar BU0836X (solderless) | /marine/gear/leobodnar-bu0836x-diy-board | leobodnar.com (products_id=180) | /images/gear/marine/leobodnar-bu0836x-diy-board.jpg | YES | Verified gearpick |
| Leo Bodnar BBI-32 button box interface | /marine/gear/leobodnar-bbi-32-button-box-interface | leobodnar.com (products_id=204 / cPath=94) | /images/gear/marine/leobodnar-bbi-32-button-box-interface.jpg | YES | Verified gearpick + HERO image |
| Professional Ship Simulator (ex-Nautic XP) | /marine/gear/professional-ship-simulator-context | store.steampowered.com/app/3636930 | /images/gear/marine/professional-ship-simulator-context.jpg | YES | Verified gearpick (where-it-pays-off) |
| Leo Bodnar BU0836A (soldered) | /marine/gear/leobodnar-bu0836a-diy-board | leobodnar.com (products_id=204) | /images/gear/marine/leobodnar-bu0836a-diy-board.jpg | **NO — needs real photo** | TEXT + Leo Bodnar link only |
| PXN CB1 button box | /marine/gear/pxn-cb1-button-box | us.e-pxn.com / Amazon: PXN+CB1+Button+Box | /images/gear/marine/pxn-cb1-button-box.jpg | YES (image) | TEXT in this article (pro-tip + buy order); image exists but kept low-density — could add gearpick |

## Unresolved / for Codex to re-check

- **BU0836A image is UNVERIFIED** (`/images/gear/marine/leobodnar-bu0836a-diy-board.jpg`). The classic soldered board is the article's cheapest no-code recommendation but appears text-only. Source a real product photo to add it as a gearpick.
- **PXN CB1 current price** — site DB ~$80 vs current street ~$99.99 (MSRP $129.99). Reconcile the marine-extra.json price and remove the check-current hedge once confirmed.
- **Professional Ship Simulator EA window + axis count** — Steam page says "mid of 2027," reveal coverage said 2026 and did not restate "9 axes / 50+ buttons." Confirm the final axis count and EA date, then tighten the "where it pays off" section.
- **Infographics needed (Codex):** (1) a switch-type decision matrix (momentary vs latching vs encoder → marine function), (2) a labeled bridge-panel layout showing the 16/6/2 first-build, (3) a code-vs-no-code decision tree. None of these are product photos — flag as editorial graphics.
- **Optional:** add the verified PXN CB1 photo as a gearpick if we want one off-the-shelf product card without over-densifying a how-to.
