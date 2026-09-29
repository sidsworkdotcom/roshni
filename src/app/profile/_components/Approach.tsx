import { Badge } from "@/components/ui/badge";

const principles = [
  {
    number: "01",
    title: "Holistic by design",
    description:
      "Our work is guided by a holistic approach to architecture that prioritises the health and wellbeing of those who inhabit our buildings. We design spaces that support mental, physical, and emotional wellbeing through careful consideration of light, proportion, materiality, and atmosphere."
  },
  {
    number: "02",
    title: "Informed by neuroarchitecture",
    description:
      "We shape calm, legible environments that reduce stress and enhance comfort. Materials are chosen for their sensory qualities as well as their performance, creating spaces that feel grounded, balanced, and human."
  },
  {
    number: "03",
    title: "Quietly restorative",
    description:
      "Through thoughtful spatial design and aesthetic restraint, we create environments that are calming, restorative, and quietly rejuvenating. This is architecture designed for long-term wellbeing."
  }
];

export default function Approach() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl space-y-4">
            <Badge
              variant={"text"}
              className="text-xs font-light tracking-widest uppercase"
            >
              Our approach
            </Badge>
            <h2 className="text-charcoal font-serif text-4xl leading-[1.1] font-light md:text-6xl">
              Wellness Approach
            </h2>
          </div>
          <p className="text-charcoal/80 max-w-md text-base leading-relaxed font-light">
            Architecture that supports how people live, rest, and restore,
            now and over the long term.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-3 md:gap-12">
          {principles.map((item) => (
            <div key={item.number} className="relative pt-12">
              <div className="pointer-events-none absolute top-0 left-0 font-mono text-5xl opacity-40">
                {item.number}
              </div>
              <div className="border-charcoal/10 space-y-6 border-t pt-8">
                <h3 className="text-charcoal font-serif text-2xl leading-snug font-light md:text-3xl">
                  {item.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}