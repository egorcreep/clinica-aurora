export function EmbeddedAnimations() {
  return (
    <section className="border-y border-border bg-paper">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div className="motion-rise">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
            Animación embebida · SVG
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight">El pulso, dibujado aquí.</h2>
          <p className="mt-4 max-w-md text-muted">
            No es un video ni un plugin. El trazo es un SVG dentro de la página y se
            recorre solo.
          </p>
          <svg viewBox="0 0 640 160" className="mt-8 h-28 w-full text-primary" aria-hidden="true">
            <path
              d="M0 90 H120 L150 90 L170 40 L196 130 L220 70 L248 90 H420 L446 90 L466 28 L494 138 L518 78 L544 90 H640"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
              className="motion-ecg"
            />
          </svg>
        </div>
        <div className="motion-rise [animation-delay:120ms]">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
            Animación embebida · CSS
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight">Luz de la mañana.</h2>
          <p className="mt-4 max-w-md text-muted">
            Dos círculos y un anillo, animados con CSS embebido en la hoja de estilos.
          </p>
          <div className="relative mt-8 h-40 overflow-hidden rounded-xl bg-ink">
            <span className="motion-drift absolute -left-6 top-4 size-36 rounded-full bg-primary/70 blur-2xl" />
            <span className="motion-drift absolute bottom-0 right-4 size-28 rounded-full bg-[#e7c27a]/50 blur-2xl [animation-delay:-3s]" />
            <span className="motion-ring absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-bg/50" />
            <span className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bg" />
          </div>
        </div>
      </div>
    </section>
  );
}
