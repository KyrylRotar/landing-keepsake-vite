import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const output = 'src/assets/images';
const palettes = [
  ['#e2e0d7', '#2a2b2f'],
  ['#dac6a4', '#625243'],
  ['#29323a', '#c64d3e'],
  ['#eeece8', '#27282a'],
  ['#b2896f', '#e6ddd2'],
  ['#485c5b', '#d2b999'],
];

await mkdir(output, { recursive: true });

for (let index = 0; index < palettes.length; index += 1) {
  const name = `work-${String(index + 1).padStart(2, '0')}`;
  const [background, foreground] = palettes[index];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="632" viewBox="0 0 800 632">
    <rect width="800" height="632" fill="${background}"/>
    <rect x="80" y="78" width="640" height="476" fill="none" stroke="${foreground}" stroke-width="18"/>
    <circle cx="400" cy="316" r="118" fill="${foreground}"/>
    <rect x="332" y="248" width="136" height="136" fill="${background}" transform="rotate(12 400 316)"/>
  </svg>`;

  for (const width of [400, 800]) {
    const image = sharp(Buffer.from(svg)).resize(
      width,
      Math.round(width * 0.79),
    );
    await image
      .clone()
      .jpeg({ quality: 82 })
      .toFile(`${output}/${name}-${width}.jpg`);
    await image
      .clone()
      .webp({ quality: 82 })
      .toFile(`${output}/${name}-${width}.webp`);
    await image
      .clone()
      .avif({ quality: 55 })
      .toFile(`${output}/${name}-${width}.avif`);
  }

  await sharp(Buffer.from(svg))
    .resize(800, 632)
    .jpeg({ quality: 82 })
    .toFile(`${output}/${name}-800.jpg`);
}

for (let index = 1; index <= 3; index += 1) {
  const source = `work-${String(index).padStart(2, '0')}`;
  const target = `journal-${String(index).padStart(2, '0')}`;
  for (const width of [400, 800]) {
    for (const format of ['jpg', 'webp', 'avif']) {
      await sharp(`${output}/${source}-${width}.${format}`).toFile(
        `${output}/${target}-${width}.${format}`,
      );
    }
  }
  await sharp(`${output}/${source}-800.jpg`).toFile(
    `${output}/${target}-800.jpg`,
  );
}
