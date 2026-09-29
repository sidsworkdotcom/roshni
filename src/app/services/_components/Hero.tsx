import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-30">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Badge>Specialized Expertise</Badge>
          <h1 className="text-charcoal mt-8 mb-8 font-serif text-5xl leading-[1.1] font-light lg:text-6xl">
            Architectural services shaped around clarity, quality, and long-term
            value.
          </h1>
          <p className="text-charcoal/80 mx-auto max-w-2xl text-lg leading-relaxed font-light">
            We deliver design solutions that bridge the gap between visionary
            aesthetics and practical excellence. From high-end residential to
            wellness-focused retreats, our approach is defined by precision and
            purpose.
          </p>
        </div>
      </div>
      <div className="bg-primary/5 absolute top-0 right-0 h-full w-1/3 translate-x-24 -skew-x-12 transform" />
    </section>
  );
}
