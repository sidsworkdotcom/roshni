import fs from "fs";
import path from "path";
import sharp from "sharp";

const INCOMING = path.resolve("_incoming_services");
const OUT = path.resolve("public/images/services");
const MAX_WIDTH = 2400;
const IMAGE = /\.(jpe?g|png|webp|avif|tiff?)$/i;

// Files inside a folder matching this are used first (the client's newest upload)
const PRIORITY_FOLDER = /missing images website/i;

// Checked in this order, first match wins. Matched against folder + file name.
const RULES = [
  ["3d-scanning-bim", /3d|scan|survey|bim|image[ _-]?e\b/i],
  ["feasibility-studies", /feasib|pre[ _-]?purchase|image[ _-]?b\b/i],
  ["property-advisory", /advis|guidance|image[ _-]?f\b/i],
  ["international-projects", /international|concept|image[ _-]?d\b/i],
  ["wellness-retreats", /wellness|retreat|image[ _-]?c\b/i],
  ["london-residential", /london|residential|image[ _-]?a\b/i]
];
const SLUGS = RULES.map(([slug]) => slug);

// Extra images shown under the main image, in this order.
// Matched against the file path, searched across the whole _incoming_services folder.
const EXTRAS = {
  "london-residential": [/london residential-2/i],
  "wellness-retreats": [/phillipines2024/i, /phillipinessiteplan/i]
};

const walk = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]
    );

if (!fs.existsSync(INCOMING)) {
  console.error("Create an _incoming_services folder and put the Drive folder inside it.");
  process.exit(1);
}

const rel = (f) => path.relative(INCOMING, f);
const isNew = (f) => PRIORITY_FOLDER.test(rel(f));
const isMain = (f) => /^(main|hero|cover)/i.test(path.basename(f));

// Order: newest folder first, then main/hero/cover files, then normal name order
const allFiles = walk(INCOMING)
  .filter((f) => IMAGE.test(f))
  .sort(
    (a, b) =>
      Number(isNew(b)) - Number(isNew(a)) ||
      Number(isMain(b)) - Number(isMain(a)) ||
      a.localeCompare(b, undefined, { numeric: true })
  );

// If the newest folder is present, main images come only from it
const files = allFiles.some(isNew) ? allFiles.filter(isNew) : allFiles;

const found = {};
const unmatched = [];

for (const file of files) {
  const label = rel(file);
  // 1) the file or folder name contains the exact page name
  let slug = SLUGS.find((s) => label.toLowerCase().includes(s));
  // 2) otherwise use the keyword rules
  if (!slug) slug = RULES.find(([, re]) => re.test(label))?.[0];

  if (!slug) {
    unmatched.push(label);
    continue;
  }
  (found[slug] ??= []).push(file);
}

fs.mkdirSync(OUT, { recursive: true });

const toWebp = (src, dest) =>
  sharp(src)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(dest);

// Main image for each page
for (const slug of SLUGS) {
  const list = found[slug];
  if (!list) {
    console.log(`MISSING ${slug}  (no file matched)`);
    continue;
  }
  const [first, ...extra] = list;
  await toWebp(first, path.join(OUT, `${slug}.webp`));
  console.log(`done    ${slug}  <-  ${rel(first)}`);
  if (extra.length) {
    console.log(`        also matched (not used): ${extra.map(rel).join(", ")}`);
  }
}

// Extra images (<slug>-2.webp, <slug>-3.webp ...)
for (const [slug, patterns] of Object.entries(EXTRAS)) {
  for (const f of fs.readdirSync(OUT)) {
    if (new RegExp(`^${slug}-\\d+\\.webp$`).test(f)) fs.rmSync(path.join(OUT, f));
  }
  let n = 1;
  for (const re of patterns) {
    const file = allFiles.find((f) => re.test(rel(f)));
    if (!file) {
      console.log(`MISSING extra for ${slug}: ${re}`);
      continue;
    }
    n++;
    await toWebp(file, path.join(OUT, `${slug}-${n}.webp`));
    console.log(`done    ${slug}-${n}  <-  ${rel(file)}`);
  }
}

if (unmatched.length) {
  console.log("\nCould not match these files to a service. Rename them to include the page name:");
  unmatched.forEach((f) => console.log("  - " + f));
}