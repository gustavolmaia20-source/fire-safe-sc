import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O que é PPCI e para que serve?",
    a: "PPCI é o Projeto Preventivo Contra Incêndio. É um projeto técnico obrigatório que define os sistemas de segurança contra incêndio de uma edificação, como extintores, hidrantes, saídas de emergência, iluminação de emergência, entre outros. Sem ele, não é possível obter o Habite-se ou alvará de funcionamento.",
  },
  {
    q: "Qual a diferença entre PPCI e RPCI?",
    a: "O PPCI (Projeto Preventivo Contra Incêndio) é o projeto técnico que define os sistemas de segurança necessários para a edificação. Já o RPCI (Relatório Preventivo Contra Incêndio) é um documento técnico que atesta as condições de segurança de uma edificação existente. São documentos complementares, e ambos podem ser necessários dependendo da situação do seu imóvel.",
  },
  {
    q: "Meu imóvel precisa de PPCI?",
    a: "Em Santa Catarina, toda edificação comercial, industrial, de serviços, mista ou multifamiliar precisa de aprovação junto ao Corpo de Bombeiros. Residências unifamiliares são isentas na maioria dos casos. Na dúvida, entre em contato que fazemos uma análise gratuita.",
  },
  {
    q: "Quanto tempo leva para aprovar um projeto nos bombeiros?",
    a: "O prazo varia conforme a complexidade da edificação e o batalhão responsável. Em média, projetos simples levam de 15 a 30 dias. Projetos mais complexos podem levar de 30 a 60 dias. A RCR trabalha para reduzir esse prazo ao máximo, com projetos que são aprovados de primeira.",
  },
  {
    q: "Quanto custa um PPCI?",
    a: "O valor depende do tipo de edificação, área construída, ocupação e sistemas necessários. Enviamos um orçamento personalizado em até 24 horas após a análise das informações do seu imóvel. Entre em contato pelo WhatsApp para receber sua proposta.",
  },
  {
    q: "Vocês atendem em qual região de Santa Catarina?",
    a: "Atendemos em todo o estado de Santa Catarina, incluindo Florianópolis, Joinville, Blumenau, Chapecó, Criciúma, Itajaí, Balneário Camboriú, Lages, Jaraguá do Sul, São José e todas as demais cidades.",
  },
  {
    q: "O que acontece se eu não regularizar meu imóvel?",
    a: "Você pode receber multas que variam de R$ 500 a R$ 50.000, ter o imóvel interditado, perder o alvará de funcionamento e, em caso de sinistro, responder criminalmente. A regularização é um investimento em segurança e conformidade legal.",
  },
  {
    q: "Vocês fazem a instalação dos equipamentos de combate a incêndio?",
    a: "Nosso foco é a parte de engenharia: projetos, acompanhamento e aprovação. Porém, temos parceiros de confiança para instalação de extintores, hidrantes, alarmes e outros sistemas. Podemos indicar profissionais qualificados na sua região.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Perguntas Frequentes</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
            Tire suas dúvidas sobre PPCI, RPCI e regularização
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-card px-6 shadow-card"
              >
                <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
