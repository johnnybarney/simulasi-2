import { cn } from "@/lib/cn";

type IconTextColumnProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function IconTextColumn({
  icon,
  title,
  description,
  className,
}: IconTextColumnProps) {
  return (
    <article className={cn("flex flex-col items-center text-center", className)}>
      <div className="mb-5 flex h-16 w-16 items-center justify-center">{icon}</div>
      <h3 className="mb-3 font-headline text-base font-bold text-white md:text-lg">
        {title}
      </h3>
      <p className="max-w-xs text-sm leading-relaxed text-white/90">{description}</p>
    </article>
  );
}
