"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export interface ProjectItem {
  src: string;
  name: string;
  link: string;
}

export const ParallaxScroll = ({
  images,
  className
}: {
  images: ProjectItem[];
  className?: string;
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"]
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translates = [translateFirst, translateSecond, translateThird];

  // Deal projects out evenly: 1st -> col 1, 2nd -> col 2, 3rd -> col 3, 4th -> col 1 ...
  const columns: ProjectItem[][] = [[], [], []];
  images.forEach((item, i) => columns[i % 3].push(item));

  return (
    <div className={cn("w-full items-start", className)} ref={gridRef}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-4 px-4 py-40 md:grid-cols-2 lg:grid-cols-3">
        {columns.map((col, c) => (
          <div key={c} className="grid gap-4">
            {col.map((el) => (
              <ProjectCard
                key={el.link}
                project={el}
                translateY={translates[c]}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({
  project,
  translateY
}: {
  project: ProjectItem;
  translateY: any;
}) => {
  return (
    <motion.div
      style={{ y: translateY }}
      className="group relative overflow-hidden"
    >
      <Link href={project.link} className="block cursor-pointer">
        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
          <Image
            src={project.src}
            alt={project.name}
            fill
            sizes="(min-width: 1024px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex items-center justify-between text-white">
              <h3 className="text-xl md:text-2xl">{project.name}</h3>
              <div className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="size-8" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};