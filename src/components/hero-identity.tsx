'use client';

import { motion } from 'framer-motion';
import { Sparkles, MapPin } from 'lucide-react';

import { Profile } from '@/types/profile';
import { buildWhatsAppLink } from '@/lib/whatsapp';

type HeroIdentityProps = {
  profile: Profile;
};

const chips = ['Consultoria Premium', 'Entrega de Alto Valor', 'Arquitetura Moderna'];

export const HeroIdentity = ({ profile }: HeroIdentityProps) => {
  const ctaLink = buildWhatsAppLink(profile.whatsapp, profile.primaryCtaMessage);

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0, y: 18, filter: 'blur(14px)' },
        show: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { staggerChildren: 0.1, duration: 0.8, ease: 'easeOut' },
        },
      }}
      className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[rgba(15,23,42,0.42)] p-7 shadow-premium backdrop-blur-2xl sm:p-9"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(120deg,rgba(255,255,255,0.18)_0%,transparent_35%)] opacity-30" />

      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="relative z-10 space-y-6">
        <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-cyan-200/40 bg-gradient-to-br from-accentViolet/35 to-accentBlue/25 text-2xl font-semibold text-white shadow-[0_0_50px_rgba(103,232,249,0.4)]">
          <div className="absolute inset-[-18px] -z-10 rounded-full bg-cyan-300/20 blur-2xl" />
          JT
        </div>

        <div className="space-y-3 text-center">
          <h1 className="font-['Inter_Tight',sans-serif] text-4xl font-semibold tracking-tight text-textStrong sm:text-5xl">
            {profile.name}
          </h1>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-100/85">{profile.headline}</p>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-textSoft sm:text-base">{profile.description}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs tracking-wide text-textSoft"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3">
          <a
            href={ctaLink}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full border border-cyan-200/30 bg-gradient-to-r from-accentViolet/75 via-accentPurple/70 to-accentBlue/75 px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:shadow-cyan-300/30"
          >
            <Sparkles className="h-4 w-4 transition group-hover:-rotate-6 group-hover:scale-110" />
            Iniciar Projeto no WhatsApp
          </a>
          <p className="inline-flex items-center gap-1.5 text-xs text-textSoft/90">
            <MapPin className="h-3.5 w-3.5" />
            {profile.location}
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};
