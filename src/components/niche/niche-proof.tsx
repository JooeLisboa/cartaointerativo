import { NicheProofItem } from '@/types/niche';

export const NicheProof = ({ items }: { items: NicheProofItem[] }) => (
  <section className="grid gap-3 sm:grid-cols-3">
    {items.map((item) => (
      <article key={item.label} className="rounded-2xl border border-white/15 bg-white/[0.05] p-4 backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.18em] text-textSoft">{item.label}</p>
        <p className="mt-2 font-['Inter_Tight',sans-serif] text-3xl font-semibold">{item.value}</p>
      </article>
    ))}
  </section>
);
