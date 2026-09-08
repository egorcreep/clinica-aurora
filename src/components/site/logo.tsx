import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={cn("shrink-0", className)} aria-hidden="true">
      <rect width="48" height="48" rx="12" fill="currentColor" className="text-primary" />
      <path d="M10 30h28" stroke="#f6f1e8" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M24 12v6.5M13.5 18.2l3.2 3.6M34.5 18.2l-3.2 3.6M17.2 14.4l2 4.6M30.8 14.4l-2 4.6"
        stroke="#f6f1e8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M15 30a9 9 0 0 1 18 0" fill="none" stroke="#f6f1e8" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({
  className,
  stacked = false,
  to = "/",
}: {
  className?: string;
  stacked?: boolean;
  to?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group flex items-center gap-3 text-ink no-underline",
        stacked && "flex-col items-start gap-2",
        className,
      )}
    >
      <Mark className="size-10" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg tracking-tight">Clínica Aurora</span>
        <span className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted">Guadalajara</span>
      </span>
    </Link>
  );
}
