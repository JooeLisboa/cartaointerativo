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
      className="relative overflow-hidden rounded-[2rem] border border-[rgba(245,158,11,0.28)] bg-[rgba(41,24,12,0.82)] p-5 shadow-[0_36px_95px_-58px_rgba(242,178,51,0.65)] backdrop-blur-2xl"
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-24 bg-[radial-gradient(circle,rgba(249,115,22,0.2),transparent_72%)]" />

      <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-amber-200/45 bg-[#2A170C] p-1 shadow-[0_0_0_2px_rgba(245,158,11,0.2),0_0_52px_rgba(249,115,22,0.34)]">
        <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-[#F3D9A2]/35">
          <Image src={profile.profileImage} alt={`Foto de perfil de ${profile.name}`} fill className="object-cover" priority />
        </div>
      </div>

      <div className="mt-4 space-y-2 text-center">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#F3D9A2]">Central oficial</p>
        <h1 className="font-['Inter_Tight',sans-serif] text-3xl font-semibold tracking-tight text-[#FFF4DA]">{profile.displayName}</h1>
        <p className="text-xs uppercase tracking-[0.22em] text-[#F6D8A4]/85">{profile.handle}</p>
        <p className="text-sm text-[#F6D8A4]">{profile.subtitle}</p>
        <p className="text-sm leading-relaxed text-[#F8E7C2]/92">{profile.description}</p>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {profile.badges.map((badge) => (
          <span
            key={badge}
            className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(245,158,11,0.22)] bg-[rgba(42,23,12,0.75)] px-3 py-1 text-[11px] font-medium tracking-wide text-[#F3D9A2]"
          >
            {badge === 'Perfil oficial' ? <BadgeCheck className="h-3.5 w-3.5 text-[#F2B233]" /> : null}
            {badge}
          </span>
        ))}
      </div>
    </motion.section>
  );
};
