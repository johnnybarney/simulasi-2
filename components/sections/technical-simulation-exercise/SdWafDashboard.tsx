"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const ACCENT  = "#00c5cd";
const ACCENT2 = "#7b2fff";
const BODY    = "var(--font-chakra), 'Chakra Petch', sans-serif";
const DISPLAY = "'Clash Display', sans-serif";

interface Phase {
  id: number;
  code: string;
  label: string;
  desc: string;
  Icon: React.FC<{ active: boolean }>;
}

/* ── neon SVG icons ─────────────────────────────────────── */
function IconIntercept({ active }: { active: boolean }) {
  const c = active ? ACCENT : "rgba(0,197,205,0.35)";
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="12" width="32" height="24" rx="3" stroke={c} strokeWidth="1.2" />
      <line x1="8"  y1="20" x2="40" y2="20" stroke={c} strokeWidth="1" />
      <line x1="16" y1="28" x2="28" y2="28" stroke={c} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="16" y1="32" x2="22" y2="32" stroke={c} strokeWidth="1" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1.5" fill={c} />
      <circle cx="17" cy="16" r="1.5" fill={c} />
      <circle cx="22" cy="16" r="1.5" fill={c} />
    </svg>
  );
}

function IconInspect({ active }: { active: boolean }) {
  const c = active ? ACCENT : "rgba(0,197,205,0.35)";
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="21" cy="21" r="12" stroke={c} strokeWidth="1.2" />
      <line x1="30" y1="30" x2="42" y2="42" stroke={c} strokeWidth="2" strokeLinecap="round" />
      <line x1="15" y1="21" x2="27" y2="21" stroke={c} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="21" y1="15" x2="21" y2="27" stroke={c} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconDecode({ active }: { active: boolean }) {
  const c = active ? "#ff8800" : "rgba(255,136,0,0.35)";
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M16 10 L8 24 L16 38" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 10 L40 24 L32 38" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="19" y1="18" x2="29" y2="30" stroke={c} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="29" y1="18" x2="19" y2="30" stroke={c} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconBlock({ active }: { active: boolean }) {
  const c = active ? "#ff4444" : "rgba(255,68,68,0.35)";
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M24 6 L40 12 L40 26 C40 34 32 40 24 44 C16 40 8 34 8 26 L8 12 Z"
        stroke={c} strokeWidth="1.2" strokeLinejoin="round" />
      <line x1="17" y1="17" x2="31" y2="31" stroke={c} strokeWidth="2" strokeLinecap="round" />
      <line x1="31" y1="17" x2="17" y2="31" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconLog({ active }: { active: boolean }) {
  const c  = active ? ACCENT2    : "rgba(123,47,255,0.35)";
  const c2 = active ? "#ff44aa"  : "rgba(255,68,170,0.35)";
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="10" y="8" width="28" height="32" rx="2" stroke={c} strokeWidth="1.2" />
      <line x1="16" y1="18" x2="32" y2="18" stroke={c}  strokeWidth="1.2" strokeLinecap="round" />
      <line x1="16" y1="24" x2="32" y2="24" stroke={c}  strokeWidth="1.2" strokeLinecap="round" />
      <line x1="16" y1="30" x2="24" y2="30" stroke={c2} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="36" cy="36" r="6" fill="#030303" stroke={c2} strokeWidth="1.2" />
      <line x1="36" y1="33" x2="36" y2="37" stroke={c2} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="36" cy="39" r="1" fill={c2} />
    </svg>
  );
}

const PHASES: Phase[] = [
  { id: 1, code: "L1", label: "Intercept",   desc: "Incoming request captured at network edge",      Icon: IconIntercept },
  { id: 2, code: "L2", label: "Inspect",     desc: "Deep packet & header anomaly analysis",          Icon: IconInspect   },
  { id: 3, code: "L3", label: "Decode",      desc: "Multi-layer payload unwrapping & normalisation", Icon: IconDecode    },
  { id: 4, code: "L4", label: "Block",       desc: "Matched ruleset — hard block with 403 response", Icon: IconBlock     },
  { id: 5, code: "L5", label: "Log & Alert", desc: "SIEM event emitted, attacker IP quarantined",    Icon: IconLog       },
];

/* ── connector with travelling dot ─────────────────────── */
function Connector({ active }: { active: boolean }) {
  return (
    <div className="relative flex flex-1 items-center" style={{ minWidth: "2rem" }}>
      <div className="absolute inset-x-0 h-px" style={{ background: "rgba(0,197,205,0.15)", top: "50%" }} />
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
      {!active && (
        <div className="absolute h-1.5 w-1.5 rounded-full"
          style={{ background: "rgba(0,197,205,0.25)", top: "calc(50% - 3px)", left: "50%" }} />
      )}
    </div>
  );
}

/* ── main component ─────────────────────────────────────── */
export function SdWafDashboard() {
  const [active,  setActive]  = useState(0);
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
          <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: "#ff4444" }} />
          <span className="text-[9px] tracking-[0.4em] uppercase" style={{ color: ACCENT }}>
            SD-WAF Intelligence
          </span>
        </div>
        <span className="text-[10px] font-semibold text-white" style={{ fontFamily: DISPLAY }}>
          Injection Delivery Phases
        </span>
        <span className="text-[9px] tracking-widest uppercase text-white/20">WAF</span>
      </div>

      {/* phase icons row */}
      <div className="relative flex items-center px-6 pt-8 pb-4">
        {PHASES.map((p, i) => (
          <div key={p.id} className="flex items-center" style={{ flex: i < PHASES.length - 1 ? "1" : "0" }}>
            <button
              onClick={() => setActive(i)}
              className="relative flex flex-col items-center gap-2 shrink-0"
              style={{ width: "60px" }}
            >
              {active === i && (
                <motion.div
                  className="absolute pointer-events-none"
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
              <motion.div
                animate={{ scale: active === i ? 1.12 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <p.Icon active={active === i} />
              </motion.div>
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
