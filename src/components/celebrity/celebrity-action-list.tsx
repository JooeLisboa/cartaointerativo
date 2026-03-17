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
    'border-[rgba(245,158,11,0.55)] bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#F2B233] text-[#2A170C] shadow-[0_24px_42px_-26px_rgba(249,115,22,0.95)]',
  secondary:
    'border-[rgba(245,158,11,0.32)] bg-gradient-to-r from-[#D97706]/55 to-[#F59E0B]/30 text-[#FFF4DA] shadow-[0_22px_34px_-26px_rgba(245,158,11,0.78)]',
  social:
    'border-[rgba(245,158,11,0.2)] bg-[rgba(41,24,12,0.86)] text-[#FFF4DA] hover:border-[rgba(245,158,11,0.38)] hover:bg-[rgba(46,27,14,0.92)]',
};

export const CelebrityActionList = ({ actions }: CelebrityActionListProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.08 }}
      className="rounded-[1.8rem] border border-[rgba(245,158,11,0.2)] bg-[rgba(41,24,12,0.82)] p-3 backdrop-blur-xl"
    >
      <div className="mb-2 px-1 text-[11px] uppercase tracking-[0.22em] text-[#F3D9A2]/85">Canais e ações oficiais</div>
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
                <span className="rounded-full border border-black/20 bg-black/10 p-2">
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{action.label}</span>
                  <span className="mt-0.5 block text-xs opacity-85">{action.description}</span>
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
