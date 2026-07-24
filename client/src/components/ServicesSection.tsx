/**
 * Services Section — WallTech Tecnologia
 * Updated with brand colors: #1686FF, #3AB5FF, #0B56D8, #F5F7FA
 */
import { MessageCircle } from "lucide-react";
import {
  Monitor, Laptop, HardDrive, MemoryStick, Wrench, Thermometer,
  Shield, Download, Printer, Router,
  Network, Headphones, Home, Building2, ScanSearch, FileSignature
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  { icon: Monitor, title: "Formatação de computadores e notebooks", description: "Instalação do sistema operacional, drivers, atualizações e programas essenciais conforme a necessidade do cliente." },
  { icon: Laptop, title: "Instalação e configuração do Windows", description: "Instalação limpa do Windows, configuração de drivers, atualizações e otimização do sistema." },
  { icon: HardDrive, title: "Upgrade de SSD", description: "Melhore o desempenho do seu computador ou notebook com a instalação de um SSD e configuração completa do sistema." },
  { icon: MemoryStick, title: "Upgrade de memória RAM", description: "Aumento de memória para melhor desempenho em multitarefas, edição e uso profissional." },
  { icon: ScanSearch, title: "Limpeza interna", description: "Remoção de poeira, limpeza interna, verificação da refrigeração e análise das condições do equipamento." },
  { icon: Thermometer, title: "Troca de pasta térmica", description: "Substituição da pasta térmica para melhorar a refrigeração e evitar superaquecimento do equipamento." },
  { icon: Shield, title: "Backup e transferência de arquivos", description: "Salvaguarda dos seus dados com backup seguro e transferência para novo equipamento ou mídia." },
  { icon: Download, title: "Remoção de vírus", description: "Diagnóstico, remoção de malwares e otimização da segurança do seu equipamento." },
  { icon: Download, title: "Instalação de programas", description: "Instalação e configuração de softwares essenciais para trabalho, estudo ou uso pessoal." },
  { icon: Monitor, title: "Montagem de computadores", description: "Montagem personalizada de desktop conforme suas necessidades de desempenho e orçamento." },
  { icon: Printer, title: "Configuração de impressoras", description: "Instalação, configuração e testes de impressoras e multifuncionais na sua rede." },
  { icon: Router, title: "Configuração de roteadores", description: "Configuração de roteadores, repetidores e redes Wi-Fi para melhor cobertura e segurança." },
  { icon: Network, title: "Configuração de redes", description: "Instalação e configuração de redes cabeadas e sem fio para residências e empresas." },
  { icon: Headphones, title: "Suporte técnico remoto", description: "Atendimento à distância para resolução rápida de problemas de software e configuração." },
  { icon: Home, title: "Suporte técnico residencial", description: "Atendimento presencial na sua residência para manutenção, configuração e instalação." },
  { icon: Building2, title: "Suporte técnico empresarial", description: "Suporte dedicado para pequenas empresas com manutenção preventiva e corretiva." },
  { icon: Wrench, title: "Manutenção preventiva", description: "Cuidados periódicos para manter seus equipamentos em ótimo estado de funcionamento." },
  { icon: FileSignature, title: "Contratos de suporte e manutenção", description: "Planos personalizados de suporte contínuo para manter sua infraestrutura funcionando." },
];

function SectionHeader() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className="max-w-3xl mb-16 relative">
      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF] to-[#0B56D8] rounded-full transition-all duration-500 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`} style={{ transitionDelay: "100ms" }} />
      <div className="pl-5">
        <span className="inline-block text-[#1686FF] font-semibold text-sm tracking-wider uppercase mb-3">
          Nossos serviços
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#000000] mb-4 tracking-tight">
          Soluções completas em tecnologia
        </h2>
        <p className="text-lg text-[#8B939E] leading-relaxed">
          Oferecemos uma ampla variedade de serviços técnicos para manter seus equipamentos funcionando com eficiência e segurança.
        </p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-[#F5F7FA]">
      <div className="container">
        <SectionHeader />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-xl p-6 border border-[#C8CDD4]/40 shadow-sm hover:shadow-lg hover:border-[#1686FF]/40 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#F5F7FA] flex items-center justify-center group-hover:bg-[#1686FF]/10 transition-colors duration-300">
          <service.icon className="w-5 h-5 text-[#1686FF]" />
        </div>
        <h3 className="font-display font-semibold text-[#000000] text-[15px] leading-snug pt-0.5">
          {service.title}
        </h3>
      </div>
      <p className="text-[#8B939E] text-[13.5px] leading-relaxed mb-5">
        {service.description}
      </p>
      <a
        href={getWhatsAppUrl(`${service.title}`)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[#1686FF] hover:text-[#0B56D8] text-[13px] font-semibold transition-colors duration-200 group-hover:gap-2.5"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        Solicite uma avaliação
      </a>
    </div>
  );
}
