import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { Button } from "@/components/ui/button";
import { DEFAULT_USERS } from "@/lib/cms/defaults";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/entrega")({
  component: Entrega,
  head: () => ({ meta: [{ title: "Entrega de sprints · Clínica Aurora" }] }),
});

const MODULES = [
  { letter: "A", title: "Chat", plugin: "Módulo propio Aurora Chat (equiv. Tawk.to / WP Live Chat)", code: "src/components/site/chat-widget.tsx", where: "Botón fijo inferior derecho. CMS → Chat." },
  { letter: "B", title: "Foro de preguntas frecuentes", plugin: "Módulo propio Foro FAQ (equiv. bbPress)", code: "src/routes/foro.tsx", where: "Página /foro. CMS → Foro FAQ." },
  { letter: "C", title: "Acceso a redes sociales", plugin: "Módulo propio Redes Aurora (equiv. Social Icons)", code: "src/components/site/social-links.tsx", where: "Pie: WhatsApp, Instagram, Facebook y X. CMS → Redes." },
  { letter: "D", title: "Slider de imágenes", plugin: "Módulo propio Slider Aurora (equiv. Smart Slider)", code: "src/components/site/image-slider.tsx", where: "Inicio: autoplay, flechas y puntos. CMS → Slider." },
  { letter: "E", title: "Valoración de páginas", plugin: "Módulo propio Valoración Aurora (equiv. kk Star Ratings)", code: "src/components/site/page-rating.tsx", where: "Estrellas al pie. Un voto por navegador. CMS → Valoraciones." },
];

function Entrega() {
  const theme = useCms((s) => s.theme);
  const identity = useCms((s) => s.identity);
  const menu = useCms((s) => s.menu);
  return (
    <SiteLayout>
      <article className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-xs uppercase tracking-[0.22em] text-primary">Documento de entrega · Sprints</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">{identity.name}: módulos de interacción</h1>
        <p className="mt-4 text-muted">Evidencia de chat, foro FAQ, redes, slider y valoración sobre el tema {theme.name}.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild><Link to="/admin">Abrir el CMS</Link></Button>
          <Button asChild variant="outline"><Link to="/foro">Ver el foro</Link></Button>
          <Button asChild variant="outline"><Link to="/">Ver el slider</Link></Button>
        </div>
        <section className="mt-14 border-t border-border pt-10">
          <h2 className="font-display text-3xl tracking-tight">1. Módulos implementados</h2>
          <ol className="mt-8 space-y-8">
            {MODULES.map((item) => (
              <li key={item.letter} className="border-t border-border pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">{item.letter}. {item.title}</p>
                <p className="mt-2 font-medium text-ink">{item.plugin}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.where}</p>
                <p className="mt-2 font-mono text-xs text-subtle">{item.code}</p>
              </li>
            ))}
          </ol>
        </section>
        <section className="mt-14 border-t border-border pt-10">
          <h2 className="font-display text-3xl tracking-tight">2. Menú y cuentas</h2>
          <ol className="mt-4 space-y-1 text-muted">
            {menu.filter((item) => item.visible).map((item, i) => (
              <li key={item.id}>{i + 1}. {item.label} <span className="font-mono text-xs">({item.href})</span></li>
            ))}
          </ol>
          <div className="mt-6 overflow-x-auto rounded-xl bg-paper">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="border-b border-border text-xs uppercase tracking-[0.14em] text-muted">
                <tr><th className="px-4 py-3">Persona</th><th className="px-4 py-3">Usuario</th><th className="px-4 py-3">Contraseña</th><th className="px-4 py-3">Rol</th></tr>
              </thead>
              <tbody>
                {DEFAULT_USERS.map((user) => (
                  <tr key={user.id} className="border-b border-border/70 last:border-0">
                    <td className="px-4 py-3">{user.name}</td>
                    <td className="px-4 py-3 font-mono text-xs">{user.username}</td>
                    <td className="px-4 py-3 font-mono text-xs">{user.password}</td>
                    <td className="px-4 py-3 capitalize">{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="mt-14 border-t border-border pt-10">
          <h2 className="font-display text-3xl tracking-tight">3. Conclusiones</h2>
          <p className="mt-4 leading-relaxed text-muted">Aprendimos a traducir los retos de un CMS (chat, foro, redes, slider y ratings) a módulos con cara pública y panel. El sitio ya no es solo institucional: hay conversación, presencia en redes, recorrido visual y medición de utilidad, alineado al sistema de calidad de la clínica.</p>
        </section>
        <section className="mt-14 border-t border-border pt-10">
          <h2 className="font-display text-3xl tracking-tight">4. División del trabajo</h2>
          <ul className="mt-6 space-y-5">
            <li><p className="font-display text-xl tracking-tight">Nikolai J.</p><p className="mt-1 text-muted">CMS, chat, slider, menú y repositorio.</p></li>
            <li><p className="font-display text-xl tracking-tight">María López</p><p className="mt-1 text-muted">Foro FAQ, redes sociales y contenidos de contacto.</p></li>
            <li><p className="font-display text-xl tracking-tight">Carlos Méndez</p><p className="mt-1 text-muted">Valoración de páginas, documento de entrega y capturas.</p></li>
          </ul>
        </section>
      </article>
    </SiteLayout>
  );
}
