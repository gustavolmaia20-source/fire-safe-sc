import { motion } from "framer-motion";
import { FileText, ClipboardCheck, ShieldCheck, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppButton";

const services = [
  {
    icon: FileText,
    title: "PPCI — Projeto Preventivo",
    description:
      "Elaboramos o Projeto Preventivo Contra Incêndio completo, conforme as normas do Corpo de Bombeiros de SC. Projetos para edificações novas, ampliações e mudanças de uso.",
    details: ["Projetos para todas as ocupações", "Memorial descritivo completo", "ART do responsável técnico"],
    cta: "Solicitar orçamento de PPCI",
  },
  {
    icon: ClipboardCheck,
    title: "RPCI — Relatório Preventivo",
    description:
      "Elaboramos o Relatório Preventivo Contra Incêndio (RPCI), documento técnico que comprova as condições de segurança da sua edificação perante o Corpo de Bombeiros.",
    details: ["Levantamento técnico completo", "Relatório conforme normas vigentes", "ART do responsável técnico"],
    cta: "Solicitar orçamento de RPCI",
  },
  {
    icon: ShieldCheck,
    title: "Regularização de Imóveis",
    description:
      "Seu imóvel não tem aprovação nos bombeiros? Fazemos toda a regularização, incluindo adequações necessárias e obtenção do atestado de conformidade.",
    details: ["Análise da situação atual", "Adequação às exigências", "Acompanhamento até aprovação"],
    cta: "Regularizar meu imóvel",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Nossos Serviços</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
            Soluções completas em prevenção contra incêndio
          </h2>
          <p className="mt-4 text-muted-foreground">
            Da elaboração do projeto à aprovação final — você não precisa se preocupar com nada.
          </p>
        </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover md:p-8"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary-light p-3">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href={getWhatsAppLink(`Olá! Tenho interesse no serviço: ${service.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                {service.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
