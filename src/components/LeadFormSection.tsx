import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppButton";

const buildingTypes = [
  "Comercial",
  "Industrial",
  "Residencial Multifamiliar",
  "Mista",
  "Serviços / Saúde",
  "Educação",
  "Outro",
];

export function LeadFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    buildingType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${form.name}.\nCidade: ${form.city}\nTipo de edificação: ${form.buildingType}\n${form.message ? `Mensagem: ${form.message}` : "Gostaria de mais informações sobre PPCI/RPCI."}`;
    window.open(getWhatsAppLink(whatsappMessage), "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contato" className="bg-background py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-lg rounded-2xl border border-border bg-card p-10 text-center shadow-card"
          >
            <CheckCircle className="mx-auto h-16 w-16 text-success" />
            <h3 className="mt-4 font-display text-2xl font-bold text-foreground">Mensagem enviada!</h3>
            <p className="mt-2 text-muted-foreground">
              Nosso engenheiro entrará em contato em breve pelo WhatsApp.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm font-semibold text-primary hover:underline"
            >
              Enviar outra mensagem
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-card-hover lg:grid lg:grid-cols-5">
          {/* Left info */}
          <div className="gradient-hero p-8 text-primary-foreground lg:col-span-2 lg:p-10">
            <h2 className="font-display text-2xl font-bold">Solicite seu orçamento</h2>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
              Preencha o formulário e nosso engenheiro entrará em contato em até 24 horas com uma proposta personalizada.
            </p>
            <div className="mt-8 space-y-4 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
                <span>Orçamento gratuito e sem compromisso</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
                <span>Resposta em até 24 horas</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
                <span>Atendimento em todo o estado de SC</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 p-8 lg:col-span-3 lg:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Nome completo *</label>
                <input
                  name="name"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Telefone *</label>
                <input
                  name="phone"
                  required
                  maxLength={20}
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">E-mail</label>
                <input
                  name="email"
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Cidade *</label>
                <input
                  name="city"
                  required
                  maxLength={100}
                  value={form.city}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  placeholder="Sua cidade em SC"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Tipo de edificação *</label>
              <select
                name="buildingType"
                required
                value={form.buildingType}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
              >
                <option value="">Selecione...</option>
                {buildingTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Mensagem (opcional)</label>
              <textarea
                name="message"
                maxLength={1000}
                rows={3}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="Descreva brevemente sua necessidade..."
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl gradient-cta px-6 py-3.5 text-sm font-bold text-success-foreground shadow-cta transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="h-4 w-4" />
              Solicitar Orçamento via WhatsApp
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Seus dados não serão compartilhados. Atendimento humano e direto.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
