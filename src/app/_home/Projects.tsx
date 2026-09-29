  import { coverOrFallback, getProjects } from "@/lib/projects";
  import ProjectsClient from "./ProjectsClient";

  export default function Projects() {
    const items = getProjects().map((p, i) => ({
      src: coverOrFallback(p, i),
      name: p.title,
      link: `/projects/${p.slug}`
    }));

    return <ProjectsClient items={items} />;
  }