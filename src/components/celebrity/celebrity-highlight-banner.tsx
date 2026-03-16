'use client';

import { motion } from 'framer-motion';
import { RadioTower } from 'lucide-react';

interface CelebrityHighlightBannerProps {
  title: string;
  text: string;
}

export const CelebrityHighlightBanner = ({ title, text }: CelebrityHighlightBannerProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.2 }}
      className="rounded-[1.4rem] border border-cyan-200/25 bg-gradient-to-br from-cyan-300/10 via-slate-950/80 to-violet-400/10 p-4 backdrop-blur-xl"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 rounded-full border border-cyan-200/30 bg-cyan-300/15 p-2 text-cyan-100">
          <RadioTower className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/80">{title}</p>
          <p className="mt-1 text-sm leading-relaxed text-slate-200">{text}</p>
        </div>
      </div>
    </motion.section>
  );
};
