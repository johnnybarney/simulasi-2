import Link from "next/link";
import { Container } from "@/components/layout/Container";

const gradStyle = {
  background: "linear-gradient(90deg, #00e5ff 0%, #0047ff 60%, #6600cc 100%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <span className="pointer-events-none absolute select-none font-display font-bold text-white/[0.02]"
        aria-hidden="true" style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(10rem, 40vw, 35rem)" }}>
        404
      </span>
      <Container className="relative text-center">
        <p className="mb-4 font-mono text-[11px] tracking-[0.4em] uppercase text-white/50">/ Error 404</p>
        <h1 className="font-display font-bold leading-tight" style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(3rem, 8vw, 7rem)" }}>
          <span className="block text-white">Page</span>
          <span style={gradStyle}>/ not found /</span>
        </h1>
        <p className="mx-auto mt-6 max-w-sm font-mono text-xs text-white/40">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="mt-10 inline-block border border-white/20 px-10 py-4 font-mono text-[11px] tracking-[0.3em] uppercase text-white/60 hover:border-white hover:text-white transition-all duration-300">
          Back to Home /
        </Link>
      </Container>
    </div>
  );
}
