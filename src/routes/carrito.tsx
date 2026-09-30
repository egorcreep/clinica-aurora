import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { SiteLayout } from "@/components/site/layout";
import { Button } from "@/components/ui/button";
import { findService, money } from "@/lib/cart/catalog";
import { useCart } from "@/lib/cart/store";

export const Route = createFileRoute("/carrito")({
  component: Carrito,
  head: () => ({ meta: [{ title: "Cesta · Clínica Aurora" }] }),
});

function Carrito() {
  const lines = useCart((s) => s.lines);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const items = lines.flatMap((line) => {
    const service = findService(line.serviceId);
    return service ? [{ ...service, qty: line.qty }] : [];
  });
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <SiteLayout>
      <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Cesta</p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">Servicios elegidos</h1>
        {items.length === 0 ? (
          <div className="mt-10 rounded-xl bg-paper p-8">
            <p className="text-muted">Todavía no hay nada en la cesta.</p>
            <Button asChild className="mt-6">
              <Link to="/servicios">Ver servicios</Link>
            </Button>
          </div>
        ) : (
          <>
            <ul className="mt-8 divide-y divide-border rounded-xl bg-paper">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 p-4 sm:p-5">
                  <img src={item.image} alt="" className="size-20 shrink-0 rounded-lg object-cover sm:size-24" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="font-display text-xl tracking-tight">{item.title}</h2>
                      <p className="shrink-0 text-sm">{money(item.price * item.qty)}</p>
                    </div>
                    <p className="mt-1 text-sm text-muted">{money(item.price)} c/u</p>
                    <div className="mt-3 flex items-center gap-2">
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        aria-label="Quitar una"
                        onClick={() =>
                          item.qty <= 1 ? remove(item.id) : setQty(item.id, item.qty - 1)
                        }
                      >
                        <Minus className="size-4" />
                      </Button>
                      <span className="w-6 text-center text-sm">{item.qty}</span>
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        aria-label="Añadir una"
                        onClick={() => setQty(item.id, item.qty + 1)}
                      >
                        <Plus className="size-4" />
                      </Button>
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        aria-label="Quitar servicio"
                        onClick={() => remove(item.id)}
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-display text-3xl tracking-tight">{money(total)}</p>
              <Button asChild size="lg">
                <Link to="/pedido">Continuar al pedido</Link>
              </Button>
            </div>
          </>
        )}
      </section>
    </SiteLayout>
  );
}
