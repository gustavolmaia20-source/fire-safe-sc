import { motion } from "framer-motion";
import { ShieldAlert, Banknote, Scale, Clock, ArrowRight, MessageCircle, AlertTriangle } from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppButton";

const benefits = [
  {
    icon: ShieldAlert,
    title: "Interdição Imediata",
    description: "Bombeiros podem interditar seu negócio a qualquer momento — sem aviso prévio. Já aconteceu com centenas de empresas em SC este ano.",
    urgency: true,
  },
  {
    icon: Banknote,
    title: "Multa de até R$ 50.000",
    description: "Além da interdição, a multa é retroativa. Quanto mais tempo irregular, maior o valor. Regularizar agora custa uma fração.",
    urgency: true,
  },
  {
    icon: Scale,
    title: "Responsabilidade Criminal",
    description: "Em caso de incêndio, o proprietário responde criminalmente. Sem a documentação em dia, não há defesa legal possível.",
    urgency: false,
  },
  {
    icon: Clock,
    title: "Alvará Bloqueado",
    description: "Sem o atestado dos bombeiros, você não renova alvará, não consegue Habite-se e perde contratos com o poder público.",
    urgency: false,
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              <AlertTriangle className="h-3.5 w-3.5" />
              Urgente
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
              Você está a uma fiscalização de perder seu negócio
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Em 2025, mais de <strong className="text-foreground">1.200 estabelecimentos foram notificados</strong> em Santa Catarina. 
              As fiscalizações estão cada vez mais frequentes e rigorosas. Não espere ser o próximo.
            </p>
            <a
              href={getWhatsAppLink("Olá! Quero verificar se meu imóvel está regular. Podem fazer uma análise?")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl gradient-cta px-6 py-3 text-sm font-bold text-success-foreground shadow-cta transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Verificar Minha Situação Agora
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
                className={`rounded-2xl border p-5 shadow-card ${
                  b.urgency
                    ? "border-accent/30 bg-accent/5"
                    : "border-border bg-card"
                }`}
              >
                <div className={`mb-3 inline-flex rounded-lg p-2 ${
                  b.urgency ? "bg-accent/10" : "bg-accent/10"
                }`}>
                  <b.icon className={`h-5 w-5 ${b.urgency ? "text-accent" : "text-accent"}`} />
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
