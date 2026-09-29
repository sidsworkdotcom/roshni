import { Badge } from "@/components/ui/badge";

const paragraphs = [
  "Our work is guided by a holistic approach to architecture that prioritises the health and wellbeing of those who inhabit our buildings. We design spaces that support mental, physical, and emotional wellbeing through careful consideration of light, proportion, materiality, and atmosphere.",
  "Informed by principles of neuroarchitecture, we shape calm, legible environments that reduce stress and enhance comfort. Materials are chosen for their sensory qualities as well as their performance, creating spaces that feel grounded, balanced, and human.",
  "Through thoughtful spatial design and aesthetic restraint, we aim to create environments that are calming, restorative, and quietly rejuvenating — architecture designed for long-term wellbeing."
];

export default function Approach() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 max-w-xl space-y-4">
          <Badge
            variant={"text"}
            className="text-xs font-light tracking-widest uppercase"
          >
            Our approach
          </Badge>
          <h2 className="text-charcoal font-serif text-4xl leading-[1.1] font-light md:text-6xl">
            Wellness approach
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {paragraphs.map((text, i) => (
            <div key={i} className="border-charcoal/10 border-t pt-8">
              <span className="mb-6 block font-mono text-5xl opacity-40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-charcoal/70 leading-relaxed font-light">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}