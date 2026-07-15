import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const contentRoot = path.join(root, 'src/content/articles');
const reportRoot = path.join(root, 'reports');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : entry.name.endsWith('.md') ? [full] : [];
  });
}

function fmValue(source, key) {
  const frontmatter = source.match(/^---\n([\s\S]*?)\n---/)?.[1] || '';
  return frontmatter.match(new RegExp(`^${key}:\\s*["']?([^\\n"']+)`, 'm'))?.[1]?.trim() || '';
}

function bodyOf(source) {
  return source.replace(/^---\n[\s\S]*?\n---/, '');
}

function wordCount(body) {
  return body
    .replace(/<[^>]+>/g, ' ')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/[#*_`>|~-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
}

function imageRecords(body) {
  const html = [...body.matchAll(/<img\s+([^>]+)>/g)].map((match) => ({
    src: match[1].match(/src=["']([^"']+)/)?.[1] || '',
    alt: match[1].match(/alt=["']([^"']*)/)?.[1] || '',
  }));
  const markdown = [...body.matchAll(/!\[([^\]]*)\]\(([^)]+)\)/g)].map((match) => ({ src: match[2], alt: match[1] }));
  return [...html, ...markdown].filter((image) => image.src);
}

function scoreArticle(file) {
  const source = fs.readFileSync(file, 'utf8');
  const body = bodyOf(source);
  const images = imageRecords(body);
  const uniqueImages = [...new Set(images.map((image) => image.src))];
  const searchable = (image) => `${image.src} ${image.alt}`.toLowerCase();
  const productImages = images.filter((image) => /\/images\/(gear|article-proofs)\//.test(image.src));
  const humanUseImages = images.filter((image) => /(real person|driver|pilot|golfer|swing|install|installation|mounted|fitted|in use|using|event|seat|cockpit|rig test|hands on)/i.test(searchable(image)) && !/ai editorial|ai-assisted/.test(searchable(image)));
  const curatorScenes = images.filter((image) => /\/images\/curator-scenes\//.test(image.src));
  const diagrams = images.filter((image) => /(infographic|diagram|routing|geometry|decision|map|flow|ladder|wiring)/i.test(searchable(image)));
  const externalUrls = [...new Set([...body.matchAll(/https?:\/\/[^\s)"'<>]+/g)].map((match) => match[0].replace(/[.,;:]$/, '')))];
  const sourceStart = body.search(/^##+\s+(Sources|Research|Source shelf)/im);
  const sourceUrls = sourceStart >= 0
    ? [...new Set([...body.slice(sourceStart).matchAll(/https?:\/\/[^\s)"'<>]+/g)].map((match) => match[0].replace(/[.,;:]$/, '')))]
    : externalUrls.filter((url) => !/amazon\.|amzn\./i.test(url));
  const amazon = externalUrls.filter((url) => /amazon\.|amzn\./i.test(url));
  const directAmazon = amazon.filter((url) => /\/dp\/[A-Z0-9]{10}(?:[?/#]|$)/i.test(url));
  const words = wordCount(body);
  const headings = (body.match(/^##\s+/gm) || []).length;
  const faqs = (source.match(/^\s*- q:\s+/gm) || []).length;
  const uniqueRatio = images.length ? uniqueImages.length / images.length : 0;
  const status = fmValue(source, 'goldStatus') || 'refresh';
  const revenueTier = fmValue(source, 'revenueTier') || 'B';
  const dimensions = {
    decisionDepth: Math.min(15, words / 2400 * 15),
    sourceEvidence: Math.min(15, sourceUrls.length / 10 * 15),
    imageBreadth: Math.min(10, uniqueImages.length / 12 * 10),
    imageUniqueness: uniqueRatio * 10,
    productProof: Math.min(10, productImages.length / 6 * 10),
    humanUseProof: Math.min(10, humanUseImages.length / 2 * 10),
    curatorAction: Math.min(10, curatorScenes.length / 4 * 10),
    practicalDiagrams: Math.min(8, diagrams.length / 2 * 8),
    answerStructure: Math.min(7, headings / 8 * 4 + faqs / 5 * 3),
    commerceIntegrity: amazon.length ? directAmazon.length / amazon.length * 5 : 3,
  };
  const score = Math.round(Object.values(dimensions).reduce((sum, value) => sum + value, 0));
  const gaps = [];
  if (words < 1800) gaps.push('decision depth');
  if (sourceUrls.length < 8) gaps.push('source evidence');
  if (uniqueImages.length < 10) gaps.push('unique images');
  if (uniqueRatio < 0.7) gaps.push('repeated image monotony');
  if (humanUseImages.length < 1) gaps.push('real use/install proof');
  if (curatorScenes.length < 4) gaps.push('four distinct curator actions');
  if (/class=["'][^"']*shotgrid/i.test(body)) gaps.push('clumped marketplace image grid');
  if (diagrams.length < 1) gaps.push('practical diagram');
  if (amazon.length && directAmazon.length !== amazon.length) gaps.push('non-direct Amazon link');
  return {
    id: path.relative(contentRoot, file).replace(/\.md$/, ''),
    title: fmValue(source, 'title'),
    bay: fmValue(source, 'bay'),
    author: fmValue(source, 'author'),
    status,
    revenueTier,
    score,
    grade: score >= 90 ? 'A+' : score >= 85 ? 'A' : score >= 78 ? 'B' : score >= 68 ? 'C' : 'D',
    words,
    sourceUrls: sourceUrls.length,
    imagePlacements: images.length,
    uniqueImages: uniqueImages.length,
    imageUniqueness: Number(uniqueRatio.toFixed(2)),
    productImages: productImages.length,
    humanUseImages: humanUseImages.length,
    curatorScenes: curatorScenes.length,
    diagrams: diagrams.length,
    amazonLinks: amazon.length,
    directAmazonLinks: directAmazon.length,
    dimensions: Object.fromEntries(Object.entries(dimensions).map(([key, value]) => [key, Math.round(value * 10) / 10])),
    gaps,
  };
}

const rows = walk(contentRoot).map(scoreArticle).sort((a, b) => a.score - b.score || a.id.localeCompare(b.id));
const certified = rows.filter((row) => row.status === 'certified');
const average = (list, key) => list.length ? Math.round(list.reduce((sum, row) => sum + row[key], 0) / list.length * 10) / 10 : 0;
const summary = {
  generated: new Date().toISOString(),
  totals: { all: rows.length, certified: certified.length },
  certified: {
    averageScore: average(certified, 'score'),
    averageWords: average(certified, 'words'),
    averageSourceUrls: average(certified, 'sourceUrls'),
    averageUniqueImages: average(certified, 'uniqueImages'),
    averageHumanUseImages: average(certified, 'humanUseImages'),
    averageCuratorScenes: average(certified, 'curatorScenes'),
    averageDiagrams: average(certified, 'diagrams'),
    gradeCounts: certified.reduce((out, row) => ({ ...out, [row.grade]: (out[row.grade] || 0) + 1 }), {},),
    revenueATriage: certified.filter((row) => row.revenueTier === 'A' && row.score < 85).map((row) => row.id),
  },
};

fs.mkdirSync(reportRoot, { recursive: true });
fs.writeFileSync(path.join(reportRoot, 'ignitionsim-worldclass-quality.json'), `${JSON.stringify({ summary, articles: rows }, null, 2)}\n`);
const queue = [...certified].sort((a, b) => {
  const tier = { A: 3, B: 2, C: 1 };
  return (tier[b.revenueTier] - tier[a.revenueTier]) || a.score - b.score;
}).slice(0, 35);
fs.writeFileSync(path.join(reportRoot, 'ignitionsim-worldclass-quality.md'), [
  '# IgnitionSim World-Class Quality Scoreboard',
  '',
  `Generated: ${summary.generated}`,
  '',
  `- Certified articles: ${certified.length}`,
  `- Certified average: ${summary.certified.averageScore}/100`,
  `- Average editorial words: ${summary.certified.averageWords}`,
  `- Average source URLs: ${summary.certified.averageSourceUrls}`,
  `- Average unique images: ${summary.certified.averageUniqueImages}`,
  `- Average real-use/install images: ${summary.certified.averageHumanUseImages}`,
  `- Average curator-action scenes: ${summary.certified.averageCuratorScenes}`,
  `- Average practical diagrams: ${summary.certified.averageDiagrams}`,
  '',
  '## Revenue-Weighted Rescue Queue',
  '',
  '| Tier | Score | Article | Primary gaps |',
  '|---|---:|---|---|',
  ...queue.map((row) => `| ${row.revenueTier} | ${row.score} | ${row.title.replaceAll('|', '\\|')} | ${row.gaps.join(', ')} |`),
  '',
  'This score prioritizes visual and buying evidence. It never overrides factual accuracy, image rights, exact product identity, or editorial judgment.',
  '',
].join('\n'));

console.log(JSON.stringify(summary, null, 2));
