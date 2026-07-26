/**
 * Hero Section — WallTech Tecnologia
 * Updated with brand colors: #1686FF, #3AB5FF, #0B56D8, #F5F7FA
 */
import { MessageCircle, ChevronDown } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const scrollToServices = () => {
    const el = document.getElementById("servicos");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/90 via-[#000000]/78 to-[#000000]/50" />
      </div>

      {/* Decorative accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-[#1686FF]/25 to-transparent" />
        <div className="absolute top-[60%] right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-[#3AB5FF]/15 to-transparent" />
        <div className="absolute top-16 right-16 w-64 h-64 border border-[#1686FF]/10 rounded-full" />
        <div className="absolute bottom-24 left-12 w-40 h-40 border border-[#3AB5FF]/10 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#3AB5FF]/40 rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#1686FF]/30 rounded-full" />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-[#3AB5FF]/35 rounded-full" />
      </div>

      {/* Left accent rail */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF]/70 via-[#1686FF]/40 to-transparent" />

      <div className="relative z-10 container pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-2xl">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/8 backdrop-blur-sm border border-[#1686FF]/25 rounded-full text-[#3AB5FF] text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-[#1686FF] rounded-full animate-pulse" />
              Atendimento transparente e profissional
            </span>
          </div>

          <h1
            className={`font-display font-bold text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4.5rem] text-white leading-[1.08] mb-6 tracking-tight transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Tecnologia que{" "}
            <span className="text-[#1686FF]">funciona</span>
            <br />
            para você.
          </h1>

          <p
            className={`text-lg sm:text-xl text-[#F5F7FA]/85 leading-relaxed mb-4 max-w-xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Venda, manutenção, suporte e locação de equipamentos para residências e empresas.
          </p>

          <p
            className={`text-[15px] text-[#C8CDD4]/80 leading-relaxed mb-10 max-w-lg transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            A WallTech oferece soluções completas para computadores, notebooks, redes e equipamentos, com atendimento transparente, diagnóstico profissional e suporte especializado.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#1686FF] hover:bg-[#3AB5FF] text-white font-semibold text-base rounded-xl transition-all duration-200 active:scale-[0.97] shadow-xl shadow-[#1686FF]/30"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar orçamento pelo WhatsApp
            </a>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/8 hover:bg-white/15 backdrop-blur-sm text-white font-medium text-base rounded-xl border border-white/15 transition-all duration-200 active:scale-[0.97]"
            >
              Conhecer nossos serviços
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors duration-300"
        aria-label="Rolar para baixo"
      >
        <span className="text-[11px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
