/**
 * How It Works Section — WallTech Tecnologia
 * Updated with brand colors.
 */
import { MessageCircle, ScanSearch, FileCheck, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { number: 1, icon: MessageCircle, title: "Entre em contato", description: "Conte o problema do equipamento e envie as informações iniciais pelo WhatsApp." },
  { number: 2, icon: ScanSearch, title: "Receba uma avaliação", description: "A equipe analisará o caso e apresentará as possibilidades de atendimento." },
  { number: 3, icon: FileCheck, title: "Aprove o orçamento", description: "O serviço somente será iniciado após a aprovação do cliente." },
  { number: 4, icon: CheckCircle2, title: "Receba o equipamento", description: "Após os testes finais, o equipamento será devolvido com as orientações necessárias." },
];

export default function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 bg-[#F5F7FA]">
      <div className="container">
        <div ref={ref} className="max-w-3xl mb-16 relative">
          <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF] to-[#0B56D8] rounded-full transition-all duration-500 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`} style={{ transitionDelay: "100ms" }} />
          <div className="pl-5">
            <span className="inline-block text-[#1686FF] font-semibold text-sm tracking-wider uppercase mb-3">
              Como funciona
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#000000] mb-4 tracking-tight">
              Processo simples e transparente
            </h2>
            <p className="text-lg text-[#8B939E] leading-relaxed">
              Do primeiro contato à entrega do equipamento, tudo com clareza.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`relative group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-[#1686FF]/30 to-transparent z-0" />
      )}
      <div className="relative bg-white rounded-xl p-6 border border-[#C8CDD4]/30 hover:shadow-lg hover:border-[#0B56D8]/30 transition-all duration-300 z-10">
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#0B56D8] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
          {step.number}
        </div>
        <div className="w-12 h-12 rounded-xl bg-[#F5F7FA] flex items-center justify-center mb-4 group-hover:bg-[#1686FF]/10 transition-colors duration-300">
          <step.icon className="w-6 h-6 text-[#1686FF]" />
        </div>
        <h3 className="font-display font-semibold text-[#000000] text-[15px] mb-2">
          {step.title}
        </h3>
        <p className="text-[#8B939E] text-[13.5px] leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}
