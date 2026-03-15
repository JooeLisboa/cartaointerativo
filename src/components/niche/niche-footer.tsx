import { NicheCard } from '@/types/niche';

export const NicheFooter = ({ niche }: { niche: NicheCard }) => (
  <footer className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-xs text-textSoft backdrop-blur-xl">
    {niche.footerNote}
  </footer>
);
