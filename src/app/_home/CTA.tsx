import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-sand-50 px-4 py-24" id="contact">
      <div className="bg-accent relative mx-auto max-w-7xl overflow-hidden px-8 py-16 text-center md:p-32 md:text-left">
        <div className="relative grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl leading-[1.1] text-white md:text-6xl">
              Ready to evolve <br />
              your space?
            </h2>
            <p className="max-w-md text-base leading-relaxed font-light text-white/80">
              Begin the conversation about your next architectural project. We
              work globally with clients who value intention and atmosphere.
            </p>
            {/* <ConsultationOverlay layoutId="cta"> */}
            <Link href="/contact">
              <Button variant={"secondary"}>Book a consultation</Button>
            </Link>
            {/* </ConsultationOverlay> */}
          </div>
          <div className="hidden md:block">
            <img
              alt="Architectural detail"
              className="h-120 w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGWEM7gVFoNtC0LUA0OIOirxvbGhW0GTxYJSXFBZU8_-rykAVwPKyKsL7LC1JiTgDMfqPMVBW0JIZy2nMPLOYsNk4KXbwf_Zo9uTl9Z88WTrulEYlFC-zaU570XUmpUAUP1sdXIff2Yr63YrZU6I0P7WBN8UzV-2uCAtSNzF26zViUk2D-qWkIZt6x_uUe3hwBjcUw_lcXPp0fpM-n4ntUWEds3T51GO3ePlTWUnFm2riIZ6N5Fn83nt2AwcriKMfVCRZ4i5HZ1w"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
