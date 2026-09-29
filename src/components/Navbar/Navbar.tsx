"use client";

import { services } from "@/constant/services";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt4 as MenuIcon } from "react-icons/hi";
import { PiCaretDown } from "react-icons/pi";
import logo from "../../../public/logo.png";
import { Button } from "../ui/button";
import { TextAnimate } from "../ui/text-animate";
import MobileNavbar from "./MobileNavbar";

const SERVICES_LINKS = services;

const NAV_LINKS = [
  { label: "The Studio", href: "/profile" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Background change threshold
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Show/Hide logic
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ${
        isScrolled
          ? "bg-white"
          : "text-charcoal border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 transition-colors duration-500 md:h-20">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Roshni Design Studio Logo"
            className="h-8 w-auto object-contain lg:h-10"
          />
        </Link>

        <div className="flex items-center gap-12">
          <nav className="hidden space-x-6 text-xs font-medium tracking-[0.2em] uppercase md:flex">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                onMouseEnter={() =>
                  link.label === "Services" && setIsServicesHovered(true)
                }
                onMouseLeave={() =>
                  link.label === "Services" && setIsServicesHovered(false)
                }
                className="relative py-4"
              >
                <Link
                  href={link.href}
                  className="nav-link relative"
                  prefetch={false}
                >
                  <div className="flex items-center gap-1">
                    {link.label}
                    {link.label === "Services" && (
                      <motion.span
                        animate={{ rotate: isServicesHovered ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <PiCaretDown className="size-3.5" />
                      </motion.span>
                    )}
                  </div>
                </Link>

                {link.label === "Services" && (
                  <AnimatePresence>
                    {isServicesHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 min-w-[240px] overflow-hidden rounded-none border border-black/5 bg-white/80 p-2 shadow-xl backdrop-blur-xl"
                      >
                        <div className="flex flex-col gap-1">
                          {SERVICES_LINKS.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="group flex flex-col px-4 py-3 transition-colors hover:bg-black/5"
                            >
                              <TextAnimate
                                text={service.title}
                                type="whipInUp"
                                className="text-charcoal/80 group-hover:text-charcoal m-0 p-0 text-[12px] font-semibold tracking-widest transition-colors"
                              />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="max-sm:hidden">
            <Link href="/contact">
              <Button variant={"outline"}>Let&apos;s Connect</Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="text-sm font-medium tracking-widest uppercase md:hidden"
          >
            <MenuIcon className="size-8" />
            <span className="sr-only">navigation menu button</span>
          </button>

          <AnimatePresence>
            {isOpen && (
              <MobileNavbar isOpen={isOpen} onClose={() => setIsOpen(false)} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
