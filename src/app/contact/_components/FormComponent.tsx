import { StudioInfo } from "@/constant/info";
import EnquiryForm from "./Form";

import {
  PiArrowUpRight,
  PiEnvelopeSimpleFill,
  PiMapPinFill,
  PiPhoneFill
} from "react-icons/pi";

export default function FormComponent() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-3">
      <Contact />
      <EnquiryForm />
    </section>
  );
}

const contactItems = [
  {
    label: "Telephone",
    value: StudioInfo.Phone,
    href: `tel:${StudioInfo.Phone.replace(/\s+/g, "")}`,
    Icon: PiPhoneFill
  },
  {
    label: "Email",
    value: StudioInfo.Email,
    href: `mailto:${StudioInfo.Email}`,
    Icon: PiEnvelopeSimpleFill
  },
  {
    label: "Working Hours",
    value: `${StudioInfo.WorkingDays} | ${StudioInfo.Hours}`,
    Icon: PiMapPinFill
  }
];

const socialItems = [
  { label: "Instagram", href: StudioInfo.Instagram },
  { label: "Pinterest", href: StudioInfo.Pinterest },
  { label: "Facebook", href: StudioInfo.Facebook }
];

function Contact() {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 shadow">
        <h3 className="border-charcoal/20 mb-8 border-b pb-4 font-serif text-2xl">
          Quick Contact
        </h3>

        <div className="space-y-10">
          {contactItems.map(({ label, value, href, Icon }) => {
            const isLink = Boolean(href);

            const content = (
              <>
                <div className="text-primary group-hover:bg-primary bg-primary/10 p-3 transition-all group-hover:text-white">
                  <Icon size={20} />
                </div>

                <div>
                  <p className="text-charcoal/60 text-[0.625rem] font-bold tracking-[0.2em] uppercase">
                    {label}
                  </p>
                  <p className="text-sm font-medium">{value}</p>
                </div>
              </>
            );

            if (isLink) {
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start space-x-4"
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={label} className="flex items-start space-x-4">
                {content}
              </div>
            );
          })}
        </div>

        {/* Social */}
        <div className="border-charcoal/20 mt-12 border-t pt-10">
          <p className="text-charcoal/60 mb-4 text-[0.625rem] font-bold tracking-[0.2em] uppercase">
            Follow Us
          </p>

          <div className="text-charcoal/80 flex space-x-6 text-sm font-medium">
            {socialItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link relative inline-flex items-center gap-1"
              >
                {label} <PiArrowUpRight />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
