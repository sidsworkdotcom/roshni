import fs from "fs";
import matter from "gray-matter";
import path from "path";

const contentDirectory = path.join(process.cwd(), "src/content/services");

export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  image?: string;
  content: string;
}

export async function getServiceBySlug(
  slug: string
): Promise<ServiceData | null> {
  try {
    const fullPath = path.resolve(contentDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: data.slug || slug,
      title: data.title || "Untitled Service",
      description: data.description || "",
      image: data.image || null,
      content
    };
  } catch (error) {
    console.error(`Error loading service ${slug}:`, error);
    return null;
  }
}

export async function getAllServiceSlugs(): Promise<string[]> {
  try {
    if (!fs.existsSync(contentDirectory)) {
      return [];
    }
    const fileNames = fs.readdirSync(contentDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => fileName.replace(/\.md$/, ""));
  } catch (error) {
    console.error("Error loading service slugs:", error);
    return [];
  }
}

export async function getAllServices(): Promise<ServiceData[]> {
  const slugs = await getAllServiceSlugs();
  const services = await Promise.all(
    slugs.map(async (slug) => {
      const data = await getServiceBySlug(slug);
      return data;
    })
  );
  return services.filter((service): service is ServiceData => service !== null);
}
