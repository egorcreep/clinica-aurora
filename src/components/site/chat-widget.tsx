import { MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { useCms } from "@/lib/cms/store";
import { cn } from "@/lib/utils";

const AUTO_REPLY =
  "Recibido. En horario de clínica te contestamos aquí o por WhatsApp al 33 3641 2280. Si es urgente, llama.";

export function ChatWidget() {
  const messages = useCms((s) => s.chatMessages);
  const sendChat = useCms((s) => s.sendChat);
  const session = useCms((s) => s.session);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [autoSent, setAutoSent] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const value = text.trim();
    if (!value) return;
    const isStaff = Boolean(session);
    sendChat({
      author: isStaff ? "recepcion" : "visitante",
      name: isStaff ? session!.name : "Visitante",
      text: value,
    });
    setText("");
    if (!isStaff && !autoSent) {
      setAutoSent(true);
      window.setTimeout(() => {
        sendChat({ author: "recepcion", name: "Recepción Aurora", text: AUTO_REPLY });
      }, 900);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {open ? (
        <div className="flex h-[min(520px,70dvh)] w-[min(360px,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl border border-border bg-paper shadow-lg">
          <div className="flex items-center justify-between bg-ink px-4 py-3 text-bg">
            <div>
              <p className="font-display text-lg leading-none">Chat Aurora</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-admin-muted">
                Recepción en línea
              </p>
            </div>
            <Button type="button" size="icon" variant="ghost" className="size-10 text-bg hover:bg-admin-line hover:text-bg" aria-label="Cerrar chat" onClick={() => setOpen(false)}>
              <X className="size-5" />
            </Button>
          </div>
          <div ref={scroller} className="flex-1 space-y-3 overflow-y-auto px-3 py-4">
            {messages.map((msg) => (
              <div key={msg.id} className={cn("max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed", msg.author === "recepcion" ? "bg-surface text-ink" : "ml-auto bg-primary text-primary-fg")}>
                <p className="text-[10px] uppercase tracking-[0.14em] opacity-70">{msg.name}</p>
                <p className="mt-1">{msg.text}</p>
              </div>
            ))}
          </div>
          <form onSubmit={onSubmit} className="flex gap-2 border-t border-border p-3">
            <label className="sr-only" htmlFor="chat-text">Mensaje</label>
            <input id="chat-text" value={text} onChange={(e) => setText(e.target.value)} placeholder={session ? "Responder como recepción…" : "Escribe tu duda…"} className="h-11 flex-1 rounded-md border border-border bg-paper px-3 text-sm outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/30" />
            <Button type="submit" size="icon" aria-label="Enviar"><Send className="size-4" /></Button>
          </form>
        </div>
      ) : (
        <Button type="button" size="lg" className="h-14 rounded-full px-5 shadow-md" onClick={() => setOpen(true)}>
          <MessageCircle className="size-5" />
          Chat
        </Button>
      )}
    </div>
  );
}
