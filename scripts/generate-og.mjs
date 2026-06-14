import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const W = 1200;
const H = 630;

async function generateOG() {
  console.log('Generating OG image...');

  const profilePath = path.join(publicDir, 'profile-haikal.jpg');

  // Create circular profile
  const circleMask = Buffer.from(
    `<svg width="220" height="220"><circle cx="110" cy="110" r="110" fill="white"/></svg>`
  );
  const profileCircle = await sharp(profilePath)
    .resize(220, 220, { fit: 'cover' })
    .composite([{ input: circleMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Profile border ring
  const profileRing = await sharp(profileCircle)
    .composite([{
      input: Buffer.from(
        `<svg width="220" height="220">
          <circle cx="110" cy="110" r="106" fill="none" stroke="rgba(0,212,255,0.2)" stroke-width="4"/>
          <circle cx="110" cy="110" r="102" fill="none" stroke="rgba(0,212,255,0.15)" stroke-width="1"/>
          <circle cx="195" cy="195" r="14" fill="#05050A" stroke="rgba(0,212,255,0.3)" stroke-width="2"/>
          <circle cx="195" cy="195" r="7" fill="#00FF88"/>
        </svg>`
      ),
      blend: 'over'
    }])
    .png()
    .toBuffer();

  // Build full SVG background + text
  const gridDots = [];
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 12; j++) {
      gridDots.push(`<circle cx="${60 + i * 60}" cy="${50 + j * 50}" r="1.5"/>`);
    }
  }

  const fullSvg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#05050A"/>
        <stop offset="50%" stop-color="#08081A"/>
        <stop offset="100%" stop-color="#05050A"/>
      </linearGradient>
      <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00D4FF"/>
        <stop offset="100%" stop-color="#7C3AED"/>
      </linearGradient>
      <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00D4FF"/>
        <stop offset="100%" stop-color="#00E5A0"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#bg)"/>
    <g fill="rgba(0,212,255,0.04)">${gridDots.join('')}</g>
    <ellipse cx="900" cy="315" rx="350" ry="250" fill="rgba(0,212,255,0.03)"/>
    <rect width="${W}" height="4" fill="url(#accent)"/>
    <rect y="${H - 2}" width="${W}" height="2" fill="url(#accent)" opacity="0.3"/>
    <text x="30" y="40" font-family="monospace" font-size="11" fill="rgba(0,212,255,0.12)">haikal@network-engineer:~/og</text>
    <text x="420" y="275" font-family="system-ui, sans-serif" font-size="50" font-weight="800" fill="#FFFFFF">MUHAMMAD</text>
    <text x="420" y="332" font-family="system-ui, sans-serif" font-size="50" font-weight="800" fill="url(#cyanGrad)">HAIKAL</text>
    <text x="640" y="332" font-family="system-ui, sans-serif" font-size="50" font-weight="300" fill="#666666">RAMADHIKA</text>
    <rect x="420" y="352" width="330" height="28" rx="14" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.2)" stroke-width="1"/>
    <text x="585" y="371" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#00D4FF" text-anchor="middle" letter-spacing="2">NETWORK ENGINEER · CCNA · MTCRE</text>
    <text x="420" y="415" font-family="system-ui, sans-serif" font-size="14" fill="#999999">
      <tspan x="420" dy="0">NOC &amp; Network Security professional — specializing in</tspan>
      <tspan x="420" dy="20">routing, switching, and network security.</tspan>
    </text>
    <text x="420" y="475" font-family="monospace" font-size="12" fill="rgba(0,212,255,0.2)" letter-spacing="1">~/$ systemctl status network-engineer.service  ● active (running)</text>
    <g font-family="monospace" font-size="11">
      <circle cx="30" cy="600" r="3" fill="#00D4FF" opacity="0.6"/>
      <text x="42" y="604" fill="rgba(255,255,255,0.15)">7+ Certifications</text>
      <circle cx="200" cy="600" r="3" fill="#00FF88" opacity="0.6"/>
      <text x="212" y="604" fill="rgba(255,255,255,0.15)">5+ Books Published</text>
      <circle cx="370" cy="600" r="3" fill="#7C3AED" opacity="0.6"/>
      <text x="382" y="604" fill="rgba(255,255,255,0.15)">70+ Students Trained</text>
      <circle cx="560" cy="600" r="3" fill="#F59E0B" opacity="0.6"/>
      <text x="572" y="604" fill="rgba(255,255,255,0.15)">Network Security</text>
    </g>
    <path d="M 15 80 L 15 15 L 80 15" fill="none" stroke="rgba(0,212,255,0.06)" stroke-width="2"/>
  </svg>`);

  // Render SVG to PNG
  const bgImage = await sharp(fullSvg).png().toBuffer();

  // Composite profile photo
  const result = await sharp(bgImage)
    .composite([
      { input: profileRing, top: 205, left: 120 }
    ])
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));

  console.log('OG image generated: public/og-image.png');
}

generateOG().catch(err => { console.error(err); process.exit(1); });
