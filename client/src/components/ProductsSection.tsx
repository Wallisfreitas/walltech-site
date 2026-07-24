/**
 * Products Section — WallTech Tecnologia
 * Updated with brand colors.
 */
import { MessageCircle, Cable, Laptop, Monitor, Printer, HardDrive, MemoryStick, Wifi, Mouse, Keyboard, Smartphone } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  { icon: Smartphone, label: "Acessórios para celulares" },
  { icon: Cable, label: "Cabos" },
  { icon: Cable, label: "Carregadores" },
  { icon: Mouse, label: "Periféricos" },
  { icon: Keyboard, label: "Teclados" },
  { icon: Mouse, label: "Mouses" },
  { icon: HardDrive, label: "SSDs" },
  { icon: MemoryStick, label: "Memórias RAM" },
  { icon: Laptop, label: "Peças de informática" },
  { icon: Monitor, label: "Computadores" },
  { icon: Laptop, label: "Notebooks" },
  { icon: Printer, label: "Equipamentos eletrônicos" },
];

export default function ProductsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="produtos" className="py-24 lg:py-32 bg-white">
      <div className="container">
        <div ref={ref} className="max-w-3xl mb-16 relative">
          <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF] to-[#0B56D8] rounded-full transition-all duration-500 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`} style={{ transitionDelay: "100ms" }} />
          <div className="pl-5">
            <span className="inline-block text-[#1686FF] font-semibold text-sm tracking-wider uppercase mb-3">
              Produtos
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#000000] mb-4 tracking-tight">
              Equipamentos e acessórios
            </h2>
            <p className="text-lg text-[#8B939E] leading-relaxed mb-4">
              A WallTech também comercializa uma variedade de produtos de tecnologia para atender suas necessidades.
            </p>
            <p className="text-base text-[#C8CDD4] leading-relaxed">
              Consulte disponibilidade, modelos e valores pelo WhatsApp.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {categories.map((cat, i) => (
            <div
              key={cat.label}
              className={`group flex items-center gap-3 p-4 bg-[#F5F7FA] rounded-xl border border-[#C8CDD4]/30 hover:border-[#1686FF]/40 hover:shadow-md transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:bg-[#1686FF]/10 transition-colors duration-300">
                <cat.icon className="w-5 h-5 text-[#1686FF]" />
              </div>
              <span className="text-sm font-medium text-[#000000]">
                {cat.label}
              </span>
            </div>
          ))}
        </div>

        <div className={`flex justify-center transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <a
            href={getWhatsAppUrl("Olá! Gostaria de consultar produtos disponíveis na WallTech.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 bg-[#0B56D8] hover:bg-[#1686FF] text-white font-semibold rounded-xl transition-all duration-200 active:scale-[0.97] shadow-lg shadow-blue-700/25"
          >
            <MessageCircle className="w-5 h-5" />
            Consultar produtos
          </a>
        </div>
      </div>
    </section>
  );
}
