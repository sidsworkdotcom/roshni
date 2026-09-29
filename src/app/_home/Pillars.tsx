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
    category: "Spatial Layouts",
    title: "Layouts that calm the mind and invite movement.",
    description:
      "Our spaces are thoughtfully crafted to enhance cognitive wellbeing. Drawing on principles from neuroarchitecture and environmental psychology, we design room layouts, sightlines, and circulation patterns that reduce cognitive overload, foster calm, and promote intuitive movement throughout the home.\n\nFrom open yet cosy layouts and visual connections to nature, to ergonomic furniture, active circulation paths, and visible stairs, every element encourages subtle daily movement. Research in neuroscience and behavioural studies shows that integrating light physical activity into everyday routines can improve cognition, reduce stress, and support emotional resilience (Ulrich, 1984; Kaplan & Kaplan, 1989).",
    image: img1,
    alt: "Open-plan home with a visible stair and views to the garden"
  },
  {
    id: "02",
    category: "Neuro-Aesthetic Materials & Finishes",
    title: "Natural materials that support mental and physical wellness.",
    description:
      "In neuroarchitecture, the choice of materials can significantly affect health and wellbeing. Natural materials such as wood, stone, and clay have been shown to reduce stress, lower blood pressure, and improve mood, while tactile surfaces engage the senses and create a sense of comfort.\n\nStudies have found that environments with natural textures and finishes can lower cortisol levels, enhance cognitive performance, and promote restorative states in both homes and workplaces (Kellert & Calabrese, 2015; Joye & van den Berg, 2011). By carefully selecting materials, we create spaces that actively support wellbeing.",
    image: img2,
    alt: "Close-up of natural wood, stone and clay textures"
  },
  {
    id: "03",
    category: "Style or Science?",
    title: "Is neuroarchitecture style or science? It's both.",
    description:
      "Neuroarchitecture blends the science of how humans respond to their environment with thoughtful design and aesthetics. Our warm, modern homes feel timeless because they reflect the way people naturally perceive space, light, and materials.\n\nWhen design resonates with physiology, architecture becomes more than style. It supports how we live, think, and feel.",
    image: img3,
    alt: "Warm modern interior with soft daylight and curved forms"
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