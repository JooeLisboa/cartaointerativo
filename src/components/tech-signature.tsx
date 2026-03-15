'use client';

import { motion } from 'framer-motion';
import { Braces, Gauge, Cpu } from 'lucide-react';

import { Profile } from '@/types/profile';

type TechSignatureProps = {
  profile: Profile;
};

const signatureIcons = [Braces, Gauge, Cpu];

export const TechSignature = ({ profile }: TechSignatureProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="rounded-3xl border border-white/15 bg-[rgba(15,23,42,0.35)] p-5 backdrop-blur-xl"
    >
      <h2 className="mb-4 text-xs uppercase tracking-[0.3em] text-textSoft">Assinatura Tecnológica</h2>
      <div className="flex flex-wrap gap-2.5">
        {profile.stack.map((item, index) => {
          const Icon = signatureIcons[index % signatureIcons.length];
          return (
            <motion.span
              key={item}
              whileHover={{ scale: 1.04, y: -2 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200/20 bg-gradient-to-r from-white/8 to-cyan-100/5 px-3 py-1.5 text-xs text-cyan-50"
            >
              <Icon className="h-3.5 w-3.5 text-cyan-200" />
              {item}
            </motion.span>
          );
        })}
      </div>
    </motion.section>
  );
};
