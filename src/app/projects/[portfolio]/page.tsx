import { Button } from "@/components/ui/button";
import { getProject, getProjects } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = { params: Promise<{ portfolio: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map((p) => ({ portfolio: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { portfolio } = await params;
  const p = getProject(portfolio);
  if (!p) return {};
  const url = `https://roshnistudio.com/projects/${portfolio}`;
  return {
    title: `${p.title} | Roshni Design Studio`,
    description: p.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${p.title} | Roshni Design Studio`,
      description: p.description,
      url,
      siteName: "Roshni Design Studio",
      type: "article",
      images: p.cover ? [p.cover] : undefined
    }
  };
}

export default async function ProjectPage({ params }: Props) {
  const { portfolio } = await params;
  const p = getProject(portfolio);
  if (!p || p.draft) notFound();

  const meta = [p.location, p.category, p.status, p.year]
    .filter(Boolean)
    .join(" | ");

  return (
    <div className="bg-sand-50 pt-32 pb-24">
      {/* Title */}
      <section className="mb-16 px-6 text-center md:px-12">
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 block text-[10px] tracking-[0.5em] uppercase opacity-60">
            Portfolio
          </span>
          <h1 className="mb-6 font-serif text-4xl md:text-6xl lg:text-7xl">
            {p.title}
          </h1>
          {meta && (
            <p className="text-xs tracking-[0.2em] uppercase opacity-70 md:text-sm">
              {meta}
            </p>
          )}
        </div>
      </section>

      {/* Hero image */}
      {p.cover && (
        <section className="mb-20 px-6 md:px-12">
          <div className="mx-auto aspect-[16/9] max-w-7xl overflow-hidden">
            <img alt={p.title} className="h-full w-full object-cover" src={p.cover} />
          </div>
        </section>
      )}

      {/* Body (client text) */}
      <section className="mb-24 px-6 md:px-12">
        <article className="prose prose-neutral prose-headings:font-serif prose-headings:font-normal mx-auto max-w-3xl leading-relaxed font-light">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{p.content}</ReactMarkdown>
        </article>
      </section>

      {/* Gallery */}
      {p.gallery.length > 0 && (
        <section className="mb-24 px-6 md:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
            {p.gallery.map((src) => (
              <div key={src} className="aspect-[4/3] overflow-hidden">
                <img alt={p.title} className="h-full w-full object-cover" src={src} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA (original site text) */}
      <section className="px-6 text-center md:px-12">
        <div className="border-primary/10 mx-auto max-w-4xl border-y py-24">
          <h2 className="mb-10 font-serif text-5xl md:text-6xl">
            Interested in a similar <br /> transformation?
          </h2>
          <Link href="/contact">
            <Button className="hover:bg-primary/80">Inquire for a consultation</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}