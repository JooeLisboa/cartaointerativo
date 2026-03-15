'use client';

import Link from 'next/link';
import { CarFront, Glasses, Sparkles, Stethoscope, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

import { PortfolioItem } from '@/types/portfolio';

const iconMap: Record<string, LucideIcon> = { Glasses, Sparkles, Stethoscope, CarFront };

export const NicheCard = ({ item, index }: { item: PortfolioItem; index: number }) => {
  const Icon = iconMap[item.icon] ?? Sparkles;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group rounded-3xl border border-white/15 bg-white/[0.05] p-6 backdrop-blur-xl"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-2xl border border-white/20 bg-white/10 p-3 text-cyan-100">
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-[11px] uppercase tracking-[0.2em] text-textSoft">Nicho pronto</span>
      </div>
      <h3 className="mt-5 font-['Inter_Tight',sans-serif] text-2xl font-semibold">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-textSoft">{item.shortDescription}</p>
      <Link
        href={`/portfolio/${item.slug}`}
        className="mt-6 inline-flex rounded-full border border-cyan-200/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-50 transition group-hover:border-cyan-200/45 group-hover:bg-cyan-300/20"
      >
        {item.ctaLabel}
      </Link>
    </motion.article>
  );
};
