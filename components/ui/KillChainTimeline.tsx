"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";

// ─── colour tokens ────────────────────────────────────────────
const C = "#00ffcc";      // cyan neon
const BL = "#00aaff";     // blue neon
const PU = "#a020f0";     // purple
const PK = "#ff2d7c";     // pink
const RE = "#ff2200";     // red neon
const WH = "#e8f4ff";     // white neon
const BG = "#020d14";

// ─── shared framer-motion transition helpers ──────────────────
const inf = { repeat: Infinity } as const;
const loop = (d: number, del = 0) =>
  ({ ...inf, duration: d, delay: del, ease: "easeInOut" } as const);
const spin = (d: number, dir: 1 | -1 = 1) =>
  ({
    ...inf,
    duration: d,
    ease: "linear",
    animate: { rotate: dir === 1 ? 360 : -360 },
  } as const);

// ─── gear path helper ─────────────────────────────────────────
function gearPath(cx: number, cy: number, ro: number, ri: number, n: number) {
  const pts: string[] = [];
  for (let i = 0; i < n; i++) {
    const base = (i / n) * Math.PI * 2 - Math.PI / 2;
    const a = [base, base + (0.4 / n) * Math.PI * 2, base + (0.6 / n) * Math.PI * 2, base + (1 / n) * Math.PI * 2];
    const r = [ro, ro, ri, ri];
    a.forEach((ang, j) => {
      pts.push(`${(cx + r[j] * Math.cos(ang)).toFixed(1)},${(cy + r[j] * Math.sin(ang)).toFixed(1)}`);
    });
  }
  return `M${pts[0]} L${pts.slice(1).join(" L")} Z`;
}

// ─── Canvas background ────────────────────────────────────────
function CanvasGrid() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const { width: W, height: H } = canvas;
      ctx.clearRect(0, 0, W, H);

      const sp = 50;
      const ox = (t * 0.25) % sp;
      const oy = (t * 0.12) % sp;
      const cols = Math.ceil(W / sp) + 2;
      const rows = Math.ceil(H / sp) + 2;

      ctx.strokeStyle = "rgba(0,255,204,0.04)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < cols; i++) {
        ctx.beginPath(); ctx.moveTo(i * sp - ox, 0); ctx.lineTo(i * sp - ox, H); ctx.stroke();
      }
      for (let j = 0; j < rows; j++) {
        ctx.beginPath(); ctx.moveTo(0, j * sp - oy); ctx.lineTo(W, j * sp - oy); ctx.stroke();
      }

      ctx.fillStyle = "rgba(0,255,204,0.1)";
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          ctx.beginPath();
          ctx.arc(i * sp - ox, j * sp - oy, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      t++;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return <canvas ref={ref} className="pointer-events-none absolute inset-0 h-full w-full" />;
}

// ─── SVG <defs> ───────────────────────────────────────────────
function Defs() {
  const glow = (id: string, colour: string, blur: number) => (
    <filter key={id} id={id} x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur in="SourceGraphic" stdDeviation={blur} result="b" />
      <feMerge>
        <feMergeNode in="b" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  );

  return (
    <defs>
      {glow("gc", C, 3)}
      {glow("gcs", C, 7)}
      {glow("gbl", BL, 4)}
      {glow("gp", PU, 4)}
      {glow("gpk", PK, 4)}
      {glow("gre", RE, 4)}
      {glow("gwh", WH, 4)}

      <linearGradient id="lgcc" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={C} />
        <stop offset="100%" stopColor={C} />
      </linearGradient>
      <linearGradient id="lgbb" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={BL} />
        <stop offset="100%" stopColor={BL} />
      </linearGradient>
      <linearGradient id="lgcp" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={C} />
        <stop offset="100%" stopColor={PU} />
      </linearGradient>

      <radialGradient id="flame" cx="50%" cy="15%" r="65%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
        <stop offset="20%" stopColor={PK} stopOpacity="0.95" />
        <stop offset="70%" stopColor={PK} stopOpacity="0.25" />
        <stop offset="100%" stopColor={PK} stopOpacity="0" />
      </radialGradient>

      <radialGradient id="nodec" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={C} stopOpacity="0.35" />
        <stop offset="100%" stopColor={C} stopOpacity="0" />
      </radialGradient>
      <radialGradient id="nodebl" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={BL} stopOpacity="0.35" />
        <stop offset="100%" stopColor={BL} stopOpacity="0" />
      </radialGradient>
      <radialGradient id="nodep" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={PU} stopOpacity="0.35" />
        <stop offset="100%" stopColor={PU} stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

// ─── Stage timeline node ──────────────────────────────────────
function Node({ cx, cy, c = C, fill = "nodec" }: { cx: number; cy: number; c?: string; fill?: string }) {
  return (
    <g>
      <motion.circle cx={cx} cy={cy} r={20} fill={`url(#${fill})`}
        animate={{ r: [20, 30, 20], opacity: [0.8, 0, 0.8] }}
        transition={loop(2.5)} />
      <circle cx={cx} cy={cy} r={13} fill="none" stroke={c} strokeWidth={1.5} strokeOpacity={0.6} filter="url(#gc)" />
      <circle cx={cx} cy={cy} r={7} fill="none" stroke={c} strokeWidth={2} filter="url(#gc)" />
      <circle cx={cx} cy={cy} r={3} fill={c} filter="url(#gcs)" />
    </g>
  );
}

// ─── Horizontal connection line + arrowhead ───────────────────
function Connector({ x1, x2, y, grad, last = false }: { x1: number; x2: number; y: number; grad: string; last?: boolean }) {
  const ax = x2 - 1;
  const tip = last ? PU : BL;
  return (
    <g>
      <line x1={x1} y1={y} x2={ax - 8} y2={y} stroke={`url(#${grad})`} strokeWidth={2} strokeOpacity={0.85} filter="url(#gc)" />
      <polygon points={`${ax},${y} ${ax - 11},${y - 5.5} ${ax - 11},${y + 5.5}`} fill={tip} filter={last ? "url(#gp)" : "url(#gc)"} />
    </g>
  );
}

// ─── Animated data packet ─────────────────────────────────────
function Packet({ x1, x2, y, delay, c = C }: { x1: number; x2: number; y: number; delay: number; c?: string }) {
  return (
    <motion.circle cy={y} r={3.5} fill={c} filter="url(#gcs)"
      animate={{ cx: [x1, x2] }}
      transition={{ ...inf, duration: 1.6, delay, ease: "linear", repeatDelay: 0.8 }} />
  );
}

// ─── Stage label + underline ──────────────────────────────────
function Label({ x, y, text, c = C }: { x: number; y: number; text: string; c?: string }) {
  const hw = text.length * 3.8;
  return (
    <g>
      <motion.text x={x} y={y} textAnchor="middle" fill={c} fontSize={11} fontFamily="monospace"
        fontWeight="bold" letterSpacing="2.5" filter="url(#gc)"
        animate={{ fillOpacity: [1, 0.55, 1, 0.8, 1] }}
        transition={{ ...inf, duration: 4.5 }}>
        {text}
      </motion.text>
      <motion.line x1={x - hw} y1={y + 5} x2={x + hw} y2={y + 5}
        stroke={c} strokeWidth={0.8}
        animate={{ strokeOpacity: [0.7, 0.2, 0.7] }}
        transition={loop(2.8)} />
    </g>
  );
}

// ─── Stage 1: DELIVERY — rocket ───────────────────────────────
function DeliveryStage({ cx, cy }: { cx: number; cy: number }) {
  const rx = cx, ry = cy - 60;
  return (
    <motion.g style={{ transformBox: "fill-box", transformOrigin: "center" }}
      animate={{ y: [0, -9, 0] }} transition={loop(3.2)}>
      {/* Flame */}
      <motion.g style={{ transformBox: "fill-box", transformOrigin: `${rx}px ${ry + 46}px` }}
        animate={{ scaleY: [1, 1.35, 0.75, 1.2, 1], opacity: [0.9, 1, 0.65, 1, 0.9] }}
        transition={{ ...inf, duration: 0.35, ease: "easeInOut" }}>
        <ellipse cx={rx} cy={ry + 55} rx={11} ry={18} fill="url(#flame)" />
        <ellipse cx={rx} cy={ry + 62} rx={6} ry={10} fill={PK} fillOpacity={0.45} />
        <ellipse cx={rx} cy={ry + 67} rx={3} ry={5.5} fill="#fff" fillOpacity={0.65} />
      </motion.g>
      {/* Left fin */}
      <polygon points={`${rx - 13},${ry + 30} ${rx - 24},${ry + 46} ${rx - 13},${ry + 40}`}
        fill="none" stroke={BL} strokeWidth={1.5} filter="url(#gbl)" />
      {/* Right fin */}
      <polygon points={`${rx + 13},${ry + 30} ${rx + 24},${ry + 46} ${rx + 13},${ry + 40}`}
        fill="none" stroke={BL} strokeWidth={1.5} filter="url(#gbl)" />
      {/* Body */}
      <rect x={rx - 13} y={ry} width={26} height={42} rx={4}
        fill="rgba(0,170,255,0.06)" stroke={BL} strokeWidth={2} filter="url(#gbl)" />
      {/* Porthole */}
      <circle cx={rx} cy={ry + 18} r={7} fill="none" stroke={BL} strokeWidth={1.5} filter="url(#gbl)" />
      <motion.circle cx={rx} cy={ry + 18} r={3.5} fill={BL} fillOpacity={0.55}
        animate={{ r: [3.5, 5, 3.5], fillOpacity: [0.55, 0.9, 0.55] }}
        transition={loop(1.9)} />
      {/* Nose */}
      <polygon points={`${rx},${ry - 24} ${rx - 13},${ry} ${rx + 13},${ry}`}
        fill="rgba(0,170,255,0.08)" stroke={BL} strokeWidth={2} filter="url(#gbl)" />
      {/* Speed lines */}
      {[0, 1, 2].map(i => (
        <motion.line key={i}
          x1={rx - 20} y1={ry + 8 + i * 9}
          x2={rx - 32} y2={ry + 8 + i * 9}
          stroke={BL} strokeWidth={1.5}
          animate={{ strokeOpacity: [0, 0.7, 0], x1: [rx - 20, rx - 24, rx - 20] }}
          transition={{ ...inf, duration: 0.9, delay: i * 0.22 }} />
      ))}
    </motion.g>
  );
}

// ─── Stage 2: EXECUTION & C2 — terminal + spokes ─────────────
function ExecutionStage({ cx, cy }: { cx: number; cy: number }) {
  const mx = cx, my = cy - 60;
  const mw = 84, mh = 58;
  const spokeAngles = [-55, 0, 55].map(d => (d * Math.PI) / 180);
  const hubY = my + mh + 18;

  return (
    <g>
      {/* Monitor frame */}
      <rect x={mx - mw / 2} y={my} width={mw} height={mh} rx={5}
        fill="rgba(0,170,255,0.04)" stroke={BL} strokeWidth={2} filter="url(#gbl)" />
      {/* Screen */}
      <rect x={mx - mw / 2 + 5} y={my + 5} width={mw - 10} height={mh - 15} rx={2}
        fill="rgba(0,170,255,0.06)" />
      {/* Stand */}
      <line x1={mx} y1={my + mh} x2={mx} y2={hubY - 8} stroke={BL} strokeWidth={2} strokeOpacity={0.5} />
      <line x1={mx - 14} y1={my + mh + 7} x2={mx + 14} y2={my + mh + 7} stroke={BL} strokeWidth={2} strokeOpacity={0.5} />

      {/* Code lines — purple */}
      {[0, 10, 20].map((dy, i) => (
        <motion.rect key={i}
          x={mx - mw / 2 + 8} y={my + 12 + dy}
          width={0} height={4} rx={1}
          fill={PU} fillOpacity={0.75}
          animate={{ width: [0, [38, 24, 46][i], 0] }}
          transition={{ ...inf, duration: 2.4, delay: i * 0.55, ease: "easeInOut" }} />
      ))}
      {/* Cursor — pink */}
      <motion.rect x={mx - mw / 2 + 8} y={my + 36} width={9} height={5} rx={1} fill={PK}
        animate={{ fillOpacity: [1, 0, 1] }} transition={{ ...inf, duration: 0.75 }} />

      {/* C2 hub + spokes — white neon */}
      <circle cx={mx} cy={hubY} r={5} fill={WH} fillOpacity={0.75} filter="url(#gwh)" />
      {spokeAngles.map((angle, i) => {
        const nx = mx + Math.cos(angle) * 30;
        const ny = hubY + Math.sin(angle) * 26;
        return (
          <g key={i}>
            <motion.line x1={mx} y1={hubY} x2={nx} y2={ny}
              stroke={WH} strokeWidth={1} strokeDasharray="3 3"
              animate={{ strokeOpacity: [0.3, 0.85, 0.3] }}
              transition={loop(1.6, i * 0.4)} />
            <motion.circle cx={nx} cy={ny} r={4.5}
              fill="none" stroke={WH} strokeWidth={1.5} filter="url(#gwh)"
              animate={{ r: [4.5, 6, 4.5] }}
              transition={loop(1.6, i * 0.4)} />
          </g>
        );
      })}
    </g>
  );
}

// ─── Stage 3: LATERAL MOVEMENT — 8-node radial spider ────────
function LateralStage({ cx, cy }: { cx: number; cy: number }) {
  const hx = cx, hy = cy - 62;
  const n = 8;
  const r = 46;
  const pts = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    return { x: hx + r * Math.cos(a), y: hy + r * Math.sin(a) };
  });

  return (
    <g>
      {/* Scanning ring */}
      <motion.circle cx={hx} cy={hy} r={55}
        fill="none" stroke={BL} strokeWidth={1} strokeOpacity={0.25} strokeDasharray="5 9"
        animate={{ rotate: 360 }} transition={{ ...inf, duration: 6, ease: "linear" }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }} />

      {/* Skip-one cross-links — purple */}
      {pts.map((p, i) => {
        const q = pts[(i + 2) % n];
        return (
          <motion.line key={`xl-${i}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y}
            stroke={PU} strokeWidth={0.8} strokeDasharray="3 5"
            animate={{ strokeOpacity: [0.1, 0.45, 0.1] }}
            transition={loop(2.8, i * 0.35)} />
        );
      })}

      {/* Spokes — blue */}
      {pts.map((p, i) => (
        <motion.line key={`sp-${i}`} x1={hx} y1={hy} x2={p.x} y2={p.y}
          stroke={BL} strokeWidth={1.2} strokeOpacity={0.5}
          animate={{ strokeOpacity: [0.25, 0.85, 0.25] }}
          transition={loop(2, i * 0.25)} />
      ))}

      {/* Satellite nodes — blue */}
      {pts.map((p, i) => (
        <motion.circle key={`nd-${i}`} cx={p.x} cy={p.y} r={5}
          fill="none" stroke={BL} strokeWidth={1.5} filter="url(#gbl)"
          animate={{ r: [5, 6.8, 5] }}
          transition={loop(2, i * 0.25)} />
      ))}

      {/* Hub — blue */}
      <circle cx={hx} cy={hy} r={15}
        fill="rgba(0,170,255,0.08)" stroke={BL} strokeWidth={2} filter="url(#gbl)" />
      {/* Warning ! — red */}
      <motion.text x={hx} y={hy + 6} textAnchor="middle" fontSize={15}
        fontWeight="bold" fill={RE} filter="url(#gre)"
        animate={{ fillOpacity: [1, 0.4, 1] }} transition={loop(1.2)}>
        !
      </motion.text>
    </g>
  );
}

// ─── Stage 4: IMPACT — gear / shield / eye / padlock ─────────
function ImpactStage({ cx, cy }: { cx: number; cy: number }) {
  const gx = cx, gy = cy - 60;

  const outerGear = gearPath(gx, gy, 42, 32, 10);
  const miniG = (x: number, y: number) => gearPath(x, y, 8, 5.5, 6);

  // cardinal orbit positions (orbit r=52)
  const orbitR = 52;
  const cardinals = [0, Math.PI / 2, Math.PI, -Math.PI / 2].map(a => ({
    x: gx + orbitR * Math.cos(a),
    y: gy + orbitR * Math.sin(a),
  }));

  // Shield path
  const sw = 22, sh = 28;
  const shieldD = [
    `M${gx},${gy - sh / 2}`,
    `L${gx + sw / 2},${gy - sh / 4}`,
    `L${gx + sw / 2},${gy + sh / 4}`,
    `Q${gx},${gy + sh / 2 + 5} ${gx},${gy + sh / 2 + 5}`,
    `Q${gx - sw / 2},${gy + sh / 4} ${gx - sw / 2},${gy + sh / 4}`,
    `L${gx - sw / 2},${gy - sh / 4}`,
    "Z",
  ].join(" ");

  return (
    <g>
      {/* Orbit ring (counter-clockwise) */}
      <motion.circle cx={gx} cy={gy} r={orbitR}
        fill="none" stroke={PK} strokeWidth={1} strokeOpacity={0.35}
        strokeDasharray="4 7"
        animate={{ rotate: -360 }} transition={{ ...inf, duration: 7, ease: "linear" }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }} />

      {/* Orbiting mini-gears */}
      {cardinals.map((mg, i) => (
        <motion.path key={i} d={miniG(mg.x, mg.y)}
          fill="none" stroke={PK} strokeWidth={1.2} strokeOpacity={0.75}
          filter="url(#gpk)"
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ ...inf, duration: 3, ease: "linear" }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }} />
      ))}

      {/* Outer gear — clockwise */}
      <motion.path d={outerGear}
        fill="none" stroke={PU} strokeWidth={2.2} filter="url(#gp)"
        animate={{ rotate: 360 }} transition={{ ...inf, duration: 11, ease: "linear" }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }} />

      {/* Inner circle */}
      <circle cx={gx} cy={gy} r={27}
        fill="rgba(160,32,240,0.1)" stroke={PU} strokeWidth={1.5} strokeOpacity={0.55}
        filter="url(#gp)" />

      {/* Shield */}
      <path d={shieldD}
        fill="rgba(160,32,240,0.14)" stroke={PU} strokeWidth={1.5} filter="url(#gp)" />

      {/* Eye — blinking */}
      <motion.g style={{ transformBox: "fill-box", transformOrigin: "center" }}
        animate={{ scaleY: [1, 1, 0.06, 1, 1] }}
        transition={{ ...inf, duration: 4, times: [0, 0.42, 0.5, 0.58, 1] }}>
        <ellipse cx={gx} cy={gy} rx={9.5} ry={5.5}
          fill="none" stroke={PU} strokeWidth={1.5} filter="url(#gp)" />
        <circle cx={gx} cy={gy} r={3} fill={PU} fillOpacity={0.85} />
        <circle cx={gx} cy={gy} r={1.5} fill={PK} filter="url(#gpk)" />
      </motion.g>

      {/* Padlock body */}
      <rect x={gx - 7.5} y={gy + 30} width={15} height={11} rx={2.5}
        fill="rgba(255,45,124,0.15)" stroke={PK} strokeWidth={1.5} filter="url(#gpk)" />
      {/* Padlock shackle */}
      <path d={`M${gx - 4.5},${gy + 30} A4.5,5.5 0 0 1 ${gx + 4.5},${gy + 30}`}
        fill="none" stroke={PK} strokeWidth={1.5} filter="url(#gpk)" />
      {/* Keyhole */}
      <circle cx={gx} cy={gy + 36} r={2} fill={PK} fillOpacity={0.85} />
      <rect x={gx - 1} y={gy + 36} width={2} height={3} fill={PK} fillOpacity={0.85} />
    </g>
  );
}

// ─── Main export ──────────────────────────────────────────────
export function KillChainTimeline() {
  const TY = 195;
  const stages = [140, 420, 720, 1010] as const;

  const connectors: { x1: number; x2: number; grad: string; last?: boolean }[] = [
    { x1: 162, x2: 398, grad: "lgbb" },
    { x1: 442, x2: 698, grad: "lgbb" },
    { x1: 742, x2: 995, grad: "lgcp", last: true },
  ];

  return (
    <section
      className="relative w-full overflow-hidden py-14 md:py-20"
      style={{ background: BG }}
    >
      {/* Animated canvas grid */}
      <CanvasGrid />

      {/* Scanlines */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,204,0.012) 2px, rgba(0,255,204,0.012) 4px)",
        }}
      />

      {/* Radial vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 80% at 50% 50%, transparent 35%, ${BG} 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <p
            className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.4em] md:text-xs"
            style={{ color: PK, textShadow: `0 0 12px ${PK}` }}
          >
            Threat Intelligence
          </p>
          <h2
            className="font-headline text-2xl font-bold md:text-3xl"
            style={{ color: "#ffffff", textShadow: "0 0 20px rgba(0,255,204,0.35)" }}
          >
            Simulation Phases
          </h2>
          <div
            className="mx-auto mt-3 h-px w-48"
            style={{ background: `linear-gradient(to right, transparent, ${BL}, ${PU}, ${PK}, transparent)` }}
          />
        </div>

        {/* Timeline SVG */}
        <div className="w-full">
          <svg
            viewBox="0 0 1200 360"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            aria-label="Cyber kill chain attack phases timeline"
          >
            <Defs />

            {/* Connection lines */}
            {connectors.map((c, i) => (
              <Connector key={i} x1={c.x1} x2={c.x2} y={TY} grad={c.grad} last={c.last} />
            ))}

            {/* Data packets — 3 per segment */}
            {connectors.map((c, ci) =>
              [0, 1, 2].map(pi => (
                <Packet
                  key={`p${ci}${pi}`}
                  x1={c.x1 + 12} x2={c.x2 - 14} y={TY}
                  delay={pi * 0.65}
                  c={ci === 2 ? PU : BL}
                />
              ))
            )}

            {/* ── Stage 1: DELIVERY ── */}
            <DeliveryStage cx={stages[0]} cy={TY} />
            <Node cx={stages[0]} cy={TY} c={BL} fill="nodebl" />
            <Label x={stages[0]} y={TY + 40} text="DELIVERY" c={BL} />

            {/* ── Stage 2: EXECUTION & C2 ── */}
            <ExecutionStage cx={stages[1]} cy={TY} />
            <Node cx={stages[1]} cy={TY} c={BL} fill="nodebl" />
            <Label x={stages[1]} y={TY + 40} text="EXECUTION & C2" c={BL} />

            {/* ── Stage 3: LATERAL MOVEMENT ── */}
            <LateralStage cx={stages[2]} cy={TY} />
            <Node cx={stages[2]} cy={TY} c={BL} fill="nodebl" />
            <Label x={stages[2]} y={TY + 40} text="LATERAL MOVEMENT" c={BL} />

            {/* ── Stage 4: IMPACT ── */}
            <ImpactStage cx={stages[3]} cy={TY} />
            <Node cx={stages[3]} cy={TY} c={PU} fill="nodep" />
            <Label x={stages[3]} y={TY + 40} text="IMPACT" c={BL} />
          </svg>
        </div>
      </div>
    </section>
  );
}
