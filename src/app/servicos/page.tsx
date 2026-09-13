import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { featuredServices, services, whatsappLink } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Consulta ginecológica, obstétrica, pré-natal de alto risco, laser íntimo, ninfoplastia e demais procedimentos com a Dra. Cândice Bocaccio Sperb.",
};

const otherServices = services.filter(
  (s) => !("featured" in s && s.featured)
);

export default function ServicosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-brand-teal">
          Serviços
        </p>
        <h1 className="mt-3 font-heading text-4xl font-semibold text-foreground">
          Cuidado em cada etapa
        </h1>
        <p className="mt-4 text-muted-foreground">
          Atendimento somente particular. Valores informados diretamente pelo
          WhatsApp.
        </p>
      </div>

      <div className="mt-12">
        <p className="font-heading text-sm font-medium uppercase tracking-[0.15em] text-brand-teal">
          Mais procurados
        </p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <Card
              key={service.title}
              className="border-brand-teal/40 bg-accent/40"
            >
              <CardHeader>
                <Badge className="w-fit bg-brand-teal text-white">
                  Destaque
                </Badge>
                <CardTitle className="mt-2 font-heading text-lg">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {otherServices.map((service) => (
          <Card key={service.title} className="border-border/70">
            <CardHeader>
              <CardTitle className="font-heading text-lg">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-border/70 bg-secondary/40 px-6 py-12 text-center">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Não encontrou o que procurava?
        </h2>
        <p className="max-w-md text-muted-foreground">
          Fale diretamente pelo WhatsApp para tirar dúvidas sobre qualquer
          procedimento.
        </p>
        <a
          href={whatsappLink(
            "Olá! Gostaria de saber mais sobre os serviços."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "lg" }))}
        >
          Falar pelo WhatsApp
        </a>
      </div>
    </div>
  );
}
