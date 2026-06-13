// Render the default Open Graph image (1200x630) from an inline SVG via sharp.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og-default.png');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g1" cx="85%" cy="0%" r="60%"><stop offset="0%" stop-color="#22D3EE" stop-opacity="0.16"/><stop offset="100%" stop-color="#22D3EE" stop-opacity="0"/></radialGradient>
    <radialGradient id="g2" cx="8%" cy="100%" r="60%"><stop offset="0%" stop-color="#FF5E1A" stop-opacity="0.20"/><stop offset="100%" stop-color="#FF5E1A" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#1F2937" stroke-width="1"/></pattern>
  </defs>
  <rect width="1200" height="630" fill="#0A0E17"/>
  <rect width="1200" height="630" fill="url(#grid)" opacity="0.5"/>
  <rect width="1200" height="630" fill="url(#g1)"/>
  <rect width="1200" height="630" fill="url(#g2)"/>

  <!-- ignition hex -->
  <g transform="translate(600,212)">
    <polygon points="70,0 35,-60.6 -35,-60.6 -70,0 -35,60.6 35,60.6" fill="none" stroke="#22D3EE" stroke-width="4" stroke-linejoin="round"/>
    <path d="M0,-56 L9.6,-9.6 56,0 9.6,9.6 0,56 -9.6,9.6 -56,0 -9.6,-9.6 Z" fill="#FF5E1A"/>
    <circle cx="0" cy="0" r="9" fill="#FFF3E9"/>
  </g>

  <!-- wordmark -->
  <text x="600" y="385" text-anchor="middle" font-family="Saira, Arial, sans-serif" font-weight="800" font-size="86" letter-spacing="3" fill="#E6EDF6">IGNITION<tspan fill="#8B97AA" font-weight="500" font-family="monospace" font-size="62" letter-spacing="10">SIM</tspan></text>

  <!-- tagline -->
  <text x="600" y="450" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="30" fill="#FF7A3D">Where every great rig starts.</text>
  <text x="600" y="520" text-anchor="middle" font-family="monospace" font-size="20" letter-spacing="6" fill="#5A6678">RACING · FLIGHT · SPACE · MARINE · GOLF</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('wrote', out);
