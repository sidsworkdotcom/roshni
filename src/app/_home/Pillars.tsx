"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { StaticImageData } from "next/image";
import img1 from "../../../public/images/pillar1.webp";
import img2 from "../../../public/images/pillar2.webp";
import img3 from "../../../public/images/pillar3.webp";
import PillarsMobile from "./PillarsMobile";
import PillarsStack from "./PillarsStack";

export interface Pillar {
  id: string;
  category: string;
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
}

const PILLARS: Pillar[] = [
  {
    id: "01",
    category: "",
    title: "Our spatial layouts.",
    description:
      "Our spaces are thoughtfully crafted to enhance cognitive wellbeing. Drawing on principles from neuroarchitecture and environmental psychology, we design room layouts, sightlines, and circulation patterns that reduce cognitive overload, foster calm, and promote intuitive movement throughout the home.\n\nFrom open yet cozy layouts and visual connections to nature to ergonomic furniture, active circulation paths, and visible stairs, every element encourages subtle daily movement. Research in neuroscience and behavioral studies demonstrates that integrating light physical activity into everyday routines can improve cognition, reduce stress, and support emotional resilience (Ulrich, 1984; Kaplan & Kaplan, 1989).",
    image: img1,
    alt: "Our spatial layouts"
  },
  {
    id: "02",
    category: "",
    title: "Neuro-Aesthetic Materials & Finishes",
    description:
      "In neuroarchitecture, the choice of materials can significantly impact health and wellbeing. Natural materials like wood, stone, and clay have been shown to reduce stress, lower blood pressure, and improve mood, while tactile surfaces engage the senses and create a sense of comfort. Studies have found that environments incorporating natural textures and finishes can decrease cortisol levels, enhance cognitive performance, and promote restorative states in both homes and workplaces (Kellert & Calabrese, 2015; Joye & van den Berg, 2011). By carefully selecting materials, architects can create spaces that actively support mental and physical wellness.",
    image: img2,
    alt: "Neuro-Aesthetic Materials & Finishes"
  },
  {
    id: "03",
    category: "",
    title: "s neuroarchitecture style or science?",
    description:
      "It’s both. Neuroarchitecture blends the science of how humans respond to their environment with thoughtful design and aesthetics. Our warm modern homes feel timeless because they reflect the way humans naturally perceive space, light, and materials. When design resonates with physiology, architecture becomes more than style—it supports how we live, think, and feel.",
    image: img3,
    alt: "Neuroarchitecture style or science"
  }
];

export default function Pillars() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? (
    <PillarsStack pillars={PILLARS} />
  ) : (
    <PillarsMobile pillars={PILLARS} />
  );
}