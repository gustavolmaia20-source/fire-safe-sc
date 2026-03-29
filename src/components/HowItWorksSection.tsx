import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppButton";

const steps = [
  {
    number: "01",
    title: "Fale pelo WhatsApp",
    description: "Envie uma mensagem e em até 24h você recebe um orçamento gratuito e personalizado.",
  },
  {
    number: "02",
    title: "Análise Técnica",
    description: "Nosso engenheiro analisa seu caso e define exatamente o que precisa ser feito — sem surpresas.",
  },
  {
    number: "03",
    title: "Projeto e Protocolo",
    description: "Elaboramos o PPCI/RPCI completo e protocolamos no Corpo de Bombeiros por você.",
  },
  {
    number: "04",
    title: "Aprovação Garantida",
    description: "Acompanhamos até a aprovação final. Se houver exigência, resolvemos sem custo adicional.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Simples e Rápido</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
            Do WhatsApp à aprovação em 4 passos
          </h2>
          <p className="mt-4 text-muted-foreground">
            Você não precisa entender de burocracia. Nós cuidamos de tudo.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary font-display text-lg font-bold text-primary-foreground">
                {step.number}
              </div>
              {i < steps.length - 1 && (
                <div className="absolute left-[calc(50%+2rem)] top-7 hidden h-px w-[calc(100%-4rem)] bg-border lg:block" />
              )}
              <h3 className="font-display text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={getWhatsAppLink("Olá! Quero iniciar o processo de regularização do meu imóvel.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl gradient-cta px-8 py-4 text-base font-bold text-success-foreground shadow-cta transition-transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="h-5 w-5" />
            Começar Agora — É Grátis
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
