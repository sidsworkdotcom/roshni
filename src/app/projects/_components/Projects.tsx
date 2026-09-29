import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { coverOrFallback, getProjects } from "@/lib/projects";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";

export default function Projects() {
  const projects = getProjects();

  return (
    <div className="mx-auto max-w-7xl px-4 pt-0">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {projects.map((project, i) => (
          <div
            key={project.slug}
            className="group relative overflow-hidden md:aspect-square"
          >
            <Link
              href={`/projects/${project.slug}`}
              className="absolute inset-0 z-30 cursor-pointer"
              aria-label={`View ${project.title}`}
            />
            <img
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={coverOrFallback(project, i)}
            />

            <ProgressiveBlur height="50%" />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-light tracking-widest uppercase md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm opacity-90">
                    {[project.location, project.category].filter(Boolean).join(" · ")}
                  </p>
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