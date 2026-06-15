import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "outline";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-md px-7 py-3.5 text-sm font-semibold normal-case tracking-normal transition-opacity duration-200";

const variants: Record<ButtonVariant, string> = {
  primary: "gradient-cyan-magenta text-black hover:opacity-90",
  outline:
    "rounded-md border-2 border-transparent bg-cyber-bg text-white [background-clip:padding-box,border-box] [background-origin:padding-box,border-box] [background-image:linear-gradient(#000,#000),linear-gradient(to_right,#00e5ff,#ff00ff)] hover:opacity-90",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
