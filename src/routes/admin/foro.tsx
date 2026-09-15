import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/admin/foro")({
  component: AdminForo,
  head: () => ({ meta: [{ title: "Foro FAQ · Aurora CMS" }] }),
});

function AdminForo() {
  const threads = useCms((s) => s.faqThreads);
  const addReply = useCms((s) => s.addFaqReply);
  const session = useCms((s) => s.session);
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-primary">Módulo</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">Foro de preguntas frecuentes</h1>
      <p className="mt-3 max-w-2xl text-muted">Hilos públicos en <code className="text-ink">/foro</code>. Código: <code className="text-ink">src/routes/foro.tsx</code>.</p>
      <div className="mt-8 space-y-4">
        {threads.map((thread) => (
          <article key={thread.id} className="rounded-xl bg-paper p-5">
            <p className="text-xs text-subtle">{thread.author} · {thread.replies.length} respuestas</p>
            <h2 className="mt-1 font-display text-2xl tracking-tight">{thread.title}</h2>
            <p className="mt-2 text-sm text-muted">{thread.body}</p>
            <form className="mt-4 flex flex-col gap-2 sm:flex-row" onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              addReply(thread.id, { author: session?.name ?? "Recepción Aurora", text: String(data.get("text") ?? "") });
              event.currentTarget.reset();
            }}>
              <Input name="text" placeholder="Responder como equipo" required className="flex-1" />
              <Button type="submit" size="sm">Publicar respuesta</Button>
            </form>
          </article>
        ))}
      </div>
    </div>
  );
}
