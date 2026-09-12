export const clinic = {
  name: "Delicatta",
  fullName: "Delicatta Ginecologia e Obstetrícia",
  doctor: {
    name: "Dra. Cândice Bocaccio Sperb",
    crm: "CRM 22.182", // UF a confirmar antes de publicar
  },
  tagline: "Ginecologia e obstetrícia com delicadeza",
  address: {
    line1: "Rua Duque de Caxias, 141E, sala 501",
    line2: "Edifício Il Centenário, Centro, Chapecó/SC",
    cep: "CEP 89802-420",
    mapsQuery:
      "Rua Duque de Caxias 141E sala 501 Edifício Il Centenário Centro Chapecó SC",
  },
  phoneDisplay: "(49) 98437-3850",
  whatsappNumber: "5549984373850",
  email: "delicatta.go@yahoo.com",
  instagram: "@dra.candicesperb",
  instagramUrl: "https://instagram.com/dra.candicesperb",
  hours: [
    { day: "Segunda a sexta", time: "08h às 12h e 13h às 18h" },
  ],
  parking:
    "Estacionamento pago em frente (antigo Colégio Bom Pastor) ou nas ruas ao redor / supermercado Brasão (mediante consumo).",
  accessibility: "Totalmente acessível: prédio, banheiros e consultório.",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const services = [
  {
    title: "Consulta ginecológica",
    description: "Acompanhamento de rotina com coleta de preventivo.",
  },
  {
    title: "Consulta obstétrica",
    description: "Acompanhamento da gestação em todas as fases.",
  },
  {
    title: "Pré-natal de alto risco",
    description: "Cuidado especializado para gestações que exigem mais atenção.",
  },
  {
    title: "Parto e cesariana humanizados",
    description: "Acompanhamento humanizado do parto, respeitando o tempo e as escolhas da paciente.",
  },
  {
    title: "Laser íntimo",
    description:
      "Tratamento de incontinência urinária, síndrome genito-urinária pós-menopausa, clareamento íntimo e infecções recorrentes.",
  },
  {
    title: "Ninfoplastia",
    description: "Cirurgia íntima de redução dos lábios vaginais.",
  },
  {
    title: "Colposcopia com biópsia de colo",
    description: "Exame detalhado do colo do útero com biópsia quando necessário.",
  },
  {
    title: "Inserção de DIU",
    description: "Colocação de dispositivo intrauterino para contracepção.",
  },
  {
    title: "Inserção de Implanon",
    description: "Colocação de implante contraceptivo subdérmico.",
  },
  {
    title: "Biópsia de lesões",
    description: "Investigação e diagnóstico de lesões identificadas em consulta.",
  },
  {
    title: "Contracepção",
    description: "Orientação especializada para escolha do método contraceptivo ideal.",
  },
  {
    title: "Reposição hormonal",
    description: "Acompanhamento especializado no climatério e na menopausa.",
  },
] as const;

export const faqs = [
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "O agendamento é feito diretamente pelo WhatsApp. Toque em qualquer botão de WhatsApp do site para falar com a clínica.",
  },
  {
    question: "A clínica atende convênio?",
    answer:
      "O atendimento é somente particular. Os valores são informados diretamente pelo WhatsApp.",
  },
  {
    question: "Quanto tempo dura a consulta?",
    answer:
      "As consultas têm 1 hora de duração, com espaço para uma escuta completa, não só o exame técnico.",
  },
  {
    question: "O local tem estacionamento?",
    answer:
      "Há estacionamento pago em frente ao prédio (antigo Colégio Bom Pastor) e nas ruas ao redor. O prédio é totalmente acessível.",
  },
] as const;

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
] as const;
