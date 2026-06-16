"use client";

import { useRouter } from "next/navigation";
import { SESSION_KEY } from "@/components/ui/ServiceLink";

const ACCENT = "#00c5cd";
const BODY   = "var(--font-chakra), 'Chakra Petch', sans-serif";

export function BackButton() {
  const router = useRouter();

  function handleBack() {
    const anchor = sessionStorage.getItem(SESSION_KEY);
    if (anchor) {
      // Navigate to homepage — ScrollAnchorRestore will scroll to the saved item
      router.push("/");
    } else {
      router.back();
    }
  }

  return (
    <button
      onClick={handleBack}
      className="group flex items-center gap-3 transition-all duration-300"
      style={{ fontFamily: BODY }}
      aria-label="Go back"
    >
      {/* Arrow circle */}
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 group-hover:scale-110"
        style={{
          borderColor: `rgba(0,197,205,0.35)`,
          background: `rgba(0,197,205,0.05)`,
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.boxShadow = `0 0 14px 2px rgba(0,197,205,0.25)`;
          el.style.borderColor = ACCENT;
          el.style.background = `rgba(0,197,205,0.12)`;
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.boxShadow = "";
          el.style.borderColor = `rgba(0,197,205,0.35)`;
          el.style.background = `rgba(0,197,205,0.05)`;
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
          className="transition-transform duration-300 group-hover:-translate-x-0.5">
          <path d="M8 2L4 6L8 10" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      {/* Label */}
      <span className="text-[10px] tracking-[0.35em] uppercase transition-colors duration-300 group-hover:text-white"
        style={{ color: `rgba(0,197,205,0.6)` }}>
        Back
      </span>
    </button>
  );
}
