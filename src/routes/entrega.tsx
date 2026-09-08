import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { Button } from "@/components/ui/button";
import { DEFAULT_USERS } from "@/lib/cms/defaults";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/entrega")({
  component: Entrega,
  head: () => ({ meta: [{ title: "Entrega del sprint · Clínica Aurora" }] }),
});

function Entrega() {
  const theme = useCms((s) => s.theme);
  const identity = useCms((s) => s.identity);
  const menu = useCms((s) => s.menu);
  const asesora = DEFAULT_USERS[0];
  return (
    <SiteLayout>
      <article className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-xs uppercase tracking-[0.22em] text-primary">Documento de entrega · Sprint</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">Implementación del sitio web {identity.name}</h1>
        <p className="mt-4 text-muted">Evidencia del CMS Aurora, tema {theme.name}, menú principal, identidad y cuentas de administración.</p>
        <div className="mt-6"><Button asChild variant="outline"><Link to="/admin">Abrir el CMS</Link></Button></div>

        <section className="mt-14 border-t border-border pt-10">
          <h2 className="font-display text-3xl tracking-tight">1. Tema implementado y personalizado</h2>
          <p className="mt-4 leading-relaxed text-muted">Se instaló el tema <strong className="text-ink">{theme.name}</strong> sobre Aurora CMS. Paleta crema {theme.background}, tinta {theme.ink}, salvia {theme.primary}. Tipografía Fraunces + Figtree. Layout responsivo (móvil, tableta, escritorio).</p>
        </section>

        <section className="mt-14 border-t border-border pt-10">
          <h2 className="font-display text-3xl tracking-tight">2. Menú principal</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {menu.filter((item) => item.visible).map((item) => (
              <li key={item.id}>
                {item.label} → {item.href}
                {item.children.filter((c) => c.visible).length > 0 ? ` (submenu: ${item.children.filter((c) => c.visible).map((c) => c.label).join(", ")})` : ""}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 border-t border-border pt-10">
          <h2 className="font-display text-3xl tracking-tight">3. URL del sitio</h2>
          <p className="mt-4 text-muted">Sustituye esta línea por la URL de Vercel una vez desplegado, por ejemplo <code>https://clinica-aurora.vercel.app</code>.</p>
        </section>

        <section className="mt-14 border-t border-border pt-10">
          <h2 className="font-display text-3xl tracking-tight">4. Usuario administrador para la asesora</h2>
          <dl className="mt-4 space-y-2 text-muted">
            <div><dt className="text-xs uppercase tracking-wide">Usuario</dt><dd className="font-mono text-ink">{asesora.username}</dd></div>
            <div><dt className="text-xs uppercase tracking-wide">Contraseña</dt><dd className="font-mono text-ink">{asesora.password}</dd></div>
            <div><dt className="text-xs uppercase tracking-wide">Panel</dt><dd className="font-mono text-ink">/admin</dd></div>
          </dl>
        </section>
      </article>
    </SiteLayout>
  );
}
