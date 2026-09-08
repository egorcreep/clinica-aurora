import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/vision")({
  component: Vision,
  head: () => ({ meta: [{ title: "Visión · Clínica Aurora" }] }),
});

function Vision() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Institucional · Visión"
        title="La clínica que otras quieran copiar."
        lead="No por tamaño. Por la forma en que se recibe a una persona a las ocho de la mañana."
        image="/images/amanecer.jpg"
        imageAlt="Luz de amanecer en un pasillo de la clínica"
      />
      <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
        <p className="font-display text-3xl leading-snug tracking-tight text-ink">
          En 2030, Clínica Aurora es la referencia de atención ambulatoria en el poniente de Guadalajara: un lugar donde la calidad se mide, la espera se respeta y el barrio reconoce su nombre.
        </p>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-muted">
          <p>
            Nuestra visión no es abrir sucursales. Es sostener un estándar que se pueda auditar y, al mismo tiempo, se sienta humano. Queremos que un paciente de Providencia, de Zapopan o de Tlaquepaque reciba el mismo protocolo —y la misma cortesía— sin importar la hora ni el motivo.
          </p>
          <p>
            Para 2028 nos planteamos tres horizontes concretos: acreditación de calidad en salud ambulatoria, un laboratorio con trazabilidad total de muestras, y un expediente digital que el paciente pueda consultar sin pedir permiso a un mostrador.
          </p>
        </div>
        <ol className="mt-12 space-y-6">
          {[
            { n: "01", t: "Calidez que se puede enseñar", d: "Protocolos de recepción, consentimiento y entrega de resultados escritos, ensayados y medidos." },
            { n: "02", t: "Barrio, no franquicia", d: "Crecer en profundidad —más continuidad, más prevención— antes que en metros cuadrados." },
            { n: "03", t: "Transparencia clínica", d: "Indicadores de espera, de reconsulta y de satisfacción publicados cada semestre en este sitio." },
          ].map((item) => (
            <li key={item.n} className="grid gap-2 border-t border-border pt-6 sm:grid-cols-[80px_1fr]">
              <span className="font-display text-2xl text-primary">{item.n}</span>
              <div>
                <h2 className="font-display text-2xl tracking-tight">{item.t}</h2>
                <p className="mt-2 text-muted">{item.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </SiteLayout>
  );
}
