import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { money, SERVICES } from "@/lib/cart/catalog";
import { useCart } from "@/lib/cart/store";

export const Route = createFileRoute("/servicios")({
  component: Servicios,
  head: () => ({ meta: [{ title: "Servicios · Clínica Aurora" }] }),
});

const VIDEOS = [
  {
    id: "_Ngdc0WrjcI",
    title: "Hospital Privado: más humanos, más profesionales",
    text: "Hospital Privado Universitario de Córdoba.",
  },
  {
    id: "R8I0c4mmj3g",
    title: "Clínica San Felipe — spot publicitario",
    text: "Clínica San Felipe.",
  },
];

function Servicios() {
  const add = useCart((s) => s.add);
  const [added, setAdded] = useState<string | null>(null);

  return (
    <SiteLayout>
      <PageHero
        kicker="Servicios"
        title="Elige la cita. La cesta guarda el resto."
        lead="Precios de consulta en pesos. Agenda al pagar el pedido; recepción confirma el horario."
        image="/images/lobby.jpg"
        imageAlt="Recepción de la clínica"
      />
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((item) => (
            <article key={item.id} className="flex flex-col overflow-hidden rounded-xl bg-paper">
              <img src={item.image} alt={item.alt} className="aspect-[16/10] w-full object-cover" />
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-2xl tracking-tight">{item.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.text}</p>
                <p className="mt-4 font-display text-2xl tracking-tight">{money(item.price)}</p>
                <Button
                  className="mt-4"
                  onClick={() => {
                    add(item.id);
                    setAdded(item.id);
                  }}
                >
                  {added === item.id ? "Añadido a la cesta" : "Añadir a la cesta"}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-paper">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">En movimiento</p>
          <h2 className="mt-2 font-display text-4xl tracking-tight">Videos</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {VIDEOS.map((video) => (
              <figure key={video.id}>
                <div className="aspect-video overflow-hidden rounded-xl bg-ink">
                  <iframe
                    className="size-full"
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="font-display text-2xl tracking-tight">{video.title}</p>
                  <p className="mt-1 text-sm text-muted">{video.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-xl bg-ink px-6 py-10 text-bg sm:px-10">
          <h2 className="font-display text-3xl tracking-tight">¿Ya armaste la cesta?</h2>
          <p className="mt-3 max-w-xl text-admin-muted">
            Revisa cantidades y deja tus datos. Recepción confirma la cita en horario de clínica.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/carrito">Ver cesta</Link>
            </Button>
            <Button asChild variant="outline" className="border-bg/40 bg-transparent text-bg hover:bg-bg/10">
              <Link to="/pedido">Ir al pedido</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
