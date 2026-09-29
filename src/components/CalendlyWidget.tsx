"use client";

import { StudioInfo } from "@/constant/info";
import { Loader2 } from "lucide-react";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function CalendlyWidget() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.event && e.data.event.indexOf("calendly") === 0) {
        setIsLoading(false);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="relative min-h-[600px] overflow-hidden bg-white">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white">
          <Loader2 className="text-charcoal/50 mb-4 h-8 w-8 animate-spin" />
          <p className="text-charcoal/60 animate-pulse text-sm">
            Loading calendly...
          </p>
        </div>
      )}
      <div
        className="calendly-inline-widget"
        data-url={StudioInfo.Calendly}
        style={{ minWidth: "320px", height: "100%" }}
      ></div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
