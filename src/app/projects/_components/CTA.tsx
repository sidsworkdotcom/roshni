import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-sand-50 px-6 py-32 text-center md:px-12">
      <div className="mx-auto max-w-4xl py-24">
        <h2 className="font-display mb-10 font-serif text-4xl md:text-5xl">
          Have a project in mind?
        </h2>
        <Link href={"/contact"}>
          <Button>Inquire for Collaboration</Button>
        </Link>
      </div>
    </section>
  );
}
