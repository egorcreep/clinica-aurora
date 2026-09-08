import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { CLINIC } from "@/lib/cms/defaults";

export const Route = createFileRoute("/ubicacion")({
  component: Ubicacion,
  head: () => ({ meta: [{ title: "Ubicación · Clínica Aurora" }] }),
});

function Ubicacion() {
  return (
    <SiteLayout>
      <PageHero kicker="Ubicación física" title="Providencia, a una cuadra del Parque Lafayette." lead={`${CLINIC.addressLine}, ${CLINIC.neighborhood}, ${CLINIC.city}.`} image="/images/providencia.jpg" imageAlt="Calle arbolada en Providencia, Guadalajara" />
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-5">
          <div className="flex gap-3">
            <MapPin className="mt-1 size-5 text-primary" />
            <div>
              <h2 className="font-display text-2xl tracking-tight">Dirección</h2>
              <p className="mt-2 text-muted">{CLINIC.addressLine}<br />{CLINIC.neighborhood}<br />{CLINIC.city}<br />{CLINIC.postal}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Clock className="mt-1 size-5 text-primary" />
            <div>
              <h2 className="font-display text-2xl tracking-tight">Horario</h2>
              <ul className="mt-2 space-y-1 text-muted">{CLINIC.hours.map((row) => (<li key={row.days}>{row.days}: {row.time}</li>))}</ul>
            </div>
          </div>
          <div className="flex gap-3">
            <Phone className="mt-1 size-5 text-primary" />
            <div>
              <h2 className="font-display text-2xl tracking-tight">Teléfono</h2>
              <p className="mt-2 text-muted">{CLINIC.phone}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Mail className="mt-1 size-5 text-primary" />
            <div>
              <h2 className="font-display text-2xl tracking-tight">Correo</h2>
              <p className="mt-2 text-muted">{CLINIC.email}</p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-tight">Cómo llegar</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              <li>Camión y Macrobús: bajada cerca de Av. Providencia y Lafayette.</li>
              <li>Auto: estacionamiento de visitas sobre la calle interior, 8 cajones.</li>
              <li>A pie: una cuadra al oriente del Parque Lafayette.</li>
              <li>Acceso a planta baja sin escalones; elevador a consultorios del primer piso.</li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-xl border border-border">
            <iframe title="Mapa de Clínica Aurora en Providencia, Guadalajara" src={CLINIC.mapEmbed} className="h-[420px] w-full border-0" loading="lazy" />
          </div>
          <p className="mt-3 text-sm text-muted">
            <a href={CLINIC.mapLink} className="underline underline-offset-2 hover:text-ink" target="_blank" rel="noreferrer">Abrir en OpenStreetMap</a>
          </p>
          <img src="/images/fachada.jpg" alt="Fachada de la clínica" className="mt-8 aspect-[16/9] w-full rounded-xl object-cover" />
        </div>
      </section>
    </SiteLayout>
  );
}
