import { NicheCard } from '@/types/niche';

export const NicheServices = ({ niche }: { niche: NicheCard }) => (
  <section className="rounded-3xl border border-white/15 bg-white/[0.05] p-6 backdrop-blur-xl">
    <h2 className="font-['Inter_Tight',sans-serif] text-2xl font-semibold">Experiência pensada para conversão</h2>
    <p className="mt-3 text-sm leading-relaxed text-textSoft">{niche.description}</p>
    <p className="mt-4 text-sm text-cyan-100">{niche.locationText}</p>
  </section>
);
