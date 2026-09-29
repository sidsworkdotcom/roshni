import FormComponent from "./_components/FormComponent";
import Hero from "./_components/Hero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | London Residential & Wellness Architects",
  description:
    "Contact Roshni Design Studio, London-based architects specialising in private homes, wellness retreats, and pre-purchase feasibility studies.",
  keywords: [
    "Architect London contact",
    "Book architectural consultation London",
    "Pre-purchase feasibility architect",
    "Residential architect enquiry",
    "Wellness architect UK"
  ],

  openGraph: {
    title: "Contact Roshni Design Studio",
    description:
      "Get in touch to discuss residential architecture, wellness projects, feasibility studies, or UK property advisory services.",
    url: "https://roshnistudio.com/contact",
    siteName: "Roshni Design Studio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Roshni Design Studio",
    description:
      "Book a consultation for residential or wellness architecture projects."
  }
};

export default function Contact() {
  return (
    <div className="bg-sand-50">
      <Hero />
      <FormComponent />
      {/* <section className="mx-auto max-w-7xl px-8 pb-20">
        <div className="relative h-96 w-full overflow-hidden rounded-lg border border-white/10 shadow-xl grayscale transition-all duration-700 hover:grayscale-0">
          <img
            alt="Location Map Placeholder"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd6teMaFl3ZouQ5_U_IDk0c_7iBp3_QFwPJBPwTuf1Z53ztWwK2heQcibaMw9PlxGfucEjkB_7Tas_bu4vMTb89BMKpQS-tGz0Lk9XDF66B1oQcerK-A3fOuvr-IJVMNi3niBVvB3JhgrHslFy7AzxjGkKrZF8lek5d8J4grgWz6i46KEcWv1pxGEF_dYfLJjyw6ikymkuCJKlhWS7OVFY-g-_e9oOcqobx1kTZoxrqFw06KlCs-Vetr7pO0HzHVSnyPLiowJd8Q"
          />
          <div className="bg-primary/10 pointer-events-none absolute inset-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-background-dark border-primary/30 flex items-center space-x-3 border p-4 text-white shadow-2xl">
              <span className="material-icons text-primary">location_on</span>
              <span className="text-sm font-bold tracking-widest uppercase">
                The Studio
              </span>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
