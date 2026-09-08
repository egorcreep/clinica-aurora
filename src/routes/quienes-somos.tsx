import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/quienes-somos")({
  component: QuienesSomos,
  head: () => ({ meta: [{ title: "Quiénes somos · Clínica Aurora" }] }),
});

const TEAM = [
  { name: "Dra. Elena Varela", role: "Directora médica", photo: "/images/elena.jpg", bio: "Médica internista. Fundó Aurora en 2018 para devolver tiempo a la consulta." },
  { name: "Dr. Mateo Ríos", role: "Medicina interna", photo: "/images/mateo.jpg", bio: "Seguimiento de enfermedades crónicas y coordinación con el laboratorio." },
  { name: "Lic. Sofía Beltrán", role: "Nutrición clínica", photo: "/images/sofia.jpg", bio: "Planes alimentarios que caben en una cocina real, no en un folleto." },
  { name: "Lic. Lucía Herrera", role: "Coordinación de calidad", photo: "/images/lucia.jpg", bio: "Auditorías internas, quejas y el expediente que sostiene cada indicador." },
];

function QuienesSomos() {
  return (
    <SiteLayout>
      <PageHero kicker="Quiénes somos" title="Una clínica pequeña con memoria larga." lead="Nacimos en Providencia para que el cuidado médico se sienta como una conversación, no como un trámite." image="/images/fachada.jpg" imageAlt="Fachada de Clínica Aurora" />
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-4"><h2 className="font-display text-3xl tracking-tight">Nuestra historia</h2></div>
        <div className="space-y-5 text-base leading-relaxed text-muted lg:col-span-8">
          <p>En 2018, la Dra. Elena Varela dejó un servicio hospitalario saturado y rentó dos consultorios sobre la avenida Providencia. La premisa era simple: menos pacientes por hora, más continuidad, un laboratorio que no obligara a cruzar la ciudad.</p>
          <p>Ocho años después seguimos siendo un equipo corto a propósito. Cada expediente tiene nombre y apellido; cada indicador de calidad se revisa en una mesa los viernes. No somos un hospital. Somos el lugar al que se vuelve.</p>
          <p>Este sitio web —y el sistema que lo sostiene— forma parte del mismo planteamiento: identidad clara, procesos visibles y un espacio digital tan cuidado como la recepción.</p>
        </div>
      </section>
      <section className="border-y border-border bg-paper">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl tracking-tight">El equipo</h2>
          <p className="mt-3 max-w-2xl text-muted">Medicina, nutrición y calidad bajo el mismo techo. Las decisiones clínicas no se toman por WhatsApp a las once de la noche.</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((person) => (
              <article key={person.name}>
                <img src={person.photo} alt={person.name} className="aspect-[3/4] w-full rounded-xl object-cover object-top" />
                <h3 className="mt-4 font-display text-xl tracking-tight">{person.name}</h3>
                <p className="text-sm text-primary">{person.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <img src="/images/amanecer.jpg" alt="Pasillo de la clínica al amanecer" className="aspect-[16/10] w-full rounded-xl object-cover" />
        <div>
          <h2 className="font-display text-3xl tracking-tight">Cómo trabajamos</h2>
          <ul className="mt-5 space-y-3 text-muted">
            <li>Citas de 30 a 45 minutos. No encajamos a nadie en quince.</li>
            <li>Expediente único: clínica, laboratorio y nutrición leen lo mismo.</li>
            <li>Quejas y sugerencias con respuesta en menos de cinco días hábiles.</li>
            <li>Revisión semestral de políticas de calidad con todo el personal.</li>
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
