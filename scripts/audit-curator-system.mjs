import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const readJson = (file) => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
const crew = readJson('src/data/crew.json');
const conversations = readJson('src/data/crew-conversations.json');
const surfaces = readJson('src/data/editorial-surfaces.json');
const actions = surfaces.curatorActions || {};
const failures = [];
const usedScenes = new Map();

const publicFile = (url) => path.join(root, 'public', String(url || '').replace(/^\//, ''));
const expectText = (value, label, min = 24) => {
  if (typeof value !== 'string' || value.trim().length < min) failures.push(`${label}: missing or too thin`);
};

for (const person of crew) {
  const slug = person.slug;
  const prefix = `${person.name} (${slug})`;
  if (!slug) { failures.push(`${person.name || 'Unknown curator'}: missing slug`); continue; }

  for (const [field, min] of [
    ['profile', 80], ['origin', 160], ['credentials', 120], ['nowRunning', 100],
    ['trustLine', 80], ['petPeeve', 40], ['favoriteSim', 20], ['benchMove', 30],
    ['favoriteWarning', 30], ['authorBio', 60],
  ]) expectText(person[field], `${prefix}.${field}`, min);

  if (!Array.isArray(person.expertise) || person.expertise.length < 6) failures.push(`${prefix}: needs at least 6 expertise entries`);
  if (!Array.isArray(person.hillsToDieOn) || person.hillsToDieOn.length < 3) failures.push(`${prefix}: needs at least 3 strong opinions`);
  if (!Array.isArray(person.signatureTakes) || person.signatureTakes.length < 3) failures.push(`${prefix}: needs at least 3 signature Q&A takes`);
  if (!person.image || !fs.existsSync(publicFile(person.image))) failures.push(`${prefix}: missing public portrait ${person.image || '(none)'}`);
  if (!person.scene || !fs.existsSync(publicFile(person.scene))) failures.push(`${prefix}: missing public room/action scene ${person.scene || '(none)'}`);

  const chat = conversations[slug];
  if (!chat) {
    failures.push(`${prefix}: missing crew-conversations entry`);
  } else {
    if (!Array.isArray(chat.greetings) || chat.greetings.length < 3) failures.push(`${prefix}: chat needs 3 distinct greetings`);
    if (!Array.isArray(chat.nudges) || chat.nudges.length < 3) failures.push(`${prefix}: chat needs 3 distinct bench nudges`);
    expectText(chat.returnGreeting, `${prefix}.chat.returnGreeting`, 36);
    for (const field of ['story', 'ritual', 'offDuty', 'disagreement']) {
      expectText(chat[field]?.label, `${prefix}.chat.${field}.label`, 10);
      expectText(chat[field]?.answer, `${prefix}.chat.${field}.answer`, 90);
    }
    expectText(chat.diagnostic?.label, `${prefix}.chat.diagnostic.label`, 10);
    if (!Array.isArray(chat.diagnostic?.steps) || chat.diagnostic.steps.length < 3) failures.push(`${prefix}: chat diagnostic needs 3 steps`);
  }

  const personActions = actions[slug];
  if (!Array.isArray(personActions) || personActions.length < 2) {
    failures.push(`${prefix}: needs at least 2 distinct approved action scenes`);
    continue;
  }
  for (const scene of personActions) {
    expectText(scene.task, `${prefix}.action.task`, 24);
    expectText(scene.alt, `${prefix}.action.alt`, 36);
    if (!scene.image || !fs.existsSync(publicFile(scene.image))) failures.push(`${prefix}: missing action scene ${scene.image || '(none)'}`);
    const previous = usedScenes.get(scene.image);
    if (previous && previous !== slug) failures.push(`${scene.image}: reused by ${previous} and ${slug}`);
    usedScenes.set(scene.image, slug);
  }
}

for (const slug of Object.keys(conversations)) {
  if (!crew.some((person) => person.slug === slug)) failures.push(`crew-conversations has unknown curator: ${slug}`);
}

if (failures.length) {
  console.error('IgnitionSim curator-system audit failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`IgnitionSim curator-system audit passed for ${crew.length} curators, ${usedScenes.size} action scenes, and ${Object.keys(conversations).length} conversation trees.`);
