/**
 * FAQ Section — WallTech Tecnologia
 * Updated with brand colors.
 */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  { question: "Vocês atendem computadores e notebooks?", answer: "Sim. A WallTech realiza diagnóstico, manutenção, limpeza, formatação, upgrades e outros serviços para computadores e notebooks." },
  { question: "É possível solicitar orçamento pelo WhatsApp?", answer: "Sim. Envie uma descrição do problema, marca e modelo do equipamento para iniciarmos o atendimento." },
  { question: "Vocês realizam retirada e entrega?", answer: "O serviço poderá ser disponibilizado conforme a região, agenda e condições apresentadas no orçamento." },
  { question: "Vocês atendem empresas?", answer: "Sim. A WallTech oferece suporte, manutenção, configuração de equipamentos, redes e planos personalizados para pequenas empresas." },
  { question: "Vocês alugam equipamentos?", answer: "Sim. A locação está sujeita à disponibilidade, análise, prazo e condições do contrato." },
  { question: "O orçamento é feito antes do serviço?", answer: "Sim. Os procedimentos e valores são apresentados ao cliente antes da execução, salvo testes previamente autorizados." },
  { question: "Meus arquivos estarão protegidos?", answer: "A WallTech adota cuidados para preservar a privacidade do cliente. A necessidade de acesso, backup ou formatação será informada e autorizada previamente." },
  { question: "A WallTech fornece programas e licenças?", answer: "A instalação de programas dependerá da disponibilidade de licenças válidas fornecidas pelo cliente ou adquiridas de forma regular." },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="container">
        <div ref={ref} className="max-w-3xl mx-auto">
          <div className="relative mb-12">
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF] to-[#0B56D8] rounded-full transition-all duration-500 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`} style={{ transitionDelay: "100ms" }} />
            <div className="pl-5">
              <span className="inline-block text-[#1686FF] font-semibold text-sm tracking-wider uppercase mb-3">
                Dúvidas frequentes
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#000000] mb-4 tracking-tight">
                Perguntas frequentes
              </h2>
              <p className="text-lg text-[#8B939E] leading-relaxed">
                Tire suas dúvidas sobre nossos serviços.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <Accordion type="single" collapsible className="w-full space-y-2.5">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-[#F5F7FA] rounded-xl px-5 border border-[#C8CDD4]/30 data-[state=open]:border-[#1686FF]/40 data-[state=open]:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-display font-medium text-[#000000] hover:text-[#1686FF] py-4 text-[15px]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#8B939E] leading-relaxed pb-4 text-[14px]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
