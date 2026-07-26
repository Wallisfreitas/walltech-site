/**
 * About Section — WallTech Tecnologia
 * Updated with brand colors.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  "Honestidade", "Transparência", "Respeito", "Ética",
  "Profissionalismo", "Organização", "Pontualidade", "Qualidade",
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-white">
      <div className="container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/about-team.png"
                alt="Ambiente profissional da WallTech Tecnologia"
                className="w-full h-80 lg:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B56D8]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0B56D8] to-[#1686FF]" />
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[#1686FF]/60 rounded-tl-lg" />
            </div>
          </div>

          {/* Right: Text */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              <div className={`absolute -left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF] to-[#0B56D8] rounded-full transition-all duration-500 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`} style={{ transitionDelay: "300ms" }} />
              <div className="pl-5">
                <span className="inline-block text-[#1686FF] font-semibold text-sm tracking-wider uppercase mb-3">
                  Sobre a WallTech
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#000000] mb-6 leading-tight tracking-tight">
                  Tecnologia com atendimento{" "}
                  <span className="text-[#0B56D8]">próximo e confiável.</span>
                </h2>
              </div>
            </div>

            <div className="space-y-4 mb-8 ml-1">
              <p className="text-[#8B939E] leading-relaxed">
                A WallTech nasceu com o objetivo de facilitar o acesso a serviços e produtos de tecnologia. A empresa reúne venda de acessórios, manutenção de computadores e notebooks, suporte técnico, configuração de redes e locação de equipamentos.
              </p>
              <p className="text-[#8B939E] leading-relaxed">
                Nosso compromisso é entender a necessidade de cada cliente, apresentar soluções adequadas e realizar os serviços com organização, transparência e responsabilidade.
              </p>
            </div>

            <div className="ml-1">
              <h3 className="font-display font-semibold text-[#000000] text-sm mb-3">
                Nossos valores:
              </h3>
              <div className="flex flex-wrap gap-2">
                {values.map((value) => (
                  <span
                    key={value}
                    className="px-3 py-1.5 bg-[#F5F7FA] border border-[#C8CDD4]/40 rounded-lg text-sm font-medium text-[#000000] hover:border-[#1686FF]/50 hover:bg-[#1686FF]/5 transition-colors duration-200"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
