/**
 * WhatsApp Floating Button — WallTech Tecnologia
 * Fixed position button with brand colors.
 */
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#1686FF] hover:bg-[#3AB5FF] rounded-full flex items-center justify-center shadow-xl shadow-[#1686FF]/40 transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-[#0B56D8] text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        Solicitar orçamento
      </span>
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#1686FF] animate-ping opacity-20" />
    </a>
  );
}
