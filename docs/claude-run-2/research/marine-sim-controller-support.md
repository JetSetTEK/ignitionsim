# Research Pack: Marine Sim Controller Support (2026)

- **Article:** Marine Sim Controller Support: Which Sims Actually Read Your Wheel and Throttle (2026)
- **Slug:** `marine/marine-sim-controller-support`
- **Curator:** Gus Calder (marine)
- **Date researched:** 2026-07-02
- **Revenue tier:** B · **Content cluster:** marine · **goldStatus left as:** refresh (NOT certified)

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| eSail has no direct wheel/joystick support but controllers usable; enable in Settings, main axes work | eSail hardware tips (dev guide) + General Discussions | https://steamcommunity.com/sharedfiles/filedetails/?id=1410493788 | 2026-07-02 | eSail row, FAQ, verdict | High | Dev-authored guide; "still possible with great results" |
| eSail: "We do not support force feedback" (dev statement) | eSail hardware tips (dev guide) | https://steamcommunity.com/sharedfiles/filedetails/?id=1410493788 | 2026-07-02 | FFB-dead point, table | High | Direct dev quote, paraphrased |
| eSail wheel behaves like gamepad stick w/ center deadzone; not tied to on-screen wheel; AntiMicro recommended | eSail General Discussions / hardware tips | https://steamcommunity.com/app/794860/discussions/0/3128289322277983028/ | 2026-07-02 | eSail row, glue layer | High | AntiMicro is the dev-suggested remapper |
| eSail current price shown in local currency (Baht), 20% off ending Jul 9 — no hard USD figure | eSail Steam store | https://store.steampowered.com/app/794860/eSail_Sailing_Simulator/ | 2026-07-02 | (price left as "check current") | Medium | Geolocated pricing; did NOT quote a USD number |
| Sailaway added joypad/controller support; analog controllers + joysticks work; x360ce/reWASD for unsupported | Sailaway dev update + reWASD | https://www.sailawaysimulator.com/2017/11/23/sailaway-update-v-0-9-027-hot-keys-plus-controller-support/ ; https://www.rewasd.com/community/games/sailaway-controller-support | 2026-07-02 | Sailaway row, glue layer | High | Xbox pads "work brilliantly" per community |
| Seafarer: devs "don't actively support any steering wheel and haven't tested"; wheels work only if auto-detected as Xbox pad | Seafarer General Discussions (dev + players) | https://steamcommunity.com/app/2582140/discussions/0/599665891567905955/ | 2026-07-02 | Seafarer row, mid-table | High | Unofficial support; gamepad-emulation dependent |
| Ships At Sea: repeated complaints of NO wheel/joystick support; 3rd in series, unresolved | Ships At Sea General Discussions | https://steamcommunity.com/app/1266540/discussions/0/4337609541991526037/ | 2026-07-02 | Ships At Sea row, mid-table | Medium | 2024-dated thread; flagged "verify current" in body |
| Fishing: Barents Sea historically gamepad/Xbox-first; wheels/HOTAS not properly supported; devs promised full controller support | Fishing: Barents Sea General Discussions | https://steamcommunity.com/app/501080/discussions/0/1736588252397611126/ | 2026-07-02 | Fishing row, mid-table | Medium | Thread is 2018-era; flagged "verify current build" |
| Bridge Command: official DIY build (BU0836 + three 10k linear pots + horn button); friction trick | Bridge Command make-throttle doc | https://www.bridgecommand.co.uk/Doc/makethrottle.php | 2026-07-02 | Bridge Command row, gearpick, DIY section | High | Native analog by design; the reference build |
| Bridge Command is free, open-source, ship-handling focused (Win/macOS/Linux) | Bridge Command home | https://www.bridgecommand.co.uk/ | 2026-07-02 | Bridge Command gearpick, table | High | |
| Professional Ship Simulator = renamed Nautic XP; SWE Systems / Aerosoft; Steam EA targeted 2026, EA to finish ~mid-2027 | Professional Ship Simulator Steam + rename news | https://store.steampowered.com/app/3636930/Professional_Ship_Simulator/ ; https://store.steampowered.com/news/app/3636930/view/501729087458378961 | 2026-07-02 | PSS row, gearpick, verdict | High | Store confirms dev/pub + "Planned 2026", EA finish mid-2027 |
| PSS: fully-interactive cockpit, 100+ mappable buttons, multiple control axes | Games Press reveal coverage | https://www.gamespress.com/Professional-Ship-Simulator-Revealed-with-New-Gameplay-Trailer-Setting | 2026-07-02 | PSS row, gearpick | Medium | Store page does NOT itemize axis count; "9-axis" Nautic XP figure NOT re-verifiable — flagged check-current |

## Community pattern notes (paraphrased in our voice)

- The weekly "my wheel only goes hard-left/hard-right and the throttle does nothing — is my gear broken?" post. Answer: the gear is fine; the title doesn't poll analog axes, or it only recognizes the wheel because it looks like an Xbox pad.
- "It magically works" is a tell, not a feature: several titles (Seafarer, Fishing: Barents Sea) read a wheel only because it enumerates as a standard Xbox controller — no wheel-specific support was ever built.
- Glue-software stack the community actually reaches for: AntiMicro (eSail's own dev pick), JoyToKey, vJoy, x360ce, reWASD, Xpadder.

## Credible warnings / caveats

- These are mostly small-studio / Early Access titles — controller behavior moves with patches. A "no wheel support" thread from 2024 may be stale; re-check store page + patch notes before buying.
- Force feedback is unsupported across the mainstream marine titles (eSail states so explicitly). Do not pay an FFB premium (e.g. G923 over G29) for marine use.
- Analog gate applies only to AXES. Buttons/switches/encoders are digital and map cleanly in nearly any title — a button box is the safest first buy.
- Professional Ship Simulator input spec (esp. exact axis count) is a promise, not shipped. Verify at launch.

## Products discussed

| Product | Gear page | Amazon (search) / official | Local image | Verified? |
| --- | --- | --- | --- | --- |
| Bridge Command (free sim) | /marine/gear/bridge-command-free-sim | https://www.bridgecommand.co.uk/ | /images/gear/marine/bridge-command-free-sim.jpg | YES |
| Professional Ship Simulator (context) | /marine/gear/professional-ship-simulator-context | https://store.steampowered.com/app/3636930/ | /images/gear/marine/professional-ship-simulator-context.jpg | YES |
| Thrustmaster TWCS Throttle | /marine/gear/thrustmaster-twcs-throttle-engine-lever | Thrustmaster+TWCS+Throttle | /images/gear/marine/thrustmaster-twcs-throttle-engine-lever.jpg | YES |
| Thrustmaster T.16000M (rudder) | /marine/gear/thrustmaster-t16000m-rudder | Thrustmaster+T.16000M+FCS | /images/gear/marine/thrustmaster-t16000m-rudder.jpg | YES |
| PXN CB1 button box | /marine/gear/pxn-cb1-button-box | PXN+CB1+Button+Box | /images/gear/marine/pxn-cb1-button-box.jpg | YES |
| Leo Bodnar BBI-32 | /marine/gear/leobodnar-bbi-32-button-box-interface | leobodnar.com (products_id=204) | /images/gear/marine/leobodnar-bbi-32-button-box-interface.jpg | YES |
| Leo Bodnar BU0836X | /marine/gear/leobodnar-bu0836x-diy-board | leobodnar.com (products_id=214) | /images/gear/marine/leobodnar-bu0836x-diy-board.jpg | YES |
| Arduino Leonardo (DIY HID) | /marine/gear/arduino-leonardo-diy-hid | Arduino+Leonardo | /images/gear/marine/arduino-leonardo-diy-hid.jpg | YES |
| Meta Quest 3 (MarineVerse) | /marine/gear/meta-quest-3-marineverse-vr | Meta+Quest+3 | /images/gear/marine/meta-quest-3-marineverse-vr.jpg | YES |
| RailDriver (ship throttle) | /marine/gear/raildriver-ship-throttle | https://raildriver.com/ | /images/gear/marine/raildriver-ship-throttle.jpg | YES |
| Logitech G29 (as helm) | /marine/gear/logitech-g29-helm | Logitech+G+G29+Driving+Force | /images/gear/marine/logitech-g29-helm.jpg | **NO — text + Amazon link only** |
| Saitek Pro Flight Throttle Quadrant | /marine/gear/logitech-saitek-throttle-quadrant-telegraph | Logitech+G+Saitek+Pro+Flight+Throttle+Quadrant | /images/gear/marine/logitech-saitek-throttle-quadrant-telegraph.jpg | **NO — text + Amazon link only** |

## Unresolved / for Codex to re-check

- Exact Professional Ship Simulator input spec at launch (does the "9 axes" / "50+ buttons" / rudder-deadzone Nautic XP marketing hold on the shipped build?). Left as "check current" in body.
- Current-build controller status for Seafarer, Fishing: Barents Sea, and Ships At Sea — the cited threads are 2018–2024; a 2026 patch may have added or changed wheel/throttle support. Re-verify before any certification.
- No verified marine-context product photo for the Logitech G29 (helm) or Saitek Pro Flight Throttle Quadrant (telegraph) — both are text + Amazon links only. Source real photos before they can become body visuals or before certification if the shortlist should show the two primary axis controllers.
- eSail / Sailaway / PSS pricing intentionally left as "check current" (geolocated Steam pricing; PSS price TBD).
