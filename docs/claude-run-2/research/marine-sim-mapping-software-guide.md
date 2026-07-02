# Research Pack: Mapping Software for Marine Sims

- **Article:** Mapping Software for Marine Sims: The AntiMicroX, JoyToKey, vJoy and reWASD Playbook
- **Slug:** `marine/marine-sim-mapping-software-guide`
- **Curator:** Gus Calder (marine)
- **Date researched:** 2026-07-02

## Angle note (topic disambiguation)

The Mega Run 2 brief listed an angle of "mapping/charts software: ECDIS/charts in NAUTIS/Ship Handling Simulator." The existing article, its slug (`marine-sim-mapping-software-guide`), its `primaryKeyword` ("marine sim mapping software"), and all its FAQs are about **input-mapping glue software** (vJoy/JoyToKey/AntiMicro/reWASD) — not ECDIS/chart-plotting software. Rewriting to ECDIS/charts would have changed the topic wholesale, broken the slug/keyword/related-link web, and contradicted the established page. The correct gold upgrade keeps the established input-mapping-software topic (which is what "mapping software" means on this page) and elevates it to gold quality with 2026-verified prices and the AntiMicro→AntiMicroX correction. A separate ECDIS/charts explainer is a NEW article, not a rewrite of this one — flagged as an open item for the run owner.

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| AntiMicroX is the maintained fork; original AntiMicro unmaintained since 2016; GPL v3; v3.5.1 Jan 2025 | AntiMicroX GitHub | https://github.com/AntiMicroX/antimicrox | 2026-07-02 | Tool table, name-check callout, FAQ | High | Corrects article's old "AntiMicro" naming |
| JoyToKey license $7.50; free unlimited-functionality trial; no refunds | JoyToKey purchase page | https://joytokey.net/en/purchase | 2026-07-02 | Tool table, decision tree, FAQ | High | Fetched page directly |
| reWASD 2026 = Lifetime from €34.99 + subscriptions; old ~€7 legacy license grandfathered, not sold to new users | reWASD blog (membership upgrade) | https://www.rewasd.com/blog/post/membership-upgrade | 2026-07-02 | Verdict, tool table, decision tree, FAQ | High | Corrects article's outdated "~$5-7"; €→$ conversion left approximate |
| vJoy is a virtual device that needs a feeder app; translates nothing itself; feed with JoyToKey; solves device-priority | vJoy SourceForge + search summary | https://sourceforge.net/projects/vjoystick/ | 2026-07-02 | vJoy decoy section, FAQ | High | 2.x branch, up to 16 virtual devices |
| eSail has no native controller/axis support; community uses AntiMicro(X); turn Controller OFF in eSail Settings | eSail Steam discussion + hardware-tips guide | https://steamcommunity.com/app/794860/discussions/0/1769259642858804643/ ; https://steamcommunity.com/sharedfiles/filedetails/?id=1410493788 | 2026-07-02 | Step 1, Step 2, "what works where", FAQ | High | "turn Controller OFF" is community guidance |
| Ships At Sea: gamepad support yes, wheel/joystick support NO (on roadmap, no date); Xbox pad partial (some controls keyboard-only) | Ships At Sea Steam discussion | https://steamcommunity.com/app/1266540/discussions/0/4337609541991526037/ | 2026-07-02 | "what works where" | Medium | Community-reported; flagged as check-current |
| Seafarer: wheels detected as Xbox controller, dev doesn't actively support/test wheels | Seafarer Steam discussion | https://steamcommunity.com/app/2582140/discussions/0/599665349675389035/ | 2026-07-02 | "what works where" | Medium | Community-reported; flagged as check-current |

## Community pattern notes (paraphrased in our voice)

- The number-one "my mapping does nothing" cause is a profile bound to the wrong keys (e.g. arrow keys the game uses for the map screen, not the throttle keys). Read the sim's own controls list first.
- The number-one "it won't stop turning" cause is a missing center deadzone; a slightly off-center stick spams keys forever.
- "Only sees the wheel, never the throttle" = device-priority conflict; the game grabs whichever device enumerates as #1. Lazy first test: unplug everything except the device you're binding, then re-add one at a time. Proper fix: vJoy decoy fed by JoyToKey.
- Running two translators at once (AntiMicroX + reWASD) creates ghost inputs — pick one.

## Credible warnings / caveats

- Axis-to-key mapping is **stepped, not smooth** — no glue software produces true analog on an engine that never reads an axis.
- reWASD is materially more expensive in 2026 than older guides claim (€35+ vs the retired ~€7 license) — do not quote the old price.
- Controller support per title changes with patches; the "what works where" list is a starting map, not a spec sheet. Verify current status before buying hardware for a specific sim.
- Back up profiles: a Windows update or game patch can reset device IDs.

## Products / tools discussed

This is a low-product-density software how-to. No product cards are forced. The one embedded image is the verified hero (a throttle lever standing in for the "dead lever" the guide brings to life). Software tools link to official pages, not Amazon.

| Item | Type | Link used | Local image | Verified? |
| --- | --- | --- | --- | --- |
| AntiMicroX | Free software | GitHub official | (none embedded) | N/A (no product photo needed) |
| JoyToKey | Shareware $7.50 | joytokey.net official | (none embedded) | N/A |
| reWASD | Paid software | rewasd.com official | (none embedded) | N/A |
| vJoy | Free software | SourceForge official | (none embedded) | N/A |
| Thrustmaster TWCS (as engine lever) | Hardware (hero only) | n/a — hero image | /images/gear/marine/thrustmaster-twcs-throttle-engine-lever.jpg | YES |

## Unresolved / for the run owner + Codex to re-check

- **Separate ECDIS/charts article?** The brief's "ECDIS/charts in NAUTIS/Ship Handling Simulator" angle is a genuinely different topic (chart-plotting/ECDIS software, not input mapping). If wanted, it should be a NEW article with its own slug, not a rewrite of this one. Not created here.
- **reWASD exact USD figure.** Sourced price is €34.99 Lifetime; the article says "~€34.99 (roughly $35+)". Confirm the live USD store price before any certification that quotes a hard dollar number.
- **Ships At Sea / Seafarer controller status** is community-reported and patch-sensitive — re-verify current wheel/joystick support before certifying the "what works where" section.
- **Hero image is a gear photo, not a bay hero.** Per the brief, heroImage must be a verified path, and all verified paths are `/images/gear/...`. A proper editorial bay hero (mapping-software workflow infographic or a curator-scene composite) should be produced by Codex; see the image manifest.
