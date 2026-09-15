import { Star } from "lucide-react";
import { useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { useCms } from "@/lib/cms/store";
import { cn } from "@/lib/utils";

const SKIP = new Set(["/admin", "/entrega"]);

export function PageRating() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const ratings = useCms((s) => s.ratings);
  const ratedSlugs = useCms((s) => s.ratedSlugs);
  const ratePage = useCms((s) => s.ratePage);
  const [hover, setHover] = useState(0);
  const [thanks, setThanks] = useState(false);

  if (pathname.startsWith("/admin") || SKIP.has(pathname)) return null;

  const slug = pathname === "" ? "/" : pathname;
  const stat = ratings[slug] ?? { sum: 0, count: 0 };
  const avg = stat.count ? stat.sum / stat.count : 0;
  const voted = ratedSlugs.includes(slug);

  function vote(stars: number) {
    const result = ratePage(slug, stars);
    if (result.ok) setThanks(true);
  }

  return (
    <section className="border-t border-border bg-paper">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-primary">Valoración de la página</p>
          <h2 className="mt-2 font-display text-2xl tracking-tight">¿Te sirvió esta página?</h2>
          <p className="mt-1 text-sm text-muted">
            {stat.count === 0 ? "Sé la primera persona en calificarla." : `${avg.toFixed(1)} de 5 · ${stat.count} ${stat.count === 1 ? "voto" : "votos"}`}
          </p>
        </div>
        <div className="flex items-center gap-1" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => {
            const active = (hover || Math.round(avg)) >= n;
            return (
              <button key={n} type="button" disabled={voted} aria-label={`Valorar con ${n} ${n === 1 ? "estrella" : "estrellas"}`} className="flex size-11 items-center justify-center rounded-md disabled:cursor-default" onMouseEnter={() => !voted && setHover(n)} onClick={() => vote(n)}>
                <Star className={cn("size-6", active ? "fill-primary text-primary" : "text-line")} />
              </button>
            );
          })}
        </div>
        {thanks || voted ? <p className="text-sm text-primary">Gracias. Tu voto quedó registrado en este navegador.</p> : null}
      </div>
    </section>
  );
}
