import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const manifestDirs = [
  path.join(root, 'docs/claude-run/image-manifests'),
  path.join(root, 'docs/claude-run-2/image-manifests'),
];

const themes = {
  racing: { accent: '#ff5e1a', bg: '#fff3ed', dark: '#101820', soft: '#ffe0d1' },
  golf: { accent: '#16a34a', bg: '#ecfff5', dark: '#0e1813', soft: '#c9f7df' },
  flight: { accent: '#0284c7', bg: '#edf6ff', dark: '#101827', soft: '#d6ecff' },
  space: { accent: '#9333ea', bg: '#f5efff', dark: '#151026', soft: '#eadcff' },
  marine: { accent: '#0f766e', bg: '#ecfeff', dark: '#0d1f22', soft: '#cbfbf4' },
};

const esc = (value = '') => String(value).replace(/[&<>"']/g, (ch) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
}[ch]));

function wrap(text, max = 36, maxLines = 5) {
  const words = String(text || '').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean);
  const lines = [];
  let current = '';
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > max && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
    if (lines.length >= maxLines) break;
  }
  if (current && lines.length < maxLines) lines.push(current);
  return lines;
}

const textLines = (text, x, y, size, color, max = 36, weight = 800, gap = 1.16) =>
  wrap(text, max).map((line, i) =>
    `<text x="${x}" y="${y + i * size * gap}" font-family="Inter, Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}">${esc(line)}</text>`
  ).join('');

function imageRefs(source) {
  return [
    ...source.matchAll(/!\[[^\]]*]\(([^)]+)\)/g),
    ...source.matchAll(/<img\s+[^>]*src=["']([^"']+)["']/g),
  ].map((match) => match[1]).filter(Boolean);
}

async function readJsonFiles() {
  const out = [];
  for (const dir of manifestDirs) {
    try {
      const files = await fs.readdir(dir);
      for (const file of files.filter((f) => f.endsWith('.json')).sort()) {
        out.push(JSON.parse(await fs.readFile(path.join(dir, file), 'utf8')));
      }
    } catch {
      // Optional second-run directory may not exist yet.
    }
  }
  return out;
}

function svgForPrompt({ prompt, bay, slug, index }) {
  const theme = themes[bay] || themes.racing;
  const content = (prompt.content || []).slice(0, 6);
  const footer = 'Decision map. Verify prices, firmware, fit, and room constraints before buying.';
  const cards = content.map((line, i) => {
    const cols = content.length <= 4 ? 2 : 3;
    const w = cols === 2 ? 650 : 430;
    const h = cols === 2 ? 185 : 170;
    const x = 82 + (i % cols) * (w + 45);
    const y = 330 + Math.floor(i / cols) * (h + 34);
    return `
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="24" fill="#ffffff" stroke="${theme.accent}" stroke-width="3"/>
      <circle cx="${x + 48}" cy="${y + 50}" r="24" fill="${theme.accent}"/>
      <text x="${x + 39}" y="${y + 60}" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900" fill="#ffffff">${i + 1}</text>
      ${textLines(line, x + 88, y + 54, cols === 2 ? 25 : 22, theme.dark, cols === 2 ? 34 : 24, 850)}
    `;
  }).join('');

  return `
    <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glow" cx="80%" cy="10%" r="80%">
          <stop offset="0" stop-color="${theme.accent}" stop-opacity=".28"/>
          <stop offset="1" stop-color="${theme.accent}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1600" height="1000" fill="${theme.bg}"/>
      <rect width="1600" height="1000" fill="url(#glow)"/>
      <g opacity=".22">
        ${Array.from({ length: 34 }, (_, i) => `<line x1="${i * 52}" y1="0" x2="${i * 52}" y2="1000" stroke="${theme.dark}" stroke-width="1"/>`).join('')}
        ${Array.from({ length: 21 }, (_, i) => `<line x1="0" y1="${i * 52}" x2="1600" y2="${i * 52}" stroke="${theme.dark}" stroke-width="1"/>`).join('')}
      </g>
      <rect x="76" y="68" width="330" height="48" rx="10" fill="${theme.accent}" stroke="${theme.dark}" stroke-width="3"/>
      <text x="96" y="100" font-family="JetBrains Mono, Courier New, monospace" font-size="17" font-weight="900" letter-spacing="3" fill="${theme.dark}">IGNITION FIELD MAP</text>
      ${textLines(prompt.title || prompt.id || slug, 78, 190, 58, theme.dark, 38, 900)}
      <rect x="1180" y="92" width="302" height="90" rx="20" fill="#ffffff" stroke="${theme.accent}" stroke-width="3"/>
      <text x="1210" y="129" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="900" fill="${theme.dark}">Field-tested setup map</text>
      <text x="1210" y="160" font-family="Inter, Arial, sans-serif" font-size="17" font-weight="800" fill="#64748b">${esc(bay)} · map ${index + 1}</text>
      ${cards}
      <rect x="80" y="865" width="1440" height="76" rx="24" fill="${theme.dark}"/>
      ${textLines(footer, 118, 912, 22, '#ffffff', 96, 750)}
      <text x="80" y="976" font-family="JetBrains Mono, Courier New, monospace" font-size="15" font-weight="800" letter-spacing="2" fill="${theme.accent}">${esc(slug)} · ${esc(prompt.id || `visual-${index + 1}`)}</text>
    </svg>
  `;
}

async function renderPromptImage({ prompt, bay, slug, index }) {
  const id = String(prompt.id || `visual-${index + 1}`).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const rel = `/images/infographics/${bay}/${slug}-${id}.png`;
  const abs = path.join(publicDir, rel.replace(/^\//, ''));
  await fs.mkdir(path.dirname(abs), { recursive: true });
  await sharp(Buffer.from(svgForPrompt({ prompt, bay, slug, index }))).png().toFile(abs);
  return {
    rel,
    title: prompt.title || prompt.id || 'IgnitionSim field map',
  };
}

function insertionBlock(images) {
  return [
    '## Visual Setup Maps',
    '',
    ...images.flatMap((img) => [
      `![${img.title}](${img.rel})`,
      '',
    ]),
  ].join('\n');
}

async function main() {
  const manifests = await readJsonFiles();
  let generated = 0;
  let updated = 0;

  for (const manifest of manifests) {
    const slug = manifest.slug;
    const bay = manifest.bay;
    const articleFile = path.join(root, 'src/content/articles', bay, `${slug}.md`);
    let source;
    try {
      source = await fs.readFile(articleFile, 'utf8');
    } catch {
      continue;
    }

    const currentImages = imageRefs(source).filter((ref) => ref.startsWith('/images/'));
    const prompts = (manifest.infographicPrompts || []).filter((prompt) => prompt && (prompt.title || prompt.content?.length));
    if (!prompts.length) continue;

    const lowVisual = currentImages.length < 8;
    const count = lowVisual ? Math.min(4, prompts.length) : Math.min(1, prompts.length);
    const made = [];
    for (let i = 0; i < count; i += 1) {
      const image = await renderPromptImage({ prompt: prompts[i], bay, slug, index: i });
      made.push(image);
      generated += 1;
    }

    if (lowVisual && !source.includes('## Visual Setup Maps')) {
      const block = insertionBlock(made);
      if (source.includes('## Sources Checked')) {
        source = source.replace('\n## Sources Checked', `\n${block}\n## Sources Checked`);
      } else {
        source = `${source.trim()}\n\n${block}\n`;
      }
      await fs.writeFile(articleFile, source);
      updated += 1;
    }
  }

  console.log(`Generated Claude-run infographics: ${generated}`);
  console.log(`Inserted visual map sections: ${updated}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
