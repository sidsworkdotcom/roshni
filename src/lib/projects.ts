import fs from "fs";
import matter from "gray-matter";
import path from "path";

const contentDir = path.join(process.cwd(), "src/content/projects");
const publicDir = path.join(process.cwd(), "public");

// Temporary images shown until real project photos are added
const FALLBACK_IMAGES = [
  "/images/hero/img1.webp",
  "/images/hero/img2.webp",
  "/images/hero/img3.webp",
  "/images/hero/img4.webp",
  "/images/hero/img5.webp"
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  location?: string;
  category?: string;
  status?: string;
  year?: string;
  collaborator?: string;
  order?: number;
  draft?: boolean;
  heroFit?: "landscape" | "full";
  cover?: string;
  gallery: string[];
  content: string;
};

const exists = (src?: string) =>
  !!src && fs.existsSync(path.join(publicDir, src));

function readImages(slug: string): string[] {
  const dir = path.join(publicDir, "images/projects", slug);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(webp|jpe?g|png|avif)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => `/images/projects/${slug}/${f}`);
}

export function getProject(slug: string): Project | null {
  const file = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const images = readImages(slug);
  const cover = exists(data.cover) ? (data.cover as string) : images[0];

  return {
    ...data,
    slug,
    title: data.title ?? "Untitled Project",
    description: data.description ?? "",
    cover,
    gallery: images.filter((src) => src !== cover),
    content
  };
}

export function getProjects(): Project[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => getProject(f.replace(/\.md$/, "")))
    .filter((p): p is Project => p !== null && !p.draft)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function coverOrFallback(p: Project, index: number): string {
  return p.cover ?? FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
}