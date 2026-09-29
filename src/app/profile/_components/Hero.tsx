import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <header className="pt-40 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center space-y-8 text-center">
          <Badge>roshni studio profile</Badge>
          <h1 className="text-charcoal text-balancel mx-auto max-w-4xl font-serif text-5xl leading-[1.1] font-light md:text-6xl">
            A considered studio for thoughtful clients and meaningful places.
          </h1>
          <p className="text-charcoal/70 max-w-2xl text-lg leading-relaxed font-light">
            We are an architectural practice working across private
            residential, wellness, and retreat environments. Rooted in the
            design of homes, our work applies residential sensitivity — light,
            proportion, materiality, and atmosphere — to places intended for
            rest, restoration, and long-term living.
          </p>
          <p className="text-charcoal/70 max-w-2xl text-lg leading-relaxed font-light">
            Based in the UK, we work with private clients, developers, and
            wellness-focused brands in London and internationally, delivering
            built projects alongside concept and early-stage design studies.
          </p>
        </div>
      </div>
    </header>
  );
}