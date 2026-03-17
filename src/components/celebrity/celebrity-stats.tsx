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
      className="rounded-[1.6rem] border border-[rgba(245,158,11,0.2)] bg-[rgba(41,24,12,0.82)] p-4 backdrop-blur-xl"
    >
      <h2 className="text-xs uppercase tracking-[0.24em] text-[#F3D9A2]/80">Presença em números</h2>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-[rgba(245,158,11,0.2)] bg-[rgba(42,23,12,0.74)] px-3 py-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#F6D8A4]/75">{metric.label}</p>
            <p className="mt-1 text-sm font-semibold text-[#FFF4DA]">{metric.value}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
