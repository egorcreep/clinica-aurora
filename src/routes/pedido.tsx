import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/site/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { findService, money } from "@/lib/cart/catalog";
import { useCart, type ClinicOrder } from "@/lib/cart/store";

export const Route = createFileRoute("/pedido")({
  component: Pedido,
  head: () => ({ meta: [{ title: "Pedido · Clínica Aurora" }] }),
});

function Pedido() {
  const lines = useCart((s) => s.lines);
  const placeOrder = useCart((s) => s.placeOrder);
  const [error, setError] = useState("");
  const [order, setOrder] = useState<ClinicOrder | null>(null);
  const items = lines.flatMap((line) => {
    const service = findService(line.serviceId);
    return service ? [{ ...service, qty: line.qty }] : [];
  });
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const result = placeOrder({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      date: String(data.get("date") ?? ""),
      notes: String(data.get("notes") ?? ""),
    });
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setError("");
    setOrder(result.order);
  }

  if (order) {
    return (
      <SiteLayout>
        <section className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Pedido recibido</p>
          <h1 className="mt-2 font-display text-4xl tracking-tight">Folio {order.folio}</h1>
          <p className="mt-4 text-muted">
            {order.name}, recepción te escribe a {order.email} para confirmar
            {order.date ? ` el ${order.date}` : " el horario"}.
          </p>
          <ul className="mt-8 space-y-2 rounded-xl bg-paper p-5 text-sm">
            {order.lines.map((line) => (
              <li key={line.serviceId} className="flex justify-between gap-4">
                <span>
                  {line.title} × {line.qty}
                </span>
                <span>{money(line.price * line.qty)}</span>
              </li>
            ))}
            <li className="flex justify-between border-t border-border pt-3 font-medium">
              <span>Total</span>
              <span>{money(order.total)}</span>
            </li>
          </ul>
          <Button asChild className="mt-8">
            <Link to="/servicios">Volver a servicios</Link>
          </Button>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Pedido</p>
          <h1 className="mt-2 font-display text-4xl tracking-tight">Datos para la cita</h1>
          {items.length === 0 ? (
            <div className="mt-8">
              <p className="text-muted">La cesta está vacía.</p>
              <Button asChild className="mt-6">
                <Link to="/servicios">Elegir un servicio</Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" name="name" required autoComplete="name" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo</Label>
                  <Input id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Día preferido</Label>
                <Input id="date" name="date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notas</Label>
                <Textarea id="notes" name="notes" placeholder="Ayuno, primera vez, niño que acompaña…" />
              </div>
              {error ? <p className="text-sm text-danger">{error}</p> : null}
              <Button type="submit" size="lg">
                Confirmar pedido · {money(total)}
              </Button>
            </form>
          )}
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-xl bg-paper p-6">
            <h2 className="font-display text-2xl tracking-tight">Resumen</h2>
            {items.length === 0 ? (
              <p className="mt-4 text-sm text-muted">Sin servicios.</p>
            ) : (
              <ul className="mt-4 space-y-3 text-sm">
                {items.map((item) => (
                  <li key={item.id} className="flex justify-between gap-3">
                    <span>
                      {item.title} × {item.qty}
                    </span>
                    <span>{money(item.price * item.qty)}</span>
                  </li>
                ))}
                <li className="flex justify-between border-t border-border pt-3 font-medium">
                  <span>Total</span>
                  <span>{money(total)}</span>
                </li>
              </ul>
            )}
            <Button asChild variant="outline" className="mt-6">
              <Link to="/carrito">Editar cesta</Link>
            </Button>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}
