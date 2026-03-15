'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Badge,
  BarChart3,
  GalleryHorizontalEnd,
  Globe,
  Mail,
  MessageCircle,
  Rocket,
  type LucideIcon,
} from 'lucide-react';

import { buildWhatsAppLink } from '@/lib/whatsapp';
import { Profile } from '@/types/profile';

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Badge,
  Globe,
  BarChart3,
  MessageCircle,
  Mail,
  GalleryHorizontalEnd,
};

type MagneticActionButtonsProps = { profile: Profile };

export const MagneticActionButtons = ({ profile }: MagneticActionButtonsProps) => {
  return (
    <section className="space-y-3">
      {profile.serviceActions.map((action, index) => {
        const Icon = iconMap[action.icon] ?? MessageCircle;
        const className =
          action.kind === 'portfolio'
            ? 'border-violet-200/40 bg-gradient-to-r from-fuchsia-500/35 via-violet-500/30 to-cyan-500/25 shadow-[0_20px_60px_-30px_rgba(168,85,247,0.75)]'
            : 'border-white/15 bg-white/[0.05]';
        const content = (
          <>
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:translate-x-full" />
            <span className="relative z-10 flex items-center gap-3">
              <span className="rounded-xl border border-white/20 bg-white/10 p-2.5 text-cyan-100">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-textStrong">{action.label}</span>
            </span>
          </>
        );

        if (action.kind === 'portfolio') {
          return (
            <motion.div key={action.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
              <Link
                href="/portfolio"
                className={`group relative flex items-center justify-between overflow-hidden rounded-2xl border px-5 py-4 backdrop-blur-xl ${className}`}
              >
                {content}
                <span className="relative z-10 text-xs uppercase tracking-[0.18em] text-white/90">Destaque</span>
              </Link>
            </motion.div>
          );
        }

        const href = action.kind === 'mailto' ? `mailto:${profile.email}?subject=${encodeURIComponent(action.message)}` : buildWhatsAppLink(profile.whatsapp, action.message);

        return (
          <motion.a
            key={action.label}
            href={href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className={`group relative flex items-center justify-between overflow-hidden rounded-2xl border px-5 py-4 backdrop-blur-xl ${className}`}
          >
            {content}
            <span className="relative z-10 text-xs text-textSoft">Abrir</span>
          </motion.a>
        );
      })}
    </section>
  );
};
