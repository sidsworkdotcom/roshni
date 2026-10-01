import { Button } from "@/components/ui/button";
import { getProject, getProjects } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Gallery from "../_components/Gallery";

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

  const all = getProjects();
  const idx = all.findIndex((x) => x.slug === p.slug);
  const prev = all.length > 1 && idx >= 0 ? all[(idx - 1 + all.length) % all.length] : null;
  const next = all.length > 1 && idx >= 0 ? all[(idx + 1) % all.length] : null;

  const meta = [p.location, p.category, p.status, p.year].filter(Boolean).join(" | ");

  // Green band = the first paragraph of the client's own text (only when it is a plain
  // paragraph and there is more text after it). The rest goes in the body.
  const blocks = p.content.trim().split(/\n{2,}/);
  const firstIsParagraph = blocks[0] && !/^(#|-|\*|\d+\.|\|)/.test(blocks[0].trim());
  const useBand = blocks.length > 1 && firstIsParagraph;
  const lead = useBand ? blocks[0] : "";
  const body = useBand ? blocks.slice(1).join("\n\n") : p.content;

  return (
    <div className="bg-sand-50 pt-32 pb-24">
      {/* Title */}
      <section className="mb-16 px-6 text-center md:px-12">
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 block text-[10px] tracking-[0.5em] uppercase opacity-60">
            Portfolio
          </span>
          <h1 className="mb-6 font-serif text-4xl md:text-6xl lg:text-7xl">{p.title}</h1>
          {meta && (
            <p className="text-xs tracking-[0.2em] uppercase opacity-70 md:text-sm">
              {meta}
            </p>
          )}
          {p.collaborator && (
            <p className="mt-3 text-xs tracking-[0.2em] uppercase opacity-50">
              In collaboration with {p.collaborator}
            </p>
          )}
        </div>
      </section>

      {/* Hero image */}
      {p.cover && (
        <section className="mb-20 px-6 md:px-12">
          {p.heroFit === "full" ? (
            <div className="mx-auto max-w-7xl">
              <img
                alt={p.title}
                className="mx-auto h-auto max-h-[85vh] w-auto max-w-full object-contain"
                src={p.cover}
              />
            </div>
          ) : (
            <div className="mx-auto aspect-[16/9] max-w-7xl overflow-hidden">
              <img alt={p.title} className="h-full w-full object-cover" src={p.cover} />
            </div>
          )}
        </section>
      )}

      {/* Green band: first paragraph of the client's text */}
      {useBand && (
        <section className="mb-24">
          <div className="bg-accent w-full px-6 py-16 md:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed font-light text-white opacity-90 md:text-xl">
                {lead}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Rest of the client's text */}
      {body.trim() && (
        <section className="mb-24 px-6 md:px-12">
          <article className="prose prose-neutral prose-headings:font-serif prose-headings:font-normal mx-auto max-w-3xl leading-relaxed font-light">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
          </article>
        </section>
      )}

      {/* Gallery */}
      {p.gallery.length > 0 && (
        <section className="mb-24 px-6 md:px-12">
          <div className="mx-auto max-w-7xl">
            <Gallery images={p.gallery} title={p.title} />
          </div>
        </section>
      )}

      {/* Previous / next project */}
      {prev && next && (
        <nav className="border-charcoal/10 mx-auto mb-24 grid max-w-7xl grid-cols-2 border-y">
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex flex-col gap-2 px-6 py-10 transition hover:bg-white/60 md:px-12"
          >
            <span className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase opacity-60">
              <PiArrowLeft className="transition-transform group-hover:-translate-x-1" />
              Previous project
            </span>
            <span className="font-serif text-xl md:text-3xl">{prev.title}</span>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group border-charcoal/10 flex flex-col items-end gap-2 border-l px-6 py-10 text-right transition hover:bg-white/60 md:px-12"
          >
            <span className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase opacity-60">
              Next project
              <PiArrowRight className="transition-transform group-hover:translate-x-1" />
            </span>
            <span className="font-serif text-xl md:text-3xl">{next.title}</span>
          </Link>
        </nav>
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