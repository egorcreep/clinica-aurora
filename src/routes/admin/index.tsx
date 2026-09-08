import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/admin/")({ component: AdminHome });

function AdminHome() {
  const users = useCms((s) => s.users);
  const pages = useCms((s) => s.pages);
  const messages = useCms((s) => s.messages);
  const theme = useCms((s) => s.theme);
  const identity = useCms((s) => s.identity);
  const session = useCms((s) => s.session);
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-primary">Escritorio</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">Hola, {session?.name.split(" ")[0]}.</h1>
      <p className="mt-3 max-w-2xl text-muted">Panel de {identity.name}. Tema activo: {theme.name}. Desde aquí se administran usuarios, páginas, menú e identidad del sitio.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[{ n: users.length, l: "Usuarios" }, { n: pages.filter((p) => p.status === "publicada").length, l: "Páginas publicadas" }, { n: messages.length, l: "Mensajes" }, { n: theme.name, l: "Tema" }].map((item) => (
          <div key={item.l} className="rounded-xl bg-paper p-5">
            <p className="font-display text-3xl tracking-tight">{item.n}</p>
            <p className="mt-1 text-sm text-muted">{item.l}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <section className="rounded-xl bg-paper p-6">
          <h2 className="font-display text-2xl tracking-tight">Atajos del sprint</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>Usuarios de asesora e integrantes ya creados.</li>
            <li>Identidad: logo, icono y favicon aplicados al tema.</li>
            <li>Tema Aurora Editorial, responsivo, personalizable.</li>
            <li>Páginas institucionales publicadas y menú principal activo.</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button asChild size="sm"><Link to="/admin/usuarios">Ver usuarios</Link></Button>
            <Button asChild size="sm" variant="outline"><Link to="/admin/menu">Ver menú</Link></Button>
          </div>
        </section>
        <section className="rounded-xl bg-paper p-6">
          <h2 className="font-display text-2xl tracking-tight">Mensajes recientes</h2>
          {messages.length === 0 ? <p className="mt-4 text-sm text-muted">Aún no hay mensajes del formulario de contacto.</p> : (
            <ul className="mt-4 space-y-3">
              {messages.slice(0, 4).map((msg) => (
                <li key={msg.id} className="border-t border-border pt-3 text-sm">
                  <p className="font-medium">{msg.name}</p>
                  <p className="text-muted">{msg.message}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
