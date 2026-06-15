import Image from "next/image";
import { cn } from "@/lib/cn";

type ServiceIconProps = {
  index: number;
  iconSrc?: string;
  alt?: string;
  large?: boolean;
  knockoutBlack?: boolean;
};

const svgIcons = [
  "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
];

const iconKnockoutStyle = { mixBlendMode: "screen" as const, filter: "contrast(1.6) brightness(1.3) saturate(1.4)" };

export function ServiceIcon({ index, iconSrc, alt = "", large = false, knockoutBlack = false }: ServiceIconProps) {
  if (iconSrc) {
    return (
      <div className={cn("relative flex items-center justify-center rounded-lg bg-black", large ? "h-24 w-24" : "h-16 w-16")}>
        <Image
          src={iconSrc}
          alt={alt}
          width={96}
          height={96}
          className={cn(large ? "h-24 w-24" : "h-16 w-16", "object-contain")}
          style={iconKnockoutStyle}
        />
      </div>
    );
  }

  const gradientId = `service-icon-gradient-${index}`;

  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 24 24"
      fill="none"
      stroke={`url(#${gradientId})`}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={!alt}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#00e5ff" />
          <stop offset="100%" stopColor="#ff00ff" />
        </linearGradient>
      </defs>
      <path d={svgIcons[index % svgIcons.length]} />
    </svg>
  );
}
