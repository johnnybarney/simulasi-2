"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const ACCENT  = "#00c5cd";
const ACCENT2 = "#7b2fff";
const BODY    = "var(--font-chakra), 'Chakra Petch', sans-serif";
const DISPLAY = "'Clash Display', sans-serif";

/* ── phase data ─────────────────────────────────────────── */
interface Phase {
  id: number;
  code: string;
  label: string;
  desc: string;
  Icon: React.FC<{ active: boolean }>;
}

/* neon icon components — outlined SVG with glow */
function IconRecon({ active }: { active: boolean }) {
  const c = active ? ACCENT : "rgba(0,197,205,0.35)";
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" stroke={c} strokeWidth="1.2" />
      <circle cx="24" cy="24" r="10" stroke={c} strokeWidth="1" strokeDasharray="3 2" />
      <circle cx="24" cy="24" r="3"  fill={c} />
      <line x1="24" y1="6"  x2="24" y2="12" stroke={c} strokeWidth="1.2" />
      <line x1="24" y1="36" x2="24" y2="42" stroke={c} strokeWidth="1.2" />
      <line x1="6"  y1="24" x2="12" y2="24" stroke={c} strokeWidth="1.2" />
      <line x1="36" y1="24" x2="42" y2="24" stroke={c} strokeWidth="1.2" />
    </svg>
  );
}

function IconWeaponize({ active }: { active: boolean }) {
  const c = active ? ACCENT : "rgba(0,197,205,0.35)";
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <polygon points="24,6 42,38 6,38" stroke={c} strokeWidth="1.2" strokeLinejoin="round" />
      <line x1="24" y1="14" x2="24" y2="28" stroke={c} strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="33" r="2" fill={c} />
    </svg>
  );
}

function IconDelivery({ active }: { active: boolean }) {
  const c = active ? ACCENT : "rgba(0,197,205,0.35)";
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M24 8 C24 8 16 16 16 28 L24 40 L32 28 C32 16 24 8 24 8Z" stroke={c} strokeWidth="1.2" />
      <ellipse cx="24" cy="38" rx="5" ry="3" stroke={c} strokeWidth="1" />
      <circle  cx="24" cy="22" r="3" stroke={c} strokeWidth="1" />
      <line x1="10" y1="30" x2="16" y2="28" stroke={c} strokeWidth="1" />
      <line x1="38" y1="30" x2="32" y2="28" stroke={c} strokeWidth="1" />
    </svg>
  );
}

function IconExploit({ active }: { active: boolean }) {
  const c = active ? "#ff6644" : "rgba(255,100,68,0.35)";
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M24 6 L38 14 L38 34 L24 42 L10 34 L10 14 Z" stroke={c} strokeWidth="1.2" />
      <path d="M28 16 L20 24 L25 24 L20 32" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconImpact({ active }: { active: boolean }) {
  const c = active ? ACCENT2 : "rgba(123,47,255,0.35)";
  const c2 = active ? "#ff44aa" : "rgba(255,68,170,0.35)";
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="8"  stroke={c}  strokeWidth="1.2" />
      <circle cx="24" cy="24" r="16" stroke={c2} strokeWidth="1" strokeDasharray="2 3" />
      <line x1="24" y1="6"  x2="24" y2="14" stroke={c2} strokeWidth="1.2" />
      <line x1="24" y1="34" x2="24" y2="42" stroke={c2} strokeWidth="1.2" />
      <line x1="6"  y1="24" x2="14" y2="24" stroke={c2} strokeWidth="1.2" />
      <line x1="34" y1="24" x2="42" y2="24" stroke={c2} strokeWidth="1.2" />
      <circle cx="24" cy="24" r="3" fill={c} />
    </svg>
  );
}

const PHASES: Phase[] = [
  { id: 1, code: "01", label: "Reconnaissance",  desc: "OSINT & passive surface mapping",        Icon: IconRecon      },
  { id: 2, code: "02", label: "Weaponization",   desc: "Bespoke payload engineering",            Icon: IconWeaponize  },
  { id: 3, code: "03", label: "Delivery",        desc: "Multi-channel attack vector launch",     Icon: IconDelivery   },
  { id: 4, code: "04", label: "Exploitation",    desc: "Zero-day & logic flaw leverage",         Icon: IconExploit    },
  { id: 5, code: "05", label: "C2 & Impact",     desc: "Lateral movement & objective execution", Icon: IconImpact     },
];

/* ── moving dot along connector ─────────────────────────── */
function Connector({ active }: { active: boolean }) {
  return (
    <div className="relative flex flex-1 items-center" style={{ minWidth: "2rem" }}>
      {/* static dashed line */}
      <div className="absolute inset-x-0 h-px" style={{ background: "rgba(0,197,205,0.15)", top: "50%" }} />
      {/* animated travelling dot */}
      {active && (
        <motion.div
          className="absolute h-2 w-2 rounded-full z-10"
          style={{ background: ACCENT, top: "calc(50% - 4px)",
            boxShadow: `0 0 8px 2px ${ACCENT}` }}
          initial={{ left: "0%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 0.9, ease: "linear", repeat: Infinity }}
        />
      )}
      {/* static dot */}
      {!active && (
        <div className="absolute h-1.5 w-1.5 rounded-full"
          style={{ background: "rgba(0,197,205,0.25)", top: "calc(50% - 3px)", left: "50%" }} />
      )}
    </div>
  );
}

/* ── main component ─────────────────────────────────────── */
export function CustomThreatModelingViz() {
  const [active, setActive] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setActive((p) => (p + 1) % PHASES.length), 2000);
    return () => clearInterval(t);
  }, [running]);

  const phase = PHASES[active];

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      style={{ background: "#030303", fontFamily: BODY }}
      onMouseEnter={() => setRunning(false)}
      onMouseLeave={() => setRunning(true)}
    >
      {/* dot-grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(0,197,205,0.07) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }} />

      {/* header */}
      <div className="relative flex items-center justify-between border-b border-white/5 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
          <span className="text-[9px] tracking-[0.4em] uppercase" style={{ color: ACCENT }}>
            Threat Intelligence
          </span>
        </div>
        <span className="text-[10px] font-semibold text-white" style={{ fontFamily: DISPLAY }}>
          Simulation Phases
        </span>
        <span className="text-[9px] tracking-widest uppercase text-white/20">CTM</span>
      </div>

      {/* phase icons row */}
      <div className="relative flex items-center px-6 pt-8 pb-4">
        {PHASES.map((p, i) => (
          <div key={p.id} className="flex items-center" style={{ flex: i < PHASES.length - 1 ? "1" : "0" }}>
            {/* icon node */}
            <button
              onClick={() => setActive(i)}
              className="relative flex flex-col items-center gap-2 shrink-0"
              style={{ width: "60px" }}
            >
              {/* glow ring when active */}
              {active === i && (
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    width: "60px", height: "60px",
                    top: "-6px", left: "0px",
                    boxShadow: `0 0 24px 6px ${ACCENT}40`,
                    border: `1px solid ${ACCENT}55`,
                    borderRadius: "50%",
                  }}
                  animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
              )}

              {/* icon */}
              <motion.div
                animate={{ scale: active === i ? 1.12 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <p.Icon active={active === i} />
              </motion.div>

              {/* label */}
              <span
                className="text-center text-[8px] tracking-[0.2em] uppercase leading-tight"
                style={{
                  color: active === i ? ACCENT : "rgba(255,255,255,0.3)",
                  fontFamily: BODY,
                  width: "60px",
                }}
              >
                {p.label}
              </span>
            </button>

            {/* connector between nodes */}
            {i < PHASES.length - 1 && (
              <Connector active={active === i} />
            )}
          </div>
        ))}
      </div>

      {/* active phase description */}
      <div className="relative border-t border-white/5 px-6 py-4 min-h-[52px]">
        <AnimatePresence mode="wait">
          <motion.div key={phase.id}
            initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }}
            className="flex items-center gap-3"
          >
            <span className="text-[9px] font-semibold tracking-[0.3em]" style={{ color: ACCENT }}>
              / {phase.code}
            </span>
            <span className="text-[10px] font-semibold text-white" style={{ fontFamily: DISPLAY }}>
              {phase.label}
            </span>
            <span className="text-[9px] text-white/35 ml-1">{phase.desc}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
