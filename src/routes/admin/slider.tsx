import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/admin/slider")({
  component: AdminSlider,
  head: () => ({ meta: [{ title: "Slider · Aurora CMS" }] }),
});

function AdminSlider() {
  const slides = useCms((s) => s.slides);
  const setSlide = useCms((s) => s.setSlide);
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-primary">Módulo</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">Slider de imágenes</h1>
      <p className="mt-3 max-w-2xl text-muted">Carrusel del inicio. Código: <code className="text-ink">src/components/site/image-slider.tsx</code>.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {slides.map((slide) => (
          <article key={slide.id} className="overflow-hidden rounded-xl bg-paper">
            <img src={slide.src} alt={slide.alt} className="aspect-[16/9] w-full object-cover" />
            <div className="space-y-3 p-4">
              <Input value={slide.caption} onChange={(e) => setSlide(slide.id, { caption: e.target.value })} aria-label={`Pie de ${slide.id}`} />
              <Button type="button" size="sm" variant={slide.visible ? "default" : "outline"} onClick={() => setSlide(slide.id, { visible: !slide.visible })}>
                {slide.visible ? "En el slider" : "Fuera del slider"}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
