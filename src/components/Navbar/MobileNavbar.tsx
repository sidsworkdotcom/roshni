// components/MenuOverlay.tsx
"use client";

import { StudioInfo } from "@/constant/info";
import { motion, Variants } from "motion/react";
import Link from "next/link";
import { PiArrowUpRight } from "react-icons/pi";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

// 1. Overlay Slide Animation
const menuVariants: Variants = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0] // Custom cubic-bezier for smooth feel
    }
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// 2. Container for Staggering
const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1
    }
  }
};

// 3. Individual Item Animation
const itemVariants: Variants = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1]
    }
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1]
    }
  }
};

const navLinks = [
  { title: "Home", href: "/" },
  { title: "The Studio", href: "/profile" },
  { title: "Projects", href: "/projects" },
  { title: "Services", href: "/services" },
  { title: "Let's Connect", href: "/contact" }

  //   { title: "Culture", href: "/" },
  //   { title: "Contact", href: "/" }
];

export default function MobileNavbar({ onClose }: MenuOverlayProps) {
  return (
    <motion.div
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed top-0 left-0 z-50 flex h-dvh w-full origin-top flex-col justify-between bg-[#F2EFE9] p-10 text-[#222] md:hidden"
    >
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="rounded-full border border-black/20 p-4 transition-colors hover:bg-black/5"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
      </div>

      <motion.nav
        variants={containerVariants}
        initial="initial"
        animate="open"
        exit="initial"
        className="mt-10 flex flex-col gap-2"
      >
        {navLinks.map((link, index) => (
          <div key={index} className="overflow-hidden">
            <motion.div variants={itemVariants}>
              <Link
                href={link.href}
                className="font-serif text-6xl tracking-tight transition-all md:text-8xl"
                onClick={onClose}
              >
                {link.title}
              </Link>
            </motion.div>
          </div>
        ))}
      </motion.nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-20 flex gap-6 text-sm font-light"
      >
        <a
          className="nav-link relative inline-flex items-center gap-1"
          href={StudioInfo.Instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
          <PiArrowUpRight />
        </a>

        <a
          className="nav-link relative inline-flex items-center gap-1"
          href={StudioInfo.Pinterest}
          target="_blank"
          rel="noopener noreferrer"
        >
          Pinterest
          <PiArrowUpRight />
        </a>
        <a
          className="nav-link relative inline-flex items-center gap-1"
          href={StudioInfo.Facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
          <PiArrowUpRight />
        </a>
      </motion.div>
    </motion.div>
  );
}
