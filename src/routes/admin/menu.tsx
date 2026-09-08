import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DEFAULT_MENU } from "@/lib/cms/defaults";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/admin/menu")({
  component: MenuAdmin,
  head: () => ({ meta: [{ title: "Menú principal · Aurora CMS" }] }),
});

function MenuAdmin() {
  const menu = useCms((s) => s.menu);
  const toggle = useCms((s) => s.toggleMenuItem);
  const rename = useCms((s) => s.renameMenuItem);
  const setMenu = useCms((s) => s.setMenu);
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-primary">Apariencia</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">Menú principal</h1>
      <p className="mt-3 max-w-2xl text-muted">Estructura del menú del sitio. Los cambios se reflejan de inmediato en la cabecera pública. El ítem Institucional agrupa Visión, Misión y Políticas de calidad.</p>
      <div className="mt-8 space-y-3">
        {menu.map((item) => (
          <div key={item.id} className="rounded-xl bg-paper p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Input value={item.label} onChange={(e) => rename(item.id, e.target.value)} className="sm:max-w-xs" aria-label={`Etiqueta de ${item.label}`} />
              <p className="flex-1 font-mono text-xs text-muted">{item.href}</p>
              <Button type="button" size="sm" variant={item.visible ? "default" : "outline"} onClick={() => toggle(item.id)}>{item.visible ? "Visible" : "Oculto"}</Button>
            </div>
            {item.children.length > 0 ? (
              <ul className="mt-3 space-y-2 border-t border-border pt-3">
                {item.children.map((child) => (
                  <li key={child.id} className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <span className="hidden w-6 text-center text-subtle sm:block">↳</span>
                    <Input value={child.label} onChange={(e) => rename(child.id, e.target.value)} className="sm:max-w-xs" aria-label={`Etiqueta de ${child.label}`} />
                    <p className="flex-1 font-mono text-xs text-muted">{child.href}</p>
                    <Button type="button" size="sm" variant={child.visible ? "default" : "outline"} onClick={() => toggle(child.id)}>{child.visible ? "Visible" : "Oculto"}</Button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
      <Button type="button" variant="outline" className="mt-6" onClick={() => setMenu(DEFAULT_MENU)}>Restaurar menú original</Button>
    </div>
  );
}
