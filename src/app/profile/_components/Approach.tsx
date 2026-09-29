import { Badge } from "@/components/ui/badge";
import {
  PiBrainFill,
  PiBuildingsFill,
  PiFlaskFill,
  PiHouseLineFill
} from "react-icons/pi";

const steps = [
  {
    number: "01",
    title: "1. Listen",
    icon: PiBrainFill,
    description:
      "Every project begins with understanding. We dive deep into your rituals, needs, and aspirations for the space.",
    iconClass: "bg-primary dark:bg-accent-cream dark:text-primary text-white"
  },
  {
    number: "02",
    title: "2. Test",
    icon: PiFlaskFill,
    description:
      "We explore multiple directions through sketching, modeling, and light studies to find the perfect resonance.",
    iconClass: "bg-charcoal text-primary"
  },
  {
    number: "03",
    title: "3. Design",
    icon: PiBuildingsFill,
    description:
      "Refining the chosen concept into a detailed architectural language, focusing on materiality and craft.",
    iconClass: "bg-primary dark:bg-accent-cream dark:text-primary text-white"
  },
  {
    number: "04",
    title: "4. Deliver",
    icon: PiHouseLineFill,
    description:
      "Meticulous oversight during construction ensures that the initial vision is realized to the highest standard.",
    iconClass: "bg-primary dark:bg-accent-cream dark:text-primary text-white"
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
            <h2 className="text-charcoal dark:text-accent-cream font-serif text-4xl leading-[1.1] font-light md:text-6xl">
              How We Work
            </h2>
          </div>
          <p className="text-charcoal/80 max-w-md text-base leading-relaxed font-light">
            Our process is iterative, transparent, and deeply collaborative. We
            believe the best results come from a shared vision.
          </p>
        </div>

        <div className="relative grid gap-12 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="group relative">
                <div className="pointer-events-none absolute -top-16 -left-4 font-mono text-5xl opacity-40">
                  {step.number}
                </div>

                <div className="space-y-6 pt-4">
                  <div className="bg-charcoal relative flex h-12 w-12 items-center justify-center">
                    <Icon className="text-xl text-white" />
                  </div>

                  <h3 className="text-charcoal font-serif text-2xl leading-snug font-light md:text-3xl">
                    {step.title}
                  </h3>

                  <p className="text-charcoal/70 dark:text-accent-cream/70 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
