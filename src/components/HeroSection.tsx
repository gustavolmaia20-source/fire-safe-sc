import { motion } from "framer-motion";
import { Shield, ArrowRight, CheckCircle } from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppButton";

const benefits = [
  "Aprovação garantida em todo SC",
  "Atendimento direto com engenheiro",
  "Processo ágil e sem burocracia",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero pt-28 pb-16 md:pt-36 md:pb-24">
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-primary-foreground/90">
              <Shield className="h-4 w-4" />
              10 anos protegendo Santa Catarina
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl text-balance"
          >
            Seu imóvel está irregular com o{" "}
            <span className="text-accent">Corpo de Bombeiros?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl"
          >
            Evite multas, interdições e problemas legais. A RCR Engenharia cuida
            de todo o processo de <strong>PPCI e RPCI</strong> para você — do projeto
            à aprovação final.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href={getWhatsAppLink("Olá! Preciso regularizar meu imóvel com o Corpo de Bombeiros em SC.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl gradient-cta px-8 py-4 text-base font-bold text-success-foreground shadow-cta transition-transform hover:scale-105 active:scale-95"
            >
              Falar com Engenheiro Agora
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-white/10"
            >
              Conhecer Serviços
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
