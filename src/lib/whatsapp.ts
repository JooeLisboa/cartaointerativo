const normalizePhone = (phone: string) => phone.replace(/\D/g, '');

export const buildWhatsAppLink = (phone: string, message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${normalizePhone(phone)}?text=${encoded}`;
};

export const buildPortfolioMessage = (niche: string) =>
  `Olá, vi o modelo de cartão interativo para ${niche} e quero um assim para meu negócio.`;
