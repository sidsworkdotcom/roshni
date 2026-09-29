import Footer from "@/components/Footer";
import Header from "@/components/Navbar/Navbar";
import { ApplicationUrl } from "@/lib/appUrl";
import ReactLenis from "lenis/react";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"]
});

const serif = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"]
});

export const metadata: Metadata = {
  metadataBase: new URL(ApplicationUrl),
  title: {
    default: "Roshni Design Studio | London Residential & Wellness Architects",
    template: "%s | Roshni Design Studio"
  },
  description:
    "London-based architectural practice working across private residential, wellness, and retreat environments.",
  openGraph: {
    siteName: "Roshni Design Studio",
    locale: "en_GB",
    type: "website"
  }
};
export const viewport: Viewport = {
  themeColor: "#181b1f"
  // colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${sans.variable} ${serif.variable} antialiased`}>
        <ReactLenis root>
          <Header />
          <main>{children}</main>
          <Footer />
        </ReactLenis>
        <NextTopLoader
          showSpinner={false}
          color="var(--color-charcoal)"
          zIndex={999}
          height={3}
        />
      </body>
    </html>
  );
}
