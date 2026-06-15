import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md";
};

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const textClass = size === "sm" ? "text-base" : "text-lg";
  const iconBox = size === "sm" ? "h-8 w-8 md:h-9 md:w-9" : "h-9 w-9 md:h-11 md:w-11";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("relative shrink-0 overflow-hidden", iconBox)}>
        <Image
          src="/images/rpmylogo2.jpg"
          alt=""
          width={460}
          height={453}
          priority
          aria-hidden="true"
          className="h-full w-full object-contain"
        />
      </div>
      {showText && (
        <span
          className={cn(
            "font-brand font-bold tracking-tight text-white",
            textClass,
          )}
        >
          Simulasi
        </span>
      )}
    </div>
  );
}