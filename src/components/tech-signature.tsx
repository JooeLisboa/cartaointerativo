'use client';

import { motion } from 'framer-motion';
import { CircuitBoard, Layers, ShieldCheck, Sparkles } from 'lucide-react';

import { Profile } from '@/types/profile';

const icons = [CircuitBoard, Layers, ShieldCheck, Sparkles];

export const TechSignature = ({ profile }: { profile: Profile }) => (
  <motion.section
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="rounded-3xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-xl"
  >
    <h2 className="text-xs uppercase tracking-[0.26em] text-textSoft">Credibilidade Tech</h2>
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {profile.credibilityPoints.map((point) => (
        <p key={point} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-textSoft">
          {point}
        </p>
      ))}
    </div>
    <div className="mt-5 flex flex-wrap gap-2">
      {profile.stack.map((item, index) => {
        const Icon = icons[index % icons.length];
        return (
          <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-cyan-100/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-50">
            <Icon className="h-3.5 w-3.5" />
            {item}
          </span>
        );
      })}
    </div>
  </motion.section>
);
