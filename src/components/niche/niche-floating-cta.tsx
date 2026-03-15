import { MessageCircle } from 'lucide-react';

import { buildWhatsAppLink } from '@/lib/whatsapp';
import { profile } from '@/data/profile';

export const NicheFloatingCta = ({ message }: { message: string }) => {
  const link = buildWhatsAppLink(profile.whatsapp, message);

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full border border-cyan-200/35 bg-gradient-to-r from-violet-500/90 to-cyan-500/90 px-4 py-3 text-sm font-semibold text-white shadow-xl"
    >
      <MessageCircle className="h-4 w-4" />
      Quero um cartão assim para meu negócio
    </a>
  );
};
