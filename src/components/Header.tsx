import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppButton";
import logoRcr from "@/assets/logo-rcr.avif";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-border/50 bg-card/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <a href="#" className="flex items-center">
          <img src={logoRcr} alt="RCR Engenharia" className="h-10 md:h-12 w-auto" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppLink("Olá! Preciso de um orçamento gratuito para PPCI, RPCI ou regularização.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg gradient-cta px-4 py-2.5 text-sm font-bold text-success-foreground shadow-cta transition-transform hover:scale-105 sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
            Orçamento Grátis
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-foreground lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-4 pb-4 pt-2 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={getWhatsAppLink("Olá! Preciso de um orçamento gratuito para PPCI, RPCI ou regularização.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-lg gradient-cta px-4 py-3 text-sm font-bold text-success-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            Orçamento Grátis
          </a>
        </nav>
      )}
    </header>
  );
}
