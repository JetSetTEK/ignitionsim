# Research Pack: Stream Deck & Button Boxes for Space Sims (2026)

- **Article:** Stream Deck vs Button Box for Star Citizen & Elite Dangerous (2026): Taming 200+ Binds
- **Slug:** `space/stream-deck-button-box-space-sim`
- **Curator:** Val Chen (space)
- **Date researched:** 2026-07-02

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Stream Deck XL list price $249.99, 32 keys (8x4) | Elgato official | https://www.elgato.com/us/en/p/stream-deck-xl | 2026-07-02 | Model table, gearpick, verdict, FAQ | High | Elgato list = $249.99 |
| Stream Deck XL street ~$189.99 (Jun 23 2026) | Amazon price tracker (camelcamelcamel) | https://www.amazon.com/Elgato-Stream-Deck-XL-customizable/dp/B07RL8H55Z | 2026-07-02 | Price note "~$190 street" | Medium | Street well below list; quoted as range ~$200-250 / often ~$190 |
| Stream Deck + $179.99, 8 keys + 4 dials | Elgato official | https://www.elgato.com/us/en/p/stream-deck-plus | 2026-07-02 | Model table, FAQ | High | Corrected from prior article's ~$200 |
| Stream Deck MK.2 $149.99, 15 keys | Elgato official | https://www.elgato.com/us/en/p/stream-deck-mk2-black | 2026-07-02 | Model table, FAQ | High | |
| Stream Deck + XL $350, 36 keys + 6 dials + touch strip, new 2026 | Elgato official + Engadget | https://www.elgato.com/us/en/p/stream-deck-plus-xl ; https://www.engadget.com/computing/elgatos-stream-deck--xl-adds-a-touch-strip-and-dials-to-an-already-massive-array-of-buttons-195200129.html | 2026-07-02 | Model table, FAQ | High | Elgato "kicked off 2026" with it; pre-order $350 |
| streamdeck-elite reads status file: ~14 toggles, 4 power pips, FSD/FSS, firegroup; STATIC button type | mhwlng GitHub | https://github.com/mhwlng/streamdeck-elite | 2026-07-02 | Plugins section, verdict, sources | High | Feature counts from repo README |
| streamdeck-starcitizen imports binds from game files / actionmaps.xml; VeeLume Rust fork + ltmajor42 live-refresh fork | mhwlng + forks GitHub | https://github.com/mhwlng/streamdeck-starcitizen ; https://github.com/VeeLume/streamdeck-starcitizen ; https://github.com/ltmajor42/StarCitizen_Streamdeck_Plugin | 2026-07-02 | Plugins section, pro tip, sources | High | SC exposes less live state than Elite; more keystroke senders |
| Thrustmaster MFD Cougar Pack: 2 F-16 bezel panels, 20 buttons + 4 switches each = 48, backlit, no software | Thrustmaster official | https://www.thrustmaster.com/products/mfd-cougar-pack/ | 2026-07-02 | Physical-box section, gearpick, sources | High | Not screens — button bezels |
| MFD Cougar Pack ~$92 street (Walmart, oos) | Walmart listing (via search) | https://www.walmart.com/ip/Thrustmaster-MFD-Cougar-Pack/666774784 | 2026-07-02 | Price "~$90-110" | Medium | Prior article said ~$110; quoted as range |
| Leo Bodnar BBI-32: 32 buttons + 16 encoders, credit-card size, solderless push-in (Model 1) or solder pads (Model 2 ~£19.99) | Leo Bodnar official | https://www.leobodnar.com/products/BBI-32/ | 2026-07-02 | Physical-box section, sources | High | Buy direct; Model 1 = connectors |
| DIY Arduino Pro Micro/Leonardo button box for Star Citizen; ~24 inputs typical; Leonardo == Micro as HID joystick | Arduino forum + RSI community hub | https://forum.arduino.cc/t/building-a-button-box-for-star-citizen-space-game/1332881 | 2026-07-02 | DIY section, gearpick text, sources | Medium | Paraphrased build patterns |
| Star Citizen has 200+ (full action list far higher) bindable functions | Prior IgnitionSim articles + community consensus (getflowkits, RSI Spectrum) | https://getflowkits.com/blog/star-citizen-stream-deck/ (403 on fetch; used as corroboration only) | 2026-07-02 | Intro, verdict | Medium | "200-plus" is the conservative claim used throughout site; do not over-precision |

## Community pattern notes (paraphrased in our voice)
- Reserve one "home" key per Stream Deck page to jump back to page 1 — the most repeated setup tip; getting lost three folders deep mid-fight is the #1 complaint.
- Build pages around what you actually fly, not every possible bind, or you page more than you fly.
- Let the community plugin import your binds instead of hand-typing 200 key combos — the SC plugins read actionmaps.xml; streamdeck-elite maps Elite functions directly.
- Star Citizen's default keyboard layout leaves many useful actions unbound — you must bind the keyboard layer in-game before the box can fire them.
- Simpit builders commonly run both a Stream Deck (reactive systems layer) and a physical panel (switches they like to flip).

## Credible warnings / caveats
- A button box sends KEYSTROKES only — every mapped action needs a keyboard bind in-game first. True for Stream Deck, Leo Bodnar wired box, and DIY Arduino alike.
- Desk footprint: a Stream Deck XL is not small and a physical panel is bigger; on a HOSAS rig it competes with stick/mount space. Mock up the layout first.
- Stream Deck XL retail price swings well below Elgato list ($249.99 list vs ~$190 street) — quote as a range and tell readers to check current price.
- The MFD Cougar name is misleading: button bezels, not displays. It has no screen and no labels of its own.
- SC exposes less live game state than Elite, so more SC buttons are plain keystroke senders even with the plugin.

## Products discussed
| Product | Gear page | Amazon (search) / official | Local image | Verified? |
| --- | --- | --- | --- | --- |
| Elgato Stream Deck XL | /space/gear/elgato-stream-deck-xl | Elgato+Stream+Deck+XL | /images/gear/space/elgato-stream-deck-xl.jpg | YES |
| Thrustmaster MFD Cougar Pack | /space/gear/thrustmaster-mfd-cougar-pack | Thrustmaster+MFD+Cougar+Pack | /images/gear/space/thrustmaster-mfd-cougar-pack.jpg | YES |
| Elgato Stream Deck + | (no gear page) | https://www.elgato.com/us/en/p/stream-deck-plus | — | text-only (referenced) |
| Elgato Stream Deck MK.2 | (no gear page) | https://www.elgato.com/us/en/p/stream-deck-mk2-black | — | text-only (referenced) |
| Elgato Stream Deck + XL | (no gear page) | https://www.elgato.com/us/en/p/stream-deck-plus-xl | — | text-only (referenced) |
| Leo Bodnar BBI-32 interface | (no gear page) | https://www.leobodnar.com/products/BBI-32/ + Leo+Bodnar+BBI-32 | — | **NO — text-only, official link, needs real photo** |
| DIY Arduino Pro Micro / Leonardo build | (no gear page) | Arduino+Pro+Micro+Leonardo + forum.arduino.cc | — | **NO — text-only, official/community link, needs real photo** |

## Frontmatter / gold changes applied
- `author` Robert Pruitt -> **Val Chen** (curator match)
- `heroImage` changed from UNVERIFIED `/images/space/stream-deck-button-box-space-sim.jpg` -> VERIFIED `/images/gear/space/elgato-stream-deck-xl.jpg`
- Added `goldStatus: "refresh"` (NOT certified), `sourceReviewDate: 2026-07-02`, `updatedDate: 2026-07-02`, `revenueTier: "B"`, `contentCluster: "space"`
- `related[]` re-pointed to certified in-cluster articles: vkb-vs-virpil-vs-winwing-space-sticks-2026, hosas-vs-hotas, how-to-bind-six-axes-hosas (old `best-controls-for-elite-dangerous` and `voiceattack-hcs-setup-space-sims` are not certified, so internal links to them were removed from body/related to avoid dead links)
- 5 FAQs (up from 4), question-led
- Corrected Stream Deck + price ~$200 -> ~$180; Stream Deck XL ~$250 -> ~$200-250 (street ~$190); MFD Cougar ~$110 -> ~$90-110

## Unresolved / for Codex to re-check
- Exact current retail price of Stream Deck XL — left as range (~$200-250, often ~$190). Confirm before quoting a single number if certifying.
- No verified in-house photo for Leo Bodnar BBI-32 or DIY Arduino parts — both text-only in body. Source real photos before they can become body visuals; not a certification blocker since they are honestly kept text-only.
- Only 2 verified space images fit this topic (Stream Deck XL, MFD Cougar Pack), so the article carries 4 embedded visuals (2 in shotgrid + 2 gearpicks reuse them) rather than the >=8 aspirational target. This is an honest catalog shortfall, not a content gap — noted in the checklist. To hit 8+, verified photos of Leo Bodnar BBI-32, a DIY box, Stream Deck +, MK.2, and Stream Deck + XL would be needed.
- Internal link targets `vkb-vs-virpil-vs-winwing-space-sticks-2026`, `hosas-vs-hotas`, `how-to-bind-six-axes-hosas` — confirm `how-to-bind-six-axes-hosas` is certified before certifying this article, or that link will 404 (it is currently linked in body and related).
