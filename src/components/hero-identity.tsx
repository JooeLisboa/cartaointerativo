'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import { buildWhatsAppLink } from '@/lib/whatsapp';
import { Profile } from '@/types/profile';

type HeroIdentityProps = { profile: Profile };

export const HeroIdentity = ({ profile }: HeroIdentityProps) => {
  const ctaLink = buildWhatsAppLink(profile.whatsapp, profile.primaryCtaMessage);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-[1.7rem] border border-white/12 bg-white/[0.04] px-5 py-6 shadow-[0_20px_80px_-60px_rgba(6,182,212,0.45)] backdrop-blur-xl sm:px-8 sm:py-7"
    >
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.12)_0%,transparent_38%)]" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="relative h-24 w-24 sm:h-28 sm:w-28">
          <div className="absolute inset-[-14px] rounded-full bg-cyan-400/10 blur-2xl" />
          <div className="absolute inset-0 rounded-full border border-white/20 bg-white/[0.03] p-1">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image src={profile.profileImage} alt={profile.name} fill priority className="object-cover" />
            </div>
          </div>
        </div>

        <p className="mt-4 text-[10px] uppercase tracking-[0.24em] text-cyan-100/80">{profile.role}</p>
        <h1 className="mt-2 font-['Inter_Tight',sans-serif] text-3xl font-semibold tracking-tight sm:text-5xl">{profile.name}</h1>
        <p className="mt-2 max-w-xl text-sm font-medium text-textSoft sm:text-[15px]">{profile.headline}</p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-textSoft/95">{profile.description}</p>

        <div className="mt-5 flex w-full flex-col gap-2.5 sm:mt-6 sm:w-auto sm:flex-row sm:justify-center">
          <a
            href={ctaLink}
            rel="noreferrer"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-100/25 bg-gradient-to-r from-violet-500/75 via-indigo-500/75 to-cyan-500/75 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            <Sparkles className="h-4 w-4" />
            Iniciar Projeto Premium
          </a>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-textStrong transition hover:border-cyan-100/30 hover:bg-white/[0.08]"
          >
            Ver Modelos Premium
          </Link>
        </div>
      </div>
    </motion.section>
  );
};
