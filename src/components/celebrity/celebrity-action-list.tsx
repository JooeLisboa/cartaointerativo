'use client';

import { motion } from 'framer-motion';
import {
  ChevronRight,
  Facebook,
  Instagram,
  Mail,
  MessageCircleMore,
  Music2,
  Sparkles,
  TrendingUp,
  Twitter,
} from 'lucide-react';

import { CelebrityAction } from '@/types/celebrity';

interface CelebrityActionListProps {
  actions: CelebrityAction[];
}

const iconMap = {
  Mail,
  TrendingUp,
  Instagram,
  Music2,
  Twitter,
  MessageCircleMore,
  Facebook,
};

const actionVariants = {
  primary:
    'border-cyan-300/55 bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-200 text-slate-950 shadow-[0_24px_38px_-28px_rgba(56,189,248,1)]',
  secondary:
    'border-violet-300/35 bg-gradient-to-r from-violet-400/30 to-cyan-300/20 text-slate-100 shadow-[0_22px_34px_-26px_rgba(167,139,250,0.75)]',
  social: 'border-white/15 bg-slate-900/80 text-slate-100 hover:border-cyan-200/30 hover:bg-slate-900',
};

export const CelebrityActionList = ({ actions }: CelebrityActionListProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.08 }}
      className="rounded-[1.8rem] border border-white/10 bg-[#050b1ed1] p-3 backdrop-blur-xl"
    >
      <div className="mb-2 px-1 text-[11px] uppercase tracking-[0.22em] text-slate-400">Canais e ações oficiais</div>
      <div className="grid gap-2">
        {actions.map((action, index) => {
          const variant = action.variant ?? 'social';
          const Icon = iconMap[action.icon] ?? Sparkles;

          return (
            <motion.a
              key={action.label}
              href={action.href}
              target={action.external ? '_blank' : undefined}
              rel={action.external ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.045 }}
              whileHover={{ y: -2 }}
              className={`group flex items-center justify-between rounded-2xl border px-4 py-3.5 transition ${actionVariants[variant]}`}
            >
              <span className="flex items-center gap-3">
                <span className="rounded-full border border-black/15 bg-black/10 p-2">
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{action.label}</span>
                  <span className="mt-0.5 block text-xs opacity-80">{action.description}</span>
                </span>
              </span>
              <ChevronRight className="h-4 w-4 opacity-70 transition group-hover:translate-x-0.5" />
            </motion.a>
          );
        })}
      </div>
    </motion.section>
  );
};
