import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Contato Inicial",
    description: "Você entra em contato pelo WhatsApp ou formulário. Entendemos sua necessidade e tipo de edificação.",
  },
  {
    number: "02",
    title: "Análise Técnica",
    description: "Nossa equipe faz a análise técnica do seu imóvel e define o que é necessário para a aprovação.",
  },
  {
    number: "03",
    title: "Elaboração do Projeto",
    description: "Desenvolvemos o PPCI ou RPCI completo, seguindo rigorosamente as normas do Corpo de Bombeiros de SC.",
  },
  {
    number: "04",
    title: "Aprovação Garantida",
    description: "Protocolamos, acompanhamos as exigências e garantimos a aprovação do seu projeto junto aos bombeiros.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Como Funciona</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
            Do primeiro contato à aprovação em 4 passos
          </h2>
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
      </div>
    </section>
  );
}
