/**
 * Rental Section — WallTech Tecnologia
 * Updated with brand colors: #000000 bg, #1686FF, #3AB5FF, #0B56D8
 */
import { MessageCircle, CheckCircle2, Laptop, Monitor, Printer, Wifi, Mouse, Server } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  "Locações de curta ou longa duração",
  "Equipamentos revisados",
  "Suporte técnico incluso",
  "Possibilidade de instalação e configuração",
  "Atendimento para empresas",
  "Orçamento personalizado",
  "Substituição conforme condições contratuais e disponibilidade",
];

const equipmentIcons = [
  { icon: Laptop, label: "Notebooks" },
  { icon: Monitor, label: "Computadores" },
  { icon: Monitor, label: "Monitores" },
  { icon: Printer, label: "Impressoras" },
  { icon: Mouse, label: "Periféricos" },
  { icon: Wifi, label: "Roteadores" },
  { icon: Server, label: "Switches" },
  { icon: Wifi, label: "Pontos de acesso" },
  { icon: Server, label: "Equipamentos de rede" },
];

export default function RentalSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="locacao" className="py-24 lg:py-32 bg-[#000000] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B56D8]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1686FF]/10 rounded-full blur-3xl" />
      </div>

      {/* Left accent rail */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF]/70 via-[#1686FF]/40 to-transparent" />

      <div className="container relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-block text-[#1686FF] font-semibold text-sm tracking-wider uppercase mb-3">
              Locação de equipamentos
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight tracking-tight">
              Equipamentos para sua necessidade,{" "}
              <span className="text-[#1686FF]">pelo tempo que precisar.</span>
            </h2>
            <p className="text-lg text-[#C8CDD4]/90 leading-relaxed mb-8">
              A WallTech oferece locação de equipamentos para empresas, profissionais, eventos, projetos temporários e substituições emergenciais.
            </p>

            <div className="space-y-3 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1686FF] flex-shrink-0 mt-0.5" />
                  <span className="text-[#F5F7FA]/90 text-[15px]">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de solicitar um orçamento de locação de equipamentos.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#1686FF] hover:bg-[#3AB5FF] text-white font-semibold rounded-xl transition-all duration-200 active:scale-[0.97] shadow-xl shadow-[#1686FF]/30"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar orçamento de locação
              </a>
            </div>
            <p className="text-sm text-[#8B939E] mt-4">
              Consulte disponibilidade e condições.
            </p>
          </div>

          {/* Right: Equipment icons */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-3 gap-4">
              {equipmentIcons.map((item, i) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-[#1686FF]/40 transition-all duration-300"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <item.icon className="w-8 h-8 text-[#1686FF] mb-2" />
                  <span className="text-xs text-[#C8CDD4] text-center font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
