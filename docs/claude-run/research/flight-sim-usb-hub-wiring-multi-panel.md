# Research Pack: Flight Sim USB Hubs and Wiring (Multi-Panel Cockpit)

- **Article:** Flight Sim USB Hubs and Wiring: How to Power a Multi-Panel Cockpit (2026)
- **Slug:** `flight/flight-sim-usb-hub-wiring-multi-panel`
- **Curator:** Mac Donovan (flight)
- **Revenue tier:** B
- **Date researched:** 2026-07-02

## Article angle
A WIRING how-to, not a product roundup. Naturally LOW verified-product density: the devices that *create* the wiring problem (backlit WinWing panels, the USB hub itself) mostly have no verified catalog image. Verdict-first (buy a powered/self-powered hub + disable USB selective suspend), a "what draws power" table, a powered-vs-unpowered table, port/wattage budgeting, the Windows dropout fix, cable discipline, and an FFB aside. Product cards are used ONLY for verified flight hardware that represents the power load — the Honeycomb Bravo anchors it.

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| USB 2.0 = 500mA, USB 3.0 = 900mA per downstream port | Cadence (USB spec explainer) | https://resources.pcb.cadence.com/blog/2020-what-are-the-maximum-power-output-and-data-transfer-rates-for-the-usb-standards | 2026-07-02 | "Why plain USB", FAQ | High | Standard USB spec figures |
| Honeycomb Flight Sim USB Hub: 6 ports, up to 30W, ~$49.99, compatible w/ Honeycomb + leading peripherals | Honeycomb official | https://flyhoneycomb.com/products/flight-sim-usb-hub | 2026-07-02 | Sizing wattage, verdict, FAQ | High | Per-port W and USB version not published |
| Honeycomb 6-Port USB Hub retail listing | Amazon | https://www.amazon.com/Honeycomb-Aeronautical-Flight-Sim-6-Port/dp/B0F63QL7K3 | 2026-07-02 | Source shelf | High | Confirms product exists at retail |
| Two 7-port powered hubs + 60W PSU running full Alpha/Bravo/Charlie + WinWing MCDU/FCU/EFIS-L-R/PAP/PFP | PMDG cockpit-builders forum | https://forum.pmdg.com/forum/main-forum/cockpit-builders/384201-usb-hub-recommendations-for-winwing-accessories | 2026-07-02 | Sizing wattage, FAQ | Medium | Forum returned 403 to direct fetch; detail captured from search-index snippet. Paraphrased, not quoted. VERIFY exact hub/PSU model if quoting harder. |
| Route all sim gear through powered hubs; keyboard/mouse direct to motherboard; some pedals won't init until power-cycled; some devices need USB3 bandwidth | MSFS forum "for those using powered USB hubs" | https://forums.flightsimulator.com/t/for-those-using-powered-usb-hubs/610524 | 2026-07-02 | Powered-vs-unpowered, cable discipline, troubleshooting | Medium | Paraphrased in our voice |
| Disable USB selective suspend (both battery + plugged) + per-hub "allow computer to turn off this device"; reboot | Puget Systems; Microchip | https://www.pugetsystems.com/support/guides/how-to-disable-usb-selective-suspend-1190/ ; https://support.microchip.com/s/article/USB--How-to-disable-USB-selective-suspend-on-Windows-OS | 2026-07-02 | Dropout fix (2 steps) | High | Cross-confirmed on multiple sources |
| Desktop Pilot 10-Port USB Hub: 10 ports, 12V adapter, per-port switches, USB 2/3/3.1, ~$108 | Desktop Pilot official | https://www.desktoppilot.com/product/desktop-pilot-10-port-usb-hub/ | 2026-07-02 | Port budgeting, source shelf | High | PRICE CHANGED: now $108, not the ~$60 in flight-extra.json. NOT verified image — text-only. |

## Community pattern notes (paraphrased in our voice)
- Consensus is unanimous: self-powered (mains-adapter) hubs only for panel stacks. Bus-powered hubs are for mouse/keyboard/one light device.
- Big builders split devices across two hubs to balance draw and to avoid one hub failure killing the whole cockpit; split by function (controls on one, lit panels on the other).
- The #1 "panel randomly disconnects" cause reported is Windows USB selective suspend, not the hardware. Free fix, do it first.
- Keep keyboard + mouse on the motherboard; leave the hub budget for gear that needs it.
- Some rudder pedals won't initialize through a hub until the hub power is cycled — troubleshoot such devices directly on a motherboard port.

## Credible warnings / caveats
- Bus-powered hubs cause the classic brownout/dropout when panels stack — the core failure mode of the whole topic.
- Cheap/passive long USB extensions near PSU/monitors pick up interference → more dropouts; use short runs or active/powered extensions.
- Ground-loop hum from many separately-grounded adapters can cause flaky sensor reads; keep hub + PC on the same strip.
- FFB bases (MOZA AY210) draw servo power and ship with their own supply — do NOT count them against a hub's wattage budget; wire to own circuit.

## Products discussed
| Product | Gear page | Amazon (search) | Local image | Verified? |
| --- | --- | --- | --- | --- |
| Honeycomb Bravo Throttle | /flight/gear/honeycomb-bravo-throttle | Honeycomb+Bravo+Throttle+Quadrant | /images/gear/flight/honeycomb-bravo-throttle.jpg | YES (embedded gearpick + hero) |
| Honeycomb Alpha Yoke | /flight/gear/honeycomb-alpha-yoke | — (linked only) | /images/gear/flight/honeycomb-alpha-yoke.jpg | YES (text link only) |
| Honeycomb Charlie Pedals | /flight/gear/honeycomb-charlie-pedals | — (linked only) | /images/gear/flight/honeycomb-charlie-pedals.jpg | YES (text link only) |
| MOZA MTQ Throttle Quadrant | /flight/gear/moza-mtq-throttle-quadrant | — (linked only) | /images/gear/flight/moza-mtq-throttle-quadrant.jpg | YES (text link only) |
| MOZA AY210 FFB Yoke | /flight/gear/moza-ay210-ffb-yoke | — (linked only) | /images/gear/flight/moza-ay210-ffb-yoke.jpg | **NO — not in verified list; text link only, no img** |
| WinWing MCDU / FCU / EFIS / PAP / PFP | — | — | (catalog images exist on disk) | **NO — not in verified list; TEXT ONLY, never embedded** |
| Honeycomb Flight Sim USB Hub (6-port 30W) | — | Honeycomb+Flight+Sim+USB+Hub | (no catalog image) | **NO — text + official/Amazon links only** |
| Desktop Pilot 10-Port USB Hub | — | Desktop+Pilot+10-Port+USB+Hub | /images/gear/flight/desktop-pilot-10-port-usb-hub.jpg | **NO — file on disk but NOT in verified list; text-only, needs-download** |

## Unresolved / for Codex to re-check
- PMDG-builder thread (two 7-port hubs, 60W PSU) captured via search snippet; direct fetch 403'd. Re-fetch and confirm exact hub models/PSU wattage before quoting anything harder than "two hubs on a 60W supply."
- Honeycomb hub per-port wattage and USB version are not published — do not invent them.
- Desktop Pilot 10-port is now ~$108 (was ~$60 in flight-extra.json). If that product ever gets a body image, source a real photo first (needs-download) and update flight-extra.json price.
- The USB hub itself (the actual subject of the article) has NO verified catalog image for ANY brand. This is the honest reason verified-image density is low. Sourcing a real Honeycomb 6-port hub photo would let the hub become a body visual and lift the count.
