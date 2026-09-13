import type { Metadata } from "next";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { clinic, whatsappLink } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a Dra. Cândice Bocaccio Sperb e a proposta da Delicatta Ginecologia e Obstetrícia em Chapecó/SC.",
};

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_320px] md:items-start">
        <div>
          <p className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-brand-teal">
            Sobre
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold text-foreground">
            {clinic.doctor.name}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {clinic.doctor.crm}
          </p>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              O nome da clínica foi pensado na delicadeza em atender a
              mulher: <strong>Delicatta</strong>, do italiano{" "}
              <em>delicato</em>: sensibilidade para ver, ouvir e tratar além
              de uma queixa ou doença física.
            </p>
            <p>
              O atendimento é focado na saúde integral da paciente, não
              olhando somente o exame técnico ginecológico. Nas consultas, a
              Dra. Cândice aborda alimentação, hábitos de vida, rotina
              diária, relacionamentos, riscos à saúde e histórico familiar.
            </p>
            <p>
              Atualmente as consultas têm 1 hora de duração, com direito a
              mais um retorno, tempo pensado para uma escuta completa, com um
              tom sempre acolhedor.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-border/70 bg-accent/50 p-8">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Atendimento
            </h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Somente particular. Valores informados pelo WhatsApp.</li>
              <li>{clinic.parking}</li>
              <li>{clinic.accessibility}</li>
            </ul>
            <a
              href={whatsappLink("Olá! Gostaria de agendar uma consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants(), "mt-6")}
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>

        <Image
          src="/images/candice-retrato.jpg"
          alt={clinic.doctor.name}
          width={1066}
          height={1599}
          className="aspect-[2/3] w-full rounded-3xl border border-border/70 object-cover shadow-sm md:sticky md:top-24"
        />
      </div>
    </div>
  );
}
