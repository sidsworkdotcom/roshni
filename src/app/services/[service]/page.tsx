import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs();
  return slugs.map((slug) => ({
    service: slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: service.image ? [{ url: service.image }] : []
    }
  };
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const contentWithoutH1 = service.content.replace(/^#\s+.+$/m, "").trim();
  const heroTitle = service.title.split(" — ")[0];

  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      {/* ── Hero ── */}
      <section className="container mx-auto px-6 pt-40 pb-20 text-center md:px-12 md:pb-28">
        {/* Thin decorative rule above title */}
        {/* <div className="mb-8 flex items-center justify-center gap-4">
          <span className="block h-px w-12 bg-[#B8A898]" />
          <span className="text-[10px] tracking-[0.25em] text-[#9A9080] uppercase">
            Our Services
          </span>
          <span className="block h-px w-12 bg-[#B8A898]" />
        </div> */}

        <h1 className="text-charcoal mx-auto mb-8 max-w-4xl font-serif text-5xl leading-[1.1] tracking-tight md:text-6xl">
          {heroTitle}
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed font-light text-[#6B6058] md:text-xl">
          {service.description}
        </p>

        {/* Ornamental divider */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="bg-primary block h-px w-16" />
          <span className="bg-primary block h-1.5 w-1.5 rounded-full" />
          <span className="bg-primary block h-px w-16" />
        </div>
      </section>

      {/* ── Body Content ── */}
      <section className="">
        <div className="container mx-auto px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-2xl">
            <article className="prose prose-stone /* Headings */ prose-headings:font-serif prose-headings:text-[#2C2520] prose-headings:font-normal prose-headings:tracking-tight prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 /* Body */ prose-p:text-[#5A5048] prose-p:leading-[1.85] prose-p:text-[1.0625rem] prose-p:font-light /* Links */ prose-a:text-[#2C2520] prose-a:underline prose-a:decoration-[#B8A898] prose-a:underline-offset-4 hover:prose-a:decoration-[#2C2520] prose-a:transition-colors /* Strong */ prose-strong:text-[#2C2520] prose-strong:font-medium /* HR */ prose-hr:border-[#E8E2DA] prose-hr:my-10 /* Lists */ prose-li:text-[#5A5048] prose-li:leading-relaxed prose-li:font-light prose-ul:marker:text-[#B8A898] /* Tables */ prose-table:text-sm prose-th:text-[#2C2520] prose-th:font-medium prose-th:tracking-wider prose-th:uppercase prose-th:text-xs prose-th:border-b prose-th:border-[#E8E2DA] prose-th:pb-3 prose-td:text-[#5A5048] prose-td:border-b prose-td:border-[#F0EDE8] prose-td:py-4 /* Blockquote */ prose-blockquote:border-l-[#B8A898] prose-blockquote:text-[#8A7D72] prose-blockquote:font-light prose-blockquote:italic /* Images */ prose-img:rounded-none prose-img:shadow-md max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {contentWithoutH1}
              </ReactMarkdown>
            </article>
          </div>
        </div>
      </section>

      {/* ── Footer CTA Strip ── */}
      {/* <section className="bg-[#2C2520] py-20 md:py-24">
        <div className="container mx-auto px-6 text-center md:px-12">
          <p className="mb-6 text-[10px] tracking-[0.3em] text-[#9A8878] uppercase">
            Begin Your Project
          </p>

          <h2 className="mx-auto mb-8 max-w-xl font-serif text-3xl leading-snug font-normal text-[#F8F6F1] md:text-4xl">
            Ready to bring your vision to life?
          </h2>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block cursor-pointer bg-[#F8F6F1] px-10 py-4 text-sm tracking-widest text-[#2C2520] uppercase transition-colors duration-300 hover:bg-white"
            >
              Start a Project
            </Link>

            <Link
              href="/services"
              className="inline-flex cursor-pointer items-center gap-2 text-sm tracking-widest text-[#9A8878] uppercase transition-colors duration-300 hover:text-[#F8F6F1]"
            >
              <ArrowLeft className="h-4 w-4" />
              All Services
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
