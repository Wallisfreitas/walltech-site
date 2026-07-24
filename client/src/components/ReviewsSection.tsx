/**
 * Reviews Section — WallTech Tecnologia
 * Updated with brand colors.
 */
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ReviewsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 bg-[#F5F7FA]">
      <div className="container">
        <div ref={ref} className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-[#1686FF] font-semibold text-sm tracking-wider uppercase mb-3">
            Avaliações
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#000000] mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-[#8B939E] leading-relaxed">
            As avaliações reais de nossos clientes serão publicadas nesta seção em breve.
          </p>
          <div className={`flex justify-center mt-8 gap-1 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-[#C8CDD4]" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
