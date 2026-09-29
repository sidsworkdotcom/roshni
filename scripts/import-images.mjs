import fs from "fs";
import path from "path";
import sharp from "sharp";

const INCOMING = path.resolve("_incoming");
const OUT = path.resolve("public/images/projects");
const MAX_WIDTH = 2200;
const IMAGE = /\.(jpe?g|png|webp|avif|tiff?)$/i;

// Windows drops trailing dots from folder names, so ignore them when matching
const norm = (s) => s.trim().replace(/\.+$/, "").toLowerCase();

// Drive folder name -> project file name (slug)
const MAP = Object.fromEntries(
  Object.entries({
    "Kuwait House": "villa-k-kuwait",
    "House in St Johns wood conservation area.": "st-johns-wood-house",
    "Fulham basement and house renovation": "fulham-basement",
    "Greenbelt housing": "green-belt-housing",
    "Tulip Daycare": "nursery-concept",
    "Pembridge Villas": "pembridge-villas",
    "Sierra Leone housing": "sierra-leone-housing",
    "Surf resort": "surf-wellness-retreat",
    "Hamilton terrace": "hamilton-terrace",
    "Wellness retreat": "jungle-wellness-retreat"
  }).map(([k, v]) => [norm(k), v])
);

const subdirs = (d) =>
  fs
    .readdirSync(d, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);

// Drive zips sometimes add an extra wrapper folder. Step inside it.
function findRoot(dir) {
  const sub = subdirs(dir);
  if (sub.some((n) => norm(n) in MAP)) return dir;
  return sub.length === 1 ? findRoot(path.join(dir, sub[0])) : dir;
}

const walk = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]
    );

if (!fs.existsSync(INCOMING)) {
  console.error("Create an _incoming folder and extract the Drive folders into it.");
  process.exit(1);
}

const root = findRoot(INCOMING);

for (const name of subdirs(root)) {
  const slug = MAP[norm(name)];
  if (!slug) {
    console.log(`skip   "${name}" (no matching project)`);
    continue;
  }

  const all = walk(path.join(root, name));
  const files = all
    .filter((f) => IMAGE.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const ignored = all.length - files.length;

  // A file whose name starts with "cover" becomes the cover
  const cover = files.find((f) => /^cover/i.test(path.basename(f)));
  const ordered = cover ? [cover, ...files.filter((f) => f !== cover)] : files;

  const outDir = path.join(OUT, slug);
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  let n = 0;
  for (const file of ordered) {
    n++;
    const out = path.join(outDir, `${String(n).padStart(2, "0")}.webp`);
    try {
      await sharp(file)
        .rotate()
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(out);
    } catch (err) {
      n--;
      console.log(`  ! could not read ${path.basename(file)}: ${err.message}`);
    }
  }

  console.log(
    `done   "${name}" -> ${slug} (${n} images${ignored ? `, ${ignored} non-image files ignored` : ""})`
  );
}