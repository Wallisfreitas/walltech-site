/**
 * Contact Section — WallTech Tecnologia
 * Updated with brand colors.
 */
import { useState } from "react";
import { MessageCircle, Clock, Mail, MapPin } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    servico: "",
    equipamento: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${formData.nome}.\nTelefone: ${formData.telefone}\nServiço: ${formData.servico}\nEquipamento: ${formData.equipamento}\nMensagem: ${formData.mensagem}`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-[#F5F7FA]">
      <div className="container">
        <div ref={ref} className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative">
              <div className={`absolute -left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF] to-[#0B56D8] rounded-full transition-all duration-500 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`} style={{ transitionDelay: "100ms" }} />
              <div className="pl-5">
                <span className="inline-block text-[#1686FF] font-semibold text-sm tracking-wider uppercase mb-3">
                  Contato
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#000000] mb-6 leading-tight tracking-tight">
                  Fale com a WallTech
                </h2>
                <p className="text-[#8B939E] leading-relaxed mb-8">
                  Solicite um orçamento, tire suas dúvidas ou agende um serviço. Estamos prontos para atender você.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                      <MessageCircle className="w-5 h-5 text-[#1686FF]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#000000] mb-0.5">WhatsApp</p>
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8B939E] text-sm hover:text-[#1686FF] transition-colors"
                      >
                        (11) 96135-9962
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                      <Mail className="w-5 h-5 text-[#1686FF]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#000000] mb-0.5">E-mail</p>
                      <a href="mailto:contato@walltechoficial.com.br" className="text-[#8B939E] text-sm hover:text-[#1686FF] transition-colors">
                        contato@walltechoficial.com.br
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                      <Clock className="w-5 h-5 text-[#1686FF]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#000000] mb-0.5">Horário de atendimento</p>
                      <p className="text-[#8B939E] text-sm">09:00 às 18:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                      <MapPin className="w-5 h-5 text-[#1686FF]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#000000] mb-0.5">Região atendida</p>
                      <p className="text-[#8B939E] text-sm">São Paulo Capital e Grande ABC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-[#C8CDD4]/30">
              <h3 className="font-display font-semibold text-[#000000] text-xl mb-6">
                Solicite seu orçamento
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-[#000000] mb-1.5">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#C8CDD4]/40 rounded-lg text-sm text-[#000000] placeholder-[#C8CDD4] focus:outline-none focus:border-[#1686FF] focus:ring-2 focus:ring-[#1686FF]/20 transition-all duration-200"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#000000] mb-1.5">Telefone</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#C8CDD4]/40 rounded-lg text-sm text-[#000000] placeholder-[#C8CDD4] focus:outline-none focus:border-[#1686FF] focus:ring-2 focus:ring-[#1686FF]/20 transition-all duration-200"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-[#000000] mb-1.5">Serviço desejado</label>
                  <select
                    name="servico"
                    value={formData.servico}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#C8CDD4]/40 rounded-lg text-sm text-[#000000] focus:outline-none focus:border-[#1686FF] focus:ring-2 focus:ring-[#1686FF]/20 transition-all duration-200"
                  >
                    <option value="">Selecione</option>
                    <option value="Formatação">Formatação</option>
                    <option value="Manutenção">Manutenção</option>
                    <option value="Upgrade">Upgrade (SSD/RAM)</option>
                    <option value="Limpeza">Limpeza interna</option>
                    <option value="Redes">Configuração de redes</option>
                    <option value="Locação">Locação de equipamentos</option>
                    <option value="Suporte empresarial">Suporte empresarial</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#000000] mb-1.5">Equipamento</label>
                  <input
                    type="text"
                    name="equipamento"
                    value={formData.equipamento}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#C8CDD4]/40 rounded-lg text-sm text-[#000000] placeholder-[#C8CDD4] focus:outline-none focus:border-[#1686FF] focus:ring-2 focus:ring-[#1686FF]/20 transition-all duration-200"
                    placeholder="Ex: Notebook Dell, PC montado"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#000000] mb-1.5">Mensagem</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#C8CDD4]/40 rounded-lg text-sm text-[#000000] placeholder-[#C8CDD4] focus:outline-none focus:border-[#1686FF] focus:ring-2 focus:ring-[#1686FF]/20 transition-all duration-200 resize-none"
                  placeholder="Descreva o problema ou sua necessidade..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#0B56D8] hover:bg-[#1686FF] text-white font-semibold rounded-xl transition-all duration-200 active:scale-[0.97] shadow-lg shadow-[#0B56D8]/25"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
