import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./_components/Hero"));
// const Approach = dynamic(() => import("./_components/Approach"));
const Quote = dynamic(() => import("./_components/Quote"));
// const CTA = dynamic(() => import("./_components/CTA"));

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
      {/* <Approach /> */}
      {/* <CTA /> */}

      {/* <button
        className="bg-primary dark:bg-accent-cream dark:text-primary fixed right-8 bottom-8 z-[60] flex h-12 w-12 items-center justify-center rounded-full text-white shadow-2xl transition-transform hover:scale-110"
        // onclick="document.documentElement.classList.toggle('dark')"
      >
        <span className="material-icons-outlined dark:hidden">dark_mode</span>
        <span className="material-icons-outlined hidden dark:block">
          light_mode
        </span>
      </button> */}
    </div>
  );
}
