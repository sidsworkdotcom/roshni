import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./_components/Hero"));
const Services = dynamic(() => import("./_components/Services"));
// const CTA = dynamic(() => import("./_components/CTA"));

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architectural Services | London Residential & Wellness Design",
  description:
    "Architectural services in London including private residential design, wellness and retreat architecture, pre-purchase feasibility studies, measured surveys, and international advisory.",
  keywords: [
    "London residential architecture services",
    "Pre-purchase feasibility London",
    "Wellness retreat architect UK",
    "Measured survey London",
    "3D laser scanning London",
    "Architectural advisory international buyers",
    "RIBA architect London"
  ],
  openGraph: {
    title: "Architectural Services - Roshni Design Studio",
    description:
      "Residential architecture, wellness design, feasibility studies, measured surveys, and UK property advisory for international clients.",
    url: "https://roshnistudio.com/services",
    siteName: "Roshni Design Studio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Architectural Services - Roshni Design Studio",
    description:
      "London architectural services for residential and wellness-led projects."
  }
};

export default function ServicesPage() {
  return (
    <div className="bg-sand-50">
      <Hero />
      <Services />
      {/* <CTA /> */}
    </div>
  );
}
