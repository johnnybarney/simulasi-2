import { CustomThreatModelingViz } from "./CustomThreatModelingViz";
import { SdWafDashboard } from "./SdWafDashboard";

const DISPLAY = "'Clash Display', sans-serif";
const BODY    = "var(--font-chakra), 'Chakra Petch', sans-serif";
const ACCENT  = "#00c5cd";
const CARD_BG = "linear-gradient(339deg, rgba(0,197,205,0.04) 18%, rgba(84,84,84,0.08) 77%)";

/* ── Shared styled placeholder panel ─────────────────────────
   Replace the inner <div> with <video> when ready.
────────────────────────────────────────────────────────────── */
function PlaceholderPanel({ watermark, label }: { watermark: string; label: string }) {
  return (
    <div className="theme-section-bg relative aspect-video w-full overflow-hidden"
      style={{ background: "#050505", borderRadius: "9px 9px 0 0" }}>

      {/* top teal accent line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, ${ACCENT}, transparent)` }} />

      {/* corner glow */}
      <div className="absolute -top-20 -left-20 h-48 w-48 rounded-full opacity-20 blur-[60px]"
        style={{ background: ACCENT }} />
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full opacity-10 blur-[50px]"
        style={{ background: ACCENT }} />

      {/* large faint watermark */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center select-none font-bold leading-none"
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(4rem, 14vw, 9rem)",
          color: "transparent",
          WebkitTextStroke: `1px rgba(0,197,205,0.08)`,
        }}>
        {watermark}
      </span>

      {/* left border accent */}
      <div className="absolute left-0 top-8 bottom-8 w-px"
        style={{ background: `linear-gradient(to bottom, transparent, ${ACCENT}66, transparent)` }} />

      {/* bottom label */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <span className="text-[9px] tracking-[0.45em] uppercase"
          style={{ color: `${ACCENT}55`, fontFamily: BODY }}>
          {label}
        </span>
      </div>
    </div>
  );
}

/* ── Detail content block ─────────────────────────────────── */
function CardDetail({ num, title, points }: {
  num: string;
  title: string;
  points: { label: string; text: string }[];
}) {
  return (
    <div className="p-8">
      <div className="mb-5 flex items-center gap-4">
        <span className="text-sm font-semibold" style={{ color: ACCENT, fontFamily: BODY }}>/ {num}</span>
        <h3 className="font-semibold text-white" style={{ fontFamily: DISPLAY, fontSize: "1.25rem" }}>
          {title}
        </h3>
      </div>
      <div className="space-y-4">
        {points.map((p) => (
          <p key={p.label} className="text-sm" style={{ fontFamily: BODY }}>
            <span style={{ color: ACCENT }}>/ </span>
            <span className="font-medium text-white/80">{p.label}:</span>
            <span style={{ color: ACCENT }}> {p.text}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

/* ── Card 01: Custom Threat Modeling ─────────────────────── */
export function CustomThreatModelingCard() {
  return (
    <div className="overflow-hidden transition-all duration-500 hover:scale-[1.01]"
      style={{ backgroundImage: CARD_BG, borderRadius: "9px" }}>
      <div style={{ borderRadius: "9px 9px 0 0", overflow: "hidden" }}>
        <CustomThreatModelingViz />
      </div>
      <CardDetail
        num="01"
        title="Custom Threat Modeling"
        points={[
          { label: "Payload Engineering",    text: "Crafting multi-stage, bespoke exploits." },
          { label: "Stealth & Evasion",      text: "Bypassing advanced threat detection and sandboxes." },
          { label: "Attack Vector Analysis", text: "Mapping organization-specific weaknesses." },
        ]}
      />
    </div>
  );
}

/* ── Card 02: SD-WAF Injection Delivery ──────────────────── */
export function SdWafInjectionCard() {
  return (
    <div className="overflow-hidden transition-all duration-500 hover:scale-[1.01]"
      style={{ backgroundImage: CARD_BG, borderRadius: "9px" }}>
      <div style={{ borderRadius: "9px 9px 0 0", overflow: "hidden" }}>
        <SdWafDashboard />
      </div>
      <CardDetail
        num="02"
        title="SD-WAF Injection Delivery"
        points={[
          { label: "Advanced Obfuscation",      text: "Evading web application firewalls." },
          { label: "Targeted Injection Points", text: "Exploiting API and application logic flaws." },
          { label: "Protocol Manipulation",     text: "Leveraging non-standard communication channels." },
        ]}
      />
    </div>
  );
}
