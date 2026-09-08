import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/mision")({
  component: Mision,
  head: () => ({ meta: [{ title: "Misión · Clínica Aurora" }] }),
});

function Mision() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Institucional · Misión"
        title="Acompañar la salud de cada persona que cruza la puerta."
        lead="Con evidencia, con respeto y con un expediente que no se pierde entre turnos."
        image="/images/pulso.jpg"
        imageAlt="Toma de pulso en consulta"
      />
      <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
        <p className="font-display text-3xl leading-snug tracking-tight">
          Nuestra misión es brindar atención médica integral, segura y continua a familias de Guadalajara, con un sistema de calidad que pone a la persona —no al volumen— en el centro de cada decisión.
        </p>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-muted">
          <p>
            Existimos para que la consulta general, el laboratorio, la nutrición y el acompañamiento emocional no sean islas. Cada visita debe dejar un plan claro, un próximo paso y un responsable.
          </p>
          <p>
            Trabajamos con tiempos reales, consentimiento informado y personal que se presenta por su nombre. La misión se cumple en el mostrador tanto como en el consultorio.
          </p>
        </div>
      </section>
      <section className="border-y border-border bg-paper">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-3">
          {[
            { t: "Escuchar primero", d: "La historia clínica empieza en la sala de espera: cómo llegaste, con quién, qué te preocupa hoy." },
            { t: "Decidir juntos", d: "Opciones terapéuticas explicadas en lenguaje claro, con beneficios, riesgos y alternativas." },
            { t: "Seguir después", d: "Resultados de laboratorio con llamada, no solo un PDF. Reconsulta cuando el caso lo pide." },
          ].map((item) => (
            <article key={item.t} className="rounded-xl bg-bg p-6">
              <h2 className="font-display text-2xl tracking-tight">{item.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <img src="/images/consulta.jpg" alt="Consulta entre médica y paciente" className="aspect-[4/3] w-full rounded-xl object-cover" />
        <blockquote className="font-display text-2xl leading-snug tracking-tight text-ink sm:text-3xl">
          “Si una persona sale de aquí sin saber qué sigue, no cumplimos la misión. Da igual que el diagnóstico haya sido correcto.”
          <footer className="mt-4 font-sans text-sm text-muted">Dra. Elena Varela · Directora médica</footer>
        </blockquote>
      </section>
    </SiteLayout>
  );
}
