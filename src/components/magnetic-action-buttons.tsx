'use client';

import { motion } from 'framer-motion';
import { Badge, BarChart3, Globe, Mail, MessageCircle, Rocket, type LucideIcon } from 'lucide-react';

import { buildWhatsAppLink } from '@/lib/whatsapp';
import { Profile } from '@/types/profile';

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Badge,
  Globe,
  BarChart3,
  MessageCircle,
  Mail,
};

type MagneticActionButtonsProps = { profile: Profile };

export const MagneticActionButtons = ({ profile }: MagneticActionButtonsProps) => {
  return (
    <section className="space-y-2.5">
      {profile.serviceActions.map((action, index) => {
        const Icon = iconMap[action.icon] ?? MessageCircle;
        const href =
          action.kind === 'mailto'
            ? `mailto:${profile.email}?subject=${encodeURIComponent(action.message)}`
            : buildWhatsAppLink(profile.whatsapp, action.message);

        return (
          <motion.a
            key={action.label}
            href={href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-white/12 bg-white/[0.03] px-4 py-3 backdrop-blur-lg transition hover:border-cyan-100/25 hover:bg-white/[0.06]"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:translate-x-full" />
            <span className="relative z-10 flex items-center gap-2.5">
              <span className="rounded-lg border border-white/20 bg-white/[0.07] p-2 text-cyan-100">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm font-medium text-textStrong">{action.label}</span>
            </span>
            <span className="relative z-10 text-[11px] uppercase tracking-[0.16em] text-textSoft/80">Abrir</span>
          </motion.a>
        );
      })}
    </section>
  );
};
