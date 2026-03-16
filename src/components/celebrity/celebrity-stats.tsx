'use client';

import { motion } from 'framer-motion';

import { CelebrityMetric } from '@/types/celebrity';

interface CelebrityStatsProps {
  metrics: CelebrityMetric[];
}

export const CelebrityStats = ({ metrics }: CelebrityStatsProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.15 }}
      className="rounded-[1.6rem] border border-white/10 bg-[#071125cc] p-4 backdrop-blur-xl"
    >
      <h2 className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">Presença em números</h2>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-white/10 bg-slate-900/65 px-3 py-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{metric.label}</p>
            <p className="mt-1 text-sm font-semibold text-slate-100">{metric.value}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
