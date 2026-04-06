import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5548999999999"; // Substituir pelo número real
const DEFAULT_MESSAGE = "Olá! Gostaria de saber mais sobre os serviços de PPCI, RPCI e regularização da RCR Engenharia.";

export function getWhatsAppLink(message?: string) {
  const text = encodeURIComponent(message || DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function WhatsAppFloatingButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 font-display font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 animate-pulse-glow md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-6 w-6 fill-white" />
      <span className="hidden sm:inline">Falar com Engenheiro</span>
    </a>
  );
}
