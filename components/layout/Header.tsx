"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/navigation";
import { Container } from "@/components/layout/Container";

const DISPLAY = "'Clash Display', sans-serif";
const BODY    = "var(--font-chakra), 'Chakra Petch', sans-serif";
const ORCHID  = "#b64cf7";

const allLinks = [
  { label: "Services", href: routes.tsx },
  { label: "Products", href: routes.cdX },
  { label: "About Us", href: routes.aboutUs },
  { label: "Contact", href: routes.contact },
];

const serviceLinks = [
  { label: "Technical Simulation Exercise", code: "TSX", href: routes.tsx },
  { label: "Interactive Tabletop Exercise", code: "iTTX", href: routes.ittx },
  { label: "Advance Simulation Exercise", code: "ASX", href: routes.asx },
  { label: "Offensive Operations", code: "Attack Simulation", href: routes.attackSimulation },
  { label: "Reconnaissance Intelligence", code: "Recon Intel", href: routes.reconIntel },
  { label: "Capacity Building", code: null, href: "https://rp.my/training" },
];

const productLinks = [
  { label: "CD-X Platform", code: "CE-C2", href: routes.cdX },
  { label: "MNI-X 3D Kit", code: "Physical Viz", href: routes.mniX3dKit },
];

type Props = { activeHref?: string };

export function Header({ activeHref }: Props) {
  const [open, setOpen] = useState(false);

  /* lock body scroll when overlay is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── thin bar ─────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-[200]" style={{ backgroundColor: "#141414" }}>
        <Container className="flex items-center justify-between py-6">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 font-bold tracking-tight text-white text-xl"
            style={{ fontFamily: DISPLAY }}
          >
            <Image
              src="/images/rpmy3.png"
              alt="RP.MY logo"
              width={32}
              height={32}
              className="object-contain"
            />
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

      {/* ── full-screen overlay ───────────────────────────────── */}
      {/* ── full-screen overlay ───────────────────────────────── */}
      <div
        className={cn(
          "fixed inset-0 z-[199] transition-all duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        style={{ backgroundColor: "#141414", backdropFilter: "blur(45px)" }}
      >
        <Container className="flex h-full flex-col justify-between py-28">
          {/* contact info — matches Xizt menu top */}
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

          {/* main nav links — Xizt style: huge Clash Display, orchid hover */}
          <nav aria-label="Overlay navigation">
            <ul className="space-y-1">
              {allLinks.map((link, i) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-3 font-bold leading-tight text-white transition-colors"
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: "clamp(2rem, 5vw, 4rem)",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = ORCHID)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                  >
                    <span className="text-[11px] tracking-[0.3em] uppercase text-white/30 transition-colors self-center"
                      style={{ fontFamily: BODY }}>
                      / {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* sub-links + CTA */}
          <div className="border-t border-white/8 pt-8">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="mb-4 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ services</p>
                <ul className="space-y-2">
                  {serviceLinks.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} onClick={() => setOpen(false)}
                        className="text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-colors"
                        style={{ fontFamily: BODY }}>
                        {s.label}
                        {s.code && <span className="ml-2" style={{ color: ORCHID }}>( {s.code} )</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between gap-8">
                <div>
                  <p className="mb-4 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ products</p>
                  <ul className="space-y-2">
                    {productLinks.map((p) => (
                      <li key={p.href}>
                        <Link href={p.href} onClick={() => setOpen(false)}
                          className="text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-colors"
                          style={{ fontFamily: BODY }}>
                          {p.label}
                          <span className="ml-2" style={{ color: ORCHID }}>( {p.code} )</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={routes.contact} onClick={() => setOpen(false)}
                  className="self-start border border-white/20 px-8 py-3 text-[11px] tracking-[0.3em] uppercase text-white/60 hover:border-white hover:text-white transition-all"
                  style={{ fontFamily: BODY }}>
                  lets talk /
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
