import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { GradientText } from "@/components/ui/GradientText";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { contactContent } from "@/lib/constants/contact";

function ContactIcon({ type }: { type: "location" | "mail" | "clock" }) {
  const paths = {
    location: "M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11zM12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    mail: "M4 4h16v16H4V4zm0 0 8 8 8-8",
    clock: "M12 6v6l4 2M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z",
  };

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00e5ff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[type]} />
    </svg>
  );
}

export function ContactMainSection({ embedded = false }: { embedded?: boolean }) {
  const { hero, office, channels } = contactContent;

  return (
    <Section id={embedded ? "contact" : undefined} className={embedded ? "py-20" : "pb-20 pt-0"}>
      <Container>
        {embedded && (
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-neon">
              {hero.subtitle}
            </p>
            <h2 className="font-headline text-3xl font-bold text-white md:text-4xl">
              <GradientText as="span">{hero.title}</GradientText>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90">
              {hero.description}
            </p>
          </div>
        )}
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-lg border border-cyan-neon/30 bg-cyan-neon/5 p-6">
              <div className="mb-4 flex items-center gap-3">
                <ContactIcon type="location" />
                <h2 className="font-headline text-lg font-bold text-white">{office.label}</h2>
              </div>
              <address className="space-y-1 not-italic text-sm leading-relaxed text-white/90">
                {office.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${office.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-cyan-neon hover:underline"
              >
                Open in Google Maps →
              </Link>
            </div>

            <ul className="space-y-4">
              {channels.map((channel) => (
                <li
                  key={channel.label}
                  className="flex gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                >
                  <div className="mt-0.5 shrink-0">
                    <ContactIcon type={channel.label.includes("Hours") ? "clock" : "mail"} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-magenta-neon">
                      {channel.label}
                    </p>
                    {"href" in channel ? (
                      <Link
                        href={channel.href}
                        className="mt-1 block text-sm text-white/90 hover:text-cyan-neon"
                      >
                        {channel.value}
                      </Link>
                    ) : (
                      <p className="mt-1 text-sm text-white/90">{channel.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function ContactMapSection() {
  const { office } = contactContent;

  return (
    <Section className="relative overflow-hidden pb-32 pt-0">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 overflow-hidden opacity-50"
        aria-hidden="true"
      >
        <div className="synthwave-grid absolute inset-x-0 bottom-0 h-full w-full" />
      </div>
      <Container className="relative">
        <h2 className="mb-8 text-center font-headline text-2xl font-bold text-white">
          Find Us in <span className="text-cyan-neon">Bandar Utama</span>
        </h2>
        <div className="overflow-hidden rounded-lg border-2 border-cyan-neon/40 shadow-[0_0_30px_rgba(0,229,255,0.15)]">
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
    </Section>
  );
}
