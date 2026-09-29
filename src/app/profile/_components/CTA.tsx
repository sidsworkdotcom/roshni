import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-accent flex flex-col justify-center p-12 md:p-20">
            <h3 className="mb-6 font-serif text-4xl leading-[1.1] font-light text-white italic md:text-6xl">
              Meaningful Places
            </h3>
            <p className="mb-8 text-base leading-relaxed font-light text-white/70">
              Our studio specializes in residential and wellness design. We
              believe that the environments we inhabit profoundly influence our
              mental and physical well-being.
            </p>
            <Link href="/projects" prefetch={false}>
              <Button variant="secondary" className="w-max">
                View projects
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              alt="Interior Detail"
              className="h-full min-h-[300px] w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjcGtDafGeWp6__e1d8TCnGwTDh69hu0OVDTlpIHfu7lPYVbPFElvUiceRMTbKTvOBenPFWN-yMUKjNOzxMdU03wEVGFAw2RFCseijyM1BxL3hNkybowcN40yLHKrZp6jqMCWuU4Ltj8nyCSZ0jGrgBtj9DYsOFY3cUtbgX17S5WF0M_0DK6B3Ly548w5XEs6D2wFmvHne47KXbEnGjInnfzOn9V0Xn9nYR185Qx8mqf25LUJ9goFth4ym8QtFYyFf9KG9JkWB7g"
            />
            <img
              alt="Studio Space"
              className="h-full min-h-[300px] w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLvQGeT9l7nqDVpmP6_zFJ37r40jJGlO5GS4p4_E4JEh6deW-G1Fxvi8NMD1R1TEi4XLfUgv1oe7FGz3joVPYm3QG9G2t58djvjAyQj__qs2gm3bHXQ4TnZSlZFq9ccxz78rhTk5O75DvJvSqzWcLcEInUWflTxZzaVz2Q9RxzZZAR0I2Wj6Qvjj39PkODJvw1-JrbDEPeq6OtAoiaC-YFwomEYcOAwlC9q8_tUn_2SAn1kbXig9ejHlWxWf9ktu1cgTKMqZqAPA"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
