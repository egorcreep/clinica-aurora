import { createFileRoute } from "@tanstack/react-router";
import { Mark } from "@/components/site/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEFAULT_IDENTITY } from "@/lib/cms/defaults";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/admin/identidad")({
  component: Identidad,
  head: () => ({ meta: [{ title: "Identidad · Aurora CMS" }] }),
});

function Identidad() {
  const identity = useCms((s) => s.identity);
  const setIdentity = useCms((s) => s.setIdentity);
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-primary">Identidad</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">Logo, icono y favicon</h1>
      <p className="mt-3 max-w-2xl text-muted">Identidad visual del sitio: marca del sol sobre el horizonte, wordmark Clínica Aurora y favicon SVG.</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <form className="space-y-4 rounded-xl bg-paper p-6">
          <div className="space-y-2"><Label htmlFor="site-name">Nombre del sitio</Label><Input id="site-name" value={identity.name} onChange={(e) => setIdentity({ name: e.target.value })} /></div>
          <div className="space-y-2"><Label htmlFor="tagline">Lema</Label><Input id="tagline" value={identity.tagline} onChange={(e) => setIdentity({ tagline: e.target.value })} /></div>
          <div className="space-y-2"><Label htmlFor="short">Nombre corto</Label><Input id="short" value={identity.shortName} onChange={(e) => setIdentity({ shortName: e.target.value })} /></div>
          <Button type="button" variant="outline" onClick={() => setIdentity(DEFAULT_IDENTITY)}>Restaurar identidad</Button>
        </form>
        <div className="space-y-4">
          <div className="rounded-xl bg-paper p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Logo</p>
            <div className="mt-4 flex items-center gap-3">
              <Mark className="size-14" />
              <div>
                <p className="font-display text-2xl tracking-tight">{identity.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">{identity.tagline}</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-paper p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Icono / Favicon</p>
            <div className="mt-4 flex items-center gap-4">
              <Mark className="size-16" /><Mark className="size-10" /><Mark className="size-6" />
              <img src="/favicon.svg" alt="Favicon de Clínica Aurora" className="size-8" />
            </div>
            <p className="mt-3 text-sm text-muted">Sol sobre el horizonte, color salvia. Archivo: favicon.svg</p>
          </div>
        </div>
      </div>
    </div>
  );
}
