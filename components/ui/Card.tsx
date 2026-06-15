import { cn } from "@/lib/cn";
import { GradientBorder } from "./GradientBorder";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
};

export function Card({ children, className, innerClassName }: CardProps) {
  return (
    <GradientBorder
      className={className}
      innerClassName={cn("overflow-hidden", innerClassName)}
      rounded="lg"
      glow
    >
      {children}
    </GradientBorder>
  );
}
