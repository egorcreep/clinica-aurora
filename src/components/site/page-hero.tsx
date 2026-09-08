export function PageHero({
  kicker,
  title,
  lead,
  image,
  imageAlt,
}: {
  kicker: string;
  title: string;
  lead: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="border-b border-border bg-paper">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">{kicker}</p>
          <h1 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{lead}</p>
        </div>
        {image ? (
          <div className="overflow-hidden rounded-xl">
            <img src={image} alt={imageAlt ?? ""} className="aspect-[4/3] h-full w-full object-cover" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
