import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/site/logo";
import { Button } from "@/components/ui/button";
import { useCms } from "@/lib/cms/store";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const menu = useCms((s) => s.menu);
  const session = useCms((s) => s.session);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [institucionalOpen, setInstitucionalOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setInstitucionalOpen(false);
  }, [pathname]);

  const visible = menu.filter((item) => item.visible);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menú principal">
          {visible.map((item) => {
            const children = item.children.filter((child) => child.visible);
            if (children.length > 0) {
              const childActive = children.some((child) => pathname === child.href);
              return (
                <div key={item.id} className="group relative">
                  <Link
                    to={item.href}
                    className={cn(
                      "flex h-11 items-center gap-1 rounded-md px-3 text-sm text-muted transition-colors hover:text-ink",
                      childActive && "text-ink",
                    )}
                  >
                    {item.label}
                    <ChevronDown className="size-3.5" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-30 min-w-56 translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="rounded-lg border border-border bg-paper p-1.5 shadow-sm">
                      {children.map((child) => (
                        <Link
                          key={child.id}
                          to={child.href}
                          className={cn(
                            "block rounded-md px-3 py-2.5 text-sm text-muted hover:bg-surface hover:text-ink",
                            pathname === child.href && "bg-surface text-ink",
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.id}
                to={item.href}
                className={cn(
                  "flex h-11 items-center rounded-md px-3 text-sm text-muted transition-colors hover:text-ink",
                  pathname === item.href && "text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contacto">Agendar</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="hidden lg:inline-flex">
            <Link to="/admin">{session ? "Panel" : "Acceso"}</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-border bg-paper lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Menú móvil">
            {visible.map((item) => {
              const children = item.children.filter((child) => child.visible);
              if (children.length > 0) {
                return (
                  <div key={item.id}>
                    <button
                      type="button"
                      className="flex h-12 w-full items-center justify-between rounded-md px-3 text-left text-base text-ink"
                      onClick={() => setInstitucionalOpen((v) => !v)}
                    >
                      {item.label}
                      <ChevronDown className={cn("size-4 transition-transform", institucionalOpen && "rotate-180")} />
                    </button>
                    {institucionalOpen
                      ? children.map((child) => (
                          <Link key={child.id} to={child.href} className="block h-12 rounded-md px-6 text-base leading-[48px] text-muted">
                            {child.label}
                          </Link>
                        ))
                      : null}
                  </div>
                );
              }
              return (
                <Link key={item.id} to={item.href} className="flex h-12 items-center rounded-md px-3 text-base text-ink">
                  {item.label}
                </Link>
              );
            })}
            <Link to="/admin" className="flex h-12 items-center rounded-md px-3 text-base text-ink">
              {session ? "Panel de administración" : "Acceso al CMS"}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
