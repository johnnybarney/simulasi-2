import { cn } from "@/lib/cn";

type GradientTextProps = {
  children: React.ReactNode;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
};

export function GradientText({
  children,
  as: Component = "span",
  className,
}: GradientTextProps) {
  return (
    <Component className={cn("text-gradient-cyan-magenta", className)}>
      {children}
    </Component>
  );
}
