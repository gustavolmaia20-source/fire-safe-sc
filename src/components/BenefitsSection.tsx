import { motion } from "framer-motion";
import { ShieldAlert, Banknote, Scale, Clock, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppButton";

const benefits = [
  {
    icon: ShieldAlert,
    title: "Evite Interdições",
    description: "Imóveis sem PPCI/RPCI podem ser interditados a qualquer momento pelo Corpo de Bombeiros. Não arrisque seu negócio.",
  },
  {
    icon: Banknote,
    title: "Fuja das Multas",
    description: "As multas por irregularidade podem ultrapassar R$ 50.000. Regularizar agora custa uma fração desse valor.",
  },
  {
    icon: Scale,
    title: "Cumpra a Lei",
    description: "A legislação de SC exige que toda edificação comercial tenha aprovação do Corpo de Bombeiros. É obrigatório.",
  },
  {
    icon: Clock,
    title: "Não Perca Tempo",
    description: "Sem o atestado dos bombeiros, você não consegue Habite-se, alvará ou renovação de licenças.",
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Por que regularizar?</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
              Cada dia sem regularização é um risco para o seu negócio
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Fiscalizações estão cada vez mais frequentes em Santa Catarina. Não espere receber uma notificação para agir.
              Regularize agora e proteja seu patrimônio, seus clientes e seus colaboradores.
            </p>
            <a
              href={getWhatsAppLink("Olá! Quero regularizar meu imóvel antes de uma fiscalização.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl gradient-cta px-6 py-3 text-sm font-bold text-success-foreground shadow-cta transition-transform hover:scale-105"
            >
              Regularizar Agora
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-5 shadow-card"
              >
                <div className="mb-3 inline-flex rounded-lg bg-accent/10 p-2">
                  <b.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
