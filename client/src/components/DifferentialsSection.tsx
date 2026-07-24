/**
 * Differentials Section — WallTech Tecnologia
 * Updated with brand colors.
 */
import { Receipt, Eye, Home, ScanSearch, ShieldCheck, Headphones, Truck, Lock, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const differentials = [
  { icon: Receipt, title: "Orçamento antes da execução", description: "Valores apresentados antes de qualquer serviço ser iniciado." },
  { icon: Eye, title: "Atendimento transparente", description: "Informações claras sobre procedimentos, custos e prazos." },
  { icon: Home, title: "Suporte residencial e empresarial", description: "Atendimento presencial e remoto para residências e empresas." },
  { icon: ScanSearch, title: "Diagnóstico técnico", description: "Análise profissional do equipamento antes da intervenção." },
  { icon: ShieldCheck, title: "Garantia conforme o serviço", description: "Garantia aplicada conforme o tipo de serviço realizado." },
  { icon: Headphones, title: "Atendimento remoto", description: "Resolução rápida de problemas à distância, quando possível." },
  { icon: Truck, title: "Retirada e entrega", description: "Opção de retirada e entrega conforme a região e disponibilidade." },
  { icon: Lock, title: "Proteção aos dados", description: "Respeito e cuidado com a privacidade e dados do cliente." },
  { icon: MessageCircle, title: "Acompanhamento pelo WhatsApp", description: "Comunicação direta e ágil durante todo o processo." },
];

export default function DifferentialsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container">
        <div ref={ref} className="max-w-3xl mb-16 relative">
          <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF] to-[#0B56D8] rounded-full transition-all duration-500 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`} style={{ transitionDelay: "100ms" }} />
          <div className="pl-5">
            <span className="inline-block text-[#1686FF] font-semibold text-sm tracking-wider uppercase mb-3">
              Por que escolher a WallTech
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#000000] mb-4 tracking-tight">
              Nossos diferenciais
            </h2>
            <p className="text-lg text-[#8B939E] leading-relaxed">
              Compromisso com transparência, qualidade e respeito ao cliente.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentials.map((item, i) => (
            <DiffCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DiffCard({ item, index }: { item: typeof differentials[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group relative p-6 rounded-xl bg-[#F5F7FA] border border-[#C8CDD4]/30 hover:border-[#1686FF]/40 hover:shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0B56D8] to-[#1686FF] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:bg-[#1686FF]/10 transition-colors duration-300">
        <item.icon className="w-6 h-6 text-[#1686FF]" />
      </div>
      <h3 className="font-display font-semibold text-[#000000] text-[15px] mb-2">
        {item.title}
      </h3>
      <p className="text-[#8B939E] text-[13.5px] leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
