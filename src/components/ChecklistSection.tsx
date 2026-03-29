import { motion } from "framer-motion";
import { Download, CheckSquare, ArrowRight, Shield } from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppButton";

const checklistItems = [
  "Planta baixa atualizada do imóvel",
  "Extintores dentro da validade e nas posições corretas",
  "Sinalização de emergência e rotas de fuga",
  "Iluminação de emergência funcionando",
  "Saídas de emergência desobstruídas",
  "Hidrantes e mangueiras em condições de uso",
  "Alarme de incêndio instalado (quando exigido)",
  "ART do responsável técnico pelo projeto",
];

export function ChecklistSection() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-card-hover lg:grid lg:grid-cols-2">
          {/* Left content */}
          <div className="p-8 lg:p-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              <Download className="h-3.5 w-3.5" />
              Material Gratuito
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl text-balance">
              Checklist: Seu imóvel está preparado para a vistoria?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Verifique agora os <strong>8 itens obrigatórios</strong> que o Corpo de Bombeiros fiscaliza. 
              Se faltar qualquer um, você pode ser <strong>multado ou interditado</strong>.
            </p>

            <ul className="mt-6 space-y-2.5">
              {checklistItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  className="flex items-start gap-2.5 text-sm text-foreground"
                >
                  <CheckSquare className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right CTA */}
          <div className="flex flex-col items-center justify-center gradient-hero p-8 text-center lg:p-10">
            <Shield className="h-16 w-16 text-primary-foreground/30" />
            <h3 className="mt-4 font-display text-xl font-bold text-primary-foreground">
              Não sabe se está regular?
            </h3>
            <p className="mt-2 text-sm text-primary-foreground/70">
              Envie a checklist preenchida pelo WhatsApp e nosso engenheiro faz uma 
              <strong className="text-primary-foreground"> análise gratuita</strong> do seu caso.
            </p>
            <a
              href={getWhatsAppLink("Olá! Preenchi a checklist e gostaria de uma análise gratuita do meu imóvel.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl gradient-cta px-6 py-3.5 text-sm font-bold text-success-foreground shadow-cta transition-transform hover:scale-105 active:scale-95"
            >
              Receber Análise Gratuita
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-3 text-xs text-primary-foreground/50">
              Sem compromisso • Resposta em até 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
