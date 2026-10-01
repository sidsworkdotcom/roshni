import fs from "fs";
import path from "path";
import sharp from "sharp";

const INCOMING = path.resolve("_incoming");
const OUT = path.resolve("public/images/projects");
const MAX_WIDTH = 2200;
const IMAGE = /\.(jpe?g|png|webp|avif|tiff?)$/i;

// Windows drops trailing dots from folder names, so ignore them when matching
const norm = (s) => s.trim().replace(/\.+$/, "").toLowerCase();

// Drive folder -> project. Several folders can feed one project: they are merged,
// and files with the same name are only used once. Earlier folders come first.
const FOLDERS = [
  ["Fulham basement and house renovation", "fulham-basement"],
  ["House in St Johns wood conservation area.", "st-johns-wood-house"],
  ["Circus road", "st-johns-wood-house"],
  ["Hamilton terrace", "hamilton-terrace"],
  ["Greenbelt housing", "green-belt-housing"],
  ["Pembridge Villas", "pembridge-villas"],
  ["Sierra Leone housing", "sierra-leone-housing"],
  ["Kuwait House", "villa-k-kuwait"],
  ["Tulip Daycare", "nursery-concept"],
  ["Wellness retreat", "jungle-wellness-retreat"],
  ["Surf resort", "surf-wellness-retreat"]
];
const KEYS = new Set(FOLDERS.map(([k]) => norm(k)));

// Which photo should be the cover. Matched against the file name.
// A file whose name starts with "cover" always wins over these.
const COVER_HINTS = {
  "st-johns-wood-house": /rear[ _-]?elevation/i,
  "green-belt-housing": /greenbelt[ _-]?9/i
};

const natural = (a, b) => a.localeCompare(b, undefined, { numeric: true });

const subdirs = (d) =>
  fs
    .readdirSync(d, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);

// Drive zips sometimes add an extra wrapper folder. Step inside it.
function findRoot(dir) {
  const sub = subdirs(dir);
  if (sub.some((n) => KEYS.has(norm(n)))) return dir;
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
const folderNames = subdirs(root);

for (const name of folderNames) {
  if (!KEYS.has(norm(name))) console.log(`skip   "${name}" (not a project folder)`);
}

// Collect files per project, in the order of FOLDERS
const bySlug = {};
for (const [label, slug] of FOLDERS) {
  const actual = folderNames.find((n) => norm(n) === norm(label));
  if (!actual) {
    console.log(`note   folder "${label}" was not found in _incoming`);
    continue;
  }
  const files = walk(path.join(root, actual)).filter((f) => IMAGE.test(f)).sort(natural);
  (bySlug[slug] ??= []).push(...files);
}

for (const [slug, all] of Object.entries(bySlug)) {
  // Drop duplicates (same file name appearing in two folders)
  const seen = new Set();
  const files = all.filter((f) => {
    const key = path.basename(f).toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  const dupes = all.length - files.length;

  let cover = files.find((f) => /^cover/i.test(path.basename(f)));
  if (!cover && COVER_HINTS[slug]) {
    cover = files.find((f) => COVER_HINTS[slug].test(path.basename(f)));
    if (!cover) {
      console.log(`  ! cover hint not found for ${slug}, using the first image instead`);
    }
  }
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

  const coverNote = cover ? `, cover = ${path.basename(cover)}` : "";
  console.log(
    `done   ${slug} (${n} images${coverNote}${dupes ? `, ${dupes} duplicates skipped` : ""})`
  );
}