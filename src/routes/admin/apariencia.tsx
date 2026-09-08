import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEFAULT_THEME } from "@/lib/cms/defaults";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/admin/apariencia")({
  component: Apariencia,
  head: () => ({ meta: [{ title: "Apariencia · Aurora CMS" }] }),
});

function Apariencia() {
  const theme = useCms((s) => s.theme);
  const setTheme = useCms((s) => s.setTheme);
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-primary">Apariencia</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">Tema personalizado</h1>
      <p className="mt-3 max-w-2xl text-muted">Tema instalado: <strong className="text-ink">{theme.name}</strong>. Paleta editorial (crema, tinta y salvia), tipografía Fraunces + Figtree, y diseño responsivo.</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <form className="space-y-5 rounded-xl bg-paper p-6">
          <div className="space-y-2"><Label htmlFor="theme-name">Nombre del tema</Label><Input id="theme-name" value={theme.name} onChange={(e) => setTheme({ name: e.target.value })} /></div>
          <div className="grid grid-cols-3 gap-4">
            <ColorField label="Primario" value={theme.primary} onChange={(primary) => setTheme({ primary })} />
            <ColorField label="Fondo" value={theme.background} onChange={(background) => setTheme({ background })} />
            <ColorField label="Tinta" value={theme.ink} onChange={(ink) => setTheme({ ink })} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="radius">Esquinas</Label>
            <select id="radius" className="flex h-11 w-full rounded-md border border-border bg-paper px-3 text-sm" value={theme.radius} onChange={(e) => setTheme({ radius: e.target.value as "suave" | "recto" })}>
              <option value="suave">Suaves (editorial)</option>
              <option value="recto">Rectas (más estrictas)</option>
            </select>
          </div>
          <Button type="button" variant="outline" onClick={() => setTheme(DEFAULT_THEME)}>Restaurar tema original</Button>
        </form>
        <div className="rounded-xl bg-ink p-6 text-bg">
          <p className="text-xs uppercase tracking-[0.18em] text-admin-muted">Vista previa del tema</p>
          <p className="mt-4 font-display text-3xl tracking-tight">{theme.name}</p>
          <p className="mt-3 text-sm text-admin-muted">Cabecera fija, menú con desplegable Institucional, tipografía de display para títulos y cuerpo Figtree.</p>
          <div className="mt-6 flex gap-2">
            <span className="size-10 rounded-md border border-admin-line" style={{ background: theme.primary }} />
            <span className="size-10 rounded-md border border-admin-line" style={{ background: theme.background }} />
            <span className="size-10 rounded-md border border-admin-line" style={{ background: theme.ink }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ColorField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex items-center gap-2">
        <input type="color" value={value} onChange={(e) => onChange(e.target.value)} className="size-11 cursor-pointer rounded-md border border-border bg-paper p-1" aria-label={label} />
        <Input value={value} onChange={(e) => onChange(e.target.value)} />
      </div>
    </div>
  );
}
