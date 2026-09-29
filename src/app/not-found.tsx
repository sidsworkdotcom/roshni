import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GridBg } from "./_home/Hero";

export default function NotFound() {
  return (
    <div className="bg-sand-50 relative flex min-h-screen flex-col">
      <main className="flex grow items-center justify-center px-8">
        <div className="w-full max-w-4xl py-16 text-center">
          <div className="relative z-10">
            <h1 className="text-charcoal/5 mb-0 font-serif text-[12rem] leading-none font-light md:text-[16rem]">
              404
            </h1>
            <h2 className="-mt-8 mb-8 font-serif text-4xl md:-mt-16 md:text-6xl">
              This path has not <br className="hidden md:block" /> been built
              yet.
            </h2>
            <p className="text-charcoal/60 mx-auto mb-10 max-w-xl text-lg leading-relaxed font-light md:text-xl">
              The space you are looking for does not exist or has been relocated
              to another site. Perhaps it is a prompt for a new direction.
            </p>
            <p className="text-primary mb-16 font-serif text-xl tracking-wide italic">
              &quot;In every lost path, there is a moment for reflection.&quot;
            </p>
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
              <Link href={"/contact"}>
                <Button>Contact the studio</Button>
              </Link>

              <Link href={"/projects"}>
                <Button variant={"outline"}>View Selected Works</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <GridBg />
    </div>
  );
}
