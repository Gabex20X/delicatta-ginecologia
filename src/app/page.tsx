import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { clinic, faqs, services, whatsappLink } from "@/lib/site-data";

const highlights = [
  { label: "Duração da consulta", value: "1 hora" },
  { label: "Atendimento", value: "Particular" },
  { label: "Acessibilidade", value: "100% acessível" },
  { label: "Parto e cesariana", value: "Humanizados" },
];

const featuredServices = services.slice(0, 6);

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {clinic.fullName}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-balance text-foreground sm:text-5xl">
            Ginecologia e obstetrícia com delicadeza
          </h1>
          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            Atendimento focado na saúde integral da paciente, não só na
            queixa técnica. Consultas de 1 hora, com espaço para ouvir
            alimentação, hábitos de vida, histórico familiar e o que mais
            importa para você, em Chapecó/SC.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink("Olá! Gostaria de agendar uma consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Agendar pelo WhatsApp
            </a>
            <Link
              href="/servicos"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Ver serviços
            </Link>
          </div>
        </div>

        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border/70 bg-card px-4 py-5 text-center shadow-sm"
            >
              <dt className="text-xs text-muted-foreground">{item.label}</dt>
              <dd className="mt-1 font-heading text-lg font-semibold text-primary">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Sobre teaser */}
      <section className="border-y border-border/70 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Sobre a Delicatta
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground">
              {clinic.doctor.name}
            </h2>
            <p className="mt-4 text-muted-foreground">
              O nome Delicatta vem do italiano <em>delicato</em>: sensibilidade
              para ver, ouvir e tratar além de uma queixa ou doença física.
              Nas consultas, a Dra. Cândice aborda alimentação, hábitos de
              vida, rotina diária, relacionamentos, riscos à saúde e histórico
              familiar, sempre com um tom acolhedor.
            </p>
            <Link
              href="/sobre"
              className={cn(buttonVariants({ variant: "link" }), "mt-2 px-0")}
            >
              Conhecer a médica →
            </Link>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card p-8 shadow-sm">
            <p className="font-heading text-lg text-foreground">
              &ldquo;Cuidar da saúde integral da paciente, não olhando somente
              o exame técnico ginecológico.&rdquo;
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              {clinic.doctor.name}, {clinic.doctor.crm}
            </p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Serviços
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground">
              Cuidado em cada etapa
            </h2>
          </div>
          <Link
            href="/servicos"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Ver todos os serviços
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <Card
              key={service.title}
              className="border-border/70 transition-shadow [transition-timing-function:var(--ease-2)] hover:shadow-md"
            >
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
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground sm:px-16">
          <h2 className="font-heading text-3xl font-semibold text-balance">
            Pronta para cuidar da sua saúde com calma e atenção?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/85">
            Fale agora pelo WhatsApp e agende sua consulta com a Dra. Cândice.
          </p>
          <a
            href={whatsappLink("Olá! Gostaria de agendar uma consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "mt-8"
            )}
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <p className="text-center font-heading text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Dúvidas frequentes
        </p>
        <h2 className="mt-3 text-center font-heading text-3xl font-semibold text-foreground">
          Perguntas frequentes
        </h2>
        <Accordion className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-heading text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
