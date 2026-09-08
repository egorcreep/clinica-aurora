import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/servicios")({
  component: Servicios,
  head: () => ({ meta: [{ title: "Servicios · Clínica Aurora" }] }),
});

const SERVICES = [
  { title: "Medicina general", text: "Primera atención, control de padecimientos comunes y orientación. El punto de entrada al resto de la clínica.", image: "/images/pulso.jpg", alt: "Toma de signos en consulta general" },
  { title: "Medicina interna", text: "Seguimiento de hipertensión, diabetes, tiroides y cuadros que necesitan continuidad, no una receta suelta.", image: "/images/consulta.jpg", alt: "Consulta de medicina interna" },
  { title: "Pediatría", text: "Niños y adolescentes en un consultorio sin murales de dibujos: juguetes de madera, tiempo y vacunas al día.", image: "/images/pediatria.jpg", alt: "Consultorio de pediatría" },
  { title: "Laboratorio clínico", text: "Toma de muestras en casa y entrega de resultados con lectura. No te mandamos a otra colonia a las 6 a.m.", image: "/images/laboratorio.jpg", alt: "Laboratorio clínico de la clínica" },
  { title: "Nutrición", text: "Planes que caben en un mercado de Guadalajara. Coordinados con el internista cuando hay un diagnóstico de por medio.", image: "/images/nutricion.jpg", alt: "Espacio de nutrición" },
  { title: "Acompañamiento emocional", text: "Espacio de escucha para ansiedad, duelo y ajuste a un diagnóstico. Derivación clara si el caso lo requiere.", image: "/images/terapia.jpg", alt: "Sala de acompañamiento emocional" },
];

function Servicios() {
  return (
    <SiteLayout>
      <PageHero kicker="Servicios" title="Todo lo que cabe en una clínica de barrio, bien hecho." lead="Consulta, laboratorio y acompañamiento bajo el mismo expediente." image="/images/lobby.jpg" imageAlt="Recepción de la clínica" />
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12">
          {SERVICES.map((item, i) => (
            <article key={item.title} className="grid items-center gap-8 lg:grid-cols-2">
              <img src={item.image} alt={item.alt} className={`aspect-[16/10] w-full rounded-xl object-cover ${i % 2 ? "lg:order-2" : ""}`} />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 font-display text-3xl tracking-tight">{item.title}</h2>
                <p className="mt-3 max-w-md leading-relaxed text-muted">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 rounded-xl bg-ink px-6 py-10 text-bg sm:px-10">
          <h2 className="font-display text-3xl tracking-tight">¿No sabes por dónde empezar?</h2>
          <p className="mt-3 max-w-xl text-admin-muted">Agenda una primera consulta de medicina general. Desde ahí armamos el plan: laboratorio, nutrición o seguimiento interno.</p>
          <Button asChild className="mt-6"><Link to="/contacto">Escribir a recepción</Link></Button>
        </div>
      </section>
    </SiteLayout>
  );
}
