# Research Pack: HOSAS vs HOTAS for Space Sims

- **Article:** HOSAS vs HOTAS for Space Sims in 2026: Two Sticks or Stick-and-Throttle?
- **Slug:** `space/hosas-vs-hotas`
- **Curator:** Val Chen (space)
- **Date researched:** 2026-07-02

## Angle

Verdict-first, decision-by-game/player. HOSAS wins Star Citizen 6DOF combat (two analog sticks cover all six ship axes incl. lateral/vertical strafe); HOTAS stays genuinely competitive for Elite Dangerous (throttle-centric flight model) and is correct for DCS/atmospheric; Xbox is a single-licensed-stick moot point. Moderate product density — the piece leans on the axis math and the game-fit matrix, then points at a small verified hardware ladder.

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Spaceflight is 6DOF (3 rotation + 3 translation); HOTAS reaches 4 axes analog, strafe axes go to buttons | Engineering first-principles (physics of 6DOF) + community consensus | (physics) | 2026-07-02 | One-paragraph case, comparison table | High | Axis count is deterministic, not opinion |
| Star Citizen dogfighting rewards constant lateral/vertical strafe → HOSAS advantage | r/starcitizen HOSAS-convert threads | https://www.reddit.com/r/starcitizen/ | 2026-07-02 | Which-game section, verdict, forum callout | High | Paraphrased pattern, strong consensus |
| Elite Dangerous flight model favors pitch/yaw/roll + forward throttle, less constant strafe → HOTAS competitive | r/EliteDangerous HOTAS-vs-HOSAS discussions | https://www.reddit.com/r/EliteDangerous/ | 2026-07-02 | Which-game section, HOTAS-wins section, FAQ, verdict | Medium-High | This is the honest-broker balance point; Elite is the standing HOTAS exception |
| DCS/atmospheric flight → HOTAS is the correct tool | r/hotas + DCS community norm | https://www.reddit.com/r/hotas/ | 2026-07-02 | HOTAS-wins section, verdict | High | |
| Warthog has no twist axis → 2 space axes on buttons | Product data (space.json) + Thrustmaster | https://www.thrustmaster.com/products/hotas-warthog/ | 2026-07-02 | Warthog gearpick | High | Matches internal spec sheet |
| T.16000M ambidextrous (3 removable parts swap L/R), Hall-effect, ~$80 each | Product data (space.json) + Thrustmaster | https://www.thrustmaster.com/products/t-16000m-fcs/ | 2026-07-02 | HOSAS ladder, budget gearpick, FAQ | High | Canonical cheap HOSAS |
| VKB Gladiator NXT EVO Space Combat Edition ~$119-139/stick, magnetic sensors, twist, L/R hands | Product data (space.json) + VKB | https://www.vkbcontrollers.com/products/gladiator-nxt-evo-space-combat-edition-right-hand | 2026-07-02 | HOSAS ladder, boutique gearpick | High | |
| VKB Omni-Throttle ~$149 — Gladiator on OTA adapter as off-hand thrust/strafe | Product data (space.json) + VKB | https://www.vkbcontrollers.com/ | 2026-07-02 | Throttle-job section, gearpick | High | The "I want a throttle but fly HOSAS" answer |
| WinWing Ursa Minor Space ~$110-115/stick, magnetic + in-stick haptics, Space=twist variant | Product data (space.json) + WinWing | https://winwingsim.com/ | 2026-07-02 | HOSAS ladder (text-only) | Medium | NO verified photo — text-only |
| Turtle Beach VelocityOne ~$130 (~$97-99 sale), licensed Xbox stick, stiff spring | Product data (space.json) + Turtle Beach | https://www.turtlebeach.com/products/velocityone-flightstick | 2026-07-02 | Xbox line (text-only) | Medium | Space-path photo NOT verified — text-only |
| Ambidextrous-stick trap (don't buy two right-hand grips); light bases slide; 200+ binds | r/hotas build threads | https://www.reddit.com/r/hotas/ | 2026-07-02 | Three warnings, pro tip, buy order | High | The recurring new-HOSAS mistakes |

## Community pattern notes (paraphrased in our voice)
- The r/starcitizen convert arc: rough first session ("writing with your off hand"), then it clicks and they never go back. Quitters bail inside the first awkward hour.
- Elite Dangerous is the standing counter-example — its throttle-friendly model keeps HOTAS on merit, not nostalgia. Do not flatten "HOSAS always wins."
- The most repeated HOSAS shopping error is two right-hand sticks. Handedness > gimbal spec for comfort.
- Binding is the real project: six axes + fire groups + power/gear/comms is an evening of config work; a Stream Deck absorbs the overflow.

## Credible warnings / caveats
- Binding six axes across two sticks is a genuine setup project; a mistuned curve feels worse than a cheaper stick set up right.
- Off hand MUST be ambidextrous or a dedicated left grip — never two of the same handed stick.
- Two light bases slide in opposite directions under combat input; a HOSAS needs two mounts AND the horizontal desk room.

## Products discussed
| Product | Gear page | Amazon (search) | Local image | Verified? | Treatment |
| --- | --- | --- | --- | --- | --- |
| VKB Gladiator NXT EVO Space Combat Edition | /space/gear/vkb-gladiator-nxt-evo-space-combat-edition | VKB+Gladiator+NXT+EVO+Space+Combat | /images/gear/space/vkb-gladiator-nxt-evo-space-combat-edition.jpg | YES | Hero + shotgrid + gearpick (embedded) |
| VKB Gladiator NXT EVO Omni-Throttle | /space/gear/vkb-gladiator-nxt-evo-omni-throttle | VKB+Gladiator+NXT+EVO+Omni-Throttle | /images/gear/space/vkb-gladiator-nxt-evo-omni-throttle.jpg | YES | Shotgrid + gearpick (embedded) |
| Thrustmaster HOTAS Warthog | /space/gear/thrustmaster-hotas-warthog | Thrustmaster+HOTAS+Warthog | /images/gear/space/thrustmaster-hotas-warthog.jpg | YES | Shotgrid + gearpick (embedded) |
| Thrustmaster T.16000M FCS | /space/gear/thrustmaster-t16000m-fcs | Thrustmaster+T.16000M+FCS | /images/gear/space/thrustmaster-t16000m-fcs.jpg | YES | Shotgrid + gearpick (embedded) |
| Monstertech Table Mount | /space/gear/monstertech-table-mount | Monstertech+joystick+table+mount | /images/gear/space/monstertech-table-mount.jpg | YES | Gearpick (embedded) |
| VKB Gunfighter Mk.IV base | /space/gear/vkb-gunfighter-mk4-base | — | /images/gear/space/vkb-gunfighter-mk4-base.jpg | YES (verified, not embedded here) | Text link only (ladder endgame) |
| Virpil VPC WarBRD-D base | /space/gear/virpil-warbrd-d-base | — | /images/gear/space/virpil-warbrd-d-base.jpg | YES (verified, not embedded here) | Text link only (ladder endgame) |
| Elgato Stream Deck XL | /space/gear/elgato-stream-deck-xl | — | /images/gear/space/elgato-stream-deck-xl.jpg | YES (verified, not embedded here) | Text link only (bind overflow) |
| WinWing Ursa Minor Space | /space/gear/winwing-ursa-minor-space | WinWing+Ursa+Minor+Space+joystick | /images/gear/space/winwing-ursa-minor-space.jpg | **NO — needs real photo** | Text-only, official link |
| Turtle Beach VelocityOne Flightstick | /space/gear/turtle-beach-velocityone-flightstick | Turtle+Beach+VelocityOne+Flightstick | /images/gear/space/turtle-beach-velocityone-flightstick.jpg | **NO — space path not in verified manifest** | Text-only, Amazon search |

## Unresolved / for Codex to re-check
- `turtle-beach-velocityone-flightstick.jpg` under `/images/gear/space/` is NOT in verified-product-images.json (only the FLIGHT-bay `/images/gear/flight/turtle-beach-velocityone-flight-stick.jpg` is verified). Kept text-only. Source + vision-verify a space-path exact-match photo, or reuse the flight-bay verified image if it's the same product, before embedding.
- WinWing Ursa Minor Space has NO verified in-house photo (same gap as the space-sticks sibling). Text-only. Source + vision-verify before embedding or promoting to a gearpick.
- Confirm current VKB Space Combat Edition, VKB Omni-Throttle, WinWing Ursa Minor Space, and Turtle Beach street prices before flipping goldStatus to certified (left as approximate ranges given boutique wave pricing).
