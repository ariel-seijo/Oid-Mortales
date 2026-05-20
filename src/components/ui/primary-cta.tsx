import Link from "next/link";
import { cn } from "@/lib/cn";

interface PrimaryCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function PrimaryCTA({
  href,
  children,
  className,
  ariaLabel,
}: PrimaryCTAProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center h-12 w-full rounded-lg bg-gradient-to-r from-[#0085cc] to-[#40aae4] px-7 text-sm font-semibold text-surface no-underline transition-all duration-300 hover:from-[#0271ad] hover:to-[#358ab8] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] sm:h-14 sm:px-10 sm:text-base sm:w-auto",
        className,
      )}
    >
      {children}
    </Link>
  );
}

interface SecondaryCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function SecondaryCTA({
  href,
  children,
  className,
  ariaLabel,
}: SecondaryCTAProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center h-12 w-full rounded-lg border border-primary/20 bg-transparent px-7 text-sm font-semibold text-primary no-underline transition-all duration-300 hover:border-primary/40 hover:bg-white sm:w-auto",
        className,
      )}
    >
      {children}
    </a>
  );
}
