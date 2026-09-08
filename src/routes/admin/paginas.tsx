import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/admin/paginas")({
  component: Paginas,
  head: () => ({ meta: [{ title: "Páginas · Aurora CMS" }] }),
});

function Paginas() {
  const pages = useCms((s) => s.pages);
  const setPage = useCms((s) => s.setPage);
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-primary">Contenido</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">Páginas del sitio</h1>
      <p className="mt-3 max-w-2xl text-muted">Quiénes somos, visión, misión, políticas de calidad, ubicación, servicios y contacto.</p>
      <div className="mt-8 space-y-4">
        {pages.map((page) => (
          <article key={page.slug} className="rounded-xl bg-paper p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-mono text-xs text-subtle">{page.slug}</p>
                <Input className="mt-2 max-w-md font-display text-xl" value={page.title} onChange={(e) => setPage(page.slug, { title: e.target.value })} aria-label={`Título de ${page.slug}`} />
              </div>
              <span className="rounded-full bg-surface px-3 py-1 text-xs uppercase tracking-wide text-primary">{page.status}</span>
            </div>
            <Input className="mt-3" value={page.lead} onChange={(e) => setPage(page.slug, { lead: e.target.value })} aria-label={`Entrada de ${page.slug}`} />
            <div className="mt-4"><Button asChild size="sm" variant="outline"><a href={page.slug}>Ver en el sitio</a></Button></div>
          </article>
        ))}
      </div>
    </div>
  );
}
