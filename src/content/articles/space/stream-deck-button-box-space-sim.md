---
title: "Stream Deck for Star Citizen & Elite Dangerous: The Button-Box Deep-Dive"
description: "How an Elgato Stream Deck tames the 200-plus bindings in Star Citizen and Elite Dangerous — model sizing, the free plugins that read game state, and where DIY beats it."
bay: "space"
type: "gear-explainer"
primaryKeyword: "Stream Deck Star Citizen button box"
author: "Robert Pruitt"
publishDate: 2026-06-13
heroImage: "/images/space/stream-deck-button-box-space-sim.jpg"
heroAlt: "An Elgato Stream Deck glowing with space-sim icons next to a flight stick under magenta and cyan light"
excerpt: "A flight stick has maybe 20 buttons. Star Citizen has over 200 bindable actions. A Stream Deck is how serious pilots close that gap without memorizing chord-keys."
featured: false
readingTime: 9
faqs:
  - q: "Is a Stream Deck good for Star Citizen?"
    a: "Yes — it's one of the best-value space-sim additions you can make. A Stream Deck gives you labeled, light-up physical buttons for the hundreds of bindings a flight stick can't hold: landing gear, power triangle, mining and salvage modes, FPS gear, emotes, and the whole UI layer. It complements a stick or gamepad rather than replacing it, and free community plugins can even read live game state to update the buttons."
  - q: "How many keys do I need for a space sim Stream Deck?"
    a: "The 32-key Stream Deck XL is the sweet spot — enough keys to keep most categories visible without paging. The 15-key MK.2 works well with folder pages, and the 8-key Stream Deck + adds dials that are handy for power balancing and zoom. For an obsessive all-in-one panel, the 36-key Stream Deck + XL fits every category on one surface."
  - q: "Do Stream Deck bindings have to be keyboard keys?"
    a: "Yes. A Stream Deck sends keystrokes, so any action you map must have a keyboard binding in the game first. You can't bind it to a mouse-wheel action or a joystick-only function. Set the keyboard bind in-game, then point the Stream Deck button at that key combination."
  - q: "Is a Stream Deck better than buying more stick buttons?"
    a: "For the secondary bind list, usually yes. Stick buttons are great for flight-critical actions you hit by feel, but they're unlabeled and you run out fast. A Stream Deck adds dozens of labeled, color-coded buttons you can read at a glance — far better for the mode-switching and systems binds that don't need to be muscle memory."
related:
  - "how-to-bind-six-axes-hosas"
  - "best-controls-for-elite-dangerous"
  - "voiceattack-hcs-setup-space-sims"
---

A VKB Gladiator has around 20 buttons. A Virpil Constellation Alpha, loaded as it is, gets you maybe 40. Star Citizen has over 200 bindable actions, and Elite Dangerous isn't far behind once you count exploration, mining, and ship-launched-fighter controls. The math doesn't close. No flight stick made holds the full bind list.

The community's answer is a button box, and the most common one in 2026 isn't a custom DIY panel — it's an **Elgato Stream Deck**. It's a grid of small LCD keys, each one a labeled, light-up, reprogrammable button. For a game drowning in bindings, that's exactly the right tool. Here's how to size one and set it up properly.

## Why a Stream Deck specifically

A flight stick's buttons are unlabeled and finite. You bind your flight-critical actions there — fire, boost, countermeasures — because you hit them by feel. Everything else is the problem: landing gear, lights, power triangle, shield pips, scanning, mining laser modes, salvage heads, quantum drive, ping, emotes, and the entire FPS layer when you get out of the seat.

A Stream Deck solves the *secondary* bind list, and it solves it the way a real cockpit does — with labeled, color-coded, physical buttons you read at a glance instead of memorizing. Each key shows a custom icon and can sit inside a folder, so one 32-key panel can hold hundreds of actions across pages.

The catch you must understand up front: **a Stream Deck sends keystrokes**. Every action you map needs a keyboard binding in the game first. You set the keyboard bind in Star Citizen or Elite, then point the Stream Deck button at that key combo. You cannot bind it to a joystick-only function or a mouse-wheel action.

## Picking the right model

Elgato's lineup splits by key count and whether it has dials. For space sims the trade-off is "how much can I see without paging."

| Model | Keys | Dials | Approx 2026 price | Best for |
|---|---|---|---|---|
| Stream Deck MK.2 | 15 | 0 | ~$150 | Tight desks; lean on folder pages |
| Stream Deck + | 8 | 4 | ~$200 | Dials for power/zoom + small key grid |
| Stream Deck XL | 32 | 0 | ~$250 | The sweet spot — most categories visible at once |
| Stream Deck + XL | 36 | 6 | ~$350 | Obsessive all-in-one panel + dials |

My honest recommendation for most pilots is the **32-key XL**. Fifteen keys forces constant folder-paging, which defeats the "glance and press" point. Thirty-two keys is enough to keep flight systems, modes, and the UI layer each on a visible cluster. The **dials on the Stream Deck +** are genuinely useful for analog-ish jobs like shield-pip balancing, throttle nudging, or zoom, so if those matter to you the + or + XL is worth the premium. The 15-key **MK.2** is fine if budget or desk space is tight and you accept paging.

This pairs naturally with whatever flight controller you run. If you're flying a [gamepad rather than a stick](/space/gamepad-vs-hotas-star-citizen), a Stream Deck is arguably the single best upgrade you can make — it fixes the gamepad's real weakness (button shortage) for less than the cost of a HOTAS.

## The free plugins that make it smart

A Stream Deck is useful as a plain keystroke launcher, but it gets genuinely good with the community plugins that read live game state.

For **Elite Dangerous**, the open-source `streamdeck-elite` plugin reads the game's status file and updates buttons dynamically — a landing-gear key that shows its current state, cargo-scoop and hardpoint toggles that reflect what's actually deployed, FSD and supercruise feedback. It turns a static panel into a reactive cockpit.

For **Star Citizen**, the `streamdeck-starcitizen` plugin works on the same principle, though Star Citizen exposes less state than Elite, so more of your buttons are straight keystroke senders. Both are free on GitHub and are the standard starting point — install the plugin, then build your pages on top.

Layered with voice control, this gets powerful fast. A Stream Deck handles the deliberate, visible binds; voice handles the conversational ones. If you want to go that route, [setting up VoiceAttack and HCS for space sims](/space/voiceattack-hcs-setup-space-sims) covers the audio half of the same problem.

## A sane page layout

Don't build 200 buttons. Build categories. A layout that works:

- **Page 1 — Flight systems.** Gear, lights, power triangle, shield pips, countermeasures, scan, ping. The stuff you reach for mid-flight.
- **Page 2 — Roles.** Mining laser modes, salvage head controls, tractor beam, cargo. Whatever profession you actually fly.
- **Page 3 — UI / comms.** mobiGlas, map, party, friends, comms, the menu navigation you do constantly in Star Citizen.
- **Page 4 — FPS / on-foot.** Inventory, weapon swaps, medpen, the layer that activates when you leave the seat.

Color-code by page so your eyes find the cluster before your hand does. This is where a Stream Deck beats more stick buttons outright: it's labeled. When you're learning the [six-axis HOSAS bind scheme](/space/how-to-bind-six-axes-hosas) on the sticks, offloading every non-flight action to a labeled panel keeps the sticks focused on flying.

## Where DIY still beats it

I'm an honest broker, so: a Stream Deck isn't the only answer, and for some pilots a real switch panel is better.

A Stream Deck's keys are flat LCDs — no toggle switches, no covered missile-guards, no rotary encoders beyond the + 's four dials. If your immersion comes from *flipping* physical switches, a DIY USB button box (an Arduino/Leonardo build) or an Etsy-built panel gives you real toggles, guarded switches, and rotaries that a Stream Deck can't. WinWing's ICP and MFD panels do the same from the commercial side.

The trade-off is labeling and flexibility. A physical switch is fixed — it does one thing forever, and relabeling means a sticker. A Stream Deck reconfigures in software in seconds and shows live state. For most pilots the Stream Deck's flexibility wins; for cockpit-immersion builders chasing the *feel* of switches, DIY wins. Many serious simpits run both.

Before you commit to a panel strategy, it's worth modeling the whole rig — sticks, mount, and button surface together — in [the Rig Configurator](/racing/configurator), because a Stream Deck's desk footprint competes with your mounting layout.

## Verdict

A Stream Deck XL is the highest-value non-stick purchase a Star Citizen or Elite Dangerous pilot can make. It closes the gap between a flight stick's ~20 buttons and a game's 200-plus actions, it's labeled and reactive in a way more stick buttons never will be, and the free Elite and Star Citizen plugins make it read live game state for nothing. Get the 32-key XL unless you want dials (then the +), install the community plugin for your game, build four category pages, and you've solved the binding problem that defeats every flight stick on the market.
