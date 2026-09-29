import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./_home/Hero"));
const Expertise = dynamic(() => import("./_home/Expertise"));
const Philosophy = dynamic(() => import("./_home/Philosphy"));
const Pillars = dynamic(() => import("./_home/Pillars"));
const Projects = dynamic(() => import("./_home/Projects"));
const CTA = dynamic(() => import("./_home/CTA"));
const Testimonials = dynamic(() => import("./_home/Testimonials"));

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Pillars />
      <Expertise />
      <Projects />
      <Testimonials />
      <CTA />
    </>
  );
}