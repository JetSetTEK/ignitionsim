import crew from '../data/crew.json';

export type CrewMember = (typeof crew)[number] & { slug?: string };

export const allCrew = crew as CrewMember[];

export const crewSlug = (person: CrewMember) =>
  person.slug || String(person.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export function getCrewBySlug(slug: string) {
  return allCrew.find((person) => crewSlug(person) === slug);
}

export function getCrewForBay(bay: string) {
  if (bay === 'golf') return allCrew.find((person) => person.name === 'Nina Brooks') || allCrew[0];
  if (bay === 'flight' || bay === 'space') return allCrew.find((person) => person.name === 'Val Chen') || allCrew[0];
  if (bay === 'marine') return allCrew.find((person) => person.name === 'Gus Calder') || allCrew[0];
  return allCrew.find((person) => person.name === 'Duke Alvarez') || allCrew[0];
}

// Resolve an article's `author` string (e.g. "Nina Brooks") to a curator record.
export function getCuratorByName(name: string) {
  if (!name) return undefined;
  const target = String(name).trim().toLowerCase();
  return allCrew.find((person) => String(person.name).trim().toLowerCase() === target);
}
