'use client';

import { motion } from 'framer-motion';
import {
  Badge,
  BarChart3,
  Bot,
  Globe,
  Mail,
  MessageCircle,
  Rocket,
  type LucideIcon,
} from 'lucide-react';

import { Profile } from '@/types/profile';
import { buildWhatsAppLink } from '@/lib/whatsapp';

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Globe,
  Rocket,
  Badge,
  BarChart3,
};

type MagneticActionButtonsProps = {
  profile: Profile;
};

export const MagneticActionButtons = ({ profile }: MagneticActionButtonsProps) => {
  const actionItems = [
    ...profile.services.map((service) => ({
      label: service.label,
      href: buildWhatsAppLink(profile.whatsapp, service.message),
      icon: iconMap[service.icon] ?? MessageCircle,
    })),
    {
      label: 'Falar no WhatsApp',
      href: buildWhatsAppLink(profile.whatsapp, profile.primaryCtaMessage),
      icon: MessageCircle,
    },
    {
      label: 'Enviar E-mail',
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
  ];

  return (
    <section className="space-y-3">
      {actionItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 * index, ease: 'easeOut' }}
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.985 }}
            className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-white/15 bg-[rgba(15,23,42,0.38)] px-5 py-4 backdrop-blur-xl"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 [box-shadow:inset_0_0_30px_rgba(103,232,249,0.15)]" />
            <span className="relative z-10 flex items-center gap-3">
              <span className="rounded-xl border border-cyan-200/25 bg-cyan-300/10 p-2.5 text-cyan-100">
                <Icon className="h-4 w-4 transition duration-300 group-hover:scale-110 group-hover:-rotate-3" />
              </span>
              <span className="text-sm font-medium text-textStrong">{item.label}</span>
            </span>
            <span className="relative z-10 text-xs text-textSoft/80 transition duration-300 group-hover:text-cyan-100">
              Abrir
            </span>
          </motion.a>
        );
      })}
    </section>
  );
};
