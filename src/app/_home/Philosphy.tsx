import Image from "next/image";
import img from "../../../public/images/img.webp";

export default function Philosophy() {
  return (
    <section className="bg-sand-50 py-32" id="philosophy">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-24 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <Image
              alt="A vessel for mindfulness"
              className="aspect-4/5 w-full object-cover shadow-2xl"
              src={img}
            />
          </div>
          <div className="order-1 md:order-2">
            {/* <Badge variant={"text"}>Our Belief</Badge> */}
            <h2 className="mt-6 mb-8 font-serif text-4xl leading-[1.1] md:text-5xl">
              A vessel for mindfulness.
            </h2>
            <p className="text-charcoal/80 mb-8 text-base leading-relaxed font-light">
              We believe a home is more than a structure; it is an instrument
              for wellbeing. Our practice is dedicated to creating spaces that
              act as a sanctuary for the soul, where light, air, and materiality
              converge to support the human spirit.
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
