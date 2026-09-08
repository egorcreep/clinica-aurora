import { Link, useRouterState } from "@tanstack/react-router";
import { FileText, IdCard, LayoutDashboard, LogOut, Menu, Palette, Users } from "lucide-react";
import type { ReactNode } from "react";
import { Mark } from "@/components/site/logo";
import { Button } from "@/components/ui/button";
import { useCms } from "@/lib/cms/store";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/admin", label: "Escritorio", icon: LayoutDashboard },
  { href: "/admin/usuarios", label: "Usuarios", icon: Users },
  { href: "/admin/paginas", label: "Páginas", icon: FileText },
  { href: "/admin/menu", label: "Menú principal", icon: Menu },
  { href: "/admin/apariencia", label: "Apariencia", icon: Palette },
  { href: "/admin/identidad", label: "Identidad", icon: IdCard },
];

export function AdminShell({ children }: { children: ReactNode }) {
  const session = useCms((s) => s.session);
  const logout = useCms((s) => s.logout);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-dvh bg-bg lg:grid lg:grid-cols-[240px_1fr]">
      <aside className="border-b border-admin-line bg-admin text-admin-fg lg:border-b-0 lg:border-r">
        <div className="flex items-center gap-3 px-4 py-5">
          <Mark className="size-8 text-primary" />
          <div>
            <p className="font-display text-base leading-none">Aurora CMS</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-admin-muted">Tema Editorial</p>
          </div>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-2 pb-3 lg:flex-col lg:overflow-visible lg:px-3 lg:pb-6">
          {NAV.map((item) => {
            const active = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex h-11 shrink-0 items-center gap-2 rounded-md px-3 text-sm text-admin-muted transition-colors hover:bg-admin-line hover:text-admin-fg",
                  active && "bg-admin-line text-admin-fg",
                )}
              >
                <item.icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden border-t border-admin-line px-4 py-4 lg:block">
          <p className="text-sm">{session?.name}</p>
          <p className="text-xs capitalize text-admin-muted">{session?.role}</p>
          <div className="mt-3 flex flex-col gap-2">
            <Button asChild variant="outline" size="sm" className="border-admin-line bg-transparent text-admin-fg hover:bg-admin-line">
              <Link to="/">Ver sitio</Link>
            </Button>
            <Button variant="ghost" size="sm" className="justify-start text-admin-muted hover:bg-admin-line hover:text-admin-fg" onClick={logout}>
              <LogOut className="size-4" />
              Cerrar sesión
            </Button>
          </div>
        </div>
      </aside>
      <div className="min-w-0">
        <div className="flex items-center justify-between border-b border-border bg-paper px-4 py-3 lg:hidden">
          <p className="text-sm">{session?.name} · <span className="capitalize">{session?.role}</span></p>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm"><Link to="/">Sitio</Link></Button>
            <Button variant="ghost" size="sm" onClick={logout}>Salir</Button>
          </div>
        </div>
        <div className="px-4 py-8 sm:px-8">{children}</div>
      </div>
    </div>
  );
}
