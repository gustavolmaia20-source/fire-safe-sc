import { motion } from "framer-motion";
import { Shield, ArrowRight, CheckCircle, AlertTriangle, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppButton";

const benefits = [
  "Orçamento gratuito em 24h",
  "Atendimento direto com engenheiro",
  "98% de aprovação de primeira",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero pt-44 pb-16 md:pt-52 md:pb-24">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/20 px-4 py-1.5 text-sm font-bold text-accent-foreground">
              <AlertTriangle className="h-4 w-4" />
              Fiscalização intensificada em SC — Regularize agora
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl text-balance"
          >
            Seu imóvel pode ser{" "}
            <span className="text-accent">interditado amanhã.</span>
            <br className="hidden md:block" />
            <span className="text-[#25D366]"> Nós resolvemos hoje.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl"
          >
            Multas de até <strong className="text-primary-foreground">R$ 50.000</strong>, interdição e perda do alvará.
            A RCR Engenharia cuida de todo o processo de <strong className="text-primary-foreground">PPCI, RPCI e regularização</strong> — do projeto
            à aprovação — com <strong className="text-primary-foreground">orçamento gratuito em 24h</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href={getWhatsAppLink("Olá! Preciso regularizar meu imóvel com urgência. Podem me enviar um orçamento gratuito?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl gradient-cta px-8 py-4 text-base font-bold text-success-foreground shadow-cta transition-transform hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              Quero Orçamento Gratuito em 24h
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-white/10"
            >
              Ver Como Funciona
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6"
          >
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <CheckCircle className="h-4 w-4 text-[#25D366]" />
                {b}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
