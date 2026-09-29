import Image from "next/image";
import img from "../../../public/images/img.webp";

export default function Philosophy() {
  return (
    <section className="bg-sand-50 py-32" id="philosophy">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-24 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <Image
              alt="Design for human health and social wellbeing"
              className="aspect-4/5 w-full object-cover shadow-2xl"
              src={img}
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="mt-6 mb-8 font-serif text-4xl leading-[1.1] md:text-5xl">
              Design for human health and social wellbeing
            </h2>
            <p className="text-charcoal/80 mb-6 text-base leading-relaxed font-light">
              Environments we inhabit shape the way we think, feel, and move.
              Crowded, noisy spaces can heighten stress and limit focus, while
              open, thoughtfully designed environments encourage clarity,
              calm, and wellbeing.
            </p>
            <p className="text-charcoal/80 mb-8 text-base leading-relaxed font-light">
              Through principles of neuroarchitecture, we can create spaces
              that nurture both mind and body. Curved forms, natural lighting,
              calming color palettes, acoustic balance, and the integration of
              natural elements aren’t just aesthetic choices—they are
              intentional design strategies that enhance cognitive function,
              promote relaxation, and connect people with their surroundings.
              My goal is to design architecture that doesn’t just house
              activity, but actively supports human health and experience.
            </p>
            <div className="bg-primary mb-8 h-0.5 w-24" />

            <p className="text-charcoal/60 font-serif text-lg leading-snug font-light italic md:text-xl">
              &quot;Every line we draw is an invitation to slow down.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}