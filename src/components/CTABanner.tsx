import { ArrowRight, MessageCircle, Clock } from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppButton";

export function CTABanner() {
  return (
    <section className="gradient-hero py-14 md:py-20">
      <div className="container text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground/90">
          <Clock className="h-3.5 w-3.5" />
          Oferta por tempo limitado
        </div>
        <h2 className="font-display text-2xl font-bold text-primary-foreground md:text-4xl text-balance">
          Orçamento gratuito + análise de risco do seu imóvel
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
          Descubra em 24h se seu imóvel está em risco de multa ou interdição. 
          <strong className="text-primary-foreground"> Sem custo, sem compromisso.</strong> Vagas limitadas para análise gratuita este mês.
        </p>
        <a
          href={getWhatsAppLink("Olá! Quero aproveitar a análise de risco gratuita do meu imóvel.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-xl gradient-cta px-8 py-4 text-base font-bold text-success-foreground shadow-cta transition-transform hover:scale-105 active:scale-95"
        >
          <MessageCircle className="h-5 w-5" />
          Garantir Minha Análise Gratuita
          <ArrowRight className="h-5 w-5" />
        </a>
        <p className="mt-3 text-xs text-primary-foreground/50">
          Últimas vagas disponíveis para março/2026
        </p>
      </div>
    </section>
  );
}
