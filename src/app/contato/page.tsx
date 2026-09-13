import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { clinic, whatsappLink } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Endereço, telefone, e-mail e horário de atendimento da Delicatta Ginecologia e Obstetrícia em Chapecó/SC.",
};

export default function ContatoPage() {
  const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    clinic.address.mapsQuery
  )}&output=embed`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-brand-teal">
          Contato
        </p>
        <h1 className="mt-3 font-heading text-4xl font-semibold text-foreground">
          Vamos conversar
        </h1>
        <p className="mt-4 text-muted-foreground">
          O jeito mais rápido de agendar é pelo WhatsApp, mas o consultório
          também recebe e-mail.
        </p>
        <a
          href={whatsappLink("Olá! Gostaria de agendar uma consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "lg" }), "mt-6")}
        >
          Agendar pelo WhatsApp
        </a>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <Card className="border-border/70">
            <CardHeader>
              <CardTitle className="font-heading text-lg">Endereço</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-muted-foreground">
              <p>{clinic.address.line1}</p>
              <p>{clinic.address.line2}</p>
              <p>{clinic.address.cep}</p>
              <p className="pt-2 text-sm">{clinic.parking}</p>
              <p className="text-sm">{clinic.accessibility}</p>
            </CardContent>
          </Card>

          <Card className="border-border/70">
            <CardHeader>
              <CardTitle className="font-heading text-lg">
                Telefone e e-mail
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-muted-foreground">
              <p>{clinic.phoneDisplay} (WhatsApp)</p>
              <a
                href={`mailto:${clinic.email}`}
                className="block underline decoration-border underline-offset-4 hover:text-primary"
              >
                {clinic.email}
              </a>
              <a
                href={clinic.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block underline decoration-border underline-offset-4 hover:text-primary"
              >
                {clinic.instagram}
              </a>
            </CardContent>
          </Card>

          <Card className="border-border/70">
            <CardHeader>
              <CardTitle className="font-heading text-lg">Horário</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {clinic.hours.map((h) => (
                <p key={h.day}>
                  {h.day}: {h.time}
                </p>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border/70 shadow-sm">
          <iframe
            title="Localização da Delicatta Ginecologia e Obstetrícia"
            src={mapsEmbedSrc}
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
