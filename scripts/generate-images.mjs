import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const output = 'src/assets/images';
const artwork = [
  {
    name: 'work-01',
    kind: 'tag',
    title: 'STUDIO TAG',
    colors: ['#a7cfc9', '#314c49', '#f5ead6'],
  },
  {
    name: 'work-02',
    kind: 'piece',
    title: 'PIECE PAPER',
    colors: ['#f0efec', '#292a2c', '#d96652'],
  },
  {
    name: 'work-03',
    kind: 'record',
    title: 'VINYL HOUSE',
    colors: ['#32373d', '#17191d', '#f3e8d7'],
  },
  {
    name: 'work-04',
    kind: 'volume',
    title: 'VOLUME 16',
    colors: ['#d5c5b3', '#3e4650', '#f4e8d4'],
  },
  {
    name: 'work-05',
    kind: 'profile',
    title: 'PROFILE UI',
    colors: ['#d88f7d', '#3e4c54', '#f5f1e8'],
  },
  {
    name: 'work-06',
    kind: 'cards',
    title: 'PAPER FORMS',
    colors: ['#f0efec', '#2d5554', '#e9c66c'],
  },
  {
    name: 'work-07',
    kind: 'wall',
    title: 'WALL STREET',
    colors: ['#d8dcda', '#2e454c', '#c85c50'],
  },
  {
    name: 'work-08',
    kind: 'john',
    title: 'JOHN DOE',
    colors: ['#41474c', '#272b30', '#e9cfb8'],
  },
  {
    name: 'work-09',
    kind: 'fabric',
    title: 'SEAL FABRIC',
    colors: ['#3b4651', '#e8e2d7', '#b55c50'],
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
    tag: `
      <rect x="0" y="0" width="800" height="632" fill="${background}"/>
      <circle cx="640" cy="114" r="95" fill="${paper}" opacity=".28"/>
      <path d="M173 94h358l78 82v308H173z" fill="${paper}" transform="rotate(-8 173 94)"/>
      <path d="m485 112 83 77-104 13z" fill="#e2d8c6"/>
      <circle cx="260" cy="172" r="11" fill="${background}"/>
      <text x="238" y="277" fill="${ink}" font-size="35" letter-spacing="6">${title}</text>
      <text x="239" y="311" fill="${ink}" font-size="14" letter-spacing="4">DESIGN FOR EVERY DAY</text>
      <path d="M245 358c55-43 97-43 152 0-55 43-97 43-152 0z" fill="none" stroke="${ink}" stroke-width="4"/>
      <path d="M265 421h208M265 439h142" stroke="${ink}" stroke-width="3" opacity=".55"/>
      <path d="M505 493 603 534" stroke="${ink}" stroke-width="5"/>`,
    piece: `
      <rect width="800" height="632" fill="${background}"/>
      <rect x="99" y="78" width="393" height="485" fill="${paper}" transform="rotate(-5 99 78)"/>
      <rect x="300" y="140" width="405" height="302" fill="#e4e0da" transform="rotate(4 300 140)"/>
      <text x="152" y="296" fill="${ink}" font-size="70" font-weight="700" letter-spacing="-2" transform="rotate(-5 152 296)">PIECE</text>
      <text x="151" y="360" fill="${paper}" stroke="${ink}" stroke-width="1" font-size="67" font-weight="700" letter-spacing="-2" transform="rotate(-5 151 360)">PAPER</text>
      <path d="M365 220h235M365 241h177M365 262h208" stroke="${ink}" stroke-width="3" opacity=".65"/>
      <circle cx="610" cy="386" r="33" fill="${background}"/>`,
    record: `
      <rect width="800" height="632" fill="${background}"/>
      <rect x="68" y="77" width="664" height="478" fill="#42484d"/>
      <circle cx="391" cy="316" r="205" fill="${ink}"/>
      <circle cx="391" cy="316" r="177" fill="none" stroke="#52565a" stroke-width="3"/>
      <circle cx="391" cy="316" r="144" fill="none" stroke="#52565a" stroke-width="2"/>
      <circle cx="391" cy="316" r="108" fill="none" stroke="#52565a" stroke-width="2"/>
      <circle cx="391" cy="316" r="72" fill="${paper}"/>
      <circle cx="391" cy="316" r="10" fill="${ink}"/>
      <text x="347" y="307" fill="${ink}" font-size="14" letter-spacing="3">SIDE A</text>
      <text x="338" y="332" fill="${ink}" font-size="11" letter-spacing="2">STUDIO 04</text>
      <path d="M530 168 691 124v95l-161 44z" fill="${paper}"/>
      <text x="553" y="189" fill="${ink}" font-size="14" letter-spacing="2">VINYL</text>`,
    volume: `
      <rect width="800" height="632" fill="${background}"/>
      <rect x="83" y="80" width="422" height="457" fill="${paper}" transform="rotate(4 83 80)"/>
      <path d="M546 125h124v382H546z" fill="${ink}" transform="rotate(9 546 125)"/>
      <text x="143" y="197" fill="${ink}" font-size="18" letter-spacing="5">AN INDEPENDENT JOURNAL</text>
      <text x="142" y="310" fill="${ink}" font-size="71" font-weight="700" letter-spacing="-3">VOL.</text>
      <text x="142" y="390" fill="${ink}" font-size="89" font-weight="700" letter-spacing="-5">16</text>
      <path d="M145 426h269" stroke="${paper}" stroke-width="2"/>
      <text x="148" y="468" fill="${ink}" font-size="16" letter-spacing="4">${title}</text>
      <circle cx="606" cy="314" r="31" fill="${paper}"/>`,
    profile: `
      <rect width="800" height="632" fill="${background}"/>
      <rect x="91" y="80" width="350" height="462" rx="8" fill="${paper}"/>
      <rect x="91" y="80" width="350" height="66" rx="8" fill="${ink}"/>
      <circle cx="131" cy="112" r="11" fill="#efb25e"/>
      <circle cx="163" cy="112" r="11" fill="#83c995"/>
      <circle cx="195" cy="112" r="11" fill="#e87b6d"/>
      <circle cx="265" cy="224" r="56" fill="#c6d9db"/>
      <circle cx="265" cy="207" r="20" fill="${ink}"/>
      <path d="M221 254c12-37 76-37 88 0" fill="${ink}"/>
      <text x="181" y="315" fill="${ink}" font-size="24" letter-spacing="3">${title}</text>
      <rect x="148" y="345" width="234" height="12" rx="6" fill="#d9dddc"/>
      <rect x="172" y="374" width="186" height="12" rx="6" fill="#d9dddc"/>
      <rect x="191" y="420" width="148" height="41" rx="20" fill="${background}"/>
      <rect x="481" y="185" width="223" height="309" rx="6" fill="${ink}"/>
      <rect x="500" y="211" width="185" height="196" fill="${paper}"/>
      <path d="M516 365c35-56 68-56 103 0 24-37 43-43 61-26v68H516z" fill="#83b49c"/>
      <path d="M500 433h185" stroke="${paper}" stroke-width="3"/>`,
    cards: `
      <rect width="800" height="632" fill="${background}"/>
      <circle cx="652" cy="117" r="122" fill="${paper}" opacity=".55"/>
      <rect x="105" y="141" width="354" height="274" fill="${ink}" transform="rotate(-8 105 141)"/>
      <rect x="348" y="215" width="335" height="247" fill="${paper}" transform="rotate(7 348 215)"/>
      <rect x="151" y="384" width="357" height="147" fill="${paper}" transform="rotate(-3 151 384)"/>
      <text x="160" y="249" fill="${paper}" font-size="26" letter-spacing="4">PAPER FORMS</text>
      <path d="M162 281h183M162 301h137" stroke="${paper}" stroke-width="3" opacity=".65"/>
      <circle cx="567" cy="322" r="56" fill="${background}"/>
      <text x="176" y="470" fill="${ink}" font-size="24" letter-spacing="5">FORM / FUNCTION</text>
      <path d="M175 492h219" stroke="${ink}" stroke-width="2"/>`,
    wall: `
      <rect width="800" height="632" fill="${background}"/>
      <path d="M0 470h800v162H0z" fill="#c6cbc8"/>
      <rect x="120" y="75" width="316" height="439" fill="${paper}" transform="rotate(-4 120 75)"/>
      <rect x="468" y="132" width="216" height="310" fill="${ink}" transform="rotate(5 468 132)"/>
      <text x="169" y="187" fill="${ink}" font-size="18" letter-spacing="5">A PLACE TO</text>
      <text x="163" y="260" fill="${ink}" font-size="62" font-weight="700" letter-spacing="-3">MAKE</text>
      <text x="162" y="322" fill="${ink}" font-size="62" font-weight="700" letter-spacing="-3">GOOD</text>
      <text x="162" y="384" fill="${ink}" font-size="62" font-weight="700" letter-spacing="-3">THINGS</text>
      <text x="501" y="276" fill="${paper}" font-size="21" letter-spacing="4">WALL</text>
      <text x="501" y="311" fill="${paper}" font-size="21" letter-spacing="4">STREET</text>
      <circle cx="568" cy="366" r="30" fill="${background}"/>`,
    john: `
      <rect width="800" height="632" fill="${background}"/>
      <rect x="88" y="117" width="379" height="365" fill="${paper}" transform="rotate(-8 88 117)"/>
      <rect x="380" y="183" width="311" height="243" fill="${ink}" transform="rotate(7 380 183)"/>
      <circle cx="568" cy="292" r="68" fill="${paper}"/>
      <path d="M456 380h192" stroke="${paper}" stroke-width="3"/>
      <text x="145" y="259" fill="${ink}" font-size="42" font-weight="700" letter-spacing="2">JOHN</text>
      <text x="145" y="307" fill="${ink}" font-size="42" font-weight="700" letter-spacing="2">DOE</text>
      <text x="148" y="351" fill="${ink}" font-size="15" letter-spacing="3">DESIGNER / MAKER</text>
      <path d="M150 386h203M150 404h167" stroke="${ink}" stroke-width="2" opacity=".6"/>`,
    fabric: `
      <rect width="800" height="632" fill="${background}"/>
      <path d="M83 171h634v289H83z" fill="${ink}" transform="rotate(-5 83 171)"/>
      <path d="M121 205h558v218H121z" fill="none" stroke="${paper}" stroke-width="4" transform="rotate(-5 121 205)"/>
      <text x="185" y="313" fill="${paper}" font-size="43" font-weight="700" letter-spacing="5" transform="rotate(-5 185 313)">SEAL FABRIC</text>
      <circle cx="592" cy="387" r="58" fill="${background}"/>
      <circle cx="592" cy="387" r="42" fill="none" stroke="${paper}" stroke-width="3"/>
      <path d="M570 387h44M592 365v44" stroke="${paper}" stroke-width="3"/>
      <path d="M102 504h250M102 521h174" stroke="${paper}" stroke-width="3" opacity=".45"/>`,
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

const heroSvg = Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="800" height="533" viewBox="0 0 800 533">
    <rect width="800" height="533" fill="#d9e2df"/>
    <path d="M0 400c130-35 229-23 347 18s272 46 453-21v136H0z" fill="#bacbc5"/>
    <circle cx="616" cy="135" r="112" fill="#f3d9ae"/>
    <rect x="83" y="59" width="360" height="430" rx="3" fill="#f7f3e8" transform="rotate(-7 83 59)"/>
    <path d="M125 131h183v10H125z" fill="#f95858"/>
    <text x="128" y="220" fill="#3a3a3c" font-family="Arial,sans-serif" font-size="26" letter-spacing="5">KEEPSAKE</text>
    <text x="128" y="255" fill="#666a6e" font-family="Arial,sans-serif" font-size="12" letter-spacing="3">IDEAS INTO BEAUTIFUL THINGS</text>
    <path d="M131 299h214M131 314h164M131 329h189" stroke="#b8b2a7" stroke-width="2"/>
    <circle cx="558" cy="338" r="149" fill="#34363a"/>
    <circle cx="558" cy="338" r="94" fill="#25272b"/>
    <circle cx="558" cy="338" r="42" fill="#f2c95f"/>
    <circle cx="558" cy="338" r="8" fill="#34363a"/>
    <path d="M532 313h52v50h-52z" fill="#f7f3e8"/>
    <text x="538" y="343" fill="#3a3a3c" font-family="Arial,sans-serif" font-size="7" letter-spacing="1">KS STUDIO</text>
    <rect x="373" y="153" width="96" height="212" fill="#f4c75e" transform="rotate(8 373 153)"/>
    <text x="411" y="236" fill="#3a3a3c" font-family="Arial,sans-serif" font-size="12" letter-spacing="2" transform="rotate(8 411 236)">MAKE</text>
    <text x="410" y="258" fill="#3a3a3c" font-family="Arial,sans-serif" font-size="12" letter-spacing="2" transform="rotate(8 410 258)">GOOD</text>
    <text x="409" y="280" fill="#3a3a3c" font-family="Arial,sans-serif" font-size="12" letter-spacing="2" transform="rotate(8 409 280)">THINGS</text>
    <path d="M92 443c30-36 56-46 87-44-13 34-40 51-87 44zm28 18c38-17 68-17 99-2-29 21-62 23-99 2z" fill="#6f8b7b"/>
    <path d="M124 470c19-33 36-54 57-71" fill="none" stroke="#526d60" stroke-width="3"/>
  </svg>
`);

for (const width of [400, 800]) {
  const image = sharp(heroSvg).resize(width, Math.round((width * 533) / 800));
  await image
    .clone()
    .jpeg({ quality: 84 })
    .toFile(`${output}/hero-${width}.jpg`);
  await image
    .clone()
    .webp({ quality: 84 })
    .toFile(`${output}/hero-${width}.webp`);
  await image
    .clone()
    .avif({ quality: 58 })
    .toFile(`${output}/hero-${width}.avif`);
}

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
