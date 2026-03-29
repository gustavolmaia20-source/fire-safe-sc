import { motion } from "framer-motion";
import { Zap, Users, MapPin, RotateCcw, Headphones, Award } from "lucide-react";

const diffs = [
  {
    icon: Zap,
    title: "Aprovação Rápida",
    description: "Processos otimizados que reduzem o tempo de aprovação em até 50% comparado à média do mercado.",
  },
  {
    icon: Users,
    title: "Engenheiro Dedicado",
    description: "Você fala diretamente com o engenheiro responsável. Sem atendentes, sem intermediários.",
  },
  {
    icon: MapPin,
    title: "Especialistas em SC",
    description: "Conhecemos as particularidades de cada região e batalhão de bombeiros em Santa Catarina.",
  },
  {
    icon: RotateCcw,
    title: "Zero Retrabalho",
    description: "Nossos projetos são elaborados para aprovação de primeira, eliminando idas e vindas desnecessárias.",
  },
  {
    icon: Headphones,
    title: "Acompanhamento Total",
    description: "Do primeiro contato à emissão do atestado, você é atualizado em cada etapa do processo.",
  },
  {
    icon: Award,
    title: "10 Anos de Experiência",
    description: "+500 projetos aprovados em todas as categorias de edificação em Santa Catarina.",
  },
];

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Nossos Diferenciais</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
            Por que mais de 500 clientes escolheram a RCR?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diffs.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="shrink-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light">
                  <d.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-foreground">{d.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
