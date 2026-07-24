/**
 * Enterprise Section — WallTech Tecnologia
 * Updated with brand colors.
 */
import { MessageCircle, Headphones, Monitor, Printer, Router, HardDrive, Laptop, Network, Building2, Home, UserPlus, FileSignature } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { icon: Headphones, label: "Suporte técnico remoto" },
  { icon: Monitor, label: "Suporte presencial" },
  { icon: Monitor, label: "Manutenção preventiva" },
  { icon: Laptop, label: "Configuração de computadores" },
  { icon: Printer, label: "Instalação de impressoras" },
  { icon: Router, label: "Configuração de redes e roteadores" },
  { icon: Network, label: "Organização de equipamentos" },
  { icon: HardDrive, label: "Backup" },
  { icon: Laptop, label: "Upgrade de computadores" },
  { icon: FileSignature, label: "Contratos mensais de manutenção" },
  { icon: Building2, label: "Locação de equipamentos" },
  { icon: UserPlus, label: "Atendimento a novos funcionários" },
  { icon: Home, label: "Suporte para home office" },
];

export default function EnterpriseSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="empresas" className="py-24 lg:py-32 bg-[#F5F7FA]">
      <div className="container">
        <div ref={ref} className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative">
              <div className={`absolute -left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF] to-[#0B56D8] rounded-full transition-all duration-500 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`} style={{ transitionDelay: "100ms" }} />
              <div className="pl-5">
                <span className="inline-block text-[#1686FF] font-semibold text-sm tracking-wider uppercase mb-3">
                  Para empresas
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#000000] mb-6 leading-tight tracking-tight">
                  Suporte de TI para sua empresa{" "}
                  <span className="text-[#0B56D8]">continuar funcionando.</span>
                </h2>
                <p className="text-[#8B939E] leading-relaxed mb-8">
                  A WallTech oferece suporte, manutenção, configuração de equipamentos, redes e planos personalizados para pequenas empresas.
                </p>
                <div className="bg-white rounded-xl p-5 border-l-4 border-[#1686FF] shadow-sm mb-8">
                  <p className="text-[#000000] font-medium italic text-[15px] leading-relaxed">
                    "Não espere um problema parar sua empresa. Conte com uma equipe de suporte para cuidar da sua tecnologia."
                  </p>
                </div>
                <a
                  href={getWhatsAppUrl("Olá! Gostaria de falar sobre suporte empresarial para minha empresa.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-[#0B56D8] hover:bg-[#1686FF] text-white font-semibold rounded-xl transition-all duration-200 active:scale-[0.97] shadow-lg shadow-blue-700/25"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar sobre suporte empresarial
                </a>
              </div>
            </div>
          </div>

          {/* Right: Services grid */}
          <div
            className={`lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {services.map((service, i) => (
              <div
                key={service.label}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#C8CDD4]/30 hover:border-[#1686FF]/30 hover:shadow-md transition-all duration-300"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                  <service.icon className="w-4.5 h-4.5 text-[#1686FF]" />
                </div>
                <span className="text-sm font-medium text-[#000000]">
                  {service.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
