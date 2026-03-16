'use client';

import { motion } from 'framer-motion';

interface CelebrityFooterProps {
  lines: string[];
}

export const CelebrityFooter = ({ lines }: CelebrityFooterProps) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.24 }}
      className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-xs text-slate-300 backdrop-blur-xl"
    >
      <ul className="space-y-1.5">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </motion.footer>
  );
};
