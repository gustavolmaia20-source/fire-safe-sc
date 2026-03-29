import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo M.",
    city: "Florianópolis",
    type: "Restaurante",
    text: "Estava com o alvará vencido há 2 anos por conta do PPCI. A RCR resolveu tudo em menos de 30 dias. Atendimento direto com o engenheiro, sem intermediários.",
  },
  {
    name: "Mariana S.",
    city: "Joinville",
    type: "Clínica Odontológica",
    text: "Tentei fazer por conta própria e o projeto foi reprovado 3 vezes. A RCR pegou o caso, corrigiu tudo e aprovou de primeira. Deveria ter procurado antes.",
  },
  {
    name: "Roberto L.",
    city: "Blumenau",
    type: "Galpão Industrial",
    text: "Precisava regularizar um galpão de 2.000m² com urgência para fechar um contrato. A equipe foi extremamente ágil e competente. Recomendo demais.",
  },
  {
    name: "Fernanda T.",
    city: "Chapecó",
    type: "Escola Particular",
    text: "A escola estava funcionando sem o atestado dos bombeiros. A RCR fez todo o acompanhamento, resolveu as exigências e hoje estamos 100% regulares.",
  },
  {
    name: "André P.",
    city: "Criciúma",
    type: "Supermercado",
    text: "Recebi uma notificação do Corpo de Bombeiros e entrei em pânico. A RCR assumiu o processo, respondeu às exigências e evitou a interdição da loja.",
  },
  {
    name: "Juliana K.",
    city: "Itajaí",
    type: "Condomínio Residencial",
    text: "O síndico anterior não tinha feito a regularização. Contratamos a RCR e em 45 dias já tínhamos o atestado. Processo transparente e profissional.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Depoimentos</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
            Mais de 500 projetos aprovados em Santa Catarina
          </h2>
          <p className="mt-4 text-muted-foreground">
            Veja o que nossos clientes dizem sobre trabalhar com a RCR Engenharia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent-warm text-accent-warm" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">"{t.text}"</p>
              <div className="mt-4 border-t border-border pt-4">
                <p className="font-display text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.type} — {t.city}, SC
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
