'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Sparkles } from 'lucide-react';

import { buildWhatsAppLink } from '@/lib/whatsapp';
import { Profile } from '@/types/profile';

type HeroIdentityProps = { profile: Profile };

export const HeroIdentity = ({ profile }: HeroIdentityProps) => {
  const ctaLink = buildWhatsAppLink(profile.whatsapp, profile.primaryCtaMessage);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.05] p-7 shadow-premium backdrop-blur-2xl sm:p-10"
    >
      <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.14)_0%,transparent_35%)]" />
      <div className="relative z-10 space-y-7 text-center">
        <div className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48">
          <div className="absolute inset-[-20px] rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute inset-0 rounded-full border border-white/20 bg-white/[0.03] p-1">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image src={profile.profileImage} alt={profile.name} fill priority className="object-cover" />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/80">{profile.role}</p>
          <h1 className="font-['Inter_Tight',sans-serif] text-4xl font-semibold tracking-tight sm:text-6xl">{profile.name}</h1>
          <p className="text-sm font-medium text-textSoft sm:text-base">{profile.headline}</p>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-textSoft sm:text-base">{profile.description}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5">
          {profile.premiumChips.map((chip) => (
            <span key={chip} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-textSoft">
              {chip}
            </span>
          ))}
        </div>

        <a
          href={ctaLink}
          rel="noreferrer"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-gradient-to-r from-violet-500/80 via-indigo-500/80 to-cyan-500/80 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
        >
          <Sparkles className="h-4 w-4" />
          Iniciar Projeto Premium
        </a>

        <p className="inline-flex items-center gap-1.5 text-xs text-textSoft">
          <MapPin className="h-3.5 w-3.5" />
          {profile.location}
        </p>
      </div>
    </motion.section>
  );
};
