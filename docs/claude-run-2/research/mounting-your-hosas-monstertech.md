# Research Pack: Mounting Your HOSAS in 2026 (Monstertech vs Foxx vs Virpil)

- **Article:** Mounting Your HOSAS in 2026: Monstertech vs Foxx vs Virpil (and Why Your Sticks Slide)
- **Slug:** `space/mounting-your-hosas-monstertech`
- **Curator:** Val Chen (space)
- **Date researched:** 2026-07-02

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Monstertech Joystick/HOTAS Desk Mount ~$129 (sale ~$116.10); Long ~$139; anodized aluminum; BESSEY quick-release clamp; fits 0.5–10cm tabletops; infinitely variable height; universal brand compat | Monstertech / MTSIM US official | https://www.mtsim.com/product/joystick-hotas-table-mount/ ; https://www.mtsim.com/product-category/table-mounts/ | 2026-07-02 | Verdict, Monstertech gearpick, comparison table, checklist, Sources | High | Two store views showed different sale prices ($159 in one search snippet vs $129 on category page) — quoted ~$129 as current and flagged "verify current, frequent sales" |
| Monstertech Chair Mount ~$119 (sale ~$107.10); anchors to chair armrest receiving points; 7 armrest forms; quick attach/remove; HOTAS needs two | Monstertech official | https://www.monster.tech/en/product/joystick-hotas-chair-mount/ | 2026-07-02 | Desk-vs-chair section, FAQ, comparison table | High | |
| Foxx Mount: US-made, Imperial 10 Series 1020 aluminum profile; lever-action toggle clamps; beam ~$52.50, standard device plates ~$35, MFD mount ~$37.50, Virpil collective plate ~$35; Thrustmaster AVA plate added | Foxx Mount official | https://foxxmount.com/ | 2026-07-02 | Comparison table, cross-shop callout, verdict, buy order, Sources | Medium | VKB/WinWing plate compatibility NOT explicitly confirmed on landing page — flagged "verify a plate exists for your exact stick"; several items showed "sold out" |
| Virpil VPC Desk Mount V4 (S and L): ST-3 grade steel; quick-release clamp; fits desks 9–63mm thick; V4-S for throttles/sticks without extensions, V4-L for full stick setups; model-specific adapters | Virpil US official + support | https://virpil-controls.us.com/vpc-desk-mount-v4-l.html ; https://support.virpil.com/en/support/solutions/articles/47001193278-desk-mount-v4-user-manual | 2026-07-02 | Comparison table, cross-shop callout, checklist, Sources | Medium-High | Official product page 403'd to our fetcher; specs confirmed via search snippet + support user-manual. USD price NOT confirmed (retailer listing was in THB) — quoted "check current" and flagged in body |
| Virpil space-sim HOSAS setup guidance: HOSAS = 6 axes across two sticks; WarBRD-D is desk-friendly (optional baseplate), MongoosT-50CM3 needs a hard mount; modularity emphasized over prescribed angles | Virpil official support | https://support.virpil.com/en/support/solutions/articles/47001266942-space-simulation-cockpit-setup-guide-virpil-controls | 2026-07-02 | Physics/fix sections, desk-vs-chair, Sources | High | |
| Community/hands-on: mounts solve uncomfortable desktop positioning; lowering + center-mount feels natural ("brain adjusts to throw angle"); sturdy, no desk marks; downsides = cost (~$100–125/bracket) and knee clearance; DIY alternatives exist but commercial build quality wins | Mudspike forum review + discussion | https://forums.mudspike.com/t/monstertech-joystick-hotas-table-mounts-review/4813 ; https://forums.mudspike.com/t/desk-mounts-what-to-get/8556 | 2026-07-02 | Fix section, forum callout, desk-vs-chair, checklist warning, Sources | Medium | Paraphrased pattern, not quoted |
| Thrustmaster T.16000M ~$80 each / ~$160 pair; VKB Gladiator ~$119; VKB Gunfighter Mk.IV ~$289 base only; Virpil WarBRD-D ~$260; Elgato Stream Deck XL ~$250 / MK.2 ~$150; Warthog ~$500 | In-house product catalog (space.json / space-extra.json) | src/data/products/space.json ; src/data/products/space-extra.json | 2026-07-02 | Gearpicks, budget section, what-to-buy stack | High | Prices from existing verified catalog; cross-consistent with sibling gold articles |

## Community pattern notes (paraphrased in our voice)
- The sliding-baseplate problem is real and unique to HOSAS: lateral combat forces beat friction, so light bases "walk" a millimeter per hard input until aim drifts. Pilots repeatedly blame deadzones/curves before realizing the stick was physically moving.
- The bigger surprise for pilots who finally mount: the **lowered + inward-canted** position does more for aim and stamina than the anti-slide alone. Center-mounted below desk height reads as "cockpit-like" and the brain adapts to the throw angles fast.
- Left and right resting angles are usually NOT mirror images — lock to comfort, not symmetry.
- Under-tightening is the top self-inflicted mistake: a half-tight arm flexes and reintroduces the wander.
- Knee clearance is the practical annoyance of below-desk arms.

## Credible warnings / caveats
- A half-tight/loose clamp arm flexes under combat input — reintroduces sliding plus rattle. Torque every joint hard, push to corners to confirm.
- Confirm a mounting plate/adapter exists for your EXACT stick before buying (Monstertech universal covers most; Foxx/Virpil are device-plate based).
- Match clamp depth to desk/armrest thickness (Monstertech ~0.5–10cm; Virpil V4 9–63mm).
- Chair mounts require compatible armrest anchor points — not every chair works.
- Foxx Mount VKB/WinWing plate compatibility not confirmed on the landing page — verify before ordering.
- Virpil VPC Desk Mount V4 firm USD price not confirmed at review time — "check current."

## Products discussed
| Product | Gear page | Amazon (search) | Local image | Verified? |
| --- | --- | --- | --- | --- |
| Monstertech Joystick/HOTAS Desk Mount | /space/gear/monstertech-table-mount | Monstertech+joystick+table+mount | /images/gear/space/monstertech-table-mount.jpg | YES |
| Thrustmaster T.16000M FCS | /space/gear/thrustmaster-t16000m-fcs | Thrustmaster+T.16000M+FCS | /images/gear/space/thrustmaster-t16000m-fcs.jpg | YES |
| VKB Gladiator NXT EVO Space Combat Edition | /space/gear/vkb-gladiator-nxt-evo-space-combat-edition | VKB+Gladiator+NXT+EVO+Space+Combat | /images/gear/space/vkb-gladiator-nxt-evo-space-combat-edition.jpg | YES |
| VKB Gunfighter Mk.IV base | /space/gear/vkb-gunfighter-mk4-base | VKB+Gunfighter+Mk+IV+base | /images/gear/space/vkb-gunfighter-mk4-base.jpg | YES |
| Virpil VPC WarBRD-D base | /space/gear/virpil-warbrd-d-base | Virpil+WarBRD-D+base | /images/gear/space/virpil-warbrd-d-base.jpg | YES |
| Thrustmaster HOTAS Warthog | /space/gear/thrustmaster-hotas-warthog | Thrustmaster+HOTAS+Warthog | /images/gear/space/thrustmaster-hotas-warthog.jpg | YES |
| Elgato Stream Deck XL | /space/gear/elgato-stream-deck-xl | Elgato+Stream+Deck+XL | /images/gear/space/elgato-stream-deck-xl.jpg | YES |
| Foxx Mount (desk beam + device plates) | — (no gear page; official link only) | — (official store, not Amazon) | — (no local image) | **NO — needs real photo; text-only** |
| Virpil VPC Desk Mount V4 (S/L) | — (no gear page; official link only) | — (official store) | — (no local image) | **NO — needs real photo; text-only** |
| Monstertech Chair Mount | (referenced; shares monstertech gear page) | Monstertech+joystick+chair+mount | — (no distinct verified image) | **NO distinct image — referenced text + official link** |

## Unresolved / for Codex to re-check
- Exact current US MSRP of the Monstertech Joystick/HOTAS Desk Mount — search surfaced both ~$159 and ~$129 (sale ~$116.10) across store views. Quoted ~$129 "verify current." Confirm before certifying a hard number.
- Firm USD price for the Virpil VPC Desk Mount V4-S / V4-L — the official page 403'd our fetcher and the only retailer price found was in THB. Left as "check current" in body. Source a real USD figure before certification.
- Foxx Mount compatibility for VKB and WinWing sticks — confirm a mounting plate exists (only Virpil + Thrustmaster AVA explicitly named on the landing page). If VKB/WinWing plates are NOT offered, tighten the body language.
- Foxx Mount and Virpil VPC Desk Mount V4 have NO verified in-house product image — both are text-only in the body with official links. Source real photos before they can become body visuals or before certification if the guide should show every mount.
- Confirm the Monstertech Chair Mount still lists at ~$119 (sale ~$107.10) and current armrest-form availability.
