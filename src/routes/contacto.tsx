import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CLINIC } from "@/lib/cms/defaults";
import { useCms } from "@/lib/cms/store";

export const Route = createFileRoute("/contacto")({
  component: Contacto,
  head: () => ({ meta: [{ title: "Contacto · Clínica Aurora" }] }),
});

function Contacto() {
  const addMessage = useCms((s) => s.addMessage);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      setError("Nombre, correo y mensaje son obligatorios.");
      return;
    }
    addMessage({ name, email, phone, message });
    setError("");
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <SiteLayout>
      <PageHero kicker="Contacto" title="Agenda, dudas y orientación." lead="Recepción responde en horario de clínica. Si es urgente, llama." image="/images/lobby.jpg" imageAlt="Recepción de Clínica Aurora" />
      <section className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="font-display text-3xl tracking-tight">Recepción</h2>
          <dl className="mt-6 space-y-4 text-sm">
            <div><dt className="text-subtle">Teléfono</dt><dd className="text-lg text-ink">{CLINIC.phone}</dd></div>
            <div><dt className="text-subtle">Correo</dt><dd className="text-lg text-ink">{CLINIC.email}</dd></div>
            <div><dt className="text-subtle">Dirección</dt><dd className="text-lg text-ink">{CLINIC.addressLine}, {CLINIC.neighborhood}</dd></div>
          </dl>
        </div>
        <div className="lg:col-span-7">
          {sent ? (
            <div className="rounded-xl bg-surface p-8">
              <h2 className="font-display text-2xl tracking-tight">Mensaje recibido</h2>
              <p className="mt-3 text-muted">Gracias. Recepción lo verá en el panel y te escribe en horario de clínica. Si necesitas algo hoy, llama al {CLINIC.phone}.</p>
              <Button className="mt-6" type="button" variant="outline" onClick={() => setSent(false)}>Enviar otro</Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4 rounded-xl bg-paper p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2"><Label htmlFor="name">Nombre</Label><Input id="name" name="name" autoComplete="name" required /></div>
                <div className="space-y-2"><Label htmlFor="phone">Teléfono</Label><Input id="phone" name="phone" autoComplete="tel" /></div>
              </div>
              <div className="space-y-2"><Label htmlFor="email">Correo</Label><Input id="email" name="email" type="email" autoComplete="email" required /></div>
              <div className="space-y-2"><Label htmlFor="message">Mensaje</Label><Textarea id="message" name="message" required placeholder="Cuéntanos el motivo de la visita o tu duda." /></div>
              {error ? <p className="text-sm text-danger">{error}</p> : null}
              <Button type="submit">Enviar mensaje</Button>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
