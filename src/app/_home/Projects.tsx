"use client";

import { Button } from "@/components/ui/button";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ProjectsGridView from "./ProjectsGridView";

export default function Projects() {
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
              A curation of projects defined by their relationship to light,
              site, and serenity.
            </p>
          </div>

          {/* <Link href="/projects">
            <Button
              variant={"outline"}
              className="hover:bg-charcoal/70 text-white"
            >
              View All Projects
            </Button>
          </Link> */}
        </div>

        {isDesktop ? (
          <ParallaxScroll images={images} />
        ) : (
          <ProjectsGridView projects={images} />
        )}
      </div>
      <div className="mx-auto mt-16 w-max lg:mt-24">
        <Button variant={"outline"}>View More Projects</Button>
      </div>
    </section>
  );
}

const images = [
  {
    src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    name: "Modern Haven",
    link: "/projects/modern-haven"
  },
  {
    src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    name: "Minimalist Retreat",
    link: "/projects/minimalist-retreat"
  },
  {
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    name: "Urban Sanctuary",
    link: "/projects/urban-sanctuary"
  },
  {
    src: "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    name: "Desert Oasis",
    link: "/projects/desert-oasis"
  },
  {
    src: "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    name: "Mountain Escape",
    link: "/projects/mountain-escape"
  },
  {
    src: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    name: "Coastal Serenity",
    link: "/projects/coastal-serenity"
  },
  {
    src: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80",
    name: "Zen Garden",
    link: "/projects/zen-garden"
  },
  {
    src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    name: "Luxury Loft",
    link: "/projects/luxury-loft"
  },
  {
    src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    name: "Nordic Cabin",
    link: "/projects/nordic-cabin"
  }
];
