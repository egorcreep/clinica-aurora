import { useEffect } from "react";
import { useCms } from "@/lib/cms/store";

export function ThemeApplier() {
  const theme = useCms((s) => s.theme);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", theme.primary);
    root.style.setProperty("--color-ring", theme.primary);
    root.style.setProperty("--color-primary-hover", shade(theme.primary, -12));
    root.style.setProperty("--color-bg", theme.background);
    root.style.setProperty("--color-fg", theme.ink);
    root.style.setProperty("--color-ink", theme.ink);
    root.style.setProperty("--radius-md", theme.radius === "recto" ? "0.25rem" : "0.75rem");
    root.style.setProperty("--radius-lg", theme.radius === "recto" ? "0.35rem" : "1rem");
  }, [theme]);

  return null;
}

function shade(hex: string, amount: number) {
  const raw = hex.replace("#", "");
  if (raw.length !== 6) return hex;
  const num = Number.parseInt(raw, 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + amount));
  const b = Math.min(255, Math.max(0, (num & 0xff) + amount));
  return `#${[r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("")}`;
}
