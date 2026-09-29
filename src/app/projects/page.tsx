import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import CTA from "./_components/CTA";
import Projects from "./_components/Projects";

export const metadata: Metadata = {
  title: "Architecture Portfolio | Residential & Wellness Projects",
  description:
    "Explore residential, wellness, and retreat architecture projects by Roshni Design Studio across London and internationally.",
  keywords: [
    "London architecture portfolio",
    "Residential architecture projects London",
    "Wellness architecture portfolio",
    "Retreat architecture projects",
    "Luxury residential design UK"
  ],
  alternates: {
    canonical: "https://roshnistudio.com/projects"
  },
  openGraph: {
    title: "Architecture Portfolio - Roshni Design Studio",
    description:
      "Residential, wellness, and retreat architecture projects across London and internationally.",
    url: "https://roshnistudio.com/projects",
    siteName: "Roshni Design Studio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Architecture Portfolio - Roshni Design Studio",
    description: "Explore our residential and wellness architecture projects."
  }
};

export default function ProjectsPage() {
  return (
    <div className="bg-sand-50">
      <div className="pt-40 pb-24">
        <section className="mb-20">
          <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center">
            <Badge> roshni studio portfolio</Badge>

            <h1 className="mt-8 mb-10 font-serif text-5xl leading-[1.1] font-light md:text-6xl">
              Selected Projects
            </h1>
          </div>
        </section>

        <Projects />

        <CTA />
      </div>
    </div>
  );
}
