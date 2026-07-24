/**
 * Header — WallTech Tecnologia
 * Uses official logo image with brand colors.
 */
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Locação", href: "#locacao" },
  { label: "Empresas", href: "#empresas" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Perguntas frequentes", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F7FA]/95 backdrop-blur-xl shadow-md shadow-blue-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#inicio")}
          className="flex items-center gap-2 group"
        >
          <img
            src="/manus-storage/logo-walltech-official_f4b875cb.png"
            alt="WallTech"
            className={`h-10 w-10 rounded-lg object-cover transition-transform duration-200 group-hover:scale-105 ${scrolled ? "opacity-100" : "opacity-100"}`}
          />
          <span
            className={`font-display font-bold text-lg lg:text-xl transition-colors duration-300 tracking-tight ${
              scrolled ? "text-[#0B56D8]" : "text-white"
            }`}
          >
            WALL<span className={scrolled ? "text-[#1686FF]" : "text-[#1686FF]"}>TECH</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`px-3 py-2 text-[13px] font-medium rounded-lg transition-colors duration-200 ${
                scrolled
                  ? "text-[#8B939E] hover:text-[#1686FF] hover:bg-[#1686FF]/5"
                  : "text-white/85 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
              scrolled
                ? "text-green-600 hover:bg-green-50"
                : "text-green-300 hover:bg-white/10"
            }`}
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#1686FF] hover:bg-[#3AB5FF] text-white font-semibold text-sm rounded-lg transition-all duration-200 active:scale-[0.97] shadow-lg shadow-blue-500/30"
          >
            Solicitar orçamento
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? (
            <X className={`w-6 h-6 ${scrolled ? "text-[#0B56D8]" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? "text-[#0B56D8]" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F5F7FA] border-t border-gray-100 shadow-xl">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-3 text-[#0B56D8] hover:text-[#1686FF] hover:bg-[#1686FF]/5 rounded-lg transition-colors duration-150 font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-gray-200">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#1686FF] text-white font-semibold rounded-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar orçamento pelo WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
