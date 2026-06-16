import { Container } from "@/components/layout/Container";

const BODY = "var(--font-chakra), 'Chakra Petch', sans-serif";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-10">
      <Container>
        <p className="text-center text-[10px] tracking-[0.2em] uppercase text-white/20" style={{ fontFamily: BODY }}>
          Copyright © 2026 Simulasi
        </p>
      </Container>
    </footer>
  );
}
