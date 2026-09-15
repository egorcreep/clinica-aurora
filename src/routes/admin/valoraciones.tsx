import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/admin/valoraciones")({
  component: AdminValoraciones,
  head: () => ({ meta: [{ title: "Valoraciones · Aurora CMS" }] }),
});

function AdminValoraciones() {
  const ratings = useCms((s) => s.ratings);
  const pages = useCms((s) => s.pages);
  const rows = pages.map((page) => {
    const stat = ratings[page.slug] ?? { sum: 0, count: 0 };
    return { ...page, avg: stat.count ? stat.sum / stat.count : 0, count: stat.count };
  });
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-primary">Módulo</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">Valoración de páginas</h1>
      <p className="mt-3 max-w-2xl text-muted">Estrellas al pie. Código: <code className="text-ink">src/components/site/page-rating.tsx</code>.</p>
      <div className="mt-8 overflow-x-auto rounded-xl bg-paper">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead className="border-b border-border text-xs uppercase tracking-[0.14em] text-muted">
            <tr><th className="px-4 py-3">Página</th><th className="px-4 py-3">Promedio</th><th className="px-4 py-3">Votos</th></tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.slug} className="border-b border-border/70 last:border-0">
                <td className="px-4 py-3">{row.title}<span className="ml-2 font-mono text-xs text-subtle">{row.slug}</span></td>
                <td className="px-4 py-3"><span className="inline-flex items-center gap-1"><Star className="size-4 fill-primary text-primary" />{row.count ? row.avg.toFixed(1) : "—"}</span></td>
                <td className="px-4 py-3">{row.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
