"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/navigation";
import { Container } from "@/components/layout/Container";

const DISPLAY = "'Clash Display', sans-serif";
const BODY    = "var(--font-chakra), 'Chakra Petch', sans-serif";
const ACCENT  = "#00c5cd";

const serviceLinks = [
  { label: "Technical Simulation Exercise", code: "TSX",             href: routes.tsx },
  { label: "Interactive Tabletop Exercise", code: "iTTX",            href: routes.ittx },
  { label: "Advance Simulation Exercise",   code: "ASX",             href: routes.asx },
  { label: "Offensive Operations",          code: "Attack Sim",      href: routes.attackSimulation },
  { label: "Reconnaissance Intelligence",   code: "Recon Intel",     href: routes.reconIntel },
  { label: "Capacity Building",             code: null,               href: "https://rp.my/training" },
];

const productLinks = [
  { label: "CD-X Platform", code: "CE-C2",       href: routes.cdX },
  { label: "MNI-X 3D Kit",  code: "Physical Viz", href: routes.mniX3dKit },
];

const mainLinks = [
  { label: "Services",    href: routes.tsx,        sub: "services" as const },
  { label: "Products",    href: routes.cdX,        sub: "products" as const },
  { label: "Cyber Pulse", href: routes.cyberPulse, sub: null },
  { label: "About Us",    href: routes.aboutUs,    sub: null },
  { label: "Contact",     href: routes.contact,    sub: null },
];

type Sub = "services" | "products" | null;

type Props = { activeHref?: string };

export function Header({ activeHref }: Props) {
  const [open, setOpen]       = useState(false);
  const [hovered, setHovered] = useState<Sub>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    setHovered(null);
  }

  const subLinks = hovered === "services" ? serviceLinks : hovered === "products" ? productLinks : [];

  return (
    <>
      {/* ── top bar ──────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-[200]" style={{ backgroundColor: "#000000" }}>
        <Container className="flex items-center justify-between py-6">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2 font-bold tracking-tight text-white text-xl"
            style={{ fontFamily: DISPLAY }}
          >
            <Image src="/images/rpmy3.png" alt="RP.MY logo" width={32} height={32} className="object-contain" />
            Simulasi
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-[11px] tracking-[0.35em] uppercase text-white transition-opacity hover:opacity-60"
            style={{ fontFamily: BODY }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? "/ Close" : "/ Menu"}
          </button>
        </Container>
      </header>

      {/* ── full-screen overlay ──────────────────────────────────── */}
      <div
        className={cn(
          "fixed inset-0 z-[199] transition-all duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        style={{ backgroundColor: "#000000" }}
      >
        <Container className="flex h-full flex-col justify-between py-28">

          {/* top: contact info */}
          <div className="flex flex-wrap gap-8 border-b border-white/8 pb-8">
            <a href="mailto:contact@simulasi.org"
              className="text-[11px] tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors"
              style={{ fontFamily: BODY }}>
              contact@simulasi.org
            </a>
            <a href="https://rp.my" target="_blank" rel="noopener noreferrer"
              className="text-[11px] tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors"
              style={{ fontFamily: BODY }}>
              rp.my
            </a>
          </div>

          {/* middle: two-column — big nav left, sub-links right */}
          <nav aria-label="Overlay navigation" className="flex-1 flex items-center">
            <div className="grid w-full gap-16 lg:grid-cols-[1fr_1fr]">

              {/* ── left: main nav items ── */}
              <ul className="space-y-0">
                {mainLinks.map((link, i) => {
                  const isActive = hovered === link.sub && link.sub !== null;
                  return (
                    <li key={link.href}>
                      {link.sub ? (
                        /* Services / Products — hover reveals sub-panel */
                        <button
                          type="button"
                          className="group flex w-full items-baseline gap-4 py-2 font-bold leading-tight text-left transition-colors duration-200"
                          style={{
                            fontFamily: DISPLAY,
                            fontSize: "clamp(2rem, 5vw, 4rem)",
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                            color: isActive ? ACCENT : "#ffffff",
                          }}
                          onMouseEnter={() => setHovered(link.sub)}
                        >
                          <span className="text-[11px] tracking-[0.3em] uppercase text-white/30 self-center"
                            style={{ fontFamily: BODY, color: isActive ? `${ACCENT}88` : undefined }}>
                            / {String(i + 1).padStart(2, "0")}
                          </span>
                          {link.label}
                          {/* small arrow indicator */}
                          <span className="ml-auto self-center text-[11px] tracking-widest transition-transform duration-200"
                            style={{ color: ACCENT, opacity: isActive ? 1 : 0.3, transform: isActive ? "translateX(4px)" : "none" }}>
                            →
                          </span>
                        </button>
                      ) : (
                        /* About Us / Contact — click directly */
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className="group flex items-baseline gap-4 py-2 font-bold leading-tight text-white transition-colors duration-200"
                          style={{
                            fontFamily: DISPLAY,
                            fontSize: "clamp(2rem, 5vw, 4rem)",
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                          }}
                          onMouseEnter={(e) => {
                            setHovered(null);
                            (e.currentTarget as HTMLElement).style.color = ACCENT;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "#ffffff";
                          }}
                        >
                          <span className="text-[11px] tracking-[0.3em] uppercase text-white/30 self-center"
                            style={{ fontFamily: BODY }}>
                            / {String(i + 1).padStart(2, "0")}
                          </span>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* ── right: sub-link panel ── */}
              <div className="flex flex-col justify-center min-h-[200px]">
                {hovered ? (
                  <div key={hovered} className="animate-[fadeSlideIn_0.2s_ease]">
                    <p className="mb-6 text-[10px] tracking-[0.35em] uppercase"
                      style={{ color: `${ACCENT}88`, fontFamily: BODY }}>
                      / {hovered === "services" ? "our services" : "our products"}
                    </p>
                    <ul className="space-y-1">
                      {subLinks.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className="group flex items-center gap-3 py-2.5 border-b border-white/5 transition-all duration-200 hover:border-white/20"
                          >
                            <span className="text-[10px] tracking-[0.2em] uppercase transition-colors duration-200"
                              style={{ color: ACCENT, fontFamily: BODY, minWidth: "3.5rem" }}>
                              {item.code ?? "→"}
                            </span>
                            <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors duration-200"
                              style={{ fontFamily: BODY, letterSpacing: "0.05em" }}>
                              {item.label}
                            </span>
                            <span className="ml-auto text-white/20 group-hover:text-white/60 transition-all duration-200 translate-x-0 group-hover:translate-x-1">
                              →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  /* idle state: subtle prompt */
                  <p className="text-[10px] tracking-[0.35em] uppercase text-white/15" style={{ fontFamily: BODY }}>
                    / hover a section to explore
                  </p>
                )}
              </div>
            </div>
          </nav>

          {/* bottom: CTA */}
          <div className="border-t border-white/8 pt-8 flex items-center justify-between flex-wrap gap-4">
            <p className="text-[10px] tracking-[0.35em] uppercase text-white/20" style={{ fontFamily: BODY }}>
              © 2026 Simulasi
            </p>
            <Link href={routes.contact} onClick={closeMenu}
              className="border border-white/20 px-8 py-3 text-[11px] tracking-[0.3em] uppercase text-white/60 hover:border-white hover:text-white transition-all"
              style={{ fontFamily: BODY }}>
              lets talk /
            </Link>
          </div>

        </Container>
      </div>

      {/* ── fade+slide keyframe ── */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
