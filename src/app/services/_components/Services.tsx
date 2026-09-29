import { Button } from "@/components/ui/button";

import { services } from "@/constant/services";
import Link from "next/link";

export default function Services() {
  return (
    <section className="pb-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`relative flex h-[450px] flex-col justify-between overflow-hidden bg-white p-8 transition-all duration-500 lg:p-12`}
              >
                <div className="relative z-10">
                  <div className={`mb-8`}>
                    <Icon size={42} className="text-charcoal/70" />
                  </div>

                  <h3 className="mb-4 font-serif text-2xl leading-snug lg:text-3xl">
                    {service.title}
                  </h3>

                  <p
                    className={`text-charcoal/60 text-base leading-relaxed font-light`}
                  >
                    {service.description}
                  </p>
                </div>

                <div>
                  <Link href={`/services/${service.slug}`}>
                    <Button variant={"outline"} className="w-full">
                      Explore Service
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
