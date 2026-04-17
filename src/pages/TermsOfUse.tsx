import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-3xl py-28 md:py-32">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar para a página inicial
        </Link>

        <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Termos de Uso
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Última atualização: {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
        </p>

        <div className="prose prose-slate mt-8 max-w-none space-y-6 text-sm leading-relaxed text-foreground/90">
          <section>
            <h2 className="font-display text-xl font-bold text-foreground">1. Aceitação dos termos</h2>
            <p>
              Ao acessar e utilizar o site da <strong>RCR Engenharia</strong>, você concorda com estes Termos
              de Uso. Caso não concorde com qualquer parte, por favor não utilize este site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">2. Sobre os serviços</h2>
            <p>
              A RCR Engenharia oferece serviços técnicos de engenharia voltados à prevenção contra incêndio,
              incluindo projetos preventivos (PPCI), relatórios preventivos (RPCI) e regularização de imóveis
              junto ao Corpo de Bombeiros Militar de Santa Catarina. Todas as informações apresentadas neste
              site têm caráter informativo e não substituem uma análise técnica individualizada.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">3. Orçamentos e contratação</h2>
            <p>
              Os orçamentos solicitados via WhatsApp ou outros canais são gratuitos e sem compromisso. A
              prestação efetiva de serviços ocorre apenas após a assinatura de proposta comercial e/ou
              contrato específico entre as partes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">4. Uso do site</h2>
            <p>Você concorda em utilizar este site apenas para fins lícitos. É vedado:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Tentar obter acesso não autorizado a sistemas ou dados</li>
              <li>Utilizar o site para fins fraudulentos ou enganosos</li>
              <li>Reproduzir, copiar ou redistribuir conteúdo sem autorização prévia</li>
              <li>Interferir no funcionamento normal do site</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">5. Propriedade intelectual</h2>
            <p>
              Todo o conteúdo deste site (textos, imagens, logotipos, layout, código) é de propriedade da
              RCR Engenharia ou de seus licenciantes e está protegido pelas leis brasileiras de direitos
              autorais e propriedade intelectual.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">6. Limitação de responsabilidade</h2>
            <p>
              As informações deste site são fornecidas "como estão". A RCR Engenharia se esforça para manter
              o conteúdo atualizado e correto, mas não garante a ausência de erros. Não nos responsabilizamos
              por decisões tomadas com base exclusivamente nas informações deste site sem consulta técnica
              prévia.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">7. Links externos</h2>
            <p>
              Este site pode conter links para sites de terceiros (ex.: WhatsApp, Corpo de Bombeiros). Não
              somos responsáveis pelo conteúdo, políticas ou práticas desses sites.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">8. Privacidade</h2>
            <p>
              O tratamento de dados pessoais coletados por meio deste site é regido pela nossa{" "}
              <Link to="/politica-de-privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">9. Alterações</h2>
            <p>
              Estes Termos de Uso podem ser modificados a qualquer momento. As alterações entram em vigor
              imediatamente após a publicação no site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">10. Foro e legislação aplicável</h2>
            <p>
              Estes termos são regidos pelas leis brasileiras. Fica eleito o foro da Comarca onde a RCR
              Engenharia tem sede para dirimir quaisquer controvérsias decorrentes deste documento.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">11. Contato</h2>
            <p>
              Dúvidas sobre estes Termos? Entre em contato:<br />
              E-mail:{" "}
              <a href="mailto:contato@rcrengenharia.com.br" className="text-primary hover:underline">
                contato@rcrengenharia.com.br
              </a>
              <br />
              WhatsApp:{" "}
              <a href="https://wa.me/5547999563585" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                (47) 99956-3585
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default TermsOfUse;
