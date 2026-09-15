import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/foro")({
  component: Foro,
  head: () => ({ meta: [{ title: "Foro FAQ · Clínica Aurora" }] }),
});

function Foro() {
  const threads = useCms((s) => s.faqThreads);
  const addThread = useCms((s) => s.addFaqThread);
  const addReply = useCms((s) => s.addFaqReply);
  const session = useCms((s) => s.session);
  const [error, setError] = useState("");
  const [replyError, setReplyError] = useState("");

  function onAsk(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const result = addThread({ author: String(data.get("author") ?? ""), title: String(data.get("title") ?? ""), body: String(data.get("body") ?? "") });
    if (!result.ok) { setError(result.error); return; }
    setError("");
    event.currentTarget.reset();
  }

  function onReply(threadId: string, event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const result = addReply(threadId, { author: session?.name ?? String(data.get("author") ?? ""), text: String(data.get("text") ?? "") });
    if (!result.ok) { setReplyError(result.error); return; }
    setReplyError("");
    event.currentTarget.reset();
  }

  return (
    <SiteLayout>
      <PageHero kicker="Foro de preguntas frecuentes" title="Pregunta. El equipo responde en el mismo hilo." lead="Citas, laboratorio, seguros y cómo llegar. Un foro público, no un FAQ estático." image="/images/lobby.jpg" imageAlt="Recepción de Clínica Aurora" />
      <section className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-7">
          {threads.map((thread) => (
            <article key={thread.id} className="rounded-xl bg-paper p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-subtle">{thread.author} · {new Date(thread.createdAt).toLocaleDateString("es-MX")}</p>
              <h2 className="mt-2 font-display text-2xl tracking-tight">{thread.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{thread.body}</p>
              <ul className="mt-6 space-y-4 border-t border-border pt-4">
                {thread.replies.map((reply) => (
                  <li key={reply.id} className="rounded-lg bg-surface px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.14em] text-primary">{reply.author}</p>
                    <p className="mt-1 text-sm leading-relaxed">{reply.text}</p>
                  </li>
                ))}
              </ul>
              <form className="mt-4 space-y-3" onSubmit={(event) => onReply(thread.id, event)}>
                {session ? null : <Input name="author" placeholder="Tu nombre" required aria-label="Nombre para responder" />}
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Input name="text" placeholder="Escribe una respuesta" required className="flex-1" />
                  <Button type="submit" variant="outline">Responder</Button>
                </div>
              </form>
            </article>
          ))}
          {replyError ? <p className="text-sm text-danger">{replyError}</p> : null}
        </div>
        <aside className="lg:col-span-5">
          <form onSubmit={onAsk} className="sticky top-24 space-y-4 rounded-xl bg-paper p-6">
            <h2 className="font-display text-2xl tracking-tight">Nueva pregunta</h2>
            <p className="text-sm text-muted">Se publica en el foro. Recepción o el equipo pueden responder.</p>
            <div className="space-y-2"><Label htmlFor="author">Nombre</Label><Input id="author" name="author" required /></div>
            <div className="space-y-2"><Label htmlFor="title">Título</Label><Input id="title" name="title" required placeholder="Ej. ¿Atienden pediatría el sábado?" /></div>
            <div className="space-y-2"><Label htmlFor="body">Pregunta</Label><Textarea id="body" name="body" required /></div>
            {error ? <p className="text-sm text-danger">{error}</p> : null}
            <Button type="submit">Publicar en el foro</Button>
          </form>
        </aside>
      </section>
    </SiteLayout>
  );
}
