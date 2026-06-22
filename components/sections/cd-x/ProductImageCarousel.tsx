"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ACCENT = "#00c5cd";

const slides = [
  { src: "/images/product1.jpeg", alt: "CD-X platform — product view 1" },
  { src: "/images/product2.jpeg", alt: "CD-X platform — product view 2" },
  { src: "/images/product3.jpeg", alt: "CD-X platform — product view 3" },
];

const INTERVAL_MS = 4500;

export function ProductImageCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative aspect-video w-full bg-black"
      role="region"
      aria-label="CD-X product screenshots"
      aria-live="polite">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}>
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={i === 0}
          />
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show ${slide.alt}`}
            aria-current={i === active ? "true" : undefined}
            onClick={() => setActive(i)}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === active ? "1.25rem" : "0.375rem",
              background: i === active ? ACCENT : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
