"use client";

import CalendlyWidget from "@/components/CalendlyWidget";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="pt-40 pb-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 md:grid-cols-2">
        {/* Left Side: Content */}
        <div className="pt-12">
          <Badge>Inquiry & Consultations</Badge>
          <h1 className="text-charcoal mt-8 font-serif text-5xl leading-[1.1] md:text-6xl">
            Let&apos;s discuss your <br /> next project.
          </h1>
          <p className="text-charcoal/80 mt-6 max-w-md text-lg leading-relaxed">
            Ready to bring your vision to life? Whether you&apos;re looking for
            a feasibility study or a full residential design, we&apos;ve made it
            easy to start. Book a meeting directly via our calendar or send us
            an enquiry below to discuss your project.
          </p>
        </div>

        {/* Right Side: Calendly Widget */}
        <CalendlyWidget />
      </div>
    </section>
  );
}
