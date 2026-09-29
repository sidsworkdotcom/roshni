"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { StaticImageData } from "next/image";
import img1 from "../../../public/images/pillar1.webp";
import img2 from "../../../public/images/pillar2.webp";
import img3 from "../../../public/images/pillar3.webp";
import img4 from "../../../public/images/pillar4.webp";
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
    category: "Residential thinking",
    title: "Everything begins with the logic of a home.",
    description:
      "Even when designing retreats, wellness spaces, or international developments, we apply the sensitivity of residential architecture — proportion, human scale, natural light, and spatial clarity.\n\nHomes teach us how people truly live. How they move. Where they pause. How privacy and connection coexist.\n\nThis residential foundation allows larger or more complex projects to retain intimacy, comfort, and emotional intelligence.",
    image: img1,
    alt: "Residential architecture details"
  },
  {
    id: "02",
    category: "Neuroarchitecture & Wellbeing",
    title: "We design for the nervous system, not just the eye.",
    description:
      "Informed by principles of neuroarchitecture, our spaces are shaped to reduce stress, support focus, and enhance emotional balance. Spatial legibility, natural light, rhythm, and material texture all influence how a space is experienced physiologically.\n\nArchitecture has the power to calm or overwhelm. We choose calm.\n\nThe result is environments that feel intuitive, grounded, and restorative — designed not only for immediate beauty, but for long-term wellbeing.",
    image: img2,
    alt: "Neuroarchitecture principles"
  },
  {
    id: "03",
    category: "Materiality & Atmosphere",
    title: "Materials are never decorative decisions. They shape atmosphere.",
    description:
      "We work with restrained palettes and tactile surfaces that feel natural, balanced, and enduring. Texture, tone, weight, and light are carefully considered to create environments that feel composed rather than imposed.\n\nAtmosphere emerges from proportion, shadow, detail, and restraint. Our aim is not spectacle. It is depth.",
    image: img3,
    alt: "Tactile materials and textures"
  },
  {
    id: "04",
    category: "Clarity & Continuity",
    title: "Good architecture provides clarity — in both design and process.",
    description:
      "From early feasibility to construction, we guide each project with a clear architectural direction and thoughtful coordination. This continuity ensures that the original intent remains intact from concept through completion.\n\nCalm design requires a calm process.",
    image: img4,
    alt: "Blueprint and architectural process"
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
