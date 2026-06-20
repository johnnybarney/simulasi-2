"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DISPLAY = "'Clash Display', sans-serif";
const BODY    = "var(--font-chakra), 'Chakra Petch', sans-serif";
const ACCENT  = "#00c5cd";

const PHASE_DURATION = 6000;
const NUM_PHASES     = 5;

/* ─── Animated SVG icon wrapper ──────────────────────────────────── */
function CyberIcon({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      className="mb-5 flex justify-center"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ filter: ["drop-shadow(0 0 4px #00c5cd88)", "drop-shadow(0 0 14px #00c5cdcc)", "drop-shadow(0 0 4px #00c5cd88)"] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ display: "inline-block" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ─── Draw-on SVG path ───────────────────────────────────────────── */
function DrawPath({ d, delay = 0, duration = 0.9 }: { d: string; delay?: number; duration?: number }) {
  return (
    <motion.path
      d={d}
      stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      exit={{ pathLength: 0, opacity: 0 }}
      transition={{ pathLength: { duration, delay, ease: "easeOut" }, opacity: { duration: 0.2, delay } }}
    />
  );
}

/* ─── Phase-specific icons ───────────────────────────────────────── */

// Sword/attack crossing shield — Red Team title
function IconRedTeam({ delay = 0 }: { delay?: number }) {
  return (
    <CyberIcon delay={delay}>
      <svg width="52" height="52" viewBox="0 0 24 24">
        {/* shield */}
        <DrawPath d="M12 3L4 6v5c0 4.5 3.4 8.7 8 10 4.6-1.3 8-5.5 8-10V6L12 3z" delay={delay} duration={0.9} />
        {/* sword diagonal */}
        <DrawPath d="M9 15l6-6" delay={delay + 0.6} duration={0.4} />
        {/* sword tip */}
        <DrawPath d="M8 12l1 3 3-1" delay={delay + 0.85} duration={0.35} />
        {/* sword handle */}
        <DrawPath d="M14 9l1-1 1 1-1 1" delay={delay + 1.0} duration={0.3} />
      </svg>
    </CyberIcon>
  );
}

// Target with attack arrow — Objective
function IconTarget({ delay = 0 }: { delay?: number }) {
  return (
    <CyberIcon delay={delay}>
      <svg width="52" height="52" viewBox="0 0 24 24">
        <DrawPath d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" delay={delay} duration={0.85} />
        <DrawPath d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" delay={delay + 0.5} duration={0.65} />
        <DrawPath d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" delay={delay + 0.9} duration={0.4} />
        {/* arrow coming in */}
        <DrawPath d="M20 4l-4 4" delay={delay + 1.1} duration={0.3} />
        <DrawPath d="M16 4h4v4" delay={delay + 1.3} duration={0.3} />
      </svg>
    </CyberIcon>
  );
}

// Globe with connections — Scope (physical + social + digital)
function IconGlobe({ delay = 0 }: { delay?: number }) {
  return (
    <CyberIcon delay={delay}>
      <svg width="52" height="52" viewBox="0 0 24 24">
        <DrawPath d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" delay={delay} duration={0.9} />
        <DrawPath d="M2 12h20" delay={delay + 0.5} duration={0.5} />
        <DrawPath d="M12 2c-2.5 3-4 6.5-4 10s1.5 7 4 10" delay={delay + 0.7} duration={0.7} />
        <DrawPath d="M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10" delay={delay + 0.85} duration={0.7} />
        {/* node dots */}
        <DrawPath d="M12 6v1" delay={delay + 1.2} duration={0.2} />
        <DrawPath d="M4.9 9h1" delay={delay + 1.3} duration={0.2} />
        <DrawPath d="M18.1 9h1" delay={delay + 1.4} duration={0.2} />
      </svg>
    </CyberIcon>
  );
}

// Magnifying glass over a path — Outcome / analysis
function IconAnalysis({ delay = 0 }: { delay?: number }) {
  return (
    <CyberIcon delay={delay}>
      <svg width="52" height="52" viewBox="0 0 24 24">
        <DrawPath d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" delay={delay} duration={0.85} />
        <DrawPath d="M21 21l-4.35-4.35" delay={delay + 0.6} duration={0.4} />
        {/* attack path inside lens */}
        <DrawPath d="M8 11l2 2 3-3" delay={delay + 0.85} duration={0.5} />
      </svg>
    </CyberIcon>
  );
}

// Connected nodes network — Holistic / end frame
function IconNetwork({ delay = 0 }: { delay?: number }) {
  return (
    <CyberIcon delay={delay}>
      <svg width="52" height="52" viewBox="0 0 24 24">
        {/* center node */}
        <DrawPath d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" delay={delay} duration={0.6} />
        {/* connecting lines */}
        <DrawPath d="M12 3v3" delay={delay + 0.4} duration={0.3} />
        <DrawPath d="M12 18v3" delay={delay + 0.5} duration={0.3} />
        <DrawPath d="M3 12h3" delay={delay + 0.6} duration={0.3} />
        <DrawPath d="M18 12h3" delay={delay + 0.7} duration={0.3} />
        {/* outer nodes */}
        <DrawPath d="M12 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" delay={delay + 0.75} duration={0.3} />
        <DrawPath d="M12 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" delay={delay + 0.85} duration={0.3} />
        <DrawPath d="M3 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" delay={delay + 0.95} duration={0.3} />
        <DrawPath d="M19 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" delay={delay + 1.05} duration={0.3} />
      </svg>
    </CyberIcon>
  );
}

/* ─── Shared UI helpers ──────────────────────────────────────────── */
function GlowLabel({ text }: { text: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="text-[9px] tracking-[0.6em] uppercase mb-2 font-medium text-center"
      style={{ color: ACCENT, fontFamily: BODY, textShadow: `0 0 12px ${ACCENT}99` }}
    >
      / {text}
    </motion.p>
  );
}

function AnimDivider({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="mb-4 h-px mx-auto"
      style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}90, transparent)`, maxWidth: "160px" }}
    />
  );
}

type TextSize = "xs" | "sm" | "md" | "lg" | "xl";
const textSizes: Record<TextSize, string> = { xs: "0.7rem", sm: "0.95rem", md: "1.2rem", lg: "1.7rem", xl: "2.1rem" };

function TextLine({ text, size = "md", color = "rgba(255,255,255,0.85)", delay = 0, glow = false }: {
  text: string; size?: TextSize; color?: string; delay?: number; glow?: boolean;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -8, filter: "blur(3px)" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ fontSize: textSizes[size], color, fontFamily: BODY, letterSpacing: "0.03em",
        textShadow: glow ? `0 0 18px ${color}99` : undefined, textAlign: "center" }}
    >
      {text}
    </motion.p>
  );
}

/* ─── Background elements ────────────────────────────────────────── */
function Particle({ id }: { id: number }) {
  const x    = ((id * 137.5) % 100);
  const y    = ((id * 73.1)  % 80) + 10;
  const size = id % 5 === 0 ? 3 : id % 3 === 0 ? 2 : 1.5;
  const dur  = 4 + (id % 5) * 0.9;
  const del  = (id * 0.19) % dur;
  return (
    <motion.div className="absolute rounded-full pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: ACCENT,
        boxShadow: id % 4 === 0 ? `0 0 ${size * 3}px ${ACCENT}` : undefined }}
      animate={{ opacity: [0, 0.7, 0], y: [0, -(25 + (id % 5) * 12)], scale: [0.4, 1, 0.2] }}
      transition={{ duration: dur, delay: del, repeat: Infinity, ease: "easeOut" }}
    />
  );
}

function Scanlines() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{
      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
      opacity: 0.35,
    }} />
  );
}

function Corners() {
  const s = "1px solid " + ACCENT; const sz = 18;
  return (
    <>
      <div className="absolute top-3 left-3"  style={{ width: sz, height: sz, borderTop: s, borderLeft: s }} />
      <div className="absolute top-3 right-3" style={{ width: sz, height: sz, borderTop: s, borderRight: s }} />
      <div className="absolute bottom-3 left-3"  style={{ width: sz, height: sz, borderBottom: s, borderLeft: s }} />
      <div className="absolute bottom-3 right-3" style={{ width: sz, height: sz, borderBottom: s, borderRight: s }} />
    </>
  );
}

function ProgressBar({ phase }: { phase: number }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "rgba(255,255,255,0.05)" }}>
      <motion.div className="h-full" key={phase}
        style={{ background: `linear-gradient(90deg, ${ACCENT}, #00e5f0)` }}
        initial={{ width: "0%" }} animate={{ width: "100%" }}
        transition={{ duration: PHASE_DURATION / 1000, ease: "linear" }}
      />
    </div>
  );
}

const phaseVariants = {
  initial: { opacity: 0, scale: 0.96, filter: "blur(6px)" },
  animate: { opacity: 1, scale: 1,    filter: "blur(0px)" },
  exit:    { opacity: 0, scale: 1.02, filter: "blur(4px)" },
};
const phaseTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };
const PARTICLES = Array.from({ length: 24 }, (_, i) => i);

/* ─── Main export ────────────────────────────────────────────────── */
export function RedTeamAnimation() {
  const [phase, setPhase] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => setPhase((p) => (p + 1) % NUM_PHASES), PHASE_DURATION);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden"
      style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, #070a0a 0%, #000000 100%)" }}>

      {PARTICLES.map((id) => <Particle key={id} id={id} />)}
      <Scanlines />
      <Corners />

      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }} />
      <ProgressBar phase={phase} />

      {/* Phase dots */}
      <div className="absolute top-4 right-4 flex gap-1.5 z-10">
        {Array.from({ length: NUM_PHASES }).map((_, i) => (
          <div key={i} className="rounded-full transition-all duration-500"
            style={{ width: i === phase ? 14 : 4, height: 4,
              background: i === phase ? ACCENT : "rgba(255,255,255,0.15)",
              boxShadow: i === phase ? `0 0 8px ${ACCENT}` : undefined }} />
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-10 z-10">
        <div className="w-full max-w-[290px] text-center">
          <AnimatePresence mode="wait">

            {/* Phase 0 — Title */}
            {phase === 0 && (
              <motion.div key="p0" variants={phaseVariants} initial="initial" animate="animate" exit="exit" transition={phaseTransition}>
                <IconRedTeam delay={0.1} />
                <motion.h2 className="font-bold leading-[0.95] text-center"
                  style={{ fontFamily: DISPLAY, fontSize: "2rem", letterSpacing: "0.06em",
                    color: "#ffffff", textShadow: "0 0 24px rgba(255,255,255,0.35)" }}
                  initial={{ opacity: 0, letterSpacing: "0.4em" }}
                  animate={{ opacity: 1, letterSpacing: "0.06em" }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}>
                  RED<br />TEAMING
                </motion.h2>
                <motion.div className="mt-4 h-px mx-auto"
                  style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`, maxWidth: "160px" }}
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 1.1 }} />
                <motion.p className="mt-3 text-[10px] tracking-[0.35em] uppercase text-center"
                  style={{ color: ACCENT, fontFamily: BODY, textShadow: `0 0 10px ${ACCENT}88` }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
                  Adversarial · Holistic · Unscoped
                </motion.p>
              </motion.div>
            )}

            {/* Phase 1 — Objective */}
            {phase === 1 && (
              <motion.div key="p1" variants={phaseVariants} initial="initial" animate="animate" exit="exit" transition={phaseTransition}>
                <IconTarget delay={0.1} />
                <GlowLabel text="Objective" />
                <AnimDivider delay={0.2} />
                <div className="space-y-2.5">
                  <TextLine text="Test holistic defense" size="md" color="#ffffff" delay={0.3} glow />
                  <TextLine text="capabilities against" size="sm" color="rgba(255,255,255,0.5)" delay={0.55} />
                  <TextLine text="real-world attacks" size="lg" color={ACCENT} delay={0.8} glow />
                </div>
              </motion.div>
            )}

            {/* Phase 2 — Scope */}
            {phase === 2 && (
              <motion.div key="p2" variants={phaseVariants} initial="initial" animate="animate" exit="exit" transition={phaseTransition}>
                <IconGlobe delay={0.1} />
                <GlowLabel text="Scope" />
                <AnimDivider delay={0.2} />
                <div className="space-y-2.5">
                  <TextLine text="Full Spectrum" size="lg" color="#ffffff" delay={0.3} glow />
                  <TextLine text="Physical · Social · Digital" size="sm" color={ACCENT} delay={0.6} glow />
                </div>
              </motion.div>
            )}

            {/* Phase 3 — Outcome */}
            {phase === 3 && (
              <motion.div key="p3" variants={phaseVariants} initial="initial" animate="animate" exit="exit" transition={phaseTransition}>
                <IconAnalysis delay={0.1} />
                <GlowLabel text="Outcome" />
                <AnimDivider delay={0.2} />
                <div className="space-y-2">
                  <TextLine text="Detailed analysis of" size="sm" color="rgba(255,255,255,0.45)" delay={0.3} />
                  <TextLine text="attack paths," size="md" color="#ffffff" delay={0.5} glow />
                  <TextLine text="detection & response" size="md" color={ACCENT} delay={0.75} glow />
                </div>
              </motion.div>
            )}

            {/* Phase 4 — End frame */}
            {phase === 4 && (
              <motion.div key="p4" variants={phaseVariants} initial="initial" animate="animate" exit="exit" transition={phaseTransition}>
                <IconNetwork delay={0.1} />
                <motion.h3 className="font-bold leading-[0.95] text-center"
                  style={{ fontFamily: DISPLAY, fontSize: "1.8rem",
                    color: "#ffffff", textShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.65, delay: 0.3 }}>
                  Red<br />Teaming
                </motion.h3>
                <motion.div className="mt-4 mb-4 h-px mx-auto"
                  style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`, maxWidth: "140px" }}
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.7 }} />
                <motion.p className="text-[10px] tracking-[0.3em] uppercase font-medium text-center"
                  style={{ color: ACCENT, fontFamily: BODY, textShadow: `0 0 10px ${ACCENT}88` }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
                  Holistic Scope.
                </motion.p>
                <motion.p className="text-[10px] tracking-[0.3em] uppercase text-center"
                  style={{ color: "rgba(255,255,255,0.4)", fontFamily: BODY }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
                  No Limits. Full Picture.
                </motion.p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
