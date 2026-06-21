"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/navigation";
import { Container } from "@/components/layout/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const DISPLAY = "'Clash Display', sans-serif";
const BODY    = "var(--font-chakra), 'Chakra Petch', sans-serif";
const ACCENT  = "#00c5cd";

const serviceLinks = [
  { label: "Technical Simulation Exercise", code: "TSX",             href: routes.tsx },
  { label: "Interactive Tabletop Exercise", code: "iTTX",            href: routes.ittx },
  { label: "Advanced Simulation Exercise",   code: "ASX",             href: routes.asx },
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
  { label: "Contact Us",  href: routes.contact,    sub: null },
];

type Sub = "services" | "products" | null;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-6 flex-col items-center justify-center">
      <span
        className="absolute block h-px w-full transition-all duration-300"
        style={{
          background: "var(--theme-text, #ffffff)",
          transform: open ? "rotate(45deg)" : "translateY(-6px)",
        }}
      />
      <span
        className="absolute block h-px w-full transition-all duration-300"
        style={{
          background: "var(--theme-text, #ffffff)",
          opacity: open ? 0 : 1,
        }}
      />
      <span
        className="absolute block h-px w-full transition-all duration-300"
        style={{
          background: "var(--theme-text, #ffffff)",
          transform: open ? "rotate(-45deg)" : "translateY(6px)",
        }}
      />
    </span>
  );
}

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
      <header className="fixed top-0 left-0 right-0 z-[200]" style={{ backgroundColor: "var(--theme-header-bg, #000000)", transition: "background-color 0.35s ease" }}>
        <Container className="flex items-center justify-between py-6">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2 font-bold tracking-tight text-xl"
            style={{ fontFamily: DISPLAY, color: "var(--theme-text, #ffffff)" }}
          >
            <Image src="/images/rpmyrpmy.png" alt="RP.MY logo" width={32} height={32} className="logo-mark object-contain" />
            Simulasi
          </Link>

          <div className="flex items-center gap-5">
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-70"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </Container>
      </header>

      {/* ── full-screen overlay ──────────────────────────────────── */}
      <div
        className={cn(
          "fixed inset-0 z-[199] transition-all duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        style={{ backgroundColor: "var(--theme-bg, #000000)", transition: "background-color 0.35s ease" }}
      >
        <Container className="flex h-full flex-col justify-between py-28">

          {/* top: contact info */}
          <div className="flex flex-wrap gap-8 border-b border-white/8 pb-8">
            <a href="mailto:contact@simulasi.org"
              className="text-[11px] tracking-[0.25em] uppercase transition-colors hover:opacity-100"
              style={{ fontFamily: BODY, color: "var(--theme-text-muted, rgba(255,255,255,0.4))" }}>
              contact@simulasi.org
            </a>
            <a href="https://rp.my" target="_blank" rel="noopener noreferrer"
              className="text-[11px] tracking-[0.25em] uppercase transition-colors hover:opacity-100"
              style={{ fontFamily: BODY, color: "var(--theme-text-muted, rgba(255,255,255,0.4))" }}>
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
                            color: isActive ? ACCENT : "var(--theme-text, #ffffff)",
                          }}
                          onMouseEnter={(e) => {
                            setHovered(link.sub);
                            (e.currentTarget as HTMLElement).style.color = ACCENT;
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--theme-text, #ffffff)";
                          }}
                        >
                          <span className="text-[11px] tracking-[0.3em] uppercase self-center"
                            style={{ fontFamily: BODY, color: isActive ? `${ACCENT}88` : "var(--theme-text-muted, rgba(255,255,255,0.3))" }}>
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
                        /* About Us / Contact / Cyber Pulse — click directly */
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className="group flex items-baseline gap-4 py-2 font-bold leading-tight transition-colors duration-200"
                          style={{
                            fontFamily: DISPLAY,
                            fontSize: "clamp(2rem, 5vw, 4rem)",
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                            color: "var(--theme-text, #ffffff)",
                          }}
                          onMouseEnter={(e) => {
                            setHovered(null);
                            (e.currentTarget as HTMLElement).style.color = ACCENT;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "var(--theme-text, #ffffff)";
                          }}
                        >
                          <span className="text-[11px] tracking-[0.3em] uppercase self-center"
                            style={{ fontFamily: BODY, color: "var(--theme-text-muted, rgba(255,255,255,0.3))" }}>
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
                    <p className="mb-8 text-xs tracking-[0.35em] uppercase"
                      style={{ color: ACCENT, fontFamily: BODY }}>
                      / {hovered === "services" ? "our services" : "our products"}
                    </p>
                    <ul className="space-y-2">
                      {subLinks.map((item) => {
                        const isExternal = item.href.startsWith("http");
                        const baseColor = "var(--theme-text, #ffffff)";
                        const arrowColor = "var(--theme-text-muted, rgba(255,255,255,0.45))";

                        function handleEnter(e: React.MouseEvent<HTMLElement>) {
                          const el = e.currentTarget;
                          el.querySelector<HTMLElement>("[data-label]")!.style.color = ACCENT;
                          el.querySelector<HTMLElement>("[data-arrow]")!.style.color = ACCENT;
                          el.style.borderBottomColor = "rgba(0,197,205,0.4)";
                        }
                        function handleLeave(e: React.MouseEvent<HTMLElement>) {
                          const el = e.currentTarget;
                          el.querySelector<HTMLElement>("[data-label]")!.style.color = baseColor;
                          el.querySelector<HTMLElement>("[data-arrow]")!.style.color = arrowColor;
                          el.style.borderBottomColor = "";
                        }

                        const inner = (
                          <>
                            <span className="menu-sub-code text-xs font-semibold tracking-[0.2em] uppercase"
                              style={{ fontFamily: BODY, minWidth: "4.5rem" }}>
                              {item.code ?? "→"}
                            </span>
                            <span data-label className="text-base font-semibold transition-colors duration-200"
                              style={{ fontFamily: BODY, letterSpacing: "0.04em", color: baseColor }}>
                              {item.label}
                            </span>
                            <span data-arrow className="ml-auto text-base transition-colors duration-200"
                              style={{ color: arrowColor }}>
                              →
                            </span>
                          </>
                        );

                        const sharedProps = {
                          onClick: closeMenu,
                          onMouseEnter: handleEnter,
                          onMouseLeave: handleLeave,
                          className: "flex items-center gap-4 py-3 border-b transition-all duration-200",
                          style: { borderBottomColor: "var(--theme-border, rgba(255,255,255,0.05))" } as React.CSSProperties,
                        };

                        return (
                          <li key={item.href}>
                            {isExternal ? (
                              <a href={item.href} target="_blank" rel="noopener noreferrer" {...sharedProps}>
                                {inner}
                              </a>
                            ) : (
                              <Link href={item.href} {...sharedProps}>
                                {inner}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  /* idle state: subtle prompt */
                  <p className="text-xs tracking-[0.35em] uppercase" style={{ fontFamily: BODY, color: "var(--theme-text-muted, rgba(255,255,255,0.4))" }}>
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
