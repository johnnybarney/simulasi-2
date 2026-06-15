import { cn } from "@/lib/cn";

type GradientBorderProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  rounded?: "none" | "sm" | "md" | "lg" | "xl";
  thick?: boolean;
  glow?: boolean;
};

const roundedMap = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
};

export function GradientBorder({
  children,
  className,
  innerClassName,
  rounded = "lg",
  thick = false,
  glow = false,
}: GradientBorderProps) {
  return (
    <div
      className={cn(
        "gradient-cyan-magenta",
        thick ? "p-[3px]" : "p-px",
        roundedMap[rounded],
        glow && "border-glow-cyan-magenta",
        className,
      )}
    >
      <div
        className={cn("h-full bg-cyber-bg", roundedMap[rounded], innerClassName)}
      >
        {children}
      </div>
    </div>
  );
}
