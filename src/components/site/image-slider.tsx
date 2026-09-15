import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useCms } from "@/lib/cms/store";
import { cn } from "@/lib/utils";

export function ImageSlider({ className }: { className?: string }) {
  const allSlides = useCms((s) => s.slides);
  const slides = allSlides.filter((item) => item.visible);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  if (slides.length === 0) return null;
  const current = slides[index] ?? slides[0];

  return (
    <div className={cn("relative isolate overflow-hidden bg-ink", className)} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {slides.map((slide, i) => (
        <img key={slide.id} src={slide.src} alt={slide.alt} className={cn("absolute inset-0 h-full w-full object-cover transition-opacity duration-700", i === index ? "opacity-100" : "opacity-0")} />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/10" />
      <p className="absolute left-4 top-4 z-10 rounded-full bg-ink/50 px-3 py-1 text-xs uppercase tracking-[0.16em] text-bg backdrop-blur-sm sm:left-6 sm:top-6">{current.caption}</p>
      {slides.length > 1 ? (
        <>
          <Button type="button" size="icon" variant="outline" className="absolute left-3 top-1/2 z-10 size-11 -translate-y-1/2 border-bg/30 bg-ink/40 text-bg hover:bg-ink/70 sm:left-5" aria-label="Imagen anterior" onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}>
            <ChevronLeft className="size-5" />
          </Button>
          <Button type="button" size="icon" variant="outline" className="absolute right-3 top-1/2 z-10 size-11 -translate-y-1/2 border-bg/30 bg-ink/40 text-bg hover:bg-ink/70 sm:right-5" aria-label="Imagen siguiente" onClick={() => setIndex((i) => (i + 1) % slides.length)}>
            <ChevronRight className="size-5" />
          </Button>
          <div className="absolute right-4 top-16 z-10 flex gap-2 sm:right-6">
            {slides.map((slide, i) => (
              <button key={slide.id} type="button" aria-label={`Ir a ${slide.caption}`} className={cn("h-2.5 rounded-full transition-all", i === index ? "w-8 bg-bg" : "w-2.5 bg-bg/50 hover:bg-bg/80")} onClick={() => setIndex(i)} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
