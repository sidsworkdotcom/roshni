import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";

const projects = [
  {
    title: "Snowstone Residence",
    location: "Teton County, Wyoming",
    url: "snowstone-residence",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBocU3uEUTVzlu9zceiw_h1kiQc5WT-ymYUaDwfPqE66R18iIUWQZfL7Mpk61o4VjGJ8DgTD5DHV0QQ5EjQcawnArcUU-33GKUQCjxueZ3NZ38wrSOmHxwBaI-mTBxjSr6rTNdHI23gtDSqvXd2uMFfaUMJoYHOEEYciEP_ZGG2SB-08vR3s8RK0prpQ50Ktt2dlZ-QSaN8C4xjTgl9guyFelYVyG7bjz00xwK96robtm2BuoacgXKkkA1hy-vSAieTscAcgphvpA"
  },
  {
    title: "Shooting Star Sanctuary",
    location: "Teton Village, Wyoming",
    url: "shooting-star-sanctuary",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNZbUPL7ApunBwWULen7z8JrZaoBUbDVETF6eSd41cL-RHg0jOCoAnIvS6PGzB9b63MBpIDvzDxfoysUhbEQjP5tJxuzGf3wouezAYh2WjjZCooJqLjJgxEUnrydNGmuAmzByXCmSjJMARBTjDerRZR8aPsNt44HQLU67z4xxUaCsKGIH-rK00UloBw60o8uuqoVgVwuVUtelLBcnZxuhy66hmAoIAFTC9R-_WTCnnT6sQQq8YU42LyqX3vweOIBS8PGKG0oF2PA"
  },
  {
    title: "Aegean Retreat",
    location: "Cyclades, Greece",
    url: "aegean-retreat",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5FYE0plTuNPzR1rBnkIocgZ-x6aHgAAx_o9IBE5HsewXn7CshixCZuhNDpNUBASyf1SNxRUQu8Pby0ieV5vSVvR--f3_NHbEoZMonDNcm3Tl7EJAsC_zkCMoBZUQEkzlMBK-COXrq6sV1kHt4BZScV1b7jSgx9M5eCEI9L6A6bcR69cq-7C2z6j5vs79dpdmmcWyHgFHBVoPJcJ25hd_q85MT7xijuX6VkKELyKUrKukqMYFom7ELu4Dzf-L81vgrCyzbkm7zlw"
  },
  {
    title: "Cotswold House",
    location: "Gloucestershire, UK",
    url: "cotswold-house",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsDcT_WjoiBVliZ5-eOPBjm36fBwRZrnyaxSnoYpUkb_Ycvc33jg8Ypinm0Z7ZbuLlH63Vu5eosbB0veJp1etroFq6bMkS_mGFdZvf8cOGqIfHVzRiOcXZBuCyIm2yscwtIcI2TnHfb52uoj7gqeoXDopsMSICQLzuiU5XC8j3hq0Pz6FEFAydo18IyHmqrpxmElIp4BUAKOu8jecAFizphbJyBS-zc-lHppl5v7Flbt5Ykuc8G0nL8S594mLR9PVmnblaxd5iHA"
  }
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-0">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative overflow-hidden md:aspect-square"
          >
            <Link
              href={`/projects/${project.url}`}
              className="absolute inset-0 z-30 cursor-pointer"
              aria-label={`View ${project.title}`}
            />
            <img
              alt={project.title}
              className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={project.image}
            />

            <ProgressiveBlur height="50%" />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-light tracking-widest uppercase md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm opacity-90">{project.location}</p>
                </div>

                <PiArrowRight
                  size={28}
                  className="transition-transform duration-300 group-hover:-rotate-45"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
