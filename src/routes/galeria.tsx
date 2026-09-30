import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/galeria")({
  component: Galeria,
  head: () => ({ meta: [{ title: "Galería · Clínica Aurora" }] }),
});

const PHOTOS = [
  {
    src: "/images/fachada.jpg",
    alt: "Fachada de Clínica Aurora sobre la calle Terranova",
    caption: "Fachada",
    place: "Terranova 418",
  },
  {
    src: "/images/lobby.jpg",
    alt: "Recepción de la clínica con luz de mañana",
    caption: "Recepción",
    place: "Planta baja",
  },
  {
    src: "/images/consulta.jpg",
    alt: "Consultorio de medicina interna",
    caption: "Consulta",
    place: "Medicina interna",
  },
  {
    src: "/images/pulso.jpg",
    alt: "Toma de signos en consulta general",
    caption: "Signos",
    place: "Medicina general",
  },
  {
    src: "/images/pediatria.jpg",
    alt: "Consultorio de pediatría",
    caption: "Pediatría",
    place: "Consultorio 3",
  },
  {
    src: "/images/laboratorio.jpg",
    alt: "Laboratorio clínico",
    caption: "Laboratorio",
    place: "Toma de muestras",
  },
  {
    src: "/images/nutricion.jpg",
    alt: "Espacio de nutrición",
    caption: "Nutrición",
    place: "Consultorio 4",
  },
  {
    src: "/images/terapia.jpg",
    alt: "Sala de acompañamiento emocional",
    caption: "Acompañamiento",
    place: "Sala quieta",
  },
  {
    src: "/images/amanecer.jpg",
    alt: "Pasillo de la clínica al amanecer",
    caption: "Pasillo",
    place: "Antes de abrir",
  },
  {
    src: "/images/providencia.jpg",
    alt: "Calle arbolada en Providencia, Guadalajara",
    caption: "Providencia",
    place: "A dos cuadras",
  },
  {
    src: "/images/elena.jpg",
    alt: "Retrato de la doctora Elena Varela",
    caption: "Dra. Elena Varela",
    place: "Dirección médica",
  },
  {
    src: "/images/mateo.jpg",
    alt: "Retrato del doctor Mateo Ríos",
    caption: "Dr. Mateo Ríos",
    place: "Medicina interna",
  },
  {
    src: "/images/sofia.jpg",
    alt: "Retrato de Sofía Beltrán",
    caption: "Lic. Sofía Beltrán",
    place: "Nutrición",
  },
  {
    src: "/images/lucia.jpg",
    alt: "Retrato de Lucía Herrera",
    caption: "Lic. Lucía Herrera",
    place: "Calidad",
  },
];

function Galeria() {
  const [active, setActive] = useState<number | null>(null);
  const photo = active == null ? null : PHOTOS[active];

  useEffect(() => {
    if (active == null) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((index) => (index == null ? 0 : (index + 1) % PHOTOS.length));
      if (event.key === "ArrowLeft") {
        setActive((index) => (index == null ? 0 : (index - 1 + PHOTOS.length) % PHOTOS.length));
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <SiteLayout>
      <PageHero
        kicker="Galería"
        title="La clínica, sin filtro de folleto."
        lead="Fachada, consultorios, laboratorio y el equipo. Pulsa una foto para verla grande."
        image="/images/fachada.jpg"
        imageAlt="Fachada de Clínica Aurora"
      />
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {PHOTOS.map((item, index) => (
            <li key={item.src} className={index === 0 ? "col-span-2 lg:col-span-2" : ""}>
              <button
                type="button"
                className="group block w-full text-left"
                onClick={() => setActive(index)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full rounded-xl object-cover ${index === 0 ? "aspect-[16/9]" : "aspect-[4/5] sm:aspect-[4/3]"}`}
                />
                <span className="mt-2 block text-sm text-ink">{item.caption}</span>
                <span className="block text-xs uppercase tracking-[0.16em] text-subtle">{item.place}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>
      {photo && active != null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={photo.caption}
          onClick={() => setActive(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <img src={photo.src} alt={photo.alt} className="max-h-[78dvh] w-full rounded-xl object-contain" />
            <p className="mt-3 text-bg">
              {photo.caption}
              <span className="ml-3 text-sm text-admin-muted">{photo.place}</span>
            </p>
            <div className="absolute -top-2 right-0 flex gap-2 sm:-right-2 sm:-top-12">
              <Button
                type="button"
                size="icon"
                variant="outline"
                className="border-bg/30 bg-ink text-bg hover:bg-ink"
                aria-label="Anterior"
                onClick={() => setActive((active - 1 + PHOTOS.length) % PHOTOS.length)}
              >
                <ChevronLeft className="size-5" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="outline"
                className="border-bg/30 bg-ink text-bg hover:bg-ink"
                aria-label="Siguiente"
                onClick={() => setActive((active + 1) % PHOTOS.length)}
              >
                <ChevronRight className="size-5" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="outline"
                className="border-bg/30 bg-ink text-bg hover:bg-ink"
                aria-label="Cerrar"
                onClick={() => setActive(null)}
              >
                <X className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </SiteLayout>
  );
}
