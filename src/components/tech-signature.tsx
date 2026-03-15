'use client';

import { motion } from 'framer-motion';

import { Profile } from '@/types/profile';

export const TechSignature = ({ profile }: { profile: Profile }) => (
  <motion.section
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay: 0.15 }}
    className="rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-5 backdrop-blur-lg sm:px-5"
  >
    <h2 className="text-[10px] uppercase tracking-[0.24em] text-textSoft">Credibilidade</h2>
    <div className="mt-3 grid gap-2 sm:grid-cols-3">
      {profile.credibilityPoints.map((point) => (
        <p key={point} className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 text-xs leading-relaxed text-textSoft">
          {point}
        </p>
      ))}
    </div>
    <div className="mt-3 flex flex-wrap gap-2">
      {profile.stack.map((item) => (
        <span key={item} className="rounded-full border border-cyan-100/20 bg-cyan-400/10 px-2.5 py-1 text-[11px] text-cyan-50">
          {item}
        </span>
      ))}
    </div>
  </motion.section>
);
