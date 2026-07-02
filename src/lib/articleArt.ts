import generatedCovers from '../data/generated-article-covers.json';

type ArticleArt = { image: string; alt: string; label: string; wide?: boolean };

const generatedArtBySlug = generatedCovers as Record<string, ArticleArt>;

const articleArtBySlug: Record<string, ArticleArt> = {
  'active-pedals-vs-load-cell-hydraulic-2026': {
    image: '/images/gear/racing/simucube-activepedal-pro.jpg',
    alt: 'Simucube ActivePedal Pro active sim racing pedal',
    label: 'Active pedal reality',
  },
  'iracing-review-2026': {
    image: '/images/racing/iracing-review-2026.jpg',
    alt: 'iRacing Review 2026 cover with official iRacing media and a real Sim-Lab P1X cockpit product photo',
    label: 'iRacing build verdict',
  },
  'cockpit-rigidity-wheel-stand-vs-8020-2026': {
    image: '/images/gear/racing/sim-lab-p1x.jpg',
    alt: 'Sim-Lab P1X aluminum profile sim racing cockpit',
    label: 'Rigidity world',
  },
  'console-direct-drive-2026': {
    image: '/images/gear/racing/logitech-rs50-system.jpg',
    alt: 'Logitech RS50 console direct drive racing wheel system',
    label: 'Console DD proof',
  },
  'direct-drive-upgrade-ladder-2026': {
    image: '/images/gear/racing/simucube-2-sport.jpg',
    alt: 'Simucube 2 Sport direct drive wheelbase',
    label: 'Direct drive ladder',
  },
  'diy-motion-vs-bass-shakers-2026': {
    image: '/images/gear/racing/buttkicker-gamer-pro.jpg',
    alt: 'ButtKicker Gamer PRO tactile feedback transducer',
    label: 'Tactile impact',
  },
  'sim-rig-buyer-map-2026': {
    image: '/images/gear/racing/trak-racer-tr80.jpg',
    alt: 'Trak Racer TR80 sim racing cockpit',
    label: 'Rig buyer map',
  },
  'triple-monitor-vs-ultrawide-vs-vr-2026': {
    image: '/images/gear/racing/samsung-odyssey-oled-g9-49.jpg',
    alt: 'Samsung Odyssey OLED G9 ultrawide monitor',
    label: 'Display world',
  },
  'golf-launch-monitors-under-5000-2026': {
    image: '/images/gear/golf/garmin-approach-r50.jpg',
    alt: 'Garmin Approach R50 golf launch monitor',
    label: 'Launch monitor lab',
  },
  'golf-simulator-projector-guide': {
    image: '/images/gear/golf/benq-ak700st.jpg',
    alt: 'BenQ AK700ST short throw golf simulator projector',
    label: 'Projector geometry',
  },
  'budget-launch-monitor-war-2026': {
    image: '/images/gear/golf/square-golf-launch-monitor.jpg',
    alt: 'Square Golf launch monitor with ball, phone, and tablet display',
    label: 'Budget launch war',
  },
  'premium-launch-monitor-room-fit-2026': {
    image: '/images/gear/golf/garmin-approach-r50.jpg',
    alt: 'Garmin Approach R50 premium golf launch monitor with built-in screen',
    label: 'Premium monitor room fit',
  },
  'home-golf-simulator-under-10000-2026': {
    image: '/images/gear/golf/skytrak-st-max.jpg',
    alt: 'SkyTrak ST MAX launch monitor being used in a golf simulator',
    label: 'Garage golf build',
  },
  'home-golf-simulator-build-sheet-2026': {
    image: '/images/gear/golf/benq-lk936st.jpg',
    alt: 'BenQ LK936ST short throw golf simulator projector',
    label: 'Room build sheet',
  },
  'golf-mats-screens-enclosures-2026': {
    image: '/images/gear/golf/sig10-enclosure.jpg',
    alt: 'SIG10 golf simulator enclosure and impact screen',
    label: 'Bay infrastructure',
  },
  'launch-monitor-ladder-2026': {
    image: '/images/gear/golf/skytrak-plus.jpg',
    alt: 'SkyTrak Plus launch monitor',
    label: 'Launch ladder',
  },
  'msfs-home-cockpit-buyer-map-2026': {
    image: '/images/gear/flight/honeycomb-alpha-yoke.jpg',
    alt: 'Honeycomb Alpha flight simulator yoke',
    label: 'Cockpit world',
  },
  'yoke-throttle-rudder-head-tracking-order-2026': {
    image: '/images/gear/flight/honeycomb-bravo-throttle.jpg',
    alt: 'Honeycomb Bravo flight simulator throttle quadrant',
    label: 'Flight deck order',
  },
  'star-citizen-hosas-buyer-map-2026': {
    image: '/images/gear/space/vkb-gladiator-nxt-evo-space-combat-edition.jpg',
    alt: 'VKB Gladiator NXT EVO Space Combat Edition joystick',
    label: 'Space controls',
  },
  'star-citizen-hosas-upgrade-path-2026': {
    image: '/images/gear/space/vkb-gladiator-nxt-evo-omni-throttle.jpg',
    alt: 'VKB Gladiator NXT EVO Omni Throttle for space sims',
    label: 'HOSAS upgrade',
  },
};

const defaultArtByBay: Record<string, ArticleArt> = {
  racing: {
    image: '/images/gear/racing/sim-lab-p1x.jpg',
    alt: 'Aluminum profile sim racing cockpit',
    label: 'Racing world',
  },
  golf: {
    image: '/images/gear/golf/garmin-approach-r50.jpg',
    alt: 'Premium golf launch monitor',
    label: 'Golf sim world',
  },
  flight: {
    image: '/images/gear/flight/honeycomb-alpha-yoke.jpg',
    alt: 'Flight simulator yoke',
    label: 'Flight deck world',
  },
  space: {
    image: '/images/gear/space/vkb-gladiator-nxt-evo-space-combat-edition.jpg',
    alt: 'Space simulator joystick',
    label: 'Space sim world',
  },
  marine: {
    image: '/images/gear/marine/leobodnar-bbi-32-button-box-interface.jpg',
    alt: 'Leo Bodnar BBI-32 button box interface board',
    label: 'Bridge world',
  },
};

export function getSlugFromHref(href = '') {
  return href.split('/').filter(Boolean).pop() || '';
}

export function getBayFromHref(href = '') {
  return href.split('/').filter(Boolean)[0] || '';
}

export function getArticleCardArt(href = '') {
  const slug = getSlugFromHref(href);
  const bay = getBayFromHref(href);
  return generatedArtBySlug[slug] || articleArtBySlug[slug] || defaultArtByBay[bay] || null;
}
