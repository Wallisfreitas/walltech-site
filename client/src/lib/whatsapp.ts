// WhatsApp utility functions for WallTech
// Phone number placeholder — update when available
export const WHATSAPP_NUMBER = "5511961359962"; // WallTech real number

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return `${base}?text=${encodeURIComponent("Olá! Encontrei a WallTech pelo site e gostaria de solicitar um orçamento.")}`;
}

export function generateBudgetMessage(data: {
  nome: string;
  telefone: string;
  email: string;
  pessoaOuEmpresa: string;
  tipoServico: string;
  equipamento: string;
  marcaModelo: string;
  problema: string;
  regiao: string;
  preferencia: string;
}): string {
  return `Olá! Vim pelo site da WallTech.

Nome: ${data.nome}
Telefone: ${data.telefone}
E-mail: ${data.email}
Tipo: ${data.pessoaOuEmpresa}
Tipo de atendimento: ${data.tipoServico}
Equipamento: ${data.equipamento}
Marca e modelo: ${data.marcaModelo}
Problema relatado: ${data.problema}
Região: ${data.regiao}
Preferência de atendimento: ${data.preferencia}`;
}
