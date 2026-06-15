import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  ariaLabelledby?: string;
};

export function Section({
  children,
  className,
  containerClassName,
  id,
  ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn("py-20 md:py-24 lg:py-28", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
