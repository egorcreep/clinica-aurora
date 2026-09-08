import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { UserRole } from "@/lib/cms/types";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/admin/usuarios")({
  component: Usuarios,
  head: () => ({ meta: [{ title: "Usuarios · Aurora CMS" }] }),
});

function Usuarios() {
  const users = useCms((s) => s.users);
  const createUser = useCms((s) => s.createUser);
  const deleteUser = useCms((s) => s.deleteUser);
  const session = useCms((s) => s.session);
  const [error, setError] = useState("");
  const [ok, setOk] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const result = createUser({
      name: String(data.get("name") ?? ""),
      username: String(data.get("username") ?? ""),
      email: String(data.get("email") ?? ""),
      password: String(data.get("password") ?? ""),
      role: String(data.get("role") ?? "autor") as UserRole,
    });
    if (!result.ok) { setOk(""); setError(result.error); return; }
    setError(""); setOk("Usuario creado."); event.currentTarget.reset();
  }

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-primary">Usuarios</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">Equipo y asesora</h1>
      <p className="mt-3 max-w-2xl text-muted">Cuentas de administrador para la asesora y los integrantes del equipo, más perfiles de editor y autor.</p>
      <div className="mt-8 overflow-x-auto rounded-xl bg-paper">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-border text-xs uppercase tracking-[0.14em] text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Nombre</th>
              <th className="px-4 py-3 font-medium">Usuario</th>
              <th className="px-4 py-3 font-medium">Rol</th>
              <th className="px-4 py-3 font-medium">Correo</th>
              <th className="px-4 py-3 font-medium">Contraseña</th>
              <th className="px-4 py-3 font-medium" />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-border/70 last:border-0">
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3 font-mono text-xs">{user.username}</td>
                <td className="px-4 py-3 capitalize">{user.role}</td>
                <td className="px-4 py-3 text-muted">{user.email}</td>
                <td className="px-4 py-3 font-mono text-xs text-muted">{user.password}</td>
                <td className="px-4 py-3 text-right">
                  {user.id !== "u-asesora" && session?.role === "administrador" ? (
                    <Button size="sm" variant="ghost" className="text-danger" onClick={() => deleteUser(user.id)}>Quitar</Button>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <form onSubmit={onSubmit} className="mt-10 max-w-xl space-y-4 rounded-xl bg-paper p-6">
        <h2 className="font-display text-2xl tracking-tight">Crear usuario</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2"><Label htmlFor="name">Nombre</Label><Input id="name" name="name" required /></div>
          <div className="space-y-2"><Label htmlFor="username">Usuario</Label><Input id="username" name="username" required /></div>
        </div>
        <div className="space-y-2"><Label htmlFor="email">Correo</Label><Input id="email" name="email" type="email" /></div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2"><Label htmlFor="password">Contraseña</Label><Input id="password" name="password" required /></div>
          <div className="space-y-2">
            <Label htmlFor="role">Rol</Label>
            <select id="role" name="role" className="flex h-11 w-full rounded-md border border-border bg-paper px-3 text-sm" defaultValue="editor">
              <option value="administrador">Administrador</option>
              <option value="editor">Editor</option>
              <option value="autor">Autor</option>
            </select>
          </div>
        </div>
        {error ? <p className="text-sm text-danger">{error}</p> : null}
        {ok ? <p className="text-sm text-primary">{ok}</p> : null}
        <Button type="submit">Crear usuario</Button>
      </form>
    </div>
  );
}
