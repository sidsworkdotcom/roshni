"use client";

import Image from "next/image";
import ScrollStack, { ScrollStackItem } from "../../components/ScrollStack";
import { Pillar } from "./Pillars";

interface PillarsStackProps {
  pillars: Pillar[];
}

export default function PillarsStack({ pillars }: PillarsStackProps) {
  return (
    <section className="bg-charcoal overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div>
          <ScrollStack
            itemDistance={40}
            itemScale={0}
            baseScale={1}
            itemStackDistance={0}
            stackPosition="0%"
          >
            {pillars.map((pillar) => (
              <ScrollStackItem
                key={pillar.id}
                itemClassName="bg-charcoal text-white overflow-hidden h-dvh"
              >
                <div className="grid h-full md:grid-cols-[1.2fr_1fr]">
                  {/* Left Content */}
                  <div className="flex flex-col justify-between py-8 pr-16 md:py-16">
                    <div>
                      <div className="mb-8 flex items-center gap-4">
                        <span className="text-5xl opacity-20">{pillar.id}</span>
                        <div className="h-px w-8 bg-white/20" />
                        <span className="text-[0.625rem] tracking-[0.2em] text-white/40 uppercase">
                          {pillar.category}
                        </span>
                      </div>

                      <h3 className="mb-12 font-serif text-4xl leading-[1.1] md:text-5xl">
                        {pillar.title}
                      </h3>

                      <div className="space-y-0">
                        <div className="border-t border-white/10 py-10">
                          <span className="mb-4 block text-[0.625rem] tracking-[0.2em] text-white/40 uppercase">
                            Philosophy
                          </span>
                          <div className="max-w-xl space-y-4">
                            {pillar.description.split("\n\n").map((para, i) => (
                              <p
                                key={i}
                                className="text-base leading-relaxed font-light opacity-80"
                              >
                                {para}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="bg-sand-950 relative h-full overflow-hidden">
                    <Image
                      src={pillar.image}
                      alt={pillar.alt}
                      placeholder="blur"
                      className="absolute inset-0 h-full w-full object-cover opacity-90 grayscale-50 transition-all duration-1000 hover:scale-105 hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-black/30" />

                    {/* Architectural Coordinates or Label */}
                    {/* <div className="absolute right-8 bottom-8 flex flex-col items-end gap-2 font-mono text-[10px] tracking-widest text-white/40 uppercase">
                      <span>Roshni Studio</span>
                      <span>© 2026</span>
                    </div> */}
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
