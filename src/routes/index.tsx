import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FlaskConical, HeartPulse, Leaf, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site/layout";
import { Button } from "@/components/ui/button";
import { CLINIC } from "@/lib/cms/defaults";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const identity = useCms((s) => s.identity);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <img src="/images/lobby.jpg" alt="Recepción de Clínica Aurora, con luz de mañana y sillas color salvia" className="h-[78vh] min-h-[520px] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary-fg/80">Providencia · Guadalajara</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight text-bg sm:text-6xl lg:text-7xl">{identity.name}</h1>
            <p className="mt-5 max-w-xl text-lg text-bg/85 sm:text-xl">{identity.tagline} Un espacio pequeño para consultas que no se sienten de prisa.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link to="/contacto">Agendar una visita<ArrowRight className="size-4" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-bg/40 bg-bg/10 text-bg hover:bg-bg/20"><Link to="/quienes-somos">Conocer la clínica</Link></Button>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Atención integral</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight">Una clínica de barrio con rigor de sistema.</h2>
        </div>
        <p className="lg:col-span-7 text-lg leading-relaxed text-muted">Aurora nació para que la consulta, el laboratorio y el seguimiento vivan en el mismo lugar. Trabajamos con un sistema de calidad documentado — no como un sello en la pared, sino como la forma en que recibimos, escuchamos y devolvemos cada resultado.</p>
      </section>
      <section className="border-y border-border bg-paper">
        <div className="mx-auto grid w-full max-w-6xl gap-px bg-border px-0 sm:grid-cols-3">
          {[
            { icon: HeartPulse, title: "Consulta humana", text: "Medicina general, interna y pediatría con tiempos reales de escucha." },
            { icon: FlaskConical, title: "Laboratorio propio", text: "Toma de muestras y resultados trazables, sin mandarte a otra colonia." },
            { icon: Leaf, title: "Acompañamiento", text: "Nutrición y salud emocional como parte del mismo plan de cuidado." },
          ].map((item) => (
            <article key={item.title} className="bg-paper px-6 py-10 sm:px-8">
              <item.icon className="size-5 text-primary" />
              <h3 className="mt-4 font-display text-2xl tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <img src="/images/consulta.jpg" alt="Consulta médica en un consultorio con luz natural" className="aspect-[4/3] w-full rounded-xl object-cover" />
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Quiénes somos</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight">Un equipo corto. Una mesa larga.</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">Nos fundó la Dra. Elena Varela en 2018, después de años en hospitales donde la fila ganaba a la conversación. Hoy somos medicina, calidad y casa: cuatro consultorios, un laboratorio y un jardín interior que todavía cabe en una cuadra de Providencia.</p>
          <Button asChild variant="outline" className="mt-6"><Link to="/quienes-somos">Ver al equipo<ArrowRight className="size-4" /></Link></Button>
        </div>
      </section>
      <section className="bg-ink text-bg">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:py-20">
          <article>
            <p className="text-xs uppercase tracking-[0.22em] text-admin-muted">Visión</p>
            <p className="mt-4 font-display text-2xl leading-snug">Ser la clínica de referencia en el poniente de Guadalajara por su calidez y su sistema de calidad.</p>
            <Link to="/vision" className="mt-4 inline-flex items-center gap-2 text-sm text-admin-muted hover:text-bg">Leer visión <ArrowRight className="size-3.5" /></Link>
          </article>
          <article>
            <p className="text-xs uppercase tracking-[0.22em] text-admin-muted">Misión</p>
            <p className="mt-4 font-display text-2xl leading-snug">Acompañar la salud de cada persona con evidencia, respeto y continuidad.</p>
            <Link to="/mision" className="mt-4 inline-flex items-center gap-2 text-sm text-admin-muted hover:text-bg">Leer misión <ArrowRight className="size-3.5" /></Link>
          </article>
          <article>
            <p className="text-xs uppercase tracking-[0.22em] text-admin-muted">Calidad</p>
            <p className="mt-4 font-display text-2xl leading-snug">Políticas públicas, medibles y revisadas cada semestre con el equipo completo.</p>
            <Link to="/politicas" className="mt-4 inline-flex items-center gap-2 text-sm text-admin-muted hover:text-bg">Ver políticas <ArrowRight className="size-3.5" /></Link>
          </article>
        </div>
      </section>
      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Ubicación física</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight">A una cuadra del Parque Lafayette.</h2>
          <p className="mt-4 flex items-start gap-2 text-muted"><MapPin className="mt-0.5 size-4 shrink-0 text-primary" /><span>{CLINIC.addressLine}, {CLINIC.neighborhood}<br />{CLINIC.city} {CLINIC.postal}</span></p>
          <p className="mt-4 text-sm text-muted">{CLINIC.hours[0].days}: {CLINIC.hours[0].time}</p>
          <Button asChild className="mt-6"><Link to="/ubicacion">Cómo llegar</Link></Button>
        </div>
        <img src="/images/fachada.jpg" alt="Fachada de Clínica Aurora en una calle arbolada de Providencia" className="aspect-[16/10] w-full rounded-xl object-cover" />
      </section>
    </SiteLayout>
  );
}
