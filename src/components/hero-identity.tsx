"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, MapPin } from "lucide-react";

import { Profile } from "@/types/profile";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type HeroIdentityProps = {
  profile: Profile;
};

const chips = [
  "Consultoria Premium",
  "Entrega de Alto Valor",
  "Arquitetura Moderna",
];

export const HeroIdentity = ({ profile }: HeroIdentityProps) => {
  const ctaLink = buildWhatsAppLink(
    profile.whatsapp,
    profile.primaryCtaMessage,
  );

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0, y: 18, filter: "blur(14px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { staggerChildren: 0.1, duration: 0.8, ease: "easeOut" },
        },
      }}
      className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[rgba(15,23,42,0.42)] p-7 shadow-premium backdrop-blur-2xl sm:p-9"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(120deg,rgba(255,255,255,0.18)_0%,transparent_35%)] opacity-30" />

      <motion.div
        variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
        className="relative z-10 space-y-6"
      >
        <div className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48">
          <div className="absolute inset-[-28px] rounded-full bg-cyan-400/12 blur-3xl" />
          <div className="absolute inset-[-18px] rounded-full bg-violet-500/12 blur-2xl" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full p-[2px] bg-[conic-gradient(from_180deg,rgba(34,211,238,0.95),rgba(139,92,246,0.95),rgba(59,130,246,0.95),rgba(34,211,238,0.95))] shadow-[0_0_30px_rgba(34,211,238,0.25),0_0_60px_rgba(139,92,246,0.18)]"
          >
            <div className="h-full w-full rounded-full bg-slate-950/90" />
          </motion.div>

          <div className="absolute inset-[6px] rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm" />

          <div className="absolute inset-[10px] overflow-hidden rounded-full border border-white/15 bg-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
            <Image
              src={profile.profileImage}
              alt={`Foto de ${profile.name}`}
              fill
              priority
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_35%),linear-gradient(to_bottom,transparent,rgba(2,6,23,0.14))]" />
          </div>

          <div className="pointer-events-none absolute inset-[2px] rounded-full border border-cyan-200/20" />
        </div>

        <div className="space-y-3 text-center">
          <h1 className="font-['Inter_Tight',sans-serif] text-4xl font-semibold tracking-tight text-textStrong sm:text-5xl">
            {profile.name}
          </h1>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-100/85">
            {profile.headline}
          </p>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-textSoft sm:text-base">
            {profile.description}
          </p>
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
