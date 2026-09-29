"use client";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

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
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"]
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, 2);
  const secondPart = images.slice(3, 7);
  const thirdPart = images.slice(7, 10);

  return (
    <div className={cn("w-full items-start", className)} ref={gridRef}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-4 px-4 py-40 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid gap-4">
          {firstPart.map((el, idx) => (
            <ProjectCard
              key={"grid-1" + idx}
              project={el}
              translateY={translateFirst}
            />
          ))}
        </div>
        <div className="grid gap-4">
          {secondPart.map((el, idx) => (
            <ProjectCard
              key={"grid-2" + idx}
              project={el}
              translateY={translateSecond}
            />
          ))}
        </div>
        <div className="grid gap-4">
          {thirdPart.map((el, idx) => (
            <ProjectCard
              key={"grid-3" + idx}
              project={el}
              translateY={translateThird}
            />
          ))}
        </div>
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
        <div className="relative aspect-auto">
          <Image
            src={project.src}
            className="m-0! h-auto w-full gap-4 object-cover object-top-left p-0! transition-transform duration-500 group-hover:scale-105"
            height="400"
            width="400"
            alt={project.name}
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
