import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { contactContent } from "@/lib/constants/contact";

const DISPLAY = "'Clash Display', sans-serif";
const BODY    = "var(--font-chakra), 'Chakra Petch', sans-serif";
const ORCHID  = "#b64cf7";
const CRIMSON = "#c5013c";

const gradStyle = {
  background: `linear-gradient(135deg, ${CRIMSON}, ${ORCHID})`,
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

const SECTION_BG = "linear-gradient(300deg, #161616, #0f0f0f 56%, #1a1919)";

export function ContactMainSection({ embedded = false }: { embedded?: boolean }) {
  const { hero, office, channels } = contactContent;

  return (
    <section id={embedded ? "contact" : undefined}
      className="relative overflow-hidden border-t border-white/8 py-32"
      style={{ backgroundImage: SECTION_BG }}>
      <div className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 80% 50% at 50% 100%, ${ORCHID}18 0%, transparent 70%)` }} />
      <Container className="relative">
        {embedded && (
          <div className="mb-16">
            <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ {hero.subtitle}</p>
            <h2 className="font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              {hero.title.includes("help") ? (
                <>Hey! We are ready<br />to&nbsp;<span style={gradStyle}>/ help you!!! /</span></>
              ) : (
                <span style={gradStyle}>/ {hero.title} /</span>
              )}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
              {hero.description}
            </p>
          </div>
        )}

        <div className="grid gap-16 lg:grid-cols-[2fr_3fr]">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="border border-white/8 p-6" style={{ borderRadius: "9px" }}>
              <p className="mb-1 text-[10px] tracking-[0.3em] uppercase text-white/30" style={{ fontFamily: BODY }}>/ location</p>
              <h3 className="mb-4 font-semibold text-white" style={{ fontFamily: DISPLAY }}>{office.label}</h3>
              <address className="not-italic space-y-1">
                {office.addressLines.map((line) => (
                  <span key={line} className="block text-sm text-white/50" style={{ fontFamily: BODY }}>{line}</span>
                ))}
              </address>
              <Link href={`https://www.google.com/maps/search/?api=1&query=${office.mapQuery}`}
                target="_blank" rel="noopener noreferrer"
                className="mt-4 inline-block text-[10px] tracking-[0.2em] uppercase transition-colors hover:text-white"
                style={{ color: ORCHID, fontFamily: BODY }}>
                Open in Google Maps →
              </Link>
            </div>

            <ul className="divide-y divide-white/8">
              {channels.map((channel) => (
                <li key={channel.label} className="py-5">
                  <p className="mb-1 text-[10px] tracking-[0.2em] uppercase" style={{ color: ORCHID, fontFamily: BODY }}>
                    / {channel.label}
                  </p>
                  {"href" in channel ? (
                    <Link href={channel.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                      style={{ fontFamily: BODY }}>
                      {channel.value}
                    </Link>
                  ) : (
                    <p className="text-sm text-white/60" style={{ fontFamily: BODY }}>{channel.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact form */}
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

export function ContactMapSection() {
  const { office } = contactContent;

  return (
    <section className="border-t border-white/8 py-20">
      <Container>
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/30 text-center" style={{ fontFamily: BODY }}>/ find us</p>
        <h2 className="mb-10 text-center font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
          Bandar Utama,&nbsp;<span style={gradStyle}>/ Malaysia /</span>
        </h2>
        <div className="overflow-hidden border border-white/8" style={{ borderRadius: "9px" }}>
          <iframe
            title="Simulasi.org office location"
            src={`https://maps.google.com/maps?q=${office.mapQuery}&hl=en&z=16&output=embed`}
            className="aspect-[21/9] w-full min-h-[280px] border-0 grayscale contrast-125 invert hue-rotate-180"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </Container>
    </section>
  );
}
