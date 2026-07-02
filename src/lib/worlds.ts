export type SimWorld = {
  image: string;
  alt: string;
  label: string;
  mood: string;
};

const worldsByBay: Record<string, SimWorld> = {
  golf: {
    image: '/images/worlds/golf-world.webp',
    alt: 'AI editorial background of a premium home golf simulator bay opening onto a golden hour golf course',
    label: 'Private-course golf bay',
    mood: 'Golden hour, turf, launch data, and private-club practice energy.',
  },
  racing: {
    image: '/images/worlds/racing-world.webp',
    alt: 'AI editorial background of a sim racing garage opening onto a floodlit race track and pit lane',
    label: 'Track-night racing bay',
    mood: 'Pit lights, wet asphalt, torque, and the garage you wish you had.',
  },
  flight: {
    image: '/images/worlds/flight-world.webp',
    alt: 'AI editorial background of a home flight simulator cockpit overlooking a dawn runway',
    label: 'Runway-departure cockpit',
    mood: 'Dawn runway, clean controls, and an instrument panel that feels earned.',
  },
  space: {
    image: '/images/worlds/space-world.webp',
    alt: 'AI editorial background of a space simulator command station with dual sticks and a starfield',
    label: 'Deep-space command desk',
    mood: 'Dual sticks, starfield glow, and late-night six-axis control.',
  },
  marine: {
    image: '/images/worlds/marine-world.webp',
    alt: 'AI editorial background of a marine simulator bridge overlooking stormy open ocean',
    label: 'Storm-watch bridge',
    mood: 'Bridge glass, ocean weather, throttles, and niche-builder confidence.',
  },
};

export function getWorldForBay(bay = '') {
  return worldsByBay[bay] || worldsByBay.racing;
}

export function getAllWorlds() {
  return worldsByBay;
}
