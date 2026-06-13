---
title: "How to Bind All Six Axes Across a HOSAS Setup (Star Citizen & Elite)"
description: "A practical, no-fluff guide to assigning three rotation and three translation axes plus power across two sticks — including the disable-twist-on-the-aiming-stick best practice pilots swear by."
bay: "space"
type: "how-to"
primaryKeyword: "HOSAS bindings six axes"
author: "Robert Pruitt"
publishDate: 2026-06-13
heroImage: "/images/space/how-to-bind-six-axes-hosas.jpg"
heroAlt: "First-person view of a pilot's hands on two flight sticks, starfield and nebula through the canopy in magenta and cyan"
excerpt: "Eight analog axes, six ship axes, and one decision that trips up every new HOSAS pilot. Here's the binding layout that works, the axis to disable, and how to do it in both games."
featured: false
readingTime: 9
faqs:
  - q: "How do I bind six degrees of freedom with two sticks?"
    a: "Put pitch, yaw, and roll on the right stick and the three thruster or strafe axes on the left. Twist on one stick covers the sixth axis, so you never run out of analog inputs. The standard layout is rotation on the right hand, translation on the left."
  - q: "Should I disable twist on my right stick?"
    a: "Many pilots disable twist on the aiming stick to prevent accidental yaw while keeping twist on the off-hand stick for a translation axis. If you fly with relative mouse aim it matters less, but for stick-only aiming disabling right-hand twist removes a common source of drift."
  - q: "Which stick handles strafe?"
    a: "The left (off-hand) stick handles all three translation axes — forward/back, lateral strafe, and vertical strafe. Map left/right tilt to lateral strafe, forward/back tilt to forward thrust, and twist or a Z axis to vertical."
  - q: "Does Elite Dangerous detect two sticks automatically?"
    a: "Yes. Elite Dangerous detects multiple devices cleanly and lets you bind axes from either stick directly in its controls menu. Star Citizen also supports two devices but needs more manual binding work."
  - q: "What about forward thrust if my left stick self-centers?"
    a: "A self-centering left stick springs forward thrust back to zero, which is fine for combat. For cruising, either bind throttle to a non-centering control, use a detented grip, or keep a separate throttle for set-and-forget speed."
related:
  - "hosas-vs-hotas"
  - "best-beginner-hosas-under-300"
---

You bought two sticks. You plugged them in. Now you're staring at a controls menu with sixty bindable actions and no idea where pitch, yaw, roll, and three flavors of strafe are supposed to live. This is the moment most new **HOSAS** pilots quietly give up and go back to a gamepad.

Don't. The layout is solved. There's a standard mapping the community converged on years ago, it takes about fifteen minutes to set up, and once it's in your hands it never changes. Here it is, step by step, for both **Star Citizen** and **Elite Dangerous**. If you're still deciding whether two sticks is even right for you, read [HOSAS vs HOTAS](/space/hosas-vs-hotas) first — this guide assumes the hardware is already on your desk.

## The mental model: right rotates, left translates

A spaceship has six axes. Split them by hand.

- **Right stick = rotation.** Pitch, yaw, roll. This is your aiming hand — it points the nose.
- **Left stick = translation.** Forward/back, lateral strafe, vertical strafe. This is your maneuvering hand — it moves the whole ship without turning it.

That's the entire framework. Everything below is just filling in which physical tilt goes to which axis, and resolving the one input you have a surplus of.

## The standard axis map

You have four analog inputs per stick (X tilt, Y tilt, twist, and often a thumb axis). You need three axes per hand. That's a surplus, which is good — it means you get to *choose* what to drop. Here's the layout that works:

| Physical input | Right stick (aiming) | Left stick (maneuvering) |
|---|---|---|
| X tilt (left/right) | Roll | Lateral strafe |
| Y tilt (forward/back) | Pitch | Forward/back thrust |
| Twist | **Yaw — or disabled** | Vertical strafe |
| Thumb axis (if present) | Throttle / zoom | Spare |

The right stick's twist is the famous decision point, and it deserves its own section.

## The one decision: kill twist on the aiming stick

Here's the trap. Your right stick can twist, and twist naturally maps to yaw. But when you're tilting that stick hard for pitch and roll in a dogfight, your wrist *also* twists slightly without you meaning to. That parasitic twist becomes accidental yaw — your reticle drifts off target for reasons you can't feel.

The fix the community swears by: **disable twist on the right stick.** Move yaw somewhere else. You have two clean options:

1. **Yaw on the left stick.** Put yaw on the left stick's X tilt and move lateral strafe to a hat or the left twist. Some pilots prefer rotation split across both hands.
2. **Yaw on the right stick's X tilt, roll on twist.** Swap the assignments so the deliberate tilt does yaw and the easier-to-control twist does roll, which is less aim-critical.

Either way, the principle holds: **don't let your aiming axis share a control with an accidental motion.** Keep twist on the *left* stick, where it does a translation axis you're not relying on for fine aim. This single change is the difference between "my aim drifts and I don't know why" and steady gimbal tracking at range.

## Setting it up in Elite Dangerous

Elite detects multiple devices cleanly, which makes this the easy game.

1. Open **Options > Controls** and confirm both sticks appear as separate devices.
2. Bind **Pitch / Roll** to the right stick's Y and X, and **Yaw** to your chosen control (left stick X if you've disabled right twist).
3. Bind the **Thrust** axes — forward, lateral, vertical — to the left stick's tilts and twist.
4. In the right stick's device settings, set the **twist (Z) axis** to unbound, or zero its sensitivity, to kill accidental yaw.
5. Sanity-check in a station: roll without yawing, strafe without rotating. If the ship cheats sideways when you roll, you've got a crossed axis.

Elite's tooling community also maintains **edrefcard**, which generates a printable reference of your binds — useful when sixty actions blur together.

## Setting it up in Star Citizen

Star Citizen supports two devices too, but it does less hand-holding, so expect more manual work.

1. In **Options > Keybindings**, set the profile to advanced and find the **Flight - Movement** category.
2. Bind **Pitch / Yaw / Roll** to the right stick, applying the disable-twist principle in the same way.
3. Bind **Strafe Longitudinal / Lateral / Vertical** to the left stick's axes.
4. Watch for double-binds — Star Citizen will happily let the same physical axis drive two ship axes, which produces baffling behavior. Clear defaults before you assign.
5. Test in Arena Commander, not in the verse, so a binding mistake doesn't cost you a ship.

Because Star Citizen leans on an off-hand strafe grip, this is where an analog left stick — versus buttons — pays off most. A button strafe lurches; an analog tilt slides.

## After the binds: tune the curves

Raw linear axes feel twitchy near center, where fine aim lives. Once your binds are in, the next job is a mild **S-curve** plus a small center deadzone on the aiming stick so long-range tracking holds steady. That's a tuning task, not a binding task, and it lives in your stick's software — VKBDevCfg for VKB, VPC for Virpil, SimAppPro for WinWing. Get the binds right first; tune the feel second.

## Verdict

The layout is not a mystery: **right stick rotates, left stick translates, and you disable twist on the aiming hand** so wrist wobble never becomes accidental yaw. Set that up once, sanity-check it in a safe environment, and it becomes muscle memory that carries across every ship you fly. Elite makes it easy; Star Citizen makes you work for it but rewards the analog off-hand strafe more. If your sticks are sliding around while you're trying to test all this, that's a mounting problem worth fixing before you blame your binds — and you can price a complete two-stick rig including mounts in [the Rig Configurator](/racing/configurator). For the hardware behind the binds, start at [the best beginner HOSAS setup under $300](/space/best-beginner-hosas-under-300).
