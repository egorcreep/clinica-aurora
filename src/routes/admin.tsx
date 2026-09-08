import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { AdminShell } from "@/components/admin/admin-shell";
import { Mark } from "@/components/site/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEFAULT_USERS } from "@/lib/cms/defaults";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
  head: () => ({ meta: [{ title: "Administración · Clínica Aurora" }] }),
});

function AdminLayout() {
  const session = useCms((s) => s.session);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    const unsub = useCms.persist.onFinishHydration(() => setHydrated(true));
    if (useCms.persist.hasHydrated()) setHydrated(true);
    return unsub;
  }, []);
  if (!hydrated) return <div className="flex min-h-dvh items-center justify-center bg-bg text-muted">Cargando panel…</div>;
  if (!session) return <LoginScreen />;
  return <AdminShell><Outlet /></AdminShell>;
}

function LoginScreen() {
  const login = useCms((s) => s.login);
  const [error, setError] = useState("");
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const result = login(String(data.get("username") ?? ""), String(data.get("password") ?? ""));
    if (!result.ok) setError(result.error);
  }
  return (
    <div className="flex min-h-dvh items-center justify-center bg-ink px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-8 flex items-center gap-3 text-admin-fg">
          <Mark className="size-10 text-primary" />
          <div>
            <p className="font-display text-2xl">Aurora CMS</p>
            <p className="text-xs uppercase tracking-[0.18em] text-admin-muted">Acceso de administración</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="space-y-4 rounded-xl bg-paper p-6">
          <div className="space-y-2"><Label htmlFor="username">Usuario</Label><Input id="username" name="username" autoComplete="username" required /></div>
          <div className="space-y-2"><Label htmlFor="password">Contraseña</Label><Input id="password" name="password" type="password" autoComplete="current-password" required /></div>
          {error ? <p className="text-sm text-danger">{error}</p> : null}
          <Button type="submit" className="w-full">Entrar</Button>
          <p className="text-xs text-muted">Asesora: {DEFAULT_USERS[0].username} / {DEFAULT_USERS[0].password}</p>
        </form>
      </div>
    </div>
  );
}
