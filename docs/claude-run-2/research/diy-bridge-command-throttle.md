# Research Pack: Build Your Own Ship's Wheel and Throttle for Bridge Command

- **Article:** Build Your Own Ship's Wheel and Throttle for Bridge Command (Under $60)
- **Slug:** `marine/diy-bridge-command-throttle`
- **Curator:** Gus Calder (marine)
- **Date researched:** 2026-07-02

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Bridge Command DIY build uses a BU0836 board + 3× 10k **linear** pots (2 throttles + 1 wheel), exact resistance not critical | Bridge Command official | https://www.bridgecommand.co.uk/Doc/makethrottle.php | 2026-07-02 | BOM, build steps, verdict, FAQ | High | Guide is explicit: linear not log, ~10k |
| Horn = push-to-make switch between a ground pin and the column-1 button pin (6th from right at top; ground two pins left) | Bridge Command official | https://www.bridgecommand.co.uk/Doc/makethrottle.php | 2026-07-02 | Build step 3, BOM | High | Wiring quoted from guide's own layout description |
| String-friction trick: wrap string round the pot shaft and anchor it rigidly so the lever holds position | Bridge Command official | https://www.bridgecommand.co.uk/Doc/makethrottle.php | 2026-07-02 | Friction section, forum callout, FAQ, verdict | High | This is the documented, canonical fix — paraphrased, intent preserved |
| Axis correction = swap connector wiring / flip a connector if inverted; enable joystick support to map | Bridge Command official | https://www.bridgecommand.co.uk/Doc/makethrottle.php ; https://www.bridgecommand.co.uk/Doc/joystick.php | 2026-07-02 | Build steps 5 & 7 | High | |
| Bridge Command is free, open source, ship-handling focused | Bridge Command | https://www.bridgecommand.co.uk/ | 2026-07-02 | Verdict-first, "why Bridge Command," FAQ | High | |
| BU0836A: £33.00, 8 analog axes, 12-bit (4096), 32 buttons via matrix, no drivers (Win/Mac), USB-B, pin headers (**soldering required**) | Leo Bodnar official | https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=204 | 2026-07-02 | BOM, decision tree, FAQ, sources | High | £33 as listed; USD ~$42 is an approximation (flagged check-current) |
| BU0836X: £59.99, same 8 axes / 12-bit / 32 buttons, **push-in solderless** terminals, no soldering | Leo Bodnar official | https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=180 | 2026-07-02 | Gearpick, decision tree, FAQ, sources | High | £59.99 as listed; USD ~$77 approximation |
| Arduino Leonardo = ATmega32u4, native USB HID, 20 digital I/O (7 PWM), 12 analog inputs, 16 MHz | Arduino / Microchip (via search) | https://www.arduino.cc/ ; https://www.microchip.com/en-us/product/atmega32u4 | 2026-07-02 | Arduino section, gearpick, decision tree | High | Spec confirmed; **price not hard-verified — left as ~$25 check-current** |
| ArduinoJoystickLibrary: open source (LGPL-3.0), makes Leonardo/Micro/Pro Micro/ATmega32u4 clones present as HID joystick with axes + up to 32 buttons | MHeironimus GitHub | https://github.com/MHeironimus/ArduinoJoystickLibrary | 2026-07-02 | Arduino section, sources | High | Latest release 2.1.1 (Jul 2022); still the standard lib |
| Ricmotech is a US reseller of the Leo Bodnar board | Search (Ricmotech listing) | https://www.ricmotech.com/leo-bodnar-12-bit-joystick-controller-board | 2026-07-02 | BOM note, warnings callout | Medium | Page returned 403 to fetch; existence confirmed via search result title. Not price-quoted. |

## Community pattern notes (paraphrased in our voice)

- The universal DIY-helm first-timer story: someone posts a clip of a throttle lever drifting back to idle and asks what they wired wrong — the answer is always friction, not wiring. Paraphrased into the "From the builders" callout; no direct quotes.
- Common refinement over bare string: an O-ring or felt washer under the knob achieves the same drag with a tidier appearance. Presented as builder wisdom, not attributed to a single post.
- Linear-vs-log pot confusion ("half ahead lands nowhere near center") is a recurring beginner mistake; folded into the Pro-tip callout and an FAQ.

## Credible warnings / caveats

- Leo Bodnar boards ship from the UK — budget shipping cost + lead time (US buyers can shortcut via Ricmotech). Surfaced in the "Before you build" warn callout.
- The friction step is not optional; skipping it leaves throttles that drift. Emphasized repeatedly.
- Must use LINEAR (B-code) pots; a logarithmic (A-code) pot ruins center-of-travel mapping.
- Arduino path adds coding/calibration effort vs. the no-code BU0836.
- This is a real fabrication project, not plug-and-play; explicitly framed in "What this build is not."

## Products discussed

| Product | Gear page | Buy link | Local image | Verified? |
| --- | --- | --- | --- | --- |
| Leo Bodnar BU0836X (solderless) | /marine/gear/leobodnar-bu0836x-diy-board | leobodnar.com (product 180) | /images/gear/marine/leobodnar-bu0836x-diy-board.jpg | YES — embedded (hero + gearpick) |
| Arduino Leonardo (ATmega32u4 HID) | /marine/gear/arduino-leonardo-diy-hid | https://www.amazon.com/s?k=Arduino+Leonardo&tag=ignitionsim-20 | /images/gear/marine/arduino-leonardo-diy-hid.jpg | YES — embedded (gearpick) |
| Bridge Command (free sim, context) | — | https://www.bridgecommand.co.uk/ | /images/gear/marine/bridge-command-free-sim.jpg | YES — embedded (context figure) |
| Leo Bodnar BU0836A (soldered, the guide's named board) | /marine/gear/leobodnar-bu0836a-diy-board | leobodnar.com (product 204) / https://www.amazon.com/s?k=Leo+Bodnar+BU0836A&tag=ignitionsim-20 | /images/gear/marine/leobodnar-bu0836a-diy-board.jpg | **NO — text + link only; needs verified photo** |

## Unresolved / for Codex to re-check

- **BU0836A product photo is UNVERIFIED** — this is the board the official guide names, yet it appears in the article as text + links only. Sourcing a verified photo would let it become a gearpick/shotgrid and strengthen the piece. This is the single biggest visual gap and a certification blocker if the piece must picture its primary recommended board.
- **Arduino Leonardo 2026 street price** not hard-verified (search returned board listings but no clean current price). Body says "~$25 (check current)"; confirm before certifying.
- **BU0836A / BU0836X USD conversions** (~$42 / ~$77) are GBP-based approximations; confirm the live USD (Leo Bodnar direct vs. Ricmotech) before certifying.
- **No product cards forced.** This is a low-density how-to; the piece leans on the BOM table, the wiring steps, a decision tree, and tip/forum/warn callouts rather than a product grid — which is correct for the format. Only 3 genuinely relevant verified images embed; do not pad.
- **Infographics would lift this piece** more than product photos: a labeled pot-wiring diagram and a board-choice decision-tree graphic are flagged in the image manifest for Codex.
- **Page does not publish until certified.** `[bay]/[slug].astro` only builds articles where `goldStatus === 'certified'` (via `isCertifiedArticle`). Left as `refresh` per run rules, so the route is intentionally absent until Rob/Codex certifies. Build compiles clean.
