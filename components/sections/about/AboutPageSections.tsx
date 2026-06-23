import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { aboutContent } from "@/lib/constants/about";

const DISPLAY = "'Clash Display', sans-serif";
const BODY    = "var(--font-chakra), 'Chakra Petch', sans-serif";
const ACCENT  = "#00c5cd";
const ACCENT2 = "#545454";

const gradStyle = {
  background: `linear-gradient(135deg, ${ACCENT2}, ${ACCENT})`,
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

const SECTION_BG = "linear-gradient(300deg, #050505, #000000 56%, #080808)";
const CARD_BG    = "linear-gradient(339deg, rgba(0,197,205,0.04) 18%, rgba(84,84,84,0.08) 77%)";
const NEEDS_BG   = "linear-gradient(145deg, rgba(0,197,205,0.08) 32%, rgba(84,84,84,0.12) 73%)";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((part) => part.length > 0 && /^[A-Za-z]/.test(part))
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function TeamPhoto({ name, imageSrc, imagePosition, large = false }: { name: string; imageSrc?: string; imagePosition?: string; large?: boolean }) {
  const sizeClass = large ? "h-36 w-36" : "h-28 w-28";

  if (imageSrc) {
    return (
      <div
        className={`relative shrink-0 overflow-hidden border border-white/10 ${sizeClass}`}
        style={{ borderRadius: "9px", backgroundImage: CARD_BG }}>
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
          style={{ objectPosition: imagePosition ?? "50% 35%" }}
          sizes={large ? "144px" : "112px"}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden border border-white/10 ${sizeClass}`}
      style={{ borderRadius: "9px", backgroundImage: CARD_BG }}
      aria-hidden="true">
      <span
        className="font-bold leading-none"
        style={{ fontFamily: DISPLAY, fontSize: large ? "2.5rem" : "1.75rem", color: `${ACCENT}55` }}>
        {initials(name)}
      </span>
      <div className="pointer-events-none absolute inset-0 border border-dashed border-white/10" style={{ borderRadius: "9px" }} />
    </div>
  );
}

function TeamMemberCard({ name, role, bio, imageSrc, imagePosition, large = false }: { name: string; role: string; bio: string; imageSrc?: string; imagePosition?: string; large?: boolean }) {
  return (
    <div
      className="group flex h-full flex-col gap-5 p-8 transition-all duration-500 hover:scale-[1.02] sm:flex-row sm:items-start"
      style={{ backgroundImage: large ? NEEDS_BG : CARD_BG, borderRadius: "9px" }}>
      <TeamPhoto name={name} imageSrc={imageSrc} imagePosition={imagePosition} large={large} />
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-white" style={{ fontFamily: DISPLAY, fontSize: large ? "1.375rem" : "1.125rem" }}>
          {name}
        </h3>
        <p className="mt-1 text-[11px] tracking-[0.2em] uppercase" style={{ color: ACCENT, fontFamily: BODY }}>
          {role}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white/50" style={{ fontFamily: BODY }}>
          {bio}
        </p>
      </div>
    </div>
  );
}

export function AboutHeroSection() {
  const { hero } = aboutContent;

  return (
    <section className="theme-hero relative flex min-h-[80vh] items-end overflow-hidden pb-20 pt-32">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0.85, objectPosition: "center center" }}>
        <source src={hero.videoSrc} type="video/mp4" />
      </video>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.1) 100%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full opacity-10 blur-[120px]"
        style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 65%)` }}
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute bottom-0 right-0 z-[1] select-none font-bold leading-none text-white/[0.025]"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 22vw, 20rem)", lineHeight: 1 }}>
        about
      </span>
      <Container className="relative z-[2]">
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-8 block" style={{ background: ACCENT }} aria-hidden="true" />
          <p className="text-[10px] tracking-[0.55em] uppercase" style={{ fontFamily: BODY, color: ACCENT }}>
            {hero.eyebrow}
          </p>
          <span className="h-px flex-1 block opacity-20" style={{ background: ACCENT }} aria-hidden="true" />
        </div>
        <h1 className="font-bold leading-[0.92] tracking-tight" style={{ fontFamily: DISPLAY, fontSize: "clamp(2.5rem, 8vw, 7rem)" }}>
          <span className="block text-white">{hero.title}</span>
          <span className="block">
            <span style={gradStyle}>/ {hero.titleAccent} /</span>
          </span>
        </h1>
        <p className="mt-10 max-w-xl text-sm leading-relaxed text-white/75 md:text-base" style={{ fontFamily: BODY }}>
          {hero.intro}
        </p>
      </Container>
    </section>
  );
}

export function AboutMissionSection() {
  const { mission } = aboutContent;

  return (
    <section className="theme-section-bg border-y border-white/8 py-24" style={{ backgroundImage: SECTION_BG }}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/50" style={{ fontFamily: BODY }}>
              / mission doctrine
            </p>
            <h2 className="font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
              Absolute&nbsp;<span style={gradStyle}>/ Resilience</span>
            </h2>
          </div>
          <div className="border-l-2 pl-8 md:pl-10" style={{ borderColor: `${ACCENT}33` }}>
            <blockquote>
              {mission.quote.map((line) => (
                <p key={line} className="text-sm leading-relaxed text-white/60 md:text-base" style={{ fontFamily: BODY }}>
                  {line}
                </p>
              ))}
            </blockquote>
            <p className="mt-6 text-[11px] tracking-[0.3em] uppercase font-medium" style={{ color: ACCENT, fontFamily: BODY }}>
              / {mission.tagline}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AboutMilestonesSection() {
  const { milestones } = aboutContent;

  return (
    <section className="relative overflow-hidden py-32">
      <span
        className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 select-none font-bold text-white/[0.025]"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(6rem, 18vw, 16rem)", lineHeight: 1 }}>
        history
      </span>
      <Container className="relative">
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/50" style={{ fontFamily: BODY }}>
          / {milestones.eyebrow}
        </p>
        <h2 className="mb-16 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          {milestones.title}&nbsp;<span style={gradStyle}>/ {milestones.titleAccent} /</span>
        </h2>
        <ul className="divide-y divide-white/8">
          {milestones.items.map((item) => (
            <li key={item.year} className="group flex flex-col gap-4 py-8 sm:flex-row sm:items-start sm:gap-8">
              <div className="flex shrink-0 items-baseline gap-4 sm:w-44">
                <span className="text-sm font-semibold" style={{ color: ACCENT, fontFamily: BODY }}>
                  / {item.year}
                </span>
              </div>
              <div>
                <h3
                  className="font-semibold text-white"
                  style={{ fontFamily: DISPLAY, fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/40" style={{ fontFamily: BODY }}>
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function AboutCommandSection() {
  const { command } = aboutContent;

  return (
    <section className="theme-section-bg border-t border-white/8 py-32" style={{ backgroundImage: SECTION_BG }}>
      <Container>
        <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-white/50" style={{ fontFamily: BODY }}>
          / {command.eyebrow}
        </p>
        <h2 className="mb-6 font-bold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          {command.title}&nbsp;<span style={gradStyle}>/ {command.titleAccent} /</span>
        </h2>
        <p className="mb-16 max-w-3xl text-sm leading-relaxed text-white/40 md:text-base" style={{ fontFamily: BODY }}>
          {command.intro}
        </p>

        <div className="mb-20">
          <p className="mb-8 text-[10px] tracking-[0.35em] uppercase text-white/50" style={{ fontFamily: BODY }}>
            / {command.strategic.eyebrow}
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            {command.strategic.members.map((member) => (
              <TeamMemberCard key={member.name} {...member} large />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[10px] tracking-[0.35em] uppercase text-white/50" style={{ fontFamily: BODY }}>
            / {command.squad.eyebrow}
          </p>
          <h3 className="mb-8 font-semibold text-white" style={{ fontFamily: DISPLAY, fontSize: "clamp(1.25rem, 2vw, 1.5rem)" }}>
            {command.squad.subtitle}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {command.squad.members.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
