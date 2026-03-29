import { ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppButton";

export function CTABanner() {
  return (
    <section className="gradient-hero py-14 md:py-20">
      <div className="container text-center">
        <h2 className="font-display text-2xl font-bold text-primary-foreground md:text-4xl text-balance">
          Regularize seu imóvel antes da próxima fiscalização
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
          Não espere receber uma multa. Fale agora com um engenheiro especialista e receba um orçamento em até 24h.
        </p>
        <a
          href={getWhatsAppLink("Olá! Quero regularizar meu imóvel. Podem me enviar um orçamento?")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-xl gradient-cta px-8 py-4 text-base font-bold text-success-foreground shadow-cta transition-transform hover:scale-105 active:scale-95"
        >
          Falar com Engenheiro Agora
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
