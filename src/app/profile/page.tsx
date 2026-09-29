import dynamic from "next/dynamic";
const Hero = dynamic(() => import("./_components/Hero"));
const Approach = dynamic(() => import("./_components/Approach"));
const Quote = dynamic(() => import("./_components/Quote"));

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roshni Design Studio | London Residential & Wellness Architects",
  description:
    "London-based architectural practice designing private homes, wellness retreats, and international residential projects with a focus on light, proportion, and wellbeing.",
  keywords: [
    "London residential architect",
    "Wellness architecture UK",
    "Retreat architecture studio",
    "Private residential architect London",
    "Neuroarchitecture design",
    "International architectural practice"
  ],
  alternates: {
    canonical: "https://roshnistudio.com/studio"
  },
  openGraph: {
    title: "Roshni Design Studio – Residential & Wellness Architecture",
    description:
      "An architectural practice working across private residential, wellness, and retreat environments in London and internationally.",
    url: "https://roshnistudio.com/studio",
    siteName: "Roshni Design Studio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Roshni Design Studio – Residential & Wellness Architecture",
    description:
      "London-based architects specialising in private homes and wellness environments."
  }
};

export default function Profile() {
  return (
    <div className="bg-sand-50">
      <Hero />
      <Quote />
      <Approach />
    </div>
  );
}