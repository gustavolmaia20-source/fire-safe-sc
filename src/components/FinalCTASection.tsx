import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppButton";

export function FinalCTASection() {
  return (
    <section id="contato" className="gradient-hero py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-primary-foreground/90">
            <Clock className="h-4 w-4" />
            Orçamento gratuito em até 24 horas
          </div>

          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-5xl text-balance">
            Não espere a fiscalização bater na sua porta
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/70">
            Cada dia sem regularização é um risco real de <strong className="text-primary-foreground">multa de até R$ 50.000</strong> ou 
            <strong className="text-primary-foreground"> interdição do seu negócio</strong>. Fale agora com nosso engenheiro.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={getWhatsAppLink("Olá! Preciso regularizar meu imóvel urgentemente. Podem me enviar um orçamento?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl gradient-cta px-8 py-4 text-base font-bold text-success-foreground shadow-cta transition-transform hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com Engenheiro Agora
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={getWhatsAppLink("Olá! Gostaria de receber um orçamento gratuito para PPCI, RPCI ou regularização.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-white/10"
            >
              Receber Orçamento Gratuito
            </a>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <ShieldCheck className="h-4 w-4 text-[#25D366]" />
              Sem compromisso
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <ShieldCheck className="h-4 w-4 text-[#25D366]" />
              Atendimento direto com engenheiro
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <ShieldCheck className="h-4 w-4 text-[#25D366]" />
              Resposta em até 24h
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
