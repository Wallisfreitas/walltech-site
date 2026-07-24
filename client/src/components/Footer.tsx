/**
 * Footer — WallTech Tecnologia
 * Uses official logo and brand colors.
 */
import { Instagram, Mail, MessageCircle, MapPin } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const footerLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Locação", href: "#locacao" },
  { label: "Empresas", href: "#empresas" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white relative">
      {/* Top accent line with gradient */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3AB5FF] via-[#1686FF] to-[#0B56D8]" />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/manus-storage/logo-walltech-official_f4b875cb.png"
                alt="WallTech"
                className="h-9 w-9 rounded-lg object-cover"
              />
              <span className="font-display font-bold text-lg tracking-tight">
                WALL<span className="text-[#1686FF]">TECH</span> Tecnologia
              </span>
            </div>
            <p className="text-[#C8CDD4] text-sm leading-relaxed max-w-sm mb-6">
              Venda, manutenção, suporte e locação de equipamentos para residências e empresas.
            </p>
            <div className="space-y-2.5 text-sm text-[#8B939E]">
              <a href="mailto:contato@walltechoficial.com.br" className="flex items-center gap-2 hover:text-[#3AB5FF] transition-colors">
                <Mail className="w-4 h-4" />
                contato@walltechoficial.com.br
              </a>
              <a href="https://instagram.com/walltech011" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#3AB5FF] transition-colors">
                <Instagram className="w-4 h-4" />
                @walltech011
              </a>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#3AB5FF] transition-colors">
                <MessageCircle className="w-4 h-4" />
                (11) 96135-9962
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                São Paulo Capital e Grande ABC
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-[13px] uppercase tracking-wider text-[#1686FF] mb-4">
              Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#C8CDD4] hover:text-[#3AB5FF] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + CTA */}
          <div>
            <h4 className="font-display font-semibold text-[13px] uppercase tracking-wider text-[#1686FF] mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 mb-6">
              <li><a href="/privacidade" className="text-[#C8CDD4] hover:text-[#3AB5FF] transition-colors text-sm">Política de Privacidade</a></li>
              <li><a href="/termos" className="text-[#C8CDD4] hover:text-[#3AB5FF] transition-colors text-sm">Termos de Uso</a></li>
            </ul>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1686FF] hover:bg-[#3AB5FF] text-white font-semibold text-sm rounded-lg transition-all duration-200 active:scale-[0.97] shadow-lg shadow-blue-500/25"
            >
              <MessageCircle className="w-4 h-4" />
              Fale conosco
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#8B939E]">
            &copy; {new Date().getFullYear()} WallTech Tecnologia. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#8B939E]/60">
            CNPJ: inserir posteriormente
          </p>
        </div>
      </div>
    </footer>
  );
}
