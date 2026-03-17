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
      className="rounded-2xl border border-[rgba(245,158,11,0.22)] bg-[rgba(41,24,12,0.82)] px-4 py-3 text-xs text-[#F6D8A4] backdrop-blur-xl"
    >
      <ul className="space-y-1.5">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </motion.footer>
  );
};
