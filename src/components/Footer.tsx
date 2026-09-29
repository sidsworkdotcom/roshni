import { StudioInfo } from "@/constant/info";
import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRight } from "react-icons/pi";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "The Studio", href: "/profile" },
  { title: "Projects", href: "/projects" },
  { title: "Services", href: "/services" },
  { title: "Let's Connect", href: "/contact" }
];

const Footer = () => (
  <footer className="bg-sand-50 px-6 pt-24 pb-12">
    <div className="mx-auto max-w-7xl">
      <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <Image
            src="/logo.png"
            alt="Roshni Studio Logo"
            width={180}
            height={40}
            className="mb-8 h-12 w-auto object-contain md:h-16"
          />

          {/* <p className="max-w-xs leading-relaxed opacity-60">
            A design practice dedicated to human-centric architecture and the
            pursuit of quiet beauty.
          </p> */}
        </div>

        <div>
          <h3 className="mb-6 text-xs font-bold tracking-widest uppercase">
            Links
          </h3>
          <ul className="space-y-4 text-sm opacity-80">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link className="nav-link relative" href={link.href}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-xs font-bold tracking-widest uppercase">
            Contact
          </h3>
          <ul className="space-y-4 text-sm opacity-80">
            <li>
              <a
                className="nav-link relative"
                href={`mailto:${StudioInfo.Email}`}
              >
                {StudioInfo.Email}
              </a>
            </li>

            <li>
              <a
                className="nav-link relative"
                href={`tel:${StudioInfo.Phone.replace(/\s/g, "")}`}
              >
                {StudioInfo.Phone}
              </a>
            </li>

            <li>
              {StudioInfo.Hours} <br />
              {StudioInfo.WorkingDays}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-xs font-bold tracking-widest uppercase">
            Follow
          </h3>
          <ul className="space-y-4 text-sm opacity-80">
            <li>
              <a
                className="nav-link relative inline-flex items-center gap-1"
                href={StudioInfo.Instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
                <PiArrowUpRight />
              </a>
            </li>

            <li>
              <a
                className="nav-link relative inline-flex items-center gap-1"
                href={StudioInfo.Pinterest}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest
                <PiArrowUpRight />
              </a>
            </li>
            <li>
              <a
                className="nav-link relative inline-flex items-center gap-1"
                href={StudioInfo.Facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
                <PiArrowUpRight />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="from-primary to-primary/10 bg-linear-to-t bg-clip-text text-center font-serif text-4xl text-transparent uppercase opacity-70 md:text-5xl lg:text-9xl">
        Roshni Studio
      </div>

      <div className="flex flex-col items-center justify-between space-y-4 border-t pt-12 text-[0.625rem] tracking-[0.2em] uppercase opacity-60 md:flex-row md:space-y-0">
        <p>© 2026 Roshni Studio. All rights reserved.</p>
        <div className="flex space-x-8">
          <a className="hover:underline hover:opacity-100" href="/privacy">
            Privacy Policy
          </a>
          <a className="hover:underline hover:opacity-100" href="/terms">
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
