import Image from "next/image";
import { Pillar } from "./Pillars";

interface PillarsMobileProps {
  pillars: Pillar[];
}

export default function PillarsMobile({ pillars }: PillarsMobileProps) {
  return (
    <section className="bg-charcoal py-32" id="pillars">
      <div className="mx-auto max-w-7xl space-y-48 px-4">
        {pillars.map((pillar, index) => {
          // Determine if the layout should be reversed (even index = 0, 2, 4...)
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={pillar.id}
              className={`flex flex-col items-center gap-12 md:flex-row ${
                isReversed ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 md:max-w-[42%]">
                <div className="mb-8 flex items-center gap-4">
                  <span className="text-5xl text-white opacity-20">
                    {pillar.id}
                  </span>
                  <div className="h-px w-8 bg-white/20" />
                  <span className="text-[0.625rem] tracking-[0.2em] text-white/40 uppercase">
                    {pillar.category}
                  </span>
                </div>

                <h2 className="mb-12 font-serif text-4xl leading-[1.1] text-white md:text-5xl">
                  {pillar.title}
                </h2>

                <div className="border-t border-white/10 py-10">
                  <span className="mb-4 block text-[0.625rem] tracking-[0.2em] text-white/40 uppercase">
                    Philosophy
                  </span>
                  <div className="space-y-4">
                    {pillar.description.split("\n\n").map((para, i) => (
                      <p
                        key={i}
                        className="text-base leading-relaxed font-light text-white/80"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="h-px w-12 bg-white/10"></div>
              </div>

              {/* Image Content */}
              <div className="flex-1 overflow-hidden md:max-w-[50%]">
                <Image
                  alt={pillar.alt}
                  src={pillar.image}
                  className="aspect-video w-full object-cover grayscale-50 transition-all duration-700 hover:grayscale-0"
                  placeholder="blur"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
