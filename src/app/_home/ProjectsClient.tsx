"use client";

import { Button } from "@/components/ui/button";
import { ParallaxScroll, ProjectItem } from "@/components/ui/parallax-scroll";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Link from "next/link";
import ProjectsGridView from "./ProjectsGridView";

export default function ProjectsClient({ items }: { items: ProjectItem[] }) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section className="bg-white py-32" id="projects">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 flex flex-col items-center gap-8 text-center">
          <div>
            <h2 className="mb-4 font-serif text-4xl leading-[1.1] md:text-5xl">
              Selected Works
            </h2>
            <p className="text-primary-foreground/80 mx-auto max-w-md text-base leading-relaxed font-light">
              Homes, retreats, and communities shaped by light, landscape, and
              wellbeing.
            </p>
          </div>
        </div>

        {isDesktop ? (
          <ParallaxScroll images={items} />
        ) : (
          <ProjectsGridView projects={items} />
        )}
      </div>
      <div className="mx-auto mt-16 w-max lg:mt-24">
        <Link href="/projects">
          <Button variant="outline">View All Projects</Button>
        </Link>
      </div>
    </section>
  );
}