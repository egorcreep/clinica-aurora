import { useCms } from "@/lib/cms/store";
import { cn } from "@/lib/utils";
import type { SocialNetwork } from "@/lib/cms/types";

function Glyph({ network }: { network: SocialNetwork }) {
  if (network === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.4-1.41a10 10 0 0 0 4.64 1.18h.04c5.46 0 9.89-4.4 9.89-9.84C21.97 6.4 17.5 2 12.04 2m5.76 14.05c-.24.67-1.4 1.24-1.94 1.32-.5.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.6-2.89-1.25-4.77-4.16-4.92-4.35-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.24-.27.64-.39.86-.39h.62c.2 0 .46-.02.7.54.24.58.82 2 .89 2.14.07.14.12.3.02.49-.1.2-.14.32-.28.5-.14.17-.29.38-.42.51-.14.14-.28.29-.12.54.16.24.7 1.15 1.5 1.86 1.03.91 1.9 1.2 2.16 1.33.27.14.42.12.58-.07.16-.2.67-.78.85-1.04.18-.27.36-.22.6-.13.24.08 1.53.72 1.79.85.27.14.44.2.51.3.07.12.07.67-.17 1.34" />
      </svg>
    );
  }
  if (network === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (network === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="currentColor">
        <path d="M14.5 8.5V6.8c0-.7.5-1 1.1-1h1.4V3h-2.4C12.1 3 11 4.4 11 6.6v1.9H9v2.8h2V21h3.5v-9.7h2.3l.4-2.8z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="currentColor">
      <path d="M14.7 4h2.4l-5.2 6 6.1 8h-4.8l-3.8-5-4.3 5H2.7l5.6-6.5L2.5 4h4.9l3.4 4.6zm-.8 12.6h1.3L6.2 5.3H4.8z" />
    </svg>
  );
}

export function SocialLinks({ className, invert = false }: { className?: string; invert?: boolean }) {
  const socials = useCms((s) => s.socials);
  const visible = socials.filter((item) => item.visible);
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {visible.map((item) => (
        <li key={item.id}>
          <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className={cn("inline-flex h-11 items-center gap-2 rounded-md border px-3 text-sm transition-colors", invert ? "border-admin-line text-admin-muted hover:border-bg/40 hover:text-bg" : "border-border text-muted hover:border-primary hover:text-ink")}>
            <Glyph network={item.network} />
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
