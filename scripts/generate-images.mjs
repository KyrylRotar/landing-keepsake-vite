import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const output = 'src/assets/images';
const artwork = [
  {
    name: 'work-01',
    kind: 'coffee',
    title: 'CAFÉ LOU',
    colors: ['#ddd2c0', '#573f36', '#f7f1e7'],
  },
  {
    name: 'work-02',
    kind: 'coast',
    title: 'ONDA',
    colors: ['#c5d8d1', '#517267', '#f8f2e7'],
  },
  {
    name: 'work-03',
    kind: 'sun',
    title: 'SUNDAY SUPPLY',
    colors: ['#f2c95f', '#dc684b', '#f8eed8'],
  },
  {
    name: 'work-04',
    kind: 'botanical',
    title: 'FORMA BOTANICA',
    colors: ['#596750', '#e3b68c', '#f4e9d8'],
  },
  {
    name: 'work-05',
    kind: 'atelier',
    title: 'ATELIER NO. 8',
    colors: ['#d2c8bc', '#252526', '#f5f1e9'],
  },
  {
    name: 'work-06',
    kind: 'wellness',
    title: 'GOOD HABIT',
    colors: ['#e7b5a9', '#814b47', '#f7eee3'],
  },
  {
    name: 'work-07',
    kind: 'field',
    title: 'FIELD NOTES',
    colors: ['#a9b5b1', '#344a46', '#eee9db'],
  },
  {
    name: 'work-08',
    kind: 'common',
    title: 'COMMON GROUND',
    colors: ['#bd6955', '#f0d9b8', '#372f29'],
  },
  {
    name: 'work-09',
    kind: 'home',
    title: 'THE MODERN HOME',
    colors: ['#d8d0c3', '#59615c', '#f3eee6'],
  },
  {
    name: 'journal-01',
    kind: 'journal',
    title: 'FINDING THE STORY',
    colors: ['#d9c5a6', '#72513c', '#f4ede0'],
  },
  {
    name: 'journal-02',
    kind: 'journal',
    title: 'A LITTLE LESS',
    colors: ['#cad4c4', '#405341', '#f3eee2'],
  },
  {
    name: 'journal-03',
    kind: 'journal',
    title: 'FIRST DRAFTS',
    colors: ['#ddc1bc', '#714a49', '#f7eee4'],
  },
  {
    name: 'journal-04',
    kind: 'journal',
    title: 'GOOD COLLABORATION',
    colors: ['#c5d2d7', '#435862', '#f0ede4'],
  },
];

function artworkSvg({ kind, title, colors }) {
  const [background, ink, paper] = colors;
  const designs = {
    coffee: `
      <circle cx="590" cy="170" r="115" fill="${paper}" opacity=".72"/>
      <rect x="113" y="106" width="270" height="420" rx="8" fill="${paper}" transform="rotate(-7 113 106)"/>
      <text x="151" y="220" fill="${ink}" font-size="32" letter-spacing="5">${title}</text>
      <text x="151" y="260" fill="${ink}" font-size="13" letter-spacing="3">GOOD COFFEE, GOOD COMPANY</text>
      <ellipse cx="535" cy="461" rx="153" ry="33" fill="${ink}" opacity=".13"/>
      <path d="M427 280h204v160a42 42 0 0 1-42 42h-120a42 42 0 0 1-42-42z" fill="${paper}"/>
      <path d="M631 312h33a42 42 0 0 1 0 84h-33" fill="none" stroke="${paper}" stroke-width="24"/>
      <path d="M442 316h174v40H442z" fill="${ink}"/>
      <text x="458" y="342" fill="${paper}" font-size="13" letter-spacing="3">CAFÉ LOU</text>`,
    coast: `
      <circle cx="628" cy="145" r="72" fill="${paper}"/>
      <path d="M0 398c132-53 208-30 332 5s222 39 468-29v258H0z" fill="${ink}" opacity=".2"/>
      <path d="M0 460c151-71 283-22 420 8s255 13 380-36v200H0z" fill="${paper}" opacity=".68"/>
      <rect x="286" y="118" width="230" height="350" rx="34" fill="${paper}"/>
      <rect x="350" y="89" width="102" height="49" rx="10" fill="${ink}"/>
      <text x="340" y="265" fill="${ink}" font-size="43" letter-spacing="8">${title}</text>
      <text x="347" y="300" fill="${ink}" font-size="13" letter-spacing="4">SEA + STILLNESS</text>
      <path d="M374 344c26-20 50-20 76 0-26 20-50 20-76 0z" fill="none" stroke="${ink}" stroke-width="3"/>`,
    sun: `
      <circle cx="594" cy="314" r="178" fill="${ink}"/>
      <circle cx="594" cy="314" r="126" fill="${background}"/>
      <path d="M0 474h800v158H0z" fill="${paper}"/>
      <rect x="82" y="70" width="235" height="485" fill="${paper}" transform="rotate(-5 82 70)"/>
      <text x="113" y="231" fill="${ink}" font-size="28" letter-spacing="3">A SLOW</text>
      <text x="113" y="270" fill="${ink}" font-size="28" letter-spacing="3">KIND OF</text>
      <text x="113" y="309" fill="${ink}" font-size="28" letter-spacing="3">SUNDAY</text>
      <text x="114" y="493" fill="${ink}" font-size="17" letter-spacing="2">${title}</text>
      <path d="M510 304h168M594 220v188M535 255l118 118M653 255 535 373" stroke="${ink}" stroke-width="3" opacity=".8"/>`,
    botanical: `
      <path d="M80 0h720v632H80z" fill="${ink}"/>
      <path d="M84 500c90-200 190-284 320-352M211 410c-42-90-69-153-58-251M290 346c53-55 91-116 94-207M188 428c75-22 139-22 202-2" fill="none" stroke="${paper}" stroke-width="4" opacity=".75"/>
      <g fill="${background}"><ellipse cx="153" cy="282" rx="35" ry="88" transform="rotate(-30 153 282)"/><ellipse cx="273" cy="299" rx="34" ry="84" transform="rotate(42 273 299)"/><ellipse cx="391" cy="212" rx="30" ry="78" transform="rotate(25 391 212)"/></g>
      <rect x="500" y="156" width="207" height="301" rx="26" fill="${paper}"/>
      <rect x="548" y="124" width="111" height="46" rx="8" fill="${background}"/>
      <text x="521" y="277" fill="${ink}" font-size="20" letter-spacing="3">FORMA</text>
      <text x="521" y="307" fill="${ink}" font-size="14" letter-spacing="2">BOTANICA</text>
      <path d="M557 352c30-36 59-36 89 0-30 36-59 36-89 0z" fill="none" stroke="${ink}" stroke-width="2"/>`,
    atelier: `
      <rect x="0" y="0" width="800" height="632" fill="${background}"/>
      <rect x="91" y="117" width="382" height="397" fill="${paper}" transform="rotate(-7 91 117)"/>
      <rect x="408" y="135" width="278" height="354" fill="${ink}" transform="rotate(5 408 135)"/>
      <path d="M143 211h221M143 225h162" stroke="${ink}" stroke-width="2" opacity=".5"/>
      <text x="144" y="310" fill="${ink}" font-size="34" letter-spacing="3">ATELIER</text>
      <text x="144" y="355" fill="${ink}" font-size="34" letter-spacing="3">NO. 8</text>
      <circle cx="276" cy="427" r="45" fill="none" stroke="${ink}" stroke-width="2"/>
      <text x="477" y="303" fill="${paper}" font-size="19" letter-spacing="2">${title}</text>
      <path d="M484 337h119M484 351h83M485 391h146" stroke="${paper}" stroke-width="2" opacity=".7"/>`,
    wellness: `
      <rect x="0" y="0" width="800" height="632" fill="${background}"/>
      <circle cx="601" cy="158" r="128" fill="${paper}" opacity=".68"/>
      <rect x="97" y="88" width="258" height="450" rx="8" fill="${paper}"/>
      <text x="130" y="177" fill="${ink}" font-size="21" letter-spacing="3">GOOD</text>
      <text x="130" y="210" fill="${ink}" font-size="21" letter-spacing="3">HABIT</text>
      <text x="130" y="476" fill="${ink}" font-size="12" letter-spacing="2">TAKE A MOMENT</text>
      <rect x="425" y="240" width="206" height="238" rx="27" fill="${paper}"/>
      <rect x="480" y="207" width="96" height="50" rx="8" fill="${ink}"/>
      <path d="M460 330h136" stroke="${background}" stroke-width="3"/>
      <text x="461" y="366" fill="${ink}" font-size="21" letter-spacing="3">GOOD</text>
      <text x="461" y="394" fill="${ink}" font-size="21" letter-spacing="3">HABIT</text>`,
    field: `
      <rect width="800" height="632" fill="${background}"/>
      <path d="M0 486c170-98 322-47 800-149v295H0z" fill="${ink}"/>
      <rect x="110" y="91" width="360" height="426" fill="${paper}" transform="rotate(-6 110 91)"/>
      <text x="158" y="198" fill="${ink}" font-size="16" letter-spacing="5">FIELD NOTES</text>
      <path d="M171 251h218M171 272h166M171 293h200" stroke="${ink}" stroke-width="2" opacity=".5"/>
      <circle cx="602" cy="285" r="124" fill="${paper}" opacity=".88"/>
      <path d="M515 326c56-89 109-115 179-125-30 83-87 126-179 125z" fill="${background}"/>
      <path d="M530 328c52-29 92-58 142-104" fill="none" stroke="${ink}" stroke-width="3"/>`,
    common: `
      <rect width="800" height="632" fill="${background}"/>
      <circle cx="598" cy="152" r="90" fill="${paper}" opacity=".72"/>
      <rect x="100" y="80" width="252" height="463" fill="${ink}"/>
      <path d="M128 80h195v118H128z" fill="${paper}"/>
      <text x="143" y="149" fill="${ink}" font-size="16" letter-spacing="2">COMMON</text>
      <text x="143" y="173" fill="${ink}" font-size="16" letter-spacing="2">GROUND</text>
      <text x="133" y="264" fill="${paper}" font-size="21" letter-spacing="2">GOOD THINGS</text>
      <text x="133" y="294" fill="${paper}" font-size="21" letter-spacing="2">GROW HERE</text>
      <path d="M448 272h189v151a36 36 0 0 1-36 36h-117a36 36 0 0 1-36-36z" fill="${paper}"/>
      <path d="M637 302h33a39 39 0 0 1 0 78h-33" fill="none" stroke="${paper}" stroke-width="21"/>
      <rect x="448" y="297" width="189" height="47" fill="${ink}"/>
      <text x="475" y="327" fill="${paper}" font-size="13" letter-spacing="3">COMMON GROUND</text>`,
    home: `
      <rect width="800" height="632" fill="${background}"/>
      <rect x="0" y="0" width="800" height="397" fill="${paper}"/>
      <path d="M0 390h800v242H0z" fill="${background}"/>
      <path d="M96 0v397M700 0v397" stroke="${ink}" stroke-width="3" opacity=".3"/>
      <rect x="179" y="194" width="242" height="198" fill="${ink}"/>
      <rect x="196" y="211" width="208" height="145" fill="${paper}"/>
      <path d="M300 392v132M236 525h140" stroke="${ink}" stroke-width="10"/>
      <rect x="489" y="267" width="165" height="122" rx="40" fill="${ink}"/>
      <path d="M508 384v115M636 384v115" stroke="${ink}" stroke-width="9"/>
      <text x="76" y="579" fill="${ink}" font-size="20" letter-spacing="4">${title}</text>`,
    journal: `
      <rect width="800" height="632" fill="${background}"/>
      <circle cx="595" cy="312" r="185" fill="${ink}" opacity=".92"/>
      <path d="M465 310c50-93 111-120 216-126-35 106-107 151-216 126z" fill="${paper}"/>
      <path d="M480 315c73-39 121-77 174-124" fill="none" stroke="${background}" stroke-width="4"/>
      <rect x="65" y="71" width="315" height="490" fill="${paper}" transform="rotate(-5 65 71)"/>
      <text x="110" y="204" fill="${ink}" font-size="17" letter-spacing="3">STUDIO NOTES</text>
      <text x="110" y="280" fill="${ink}" font-size="30" letter-spacing="2">${title}</text>
      <path d="M110 322h200M110 341h158" stroke="${ink}" stroke-width="2" opacity=".45"/>
      <circle cx="235" cy="430" r="60" fill="${background}"/>`,
  };
  const illustration = designs[kind];
  if (!illustration) throw new Error(`Unknown artwork kind: ${kind}`);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="632" viewBox="0 0 800 632"><rect width="800" height="632" fill="${background}"/>${illustration}</svg>`;
}

await mkdir(output, { recursive: true });

for (const item of artwork) {
  const svg = Buffer.from(artworkSvg(item));

  for (const width of [400, 800]) {
    const image = sharp(svg).resize(width, Math.round(width * 0.79));
    await image
      .clone()
      .jpeg({ quality: 84 })
      .toFile(`${output}/${item.name}-${width}.jpg`);
    await image
      .clone()
      .webp({ quality: 84 })
      .toFile(`${output}/${item.name}-${width}.webp`);
    await image
      .clone()
      .avif({ quality: 58 })
      .toFile(`${output}/${item.name}-${width}.avif`);
  }

  await sharp(svg)
    .jpeg({ quality: 84 })
    .toFile(`${output}/${item.name}-800.jpg`);
}
