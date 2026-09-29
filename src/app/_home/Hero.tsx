import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LoadingCarousel from "@/components/ui/loading-carousel";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-sand-50">
      <div className="flex items-center justify-center px-4 pt-40 pb-10 text-center">
        <div className="relative z-10 max-w-4xl">
          <Badge>Residential & Wellness Studio</Badge>

          <h1 className="mt-8 mb-12 font-serif text-5xl leading-[1.1] font-light md:text-6xl">
            Architecture Design guided by{" "}
            <span className="font-medium italic">Human Biology</span>, not
            trends.
          </h1>

          {/* <ConsultationOverlay layoutId="hero"> */}
          <Link href="/contact">
            <Button>Book A Consultation</Button>
          </Link>
          {/* </ConsultationOverlay> */}
        </div>

        {/* <div
          className="absolute inset-0 z-0"
          style={{
            opacity: 0.5,
            background: "var(--color-sand-50)",
            backgroundImage: `
        radial-gradient(
          circle at top center,
          var(--color-primary),
          transparent 70%
        )
      `,
            filter: "blur(80px)",
            backgroundRepeat: "no-repeat"
          }}
        /> */}

        <GridBg />
      </div>

      <div className="py-24">
        <LoadingCarousel
          backgroundTips={false}
          animateText={false}
          showNavigation
        />
      </div>
    </section>
  );
}

export function GridBg() {
  return (
    <div
      className="absolute inset-0 z-0 opacity-60"
      style={{
        backgroundImage: `
        linear-gradient(to right, var(--color-primary) 1px, transparent 1px),
        linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)
      `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 0",
        maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
        WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in"
      }}
    />
  );
}
