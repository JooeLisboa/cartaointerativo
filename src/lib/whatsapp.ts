const normalizePhone = (phone: string) => phone.replace(/\D/g, '');

export const buildWhatsAppLink = (phone: string, message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${normalizePhone(phone)}?text=${encoded}`;
};
