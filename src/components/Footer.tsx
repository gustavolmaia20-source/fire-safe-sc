import { Link } from "react-router-dom";
import { getWhatsAppLink } from "./WhatsAppButton";
import logoRcr from "@/assets/logo-rcr.avif";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logoRcr} alt="RCR Engenharia" className="h-10 w-auto" />
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Especialistas em prevenção contra incêndio. PPCI, RPCI e regularização de imóveis em todo o estado de Santa Catarina.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Atendimento em todo o estado de Santa Catarina, Brasil.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-foreground">Serviços</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="/#servicos" className="hover:text-foreground transition-colors">PPCI — Projeto Preventivo</a></li>
              <li><a href="/#servicos" className="hover:text-foreground transition-colors">RPCI — Relatório Preventivo</a></li>
              <li><a href="/#servicos" className="hover:text-foreground transition-colors">Regularização de Imóveis</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-foreground">Institucional</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="/#como-funciona" className="hover:text-foreground transition-colors">Como Funciona</a></li>
              <li><a href="/#faq" className="hover:text-foreground transition-colors">Perguntas Frequentes</a></li>
              <li><a href="/#depoimentos" className="hover:text-foreground transition-colors">Depoimentos</a></li>
              <li>
                <Link to="/politica-de-privacidade" className="hover:text-foreground transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-de-uso" className="hover:text-foreground transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-foreground">Contato</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  WhatsApp: (47) 99956-3585
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@rcrengenharia.com.br"
                  className="hover:text-foreground transition-colors"
                >
                  contato@rcrengenharia.com.br
                </a>
              </li>
              <li>Santa Catarina, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} RCR Engenharia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
