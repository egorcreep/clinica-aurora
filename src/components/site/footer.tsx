import { Link } from "@tanstack/react-router";
import { Mark } from "@/components/site/logo";
import { CLINIC } from "@/lib/cms/defaults";
import { useCms } from "@/lib/cms/store";

export function SiteFooter() {
  const identity = useCms((s) => s.identity);
  const theme = useCms((s) => s.theme);
  const menu = useCms((s) => s.menu);
  const visibleMenu = menu.filter((item) => item.visible);

  return (
    <footer className="mt-auto border-t border-border bg-ink text-bg">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Mark className="size-10 text-primary" />
            <div>
              <p className="font-display text-xl tracking-tight">{identity.name}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-admin-muted">{identity.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-admin-muted">
            Clínica de atención integral en Providencia. Consulta, laboratorio y acompañamiento con un sistema de calidad pensado para quien nos visita.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-admin-muted">Sitio</p>
          <ul className="mt-4 space-y-2 text-sm">
            {visibleMenu.map((item) => (
              <li key={item.id}>
                <Link to={item.href} className="hover:text-bg">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-admin-muted">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm text-admin-muted">
            <li>{CLINIC.addressLine}</li>
            <li>{CLINIC.neighborhood}, {CLINIC.city}</li>
            <li>{CLINIC.phone}</li>
            <li>{CLINIC.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-admin-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-admin-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {identity.name}. Todos los derechos reservados.</p>
          <p>
            CMS Aurora · Tema {theme.name} ·{" "}
            <Link to="/admin" className="underline-offset-2 hover:underline">Acceso</Link>
            {" · "}
            <Link to="/entrega" className="underline-offset-2 hover:underline">Entrega del sprint</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
