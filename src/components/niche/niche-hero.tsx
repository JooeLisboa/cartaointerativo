'use client';

import { motion } from 'framer-motion';

import { NicheCard } from '@/types/niche';
import { getNicheGlow } from '@/lib/niche-theme';

export const NicheHero = ({ niche }: { niche: NicheCard }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`rounded-[2rem] border border-white/15 bg-gradient-to-br ${niche.theme.base} p-8 backdrop-blur-2xl ${getNicheGlow(niche.theme.accent)}`}
  >
    <p className="text-xs uppercase tracking-[0.28em] text-white/80">Demo premium • {niche.nicheName}</p>
    <h1 className="mt-3 font-['Inter_Tight',sans-serif] text-4xl font-semibold tracking-tight sm:text-5xl">{niche.headline}</h1>
    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-textSoft sm:text-base">{niche.subheadline}</p>
    <p className="mt-5 rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-textSoft">{niche.featuredNote}</p>
    <div className="mt-5 flex flex-wrap gap-2.5">
      {niche.chips.map((chip) => (
        <span key={chip} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90">
          {chip}
        </span>
      ))}
    </div>
  </motion.section>
);
