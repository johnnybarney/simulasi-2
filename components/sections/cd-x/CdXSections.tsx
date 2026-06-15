"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Container } from "@/components/layout/Container";
import { routes } from "@/lib/navigation";

const C = "#00ffcc";
const M = "#cc00ff";
const inf = { repeat: Infinity } as const;

/* ── SVG circuit board background ───────────────────────── */
function CircuitBoard() {
  return (
    <svg
      viewBox="0 0 1440 680"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="glow-c" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="glow-m" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="glow-ring" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── Magenta traces — left area ───────────────────── */}
      <g stroke={M} strokeWidth="1" fill="none" strokeOpacity="0.8" filter="url(#glow-m)">
        <path d="M0,80 H80 V60 H180 V100 H280" />
        <path d="M0,150 H100 V130 H220 V170 H360" />
        <path d="M0,220 H80 V250 H200" />
        <path d="M0,290 H60 V260 H140 V300 H240 V330 H380" />
        <path d="M0,370 H80 V400 H200 V380 H300" />
        <path d="M0,440 H80 V470 H200" />
        <path d="M0,520 H60 V540 H160 V520 H260" />
        <path d="M0,590 H80 V610 H180" />
        {/* vertical connectors */}
        <path d="M80,0 V80" />
        <path d="M80,150 V220" />
        <path d="M80,290 V370" />
        <path d="M80,440 V520" />
        <path d="M80,590 V680" />
        <path d="M180,100 V130" />
        <path d="M220,170 V260" />
        <path d="M200,250 V380" />
        <path d="M300,380 V470" />
        {/* right extensions */}
        <path d="M380,330 H460 V350 H540" />
        <path d="M360,170 H440 V190 H520" />
        <path d="M200,470 H300 V490 H400" />
      </g>

      {/* Magenta dots */}
      <g fill={M} filter="url(#glow-m)">
        {[[280,100],[360,170],[200,250],[240,300],[200,380],[200,470],[260,520],[180,610],[540,350],[520,190],[400,490]].map(([cx,cy],i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="3" />
            <circle cx={cx} cy={cy} r="6.5" fill="none" stroke={M} strokeWidth="0.8" />
          </g>
        ))}
        {/* animated pulse nodes */}
        <motion.circle cx={360} cy={170} r={4}
          animate={{ r:[4,8,4], opacity:[0.9,0.2,0.9] }}
          transition={{...inf, duration:2.2}} />
        <motion.circle cx={380} cy={330} r={4}
          animate={{ r:[4,8,4], opacity:[0.9,0.2,0.9] }}
          transition={{...inf, duration:2.8, delay:0.6}} />
      </g>

      {/* Magenta animated data packet */}
      <motion.circle cy={170} r={3} fill={M} filter="url(#glow-m)"
        animate={{ cx:[0, 360] }}
        transition={{...inf, duration:3.2, ease:"linear", repeatDelay:1.5}} />
      <motion.circle cy={330} r={3} fill={M} filter="url(#glow-m)"
        animate={{ cx:[0, 380] }}
        transition={{...inf, duration:3.8, ease:"linear", repeatDelay:2, delay:1}} />

      {/* ── Cyan traces — right area ──────────────────────── */}
      <g stroke={C} strokeWidth="1" fill="none" strokeOpacity="0.8" filter="url(#glow-c)">
        <path d="M1440,70 H1360 V50 H1260 V90 H1160" />
        <path d="M1440,140 H1380 V120 H1280 V160 H1180 V140 H1080" />
        <path d="M1440,210 H1360 V230 H1260" />
        <path d="M1440,290 H1360 V270 H1260 V310 H1160" />
        <path d="M1440,370 H1380 V390 H1280" />
        <path d="M1440,450 H1360 V470 H1260 V450 H1160" />
        <path d="M1440,530 H1380 V510 H1280 V550 H1180" />
        <path d="M1440,610 H1360 V590 H1260" />
        {/* vertical connectors */}
        <path d="M1360,0 V70" />
        <path d="M1360,140 V210" />
        <path d="M1360,290 V370" />
        <path d="M1360,450 V530" />
        <path d="M1360,610 V680" />
        <path d="M1260,90 V120" />
        <path d="M1280,160 V270" />
        <path d="M1160,310 V390" />
        <path d="M1260,450 V510" />
        {/* left extensions from right cluster */}
        <path d="M1080,140 H1000 V160 H920" />
        <path d="M1160,310 H1080 V330 H1000 V310 H900" />
        <path d="M1180,530 H1100 V550 H1020" />
      </g>

      {/* Cyan dots */}
      <g fill={C} filter="url(#glow-c)">
        {[[1160,90],[1080,140],[1180,160],[1260,230],[1160,310],[1280,390],[1160,450],[1180,530],[1020,550],[900,310],[920,160],[1260,590]].map(([cx,cy],i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="3" />
            <circle cx={cx} cy={cy} r="6.5" fill="none" stroke={C} strokeWidth="0.8" />
          </g>
        ))}
        {/* diamond nodes */}
        <path d={`M${1260},230 l6,6 l-6,6 l-6,-6 Z`} fill={C} />
        <path d={`M${900},310 l6,6 l-6,6 l-6,-6 Z`} fill={C} />
        {/* animated pulse */}
        <motion.circle cx={1160} cy={140} r={4}
          animate={{ r:[4,9,4], opacity:[0.9,0.1,0.9] }}
          transition={{...inf, duration:2.4, delay:0.4}} />
        <motion.circle cx={1160} cy={310} r={4}
          animate={{ r:[4,9,4], opacity:[0.9,0.1,0.9] }}
          transition={{...inf, duration:3, delay:1.1}} />
      </g>

      {/* Cyan animated data packets */}
      <motion.circle cy={140} r={3} fill={C} filter="url(#glow-c)"
        animate={{ cx:[1440, 920] }}
        transition={{...inf, duration:3.4, ease:"linear", repeatDelay:1.8}} />
      <motion.circle cy={310} r={3} fill={C} filter="url(#glow-c)"
        animate={{ cx:[1440, 900] }}
        transition={{...inf, duration:4, ease:"linear", repeatDelay:2.2, delay:0.8}} />

      {/* Connecting traces from right cluster inward */}
      <g stroke={C} strokeWidth="1" strokeOpacity="0.6" fill="none" filter="url(#glow-c)">
        <path d="M920,160 H860 V200 H800" />
        <path d="M900,310 H820 V340 H740" />
        <path d="M1020,550 H960 V570 H880" />
      </g>
      <g fill={C} filter="url(#glow-c)">
        <circle cx={800} cy={200} r="3" />
        <circle cx={740} cy={340} r="3" />
        <circle cx={880} cy={570} r="3" />
        <circle cx={800} cy={200} r="6.5" fill="none" stroke={C} strokeWidth="0.8" />
        <circle cx={740} cy={340} r="6.5" fill="none" stroke={C} strokeWidth="0.8" />
      </g>
    </svg>
  );
}

/* ── Hero ─────────────────────────────────────────────────── */
export function CdXHero() {
  return (
    <section className="bg-cyber-bg py-16 md:py-24">
      {/* Container constrains both the circuit background and the content */}
      <Container className="relative overflow-hidden">
        {/* Circuit board — clipped to Container width */}
        <CircuitBoard />

        {/* Dark overlay to ensure text legibility */}
        <div className="pointer-events-none absolute inset-0 bg-black/70" aria-hidden="true" />
        {/* Vignette for depth */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 80% at 25% 50%, transparent 20%, rgba(0,0,0,0.85) 100%)" }}
          aria-hidden="true"
        />

        {/* Content grid */}
        <div className="relative z-10 grid items-center gap-12 py-4 lg:grid-cols-2">
          <div>
            <h1 className="font-headline text-6xl font-bold md:text-7xl">
              <GradientText as="span" className="drop-shadow-[0_0_20px_rgba(255,0,255,0.5)]">
                CD-X
              </GradientText>
            </h1>
            <p className="mt-2 text-sm font-bold uppercase tracking-widest text-magenta-neon">
              Cyber Exercise Command &amp; Control (CE-C2)
            </p>
            <p className="mt-6 font-headline text-2xl font-bold leading-tight text-white md:text-3xl">
              Mission-Critical Cyber Exercise Orchestration Platform
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
              A comprehensive dashboard for the end-to-end lifecycle of cyber range operations — from scenario design to incident response. Compliant with NACSA Baseline 1.4 and ACT 854 standards.
            </p>
            {/* CTA */}
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-white/40">
              Call to action
            </p>
            <div className="mt-3 flex flex-wrap gap-4">
              <a
                href={routes.contact}
                className="flex flex-col items-start rounded-lg border border-cyan-neon/60 bg-cyan-neon/20 px-5 py-3 transition hover:bg-cyan-neon/30"
                style={{ boxShadow: "0 0 20px 4px rgba(0,255,204,0.25)" }}
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-neon/70">Enter</span>
                <span className="font-headline text-base font-bold text-cyan-neon">Access War Room</span>
              </a>
              <a
                href={routes.contact}
                className="flex flex-col items-start rounded-lg border border-magenta-neon/60 bg-magenta-neon/20 px-5 py-3 transition hover:bg-magenta-neon/30"
                style={{ boxShadow: "0 0 20px 4px rgba(255,0,255,0.25)" }}
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-magenta-neon/70">Review</span>
                <span className="font-headline text-base font-bold text-magenta-neon">Mission Briefing</span>
              </a>
            </div>
          </div>

          {/* Hero image — box style matching other pages */}
          <div className="w-full overflow-hidden rounded-lg border-gradient-cyan-magenta bg-cyber-bg">
            <Image
              src="/images/latihansiber.png"
              alt="CD-X platform — Latihan Siber"
              width={800}
              height={600}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CyberDrillsSection() {
  return (
    <section className="py-16 md:py-20">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        {/* Section image — box style matching other pages */}
        <div className="w-full overflow-hidden rounded-lg border-gradient-cyan-magenta bg-cyber-bg">
          <Image
            src="/images/national.png"
            alt="National Critical Infrastructure"
            width={800}
            height={600}
            className="h-auto w-full object-contain"
          />
        </div>
        <div>
          <p className="font-semibold text-cyan-neon">Cyber Drills Matter</p>
          <h2 className="mt-2 font-headline text-3xl font-bold text-white md:text-4xl">
            National Critical Infrastructure
          </h2>
        </div>
      </Container>
    </section>
  );
}

export function ValueDeliveryTable() {
  const rows = [
    { pillar: "Unified Exercise Lifecycle", provide: "End-to-end planning, execution, and reporting in one platform.", outcome: "Reduced coordination overhead and faster exercise turnaround." },
    { pillar: "Red Teaming Precision", provide: "Structured adversary simulation workflows with objective tracking.", outcome: "Clear evidence of defensive gaps across people, process, and technology." },
    { pillar: "Blue Team Empowerment", provide: "Real-time dashboards and after-action analytics for defenders.", outcome: "Improved detection tuning and response readiness." },
    { pillar: "Automated IR Tracking", provide: "Incident response milestones captured automatically during exercises.", outcome: "Audit-ready timelines and measurable IR performance." },
    { pillar: "Compliance-by-Design", provide: "Framework mappings built into every exercise template.", outcome: "Regulatory alignment without additional documentation burden." },
    { pillar: "Isolated Range", provide: "Safe, segmented environments for high-fidelity technical drills.", outcome: "Realistic testing without production risk." },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="mb-8 font-headline text-xl font-bold text-cyan-neon md:text-2xl">
          Value Delivery: How Our Platform Service Delivers Value
        </h2>
        <div className="overflow-x-auto border border-cyan-neon/40">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="gradient-cyan-magenta text-black">
                <th className="px-4 py-3 font-bold">Service Pillar</th>
                <th className="px-4 py-3 font-bold">What We Provide</th>
                <th className="px-4 py-3 font-bold">Business Outcome</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.pillar} className="border-t border-cyan-neon/20">
                  <td className="px-4 py-4 font-bold text-white">{row.pillar}</td>
                  <td className="px-4 py-4 text-white/90">{row.provide}</td>
                  <td className="px-4 py-4 text-white/90">{row.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

export function CdXWhyChooseSection() {
  return null;
}

export function PartnersSection() {
  const logos = [
    "Petronas", "HalTech", "Airbus", "Sepang Aircraft Engineering",
    "Raya Airways", "UMW", "KAF", "KWAP", "Coway", "Universiti Malaya",
  ];
  // Duplicate for seamless loop
  const track = [...logos, ...logos];

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="rounded-lg border-2 border-magenta-neon p-px shadow-[0_0_24px_rgba(255,0,255,0.35)]">
          <div className="overflow-hidden rounded-lg bg-cyber-bg px-6 py-10 md:px-10">
            <h2 className="mb-10 text-center font-headline text-xl font-bold uppercase tracking-widest text-magenta-neon">
              WE SECURED THE BEST
            </h2>
            {/* Marquee track */}
            <div className="relative overflow-hidden">
              {/* Fade edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cyber-bg to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cyber-bg to-transparent" />

              <div
                className="flex gap-6"
                style={{
                  animation: "marquee-left 28s linear infinite",
                  width: "max-content",
                }}
              >
                {track.map((name, i) => (
                  <div
                    key={i}
                    className="flex h-16 w-44 shrink-0 items-center justify-center border border-white/10 px-3 text-center text-xs font-semibold text-white/70"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
