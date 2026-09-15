import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/admin/redes")({
  component: AdminRedes,
  head: () => ({ meta: [{ title: "Redes sociales · Aurora CMS" }] }),
});

function AdminRedes() {
  const socials = useCms((s) => s.socials);
  const setSocial = useCms((s) => s.setSocial);
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-primary">Módulo</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">Acceso a redes sociales</h1>
      <p className="mt-3 max-w-2xl text-muted">Pie de página. Código: <code className="text-ink">src/components/site/social-links.tsx</code>.</p>
      <div className="mt-8 space-y-4">
        {socials.map((item) => (
          <div key={item.id} className="flex flex-col gap-3 rounded-xl bg-paper p-5 sm:flex-row sm:items-center">
            <p className="w-28 font-medium capitalize">{item.label}</p>
            <Input value={item.href} onChange={(e) => setSocial(item.id, { href: e.target.value })} className="flex-1" aria-label={`URL de ${item.label}`} />
            <Button type="button" size="sm" variant={item.visible ? "default" : "outline"} onClick={() => setSocial(item.id, { visible: !item.visible })}>
              {item.visible ? "Visible" : "Oculto"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
