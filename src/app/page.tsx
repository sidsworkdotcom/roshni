import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./_home/Hero"));
// const Expertise = dynamic(() => import("./_home/Expertise"));
const Philosophy = dynamic(() => import("./_home/Philosphy"));
const Pillars = dynamic(() => import("./_home/Pillars"));
// const Pillars = dynamic(() => import("./_home/Pillars"));
const Projects = dynamic(() => import("./_home/Projects"));
const CTA = dynamic(() => import("./_home/CTA"));
const Testimonials = dynamic(() => import("./_home/Testimonials"));

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Pillars />
      {/* <Expertise /> */}
      <Projects />

      <Testimonials />
      {/* <section className="border-primary/5 bg-sand-50 border-y px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <blockquote className="mb-8 font-serif text-4xl leading-snug italic md:text-6xl">
            Design is not just what it looks like and feels like. Design is how
            it works for the soul.
          </blockquote>
          <cite className="font-medium tracking-widest uppercase not-italic opacity-60">
            — Kyle Mills, Principal Architect
          </cite>
        </div>
      </section> */}
      <CTA />
    </>
  );
}
