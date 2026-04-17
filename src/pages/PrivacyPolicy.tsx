import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
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
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Última atualização: {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
        </p>

        <div className="prose prose-slate mt-8 max-w-none space-y-6 text-sm leading-relaxed text-foreground/90">
          <section>
            <h2 className="font-display text-xl font-bold text-foreground">1. Quem somos</h2>
            <p>
              A <strong>RCR Engenharia</strong> é uma empresa brasileira de engenharia, especializada em projetos
              de prevenção contra incêndio (PPCI), relatórios preventivos (RPCI) e regularização de imóveis junto
              ao Corpo de Bombeiros Militar de Santa Catarina. Esta política descreve como coletamos, usamos e
              protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">2. Dados que coletamos</h2>
            <p>Quando você entra em contato conosco pelo WhatsApp ou por outros canais, podemos coletar:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Nome completo</li>
              <li>Telefone / WhatsApp</li>
              <li>E-mail (quando informado)</li>
              <li>Cidade / localização do imóvel</li>
              <li>Tipo e características da edificação</li>
              <li>Mensagens trocadas para fins de atendimento</li>
            </ul>
            <p>
              Também coletamos automaticamente dados de navegação (cookies, endereço IP, tipo de navegador,
              páginas visitadas) por meio de ferramentas como <strong>Google Tag Manager</strong> e
              <strong> Google Analytics</strong>, exclusivamente para fins estatísticos e melhoria do site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">3. Como usamos seus dados</h2>
            <p>Utilizamos os dados coletados para:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Responder solicitações de orçamento e dúvidas</li>
              <li>Elaborar propostas técnicas e comerciais</li>
              <li>Executar os serviços contratados (PPCI, RPCI, regularização)</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Melhorar a experiência do usuário no site</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">4. Compartilhamento de dados</h2>
            <p>
              <strong>Não vendemos, alugamos ou compartilhamos</strong> seus dados pessoais com terceiros para fins
              comerciais. Eventualmente, podemos compartilhar dados estritamente necessários com:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Órgãos públicos (ex.: Corpo de Bombeiros) para protocolo de projetos em seu nome</li>
              <li>Prestadores de serviços de tecnologia (hospedagem, e-mail, analytics) sob contrato de confidencialidade</li>
              <li>Autoridades, mediante ordem judicial ou exigência legal</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">5. Cookies</h2>
            <p>
              Usamos cookies próprios e de terceiros (Google) para análise de tráfego e funcionamento do site.
              Você pode desabilitar cookies nas configurações do seu navegador, mas isso pode afetar a experiência
              de navegação.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">6. Seus direitos (LGPD)</h2>
            <p>Como titular dos dados, você tem direito a:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar, corrigir ou atualizar seus dados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Solicitar a portabilidade dos dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>
            <p>
              Para exercer qualquer um desses direitos, entre em contato pelo e-mail{" "}
              <a href="mailto:contato@rcrengenharia.com.br" className="text-primary hover:underline">
                contato@rcrengenharia.com.br
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">7. Segurança</h2>
            <p>
              Adotamos medidas técnicas e administrativas razoáveis para proteger seus dados contra acesso não
              autorizado, perda ou alteração. Ainda assim, nenhum sistema é 100% seguro, e você compartilha
              informações por sua conta e risco.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">8. Retenção</h2>
            <p>
              Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas nesta política e
              obrigações legais (ex.: prazos fiscais e contratuais).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">9. Alterações nesta política</h2>
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente. A versão vigente estará sempre
              disponível nesta página, com a data da última atualização.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">10. Contato</h2>
            <p>
              <strong>RCR Engenharia</strong><br />
              E-mail:{" "}
              <a href="mailto:contato@rcrengenharia.com.br" className="text-primary hover:underline">
                contato@rcrengenharia.com.br
              </a>
              <br />
              WhatsApp:{" "}
              <a href="https://wa.me/5547999563585" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                (47) 99956-3585
              </a>
              <br />
              Atendimento: Santa Catarina, Brasil
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default PrivacyPolicy;
