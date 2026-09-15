import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/admin/chat")({
  component: AdminChat,
  head: () => ({ meta: [{ title: "Chat · Aurora CMS" }] }),
});

function AdminChat() {
  const messages = useCms((s) => s.chatMessages);
  const sendChat = useCms((s) => s.sendChat);
  const session = useCms((s) => s.session);
  const [text, setText] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    sendChat({ author: "recepcion", name: session?.name ?? "Recepción Aurora", text });
    setText("");
  }

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-primary">Módulo</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">Chat Aurora</h1>
      <p className="mt-3 max-w-2xl text-muted">Widget de chat en vivo. Código: <code className="text-ink">src/components/site/chat-widget.tsx</code>.</p>
      <div className="mt-8 max-w-2xl space-y-3 rounded-xl bg-paper p-5">
        {messages.map((msg) => (
          <div key={msg.id} className="border-b border-border pb-3 last:border-0">
            <p className="text-xs uppercase tracking-[0.14em] text-subtle">{msg.name} · {msg.author === "recepcion" ? "equipo" : "visitante"}</p>
            <p className="mt-1 text-sm">{msg.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={onSubmit} className="mt-6 max-w-2xl space-y-3">
        <Textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Responder como recepción" required />
        <Button type="submit">Enviar al chat público</Button>
      </form>
    </div>
  );
}
