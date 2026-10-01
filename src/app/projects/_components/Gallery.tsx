"use client";

import { useCallback, useEffect, useState } from "react";
import { PiCaretLeft, PiCaretRight, PiX } from "react-icons/pi";

export default function Gallery({
  images,
  title
}: {
  images: string[];
  title: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) =>
      setOpen((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  if (images.length === 0) return null;

  // 1 photo: full-width landscape. 2 photos: two landscape frames. 3+: masonry.
  const frame =
    images.length === 1 ? "aspect-[16/9]" : images.length === 2 ? "aspect-[4/3]" : "";
  const wrapper =
    images.length === 1
      ? "grid grid-cols-1 gap-4"
      : images.length === 2
        ? "grid grid-cols-1 gap-4 md:grid-cols-2"
        : "columns-1 gap-4 sm:columns-2 lg:columns-3";

  return (
    <>
      <div className={wrapper}>
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpen(i)}
            className={`block w-full cursor-zoom-in overflow-hidden ${
              frame ? frame : "mb-4 break-inside-avoid"
            }`}
            aria-label={`Open image ${i + 1} of ${images.length}`}
          >
            <img
              src={src}
              alt={`${title} ${i + 1}`}
              loading="lazy"
              decoding="async"
              className={`w-full transition-transform duration-700 hover:scale-105 ${
                frame ? "h-full object-cover" : "h-auto"
              }`}
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-6 right-6 text-white/80 transition hover:text-white"
          >
            <PiX size={32} />
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
              className="absolute left-4 text-white/80 transition hover:text-white md:left-8"
            >
              <PiCaretLeft size={40} />
            </button>
          )}

          <img
            src={images[open]}
            alt={`${title} ${open + 1}`}
            className="max-h-[90vh] max-w-[92vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
              className="absolute right-4 text-white/80 transition hover:text-white md:right-8"
            >
              <PiCaretRight size={40} />
            </button>
          )}

          <span className="absolute bottom-6 font-mono text-[10px] tracking-[0.3em] text-white/60 uppercase">
            {open + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}