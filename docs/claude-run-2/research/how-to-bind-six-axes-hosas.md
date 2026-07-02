# Research Pack: How to Bind All Six Axes on a HOSAS

- **Article:** How to Bind All Six Axes on a HOSAS (Star Citizen & Elite Dangerous, 2026)
- **Slug:** `space/how-to-bind-six-axes-hosas`
- **Curator:** Val Chen (space)
- **Date researched:** 2026-07-02

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Standard HOSAS layout: right stick = pitch/roll/yaw(twist), left stick = thrusters; disable right twist to avoid accidental yaw | r/starcitizen + r/hotas + community tutorials (paraphrased) | https://www.reddit.com/r/starcitizen/ ; https://www.reddit.com/r/hotas/ | 2026-07-02 | Mental model, axis map, twist section, decision tree | High | Long-standing community convention; corroborated by both Elite and SC guides |
| Elite auto-detects two sticks as separate devices; bind each axis in Options > Controls | Elite Dangerous Steam dual-joystick discussion | https://steamcommunity.com/app/359320/discussions/0/2144217924396895339/ | 2026-07-02 | Elite setup section | High | Paraphrased |
| T.16000M base hand-switch must be set to opposite positions or Windows reads both sticks as one device (double-bind fix) | Elite Dangerous Steam dual-joystick discussion | https://steamcommunity.com/app/359320/discussions/0/2144217924396895339/ | 2026-07-02 | Forum callout, setup-tax | High | Concrete, verifiable community fix |
| Avoid twist-throttle in Elite; prefer flight-thrust mode | Elite Dangerous Steam dual-joystick discussion | https://steamcommunity.com/app/359320/discussions/0/2144217924396895339/ | 2026-07-02 | Elite setup step 3 | Medium | Paraphrased preference, not universal |
| Self-centering off-hand throttle springs forward thrust to zero — cruise problem; solutions: non-centering axis, detented grip, kept throttle | Frontier forums HOSAS-throttle thread | https://forums.frontier.co.uk/threads/dual-stick-hosas-with-pedals-how-do-you-control-your-throttle.401144/ | 2026-07-02 | FAQ, buy order step 3, Omni-Throttle gearpick | High | Paraphrased |
| Star Citizen Master Modes (SCM vs NAV) introduced Alpha 3.23; SCM = capped speed + weapons/shields for combat, NAV = faster traversal, weapons/shields off, quantum spool | citizen-history.com Master Modes explainer | https://citizen-history.com/article/starcitizen-mastermodes-explained | 2026-07-02 | SC Master Modes pro-tip, FAQ | High | Cross-checked against Star Citizen Wiki search snippet |
| SC advanced keybinding menu; Flight - Movement category; Strafe Longitudinal/Lateral/Vertical binds; SC has hundreds of bindable functions | Star Citizen Wiki Guide:Controls (403 on direct fetch; used search snippet) + community | https://starcitizen.tools/Guide:Controls | 2026-07-02 | SC setup steps | Medium | Direct fetch 403'd; relied on search snippet + community corroboration. Kept count vague ("hundreds") rather than a hard number |
| Build response curves in stick software (survives patches); VKBDevCfg response curve in Logical Axes panel, deadzone under DzLo | VKB-SIM forum threads on curves/deadzones | http://forum.vkb-sim.pro/viewtopic.php?t=4377 | 2026-07-02 | Curve section, pro-tip | High | Paraphrased; specific panel names verified |
| EDRefCard generates printable binds reference from .binds file; live at edrefcard.info; open-source (MIT, Python3) | EDRefCard site + GitHub | https://edrefcard.info/ ; https://github.com/richardbuckle/EDRefCard | 2026-07-02 | Elite setup step, Sources | High | Live URL confirmed via search |
| Virpil Constellation ALPHA has a lockable contactless twist axis (disable on aiming hand in hardware) | In-house product data (space.json) — matches Virpil official specs | (internal) src/data/products/space.json | 2026-07-02 | Twist section, decision tree, photo note | High | Grip has NO verified in-house image — kept text-only |
| T.16000M ~$80/stick (~$160 pair); VKB Gladiator SCE ~$119-139/stick; VKB Omni-Throttle ~$149 | In-house product data + sibling-article price checks | (internal) src/data/products/space.json | 2026-07-02 | Buy order, gearpicks | Medium | Street prices swing; quoted as approximate ("~") per house rule |

## Community pattern notes (paraphrased in our voice)
- "Right rotates, left translates" is the near-universal HOSAS convention; the argument is almost never about the layout and almost always about the twist axis.
- The disable-twist-on-the-aiming-stick habit exists because wrist twist during hard pitch/roll leaks into yaw as unfelt reticle drift. Pilots who aim with the stick swear by it; mouse-aim pilots care less.
- The #1 "my HOSAS is broken" thread is a buried double-bind — a leftover default or (on T.16000M) two sticks enumerating as one device because the base hand-switches weren't set to opposite hands.
- Recurring Elite advice: don't bind throttle to twist; use flight-thrust mode so the throttle hand doesn't fight the strafe hand.
- Recurring throttle-in-HOSAS pattern: a self-centering left stick is fine for combat but tiring for cruise/supercruise; the fixes are a non-centering axis, a detented/omni off-hand grip, or keeping a real throttle.

## Credible warnings / caveats
- Both games let two inputs drive one ship axis — clear every default in the category before assigning your own.
- Ambidextrous sticks (T.16000M): set the base hand-switch to opposite positions or every bind lands on both sticks.
- Boutique sticks: confirm you bought one LEFT and one RIGHT, not two right-hand grips (the most common HOSAS shopping mistake).
- Star Citizen per-axis sensitivity can be shuffled across patches — build curves in the stick software, not the game, so they persist.
- Star Citizen Master Modes changed flight tempo (SCM vs NAV, 3.23+); the same six axes bind once but a good SCM/NAV toggle bind is essential.

## Products discussed
| Product | Gear page | Amazon (search) | Local image | Verified? |
| --- | --- | --- | --- | --- |
| Thrustmaster T.16000M FCS | /space/gear/thrustmaster-t16000m-fcs | Thrustmaster+T.16000M+FCS | /images/gear/space/thrustmaster-t16000m-fcs.jpg | YES (embedded) |
| VKB Gladiator NXT EVO Space Combat Edition | /space/gear/vkb-gladiator-nxt-evo-space-combat-edition | VKB+Gladiator+NXT+EVO+Space+Combat | /images/gear/space/vkb-gladiator-nxt-evo-space-combat-edition.jpg | YES (hero + shotgrid) |
| VKB Gladiator NXT EVO Omni-Throttle | /space/gear/vkb-gladiator-nxt-evo-omni-throttle | VKB+Gladiator+NXT+EVO+Omni-Throttle | /images/gear/space/vkb-gladiator-nxt-evo-omni-throttle.jpg | YES (embedded) |
| Elgato Stream Deck XL | /space/gear/elgato-stream-deck-xl | Elgato+Stream+Deck+XL | /images/gear/space/elgato-stream-deck-xl.jpg | YES (verified) — referenced text-only in body (not forced as a card; low product density) |
| Virpil VPC Constellation ALPHA grip | /space/gear/virpil-constellation-alpha-grip (data id present) | Virpil+Constellation+ALPHA | /images/gear/space/virpil-constellation-alpha-grip.jpg | **NO — needs real photo.** Referenced text-only for its lockable twist |

## Unresolved / for Codex to re-check
- Exact current US street prices for T.16000M single stick, VKB Gladiator SCE (Standard/Premium), and VKB Omni-Throttle — all quoted as approximate; confirm before any future certification.
- Star Citizen Wiki Guide:Controls returned HTTP 403 on direct fetch — the SC setup-step details (advanced menu label, Strafe Longitudinal/Lateral/Vertical bind names) lean on the search snippet + community corroboration. Re-verify against the live wiki when accessible.
- No hard count of Star Citizen bindable functions was confirmed; body says "hundreds," which is safe. If a precise figure is wanted, pull it from the in-game keybindings export.
- Virpil Constellation ALPHA grip has no verified in-house image; kept text-only. Source a real product photo if it should become a body visual.
- This is a low-density how-to: only 3 distinct verified images embedded (T.16000M, Gladiator SCE, Omni-Throttle). Two infographics are flagged for Codex (axis map + twist decision tree) to raise visual richness without forcing product cards.
