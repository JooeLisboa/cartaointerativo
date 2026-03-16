'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

import { CelebrityCard } from '@/types/celebrity';

interface CelebrityHeroProps {
  profile: CelebrityCard;
}

export const CelebrityHero = ({ profile }: CelebrityHeroProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#061127c4] p-5 shadow-[0_35px_90px_-55px_rgba(56,189,248,0.75)] backdrop-blur-2xl"
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-24 bg-[radial-gradient(circle,rgba(129,140,248,0.2),transparent_72%)]" />

      <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-cyan-200/40 bg-[#070d1e] p-1 shadow-[0_0_0_2px_rgba(56,189,248,0.2),0_0_50px_rgba(56,189,248,0.4)]">
        <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-white/20">
          <Image src={profile.profileImage} alt={`Foto de perfil de ${profile.name}`} fill className="object-cover" priority />
        </div>
      </div>

      <div className="mt-4 space-y-2 text-center">
        <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-200/80">Central oficial</p>
        <h1 className="font-['Inter_Tight',sans-serif] text-3xl font-semibold tracking-tight text-slate-100">{profile.displayName}</h1>
        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{profile.handle}</p>
        <p className="text-sm text-slate-300">{profile.subtitle}</p>
        <p className="text-sm leading-relaxed text-slate-200/90">{profile.description}</p>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {profile.badges.map((badge) => (
          <span
            key={badge}
            className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200/20 bg-slate-900/70 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-100"
          >
            {badge === 'Perfil oficial' ? <BadgeCheck className="h-3.5 w-3.5 text-cyan-200" /> : null}
            {badge}
          </span>
        ))}
      </div>
    </motion.section>
  );
};
