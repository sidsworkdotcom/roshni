import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="bg-sand-50 pt-32 pb-24">
      <section className="mb-16 px-6 text-center md:px-12">
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 block text-[10px] tracking-[0.5em] uppercase opacity-60">
            Portfolio
          </span>
          <h1 className="mb-6 font-serif text-4xl md:text-6xl lg:text-7xl">
            West London House Renovation
          </h1>
          <p className="text-xs tracking-[0.2em] uppercase opacity-70 md:text-sm">
            London, UK | Refurbishment &amp; Extension | Complete | 2023
          </p>
        </div>
      </section>
      <section className="mb-20 px-6 md:px-12">
        <div className="mx-auto aspect-[16/9] max-w-7xl overflow-hidden">
          <img
            alt="Atmospheric photo of the rear extension of a Victorian house"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBocU3uEUTVzlu9zceiw_h1kiQc5WT-ymYUaDwfPqE66R18iIUWQZfL7Mpk61o4VjGJ8DgTD5DHV0QQ5EjQcawnArcUU-33GKUQCjxueZ3NZ38wrSOmHxwBaI-mTBxjSr6rTNdHI23gtDSqvXd2uMFfaUMJoYHOEEYciEP_ZGG2SB-08vR3s8RK0prpQ50Ktt2dlZ-QSaN8C4xjTgl9guyFelYVyG7bjz00xwK96robtm2BuoacgXKkkA1hy-vSAieTscAcgphvpA"
          />
        </div>
      </section>
      <section className="mb-20 px-6 text-center md:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-charcoal text-xl leading-relaxed opacity-80 md:text-2xl">
            An extensive refurbishment and rear extension of a Victorian
            semi-detached house in West London.
          </p>
        </div>
      </section>
      <section className="mb-24">
        <div className="bg-accent w-full px-6 py-16 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed font-light text-white opacity-90 md:text-xl">
              The project updates and expands the property, adding a calm,
              light-filled extension that connects the interior to the garden
              while respecting the scale and character of the original house.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-24 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="paper-bg flex flex-col items-center p-8">
              <div className="mb-6 aspect-square w-full overflow-hidden">
                <img
                  alt="Axonometric view drawing"
                  className="h-full w-full object-contain opacity-80 mix-blend-multiply"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsDcT_WjoiBVliZ5-eOPBjm36fBwRZrnyaxSnoYpUkb_Ycvc33jg8Ypinm0Z7ZbuLlH63Vu5eosbB0veJp1etroFq6bMkS_mGFdZvf8cOGqIfHVzRiOcXZBuCyIm2yscwtIcI2TnHfb52uoj7gqeoXDopsMSICQLzuiU5XC8j3hq0Pz6FEFAydo18IyHmqrpxmElIp4BUAKOu8jecAFizphbJyBS-zc-lHppl5v7Flbt5Ykuc8G0nL8S594mLR9PVmnblaxd5iHA"
                />
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase">
                Axonometric
              </span>
            </div>
            <div className="paper-bg flex flex-col items-center p-8">
              <div className="mb-6 aspect-square w-full overflow-hidden">
                <img
                  alt="Ground Floor Plan drawing"
                  className="h-full w-full object-contain opacity-80 mix-blend-multiply"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNZbUPL7ApunBwWULen7z8JrZaoBUbDVETF6eSd41cL-RHg0jOCoAnIvS6PGzB9b63MBpIDvzDxfoysUhbEQjP5tJxuzGf3wouezAYh2WjjZCooJqLjJgxEUnrydNGmuAmzByXCmSjJMARBTjDerRZR8aPsNt44HQLU67z4xxUaCsKGIH-rK00UloBw60o8uuqoVgVwuVUtelLBcnZxuhy66hmAoIAFTC9R-_WTCnnT6sQQq8YU42LyqX3vweOIBS8PGKG0oF2PA"
                />
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase">
                Ground Floor Plan
              </span>
            </div>
            <div className="paper-bg flex flex-col items-center p-8">
              <div className="mb-6 aspect-square w-full overflow-hidden">
                <img
                  alt="First Floor Plan drawing"
                  className="h-full w-full object-contain opacity-80 mix-blend-multiply"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5FYE0plTuNPzR1rBnkIocgZ-x6aHgAAx_o9IBE5HsewXn7CshixCZuhNDpNUBASyf1SNxRUQu8Pby0ieV5vSVvR--f3_NHbEoZMonDNcm3Tl7EJAsC_zkCMoBZUQEkzlMBK-COXrq6sV1kHt4BZScV1b7jSgx9M5eCEI9L6A6bcR69cq-7C2z6j5vs79dpdmmcWyHgFHBVoPJcJ25hd_q85MT7xijuX6VkKELyKUrKukqMYFom7ELu4Dzf-L81vgrCyzbkm7zlw"
                />
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase">
                First Floor Plan
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-32 px-6 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 text-center md:grid-cols-3">
          <div className="bg-white p-10">
            <h3 className="mb-6 font-serif text-2xl">Loft Conversion</h3>
            <ul className="space-y-3 text-sm font-light opacity-80">
              <li>New bedroom and shower room</li>
              <li>Extended loft level</li>
              <li>Integrated storage solutions</li>
            </ul>
          </div>
          <div className="bg-white p-10">
            <h3 className="mb-6 font-serif text-2xl">Rear Extension</h3>
            <ul className="space-y-3 text-sm font-light opacity-80">
              <li>Open-plan, light-filled living</li>
              <li>Bespoke handcrafted kitchen</li>
              <li>Seamless garden connection</li>
            </ul>
          </div>
          <div className="bg-white p-10">
            <h3 className="mb-6 font-serif text-2xl">
              Ground Floor Renovation
            </h3>
            <ul className="space-y-3 text-sm font-light opacity-80">
              <li>Improved spatial flow</li>
              <li>Restored original features</li>
              <li>Framed views to the garden</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="px-6 text-center md:px-12">
        <div className="border-primary/10 dark:border-sand-100/10 mx-auto max-w-4xl border-y py-24">
          <h2 className="mb-10 font-serif text-5xl md:text-6xl">
            Interested in a similar <br /> transformation?
          </h2>
          <Link href="/contact">
            <Button className="hover:bg-primary/80">
              Inquire for a consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
