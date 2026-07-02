# Research Pack: Bass Shakers & Tactile Feedback (SimHub) 2026

- **Article:** Bass Shakers & Tactile Feedback 2026: The SimHub Setup Guide
- **Slug:** `racing/bass-shakers-tactile-feedback-simhub-2026`
- **Curator:** Duke Alvarez (racing)
- **Angle:** How-to + gear guide. Naturally low verified-product density — one verified tactile product (ButtKicker Gamer PRO). Leaned on wiring/setup tables, an amp/transducer explainer, and tip/forum callouts rather than forcing product cards.
- **Date researched:** 2026-07-02

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Transducer = magnet + coil (speaker architecture) moving a piston, not air; ButtKicker driver = 1 lb piston | ButtKicker official + SimRacingCockpit | https://thebuttkicker.com/products/buttkicker-gamer-pro ; https://simracingcockpit.gg/buttkicker-sim-racing-tactile-feedback/ | 2026-07-02 | "What a transducer is" | High | |
| Needs dedicated Class-D low-freq amp; hi-fi amp burns out under constant LF load; PC audio can't drive it | SimRacingCockpit | https://simracingcockpit.gg/buttkicker-sim-racing-tactile-feedback/ | 2026-07-02 | "Amplifier you can't skip", warnings | High | |
| ~50W RMS/ch minimum at shaker impedance; 4 or 8Ω; pass down to ~20Hz | Sim Coaches | https://simcoaches.com/blogs/.../bass-shaker-setup-guide-for-sim-racing-under-seat-transducer-effects | 2026-07-02 | Amp numbers, warnings | High | |
| ButtKicker Gamer PRO amp = 150W RMS @ 2Ω; digital display + wireless remote + USB; clamp ~1–1.77 in; works via headphones; $349.95 official | ButtKicker official | https://thebuttkicker.com/products/buttkicker-gamer-pro | 2026-07-02 | Gearpick, amp table, warnings | High | Official price $349.95; racing.json lists ~$200 street — used ~$200 as site spec-card figure |
| Dayton BST-1 ~$30, 25W continuous; BST-300EX ~$80/300W; Lepai LP-2020A+ ~$25; Dayton DTA-120 ~$50; Clark Synthesis / ButtKicker LFE higher-end | Sim Coaches + SimRacingCockpit | (same as above) | 2026-07-02 | Stack table, "bigger transducers exist" | Medium | DIY prices are documented ranges, not IgnitionSim pricing — text-only, Amazon search links |
| SimHub ShakeIt effects: wheelspin/slip, wheel lock/ABS, road texture, kerbs/bumps, gear shift, engine RPM | SimRacingCockpit + Pagnian | https://pagnianimports.com.au/blogs/news/simhub-guide-buttkicker-setup | 2026-07-02 | SimHub section, wiring table | High | |
| Two separate audio outputs required (game audio + dedicated shaker output); select device in ShakeIt → Sound Output; Mono for single shaker; Test Now; launch via Games tab | Pagnian Imports | https://pagnianimports.com.au/blogs/news/simhub-guide-buttkicker-setup | 2026-07-02 | Wiring table, FAQ | High | |
| Enable 3–5 effects, not all; start gear shift / RPM low / one road effect / wheel lock-slip | Pagnian + Boosted Media | https://boostedmedia.net/technology/buttkicker-gamer-2-unboxing-installation-software-setup-and-review/ | 2026-07-02 | SimHub section, tip callout | High | |
| HaptiConnect = ButtKicker native defaults-first alternative to SimHub for newer units | ButtKicker + SimRacingCockpit | https://thebuttkicker.com/products/buttkicker-gamer-pro | 2026-07-02 | SimHub section, verdict, FAQ | Medium | |
| Mount through rubber/Sorbothane/thick-washer; never bolt directly to seat-rail metal; under-seat first, then pedals, then frame/4-corner | SimRacingCockpit + Sim Coaches | (same) | 2026-07-02 | Mounting section, warnings | High | |
| ROI claim: well-mounted ~$200 shaker beats a badly-mounted motion platform many× the price | SimRacingCockpit | https://simracingcockpit.gg/buttkicker-sim-racing-tactile-feedback/ | 2026-07-02 | Verdict, "what a transducer is" | Medium | Paraphrased community/editorial framing |

## Community pattern notes (paraphrased in our voice)
- "The upgrade I should have bought before a stronger wheelbase" — recurring tactile-thread line; wheelspin+lockup tactile helps car control more than another few Nm of torque.
- Nobody turns tactile back off once it's dialed.
- The #1 disappointment is underpowering a big shaker on a cheap amp, then concluding tactile "doesn't do much."

## Credible warnings / caveats
- Amp power + heat; impedance matching (read power at stated Ω); rigid mounting = rattle; wiring safety (polarity, short runs, power down to reconnect); over-tuning effects into mud.

## Products discussed
| Product | On-site? | Gear page | Amazon (search) | Local image | Verified? |
| --- | --- | --- | --- | --- | --- |
| ButtKicker Gamer PRO | YES | /racing/gear/buttkicker-gamer-pro | ButtKicker+Gamer+PRO | /images/gear/racing/buttkicker-gamer-pro.jpg | **YES** (embedded hero + gearpick) |
| Dayton Audio BST-1 | no | — | Dayton+Audio+BST-1 | — | text-only |
| Dayton Audio DTA-120 amp | no | — | Dayton+Audio+DTA-120 | — | text-only |
| Dayton BST-300EX / ButtKicker LFE / Clark Synthesis / Nobsound / Fosi / Lepai | no | — | — | — | text-only (named, no forced card) |

## Unresolved / for Codex to re-check
- ButtKicker Gamer PRO price: official $349.95 vs racing.json ~$200 street. Article uses ~$200 to match the on-site spec card; confirm which figure to standardize on.
- No verified images exist for any DIY transducer/amp — all correctly kept text-only with Amazon search links. Would need real, license-clean product photos before any of them could become a body visual.
- Article is deliberately NOT a certification candidate: only 1 verified image is available for this topic and forcing 8 would violate the honesty rule.
