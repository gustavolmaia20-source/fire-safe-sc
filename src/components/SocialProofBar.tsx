import { motion } from "framer-motion";

const stats = [
  { value: "+500", label: "Projetos Aprovados" },
  { value: "10", label: "Anos de Experiência" },
  { value: "98%", label: "Aprovação de Primeira" },
  { value: "24h", label: "Resposta Garantida" },
];

export function SocialProofBar() {
  return (
    <section className="border-y border-border bg-card py-8">
      <div className="container">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-3xl font-extrabold text-primary md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
