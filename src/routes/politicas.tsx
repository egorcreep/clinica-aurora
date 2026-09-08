import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/politicas")({
  component: Politicas,
  head: () => ({ meta: [{ title: "Políticas de calidad · Clínica Aurora" }] }),
});

const POLICIES = [
  { title: "Política de calidad", body: "Clínica Aurora se compromete a prestar servicios de salud ambulatoria seguros, oportunos y centrados en la persona, mediante un sistema de gestión de calidad que se revisa cada seis meses. La dirección destina recursos, formación y tiempo de mesa para sostener este compromiso." },
  { title: "Seguridad del paciente", body: "Identificación plena antes de cualquier procedimiento, higiene de manos, consentimiento informado y reporte de incidentes sin represalias. Todo evento se documenta en bitácora de calidad en un plazo de 24 horas." },
  { title: "Derechos de la persona usuaria", body: "Trato digno, información comprensible, confidencialidad del expediente, segunda opinión y el derecho a presentar quejas. Un buzón físico y este sitio recogen sugerencias; la respuesta se entrega en un máximo de cinco días hábiles." },
  { title: "Gestión del expediente", body: "El expediente es único, nominativo y de acceso restringido. Laboratorio, consulta y nutrición escriben sobre el mismo registro. La retención documental sigue la normativa sanitaria vigente en Jalisco." },
  { title: "Mejora continua", body: "Indicadores de espera, de reconsulta, de satisfacción y de no conformidades se publican internamente cada trimestre y se discuten con todo el personal. Las acciones correctivas tienen responsable y fecha." },
  { title: "Competencia del personal", body: "Nadie atiende sin cédula profesional vigente, inducción documentada y actualización anual en soporte básico de vida y en el sistema de calidad de la clínica." },
];

function Politicas() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Institucional · Políticas de calidad"
        title="Un sistema escrito para que no dependa del humor del día."
        lead="Calidad, seguridad y derechos de quien nos visita. Revisado con el equipo cada semestre."
        image="/images/laboratorio.jpg"
        imageAlt="Banco de laboratorio de control de calidad"
      />
      <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-lg leading-relaxed text-muted">
          Estas políticas rigen la operación de Clínica Aurora. Están alineadas a la Ley General de Salud, a la normativa de establecimientos ambulatorios y a un sistema interno inspirado en ISO 9001:2015, adaptado a una clínica de barrio —no a una fábrica.
        </p>
        <ol className="mt-12 space-y-10">
          {POLICIES.map((item, i) => (
            <li key={item.title} className="border-t border-border pt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 font-display text-2xl tracking-tight">{item.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </SiteLayout>
  );
}
