import Image from "next/image";
import { cn } from "@/lib/cn";

export type ProgressTimelineStep = {
  id: string;
  title: string;
  phaseLabel?: string;
  iconSrc?: string;
  iconAlt?: string;
};

const CYAN = "#00f5ff";
const MAGENTA = "#cc00ff";

function stepColor(index: number, total: number): string {
  return index === total - 1 ? MAGENTA : CYAN;
}

function lineSegmentColor(fromIndex: number, total: number): string {
  // segment between fromIndex and fromIndex+1
  // goes magenta on the last segment (leading into the last node)
  return fromIndex >= total - 2 ? MAGENTA : CYAN;
}

function NeonIcon({
  src,
  alt,
  color,
}: {
  src: string;
  alt: string;
  color: string;
}) {
  return (
    <div
      className="relative h-14 w-14 shrink-0 md:h-16 md:w-16"
      style={{ filter: `drop-shadow(0 0 8px ${color}) drop-shadow(0 0 16px ${color}66)` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="64px"
        className="object-contain mix-blend-screen"
      />
    </div>
  );
}

function DoubleCircleNode({ color }: { color: string }) {
  return (
    <div
      className="relative z-10 shrink-0"
      style={{ filter: `drop-shadow(0 0 6px ${color})` }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* outer ring */}
        <circle cx="11" cy="11" r="9.5" stroke={color} strokeWidth="1.5" />
        {/* inner filled dot */}
        <circle cx="11" cy="11" r="4" fill={color} />
      </svg>
    </div>
  );
}

function ArrowHead({ color }: { color: string }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0, filter: `drop-shadow(0 0 4px ${color})` }}
    >
      <path
        d="M1 1.5L8.5 5L1 8.5"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LineSegment({
  color,
  flex = true,
}: {
  color: string;
  flex?: boolean;
}) {
  return (
    <div
      className={cn(flex ? "flex-1" : "w-4", "h-px")}
      style={{
        background: color,
        boxShadow: `0 0 6px ${color}, 0 0 12px ${color}44`,
      }}
      aria-hidden="true"
    />
  );
}

// Desktop: horizontal layout
function HorizontalTimeline({
  steps,
}: {
  steps: ProgressTimelineStep[];
}) {
  const total = steps.length;

  return (
    <ol className="mx-auto hidden w-full max-w-4xl md:flex" aria-label="Progress timeline">
      {steps.map((step, index) => {
        const isFirst = index === 0;
        const isLast = index === total - 1;
        const color = stepColor(index, total);
        // segment color for the outgoing line (between this node and next)
        const outColor = lineSegmentColor(index, total);

        return (
          <li key={step.id} className="flex min-w-0 flex-1 flex-col items-center">
            {/* Icon above line */}
            {step.iconSrc ? (
              <NeonIcon src={step.iconSrc} alt={step.iconAlt ?? step.title} color={color} />
            ) : (
              <div className="h-14 w-14 md:h-16 md:w-16" aria-hidden="true" />
            )}

            {/* Spacer above line */}
            <div className="h-6" />

            {/* Line row: [left-half] [node] [right-half+arrow+right-half] */}
            <div className="flex w-full items-center">
              {/* Incoming left half-line */}
              {!isFirst ? (
                <LineSegment color={color} />
              ) : (
                <div className="flex-1" />
              )}

              {/* Double-circle node */}
              <DoubleCircleNode color={color} />

              {/* Outgoing: right half-line — arrow — right half-line */}
              {!isLast ? (
                <>
                  <LineSegment color={outColor} />
                  <ArrowHead color={outColor} />
                  <LineSegment color={outColor} />
                </>
              ) : (
                <div className="flex-1" />
              )}
            </div>

            {/* Spacer below line */}
            <div className="h-5" />

            {/* Phase label + title below line */}
            <div className="flex flex-col items-center gap-0.5 text-center">
              {step.phaseLabel && (
                <span
                  className="text-[10px] font-bold uppercase tracking-widest md:text-xs"
                  style={{ color }}
                >
                  {step.phaseLabel}
                </span>
              )}
              <span className="max-w-[7rem] text-center text-xs font-semibold leading-snug text-white/80 md:max-w-none md:text-sm">
                {step.title}
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

// Mobile: vertical stacked layout
function VerticalTimeline({
  steps,
}: {
  steps: ProgressTimelineStep[];
}) {
  const total = steps.length;

  return (
    <ol
      className="mx-auto flex w-full max-w-xs flex-col gap-0 md:hidden"
      aria-label="Progress timeline"
    >
      {steps.map((step, index) => {
        const isLast = index === total - 1;
        const color = stepColor(index, total);
        const outColor = lineSegmentColor(index, total);

        return (
          <li key={step.id} className="flex gap-5">
            {/* Left column: icon → node → vertical connector */}
            <div className="flex w-14 shrink-0 flex-col items-center">
              {step.iconSrc && (
                <NeonIcon src={step.iconSrc} alt={step.iconAlt ?? step.title} color={color} />
              )}
              <div className="my-2">
                <DoubleCircleNode color={color} />
              </div>
              {!isLast && (
                <div
                  className="my-1 w-px flex-1"
                  style={{
                    background: outColor,
                    boxShadow: `0 0 6px ${outColor}`,
                    minHeight: "2rem",
                  }}
                  aria-hidden="true"
                />
              )}
            </div>

            {/* Right column: phase label + title */}
            <div
              className={cn("flex flex-col justify-center pb-8", isLast && "pb-0")}
              style={{ paddingTop: "3.75rem" }}
            >
              {step.phaseLabel && (
                <span
                  className="mb-0.5 text-[10px] font-bold uppercase tracking-widest"
                  style={{ color }}
                >
                  {step.phaseLabel}
                </span>
              )}
              <span className="text-sm font-semibold text-white/80">
                {step.title}
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export type ProgressTimelineProps = {
  steps: ProgressTimelineStep[];
  ariaLabel?: string;
  className?: string;
};

export function ProgressTimeline({
  steps,
  ariaLabel,
  className,
}: ProgressTimelineProps) {
  if (steps.length === 0) return null;

  return (
    <div
      className={cn(
        "w-full rounded-xl bg-black px-6 py-10 md:px-10 md:py-12",
        className,
      )}
    >
      <HorizontalTimeline steps={steps} />
      <VerticalTimeline steps={steps} />
    </div>
  );
}
