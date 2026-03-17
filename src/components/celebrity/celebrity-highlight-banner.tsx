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
      className="rounded-[1.4rem] border border-[rgba(245,158,11,0.24)] bg-gradient-to-br from-[#D97706]/25 via-[rgba(41,24,12,0.82)] to-[#F59E0B]/15 p-4 backdrop-blur-xl"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 rounded-full border border-[rgba(245,158,11,0.35)] bg-[#F59E0B]/20 p-2 text-[#F8E7C2]">
          <RadioTower className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#F3D9A2]">{title}</p>
          <p className="mt-1 text-sm leading-relaxed text-[#FFF4DA]">{text}</p>
        </div>
      </div>
    </motion.section>
  );
};
