import { buildWhatsAppLink } from '@/lib/whatsapp';
import { profile } from '@/data/profile';

export const NicheCtaBanner = () => {
  const link = buildWhatsAppLink(profile.whatsapp, 'Olá, vi os modelos por nicho e quero um cartão premium para meu negócio.');

  return (
    <section className="rounded-3xl border border-violet-200/30 bg-gradient-to-r from-violet-500/25 to-cyan-500/15 p-6 backdrop-blur-xl">
      <h2 className="font-['Inter_Tight',sans-serif] text-2xl font-semibold">Pronto para criar seu cartão interativo premium?</h2>
      <p className="mt-2 text-sm text-textSoft">Escolha um nicho como base e solicite sua versão personalizada agora.</p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-white"
      >
        Falar no WhatsApp
      </a>
    </section>
  );
};
