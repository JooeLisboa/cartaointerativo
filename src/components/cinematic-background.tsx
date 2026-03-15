'use client';

import { motion } from 'framer-motion';

export const CinematicBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#040612]" />
      <motion.div
        className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.35)_0%,rgba(56,189,248,0.14)_40%,transparent_72%)] blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-6rem] top-1/4 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.28)_0%,rgba(34,211,238,0.08)_46%,transparent_70%)] blur-3xl"
        animate={{ y: [0, -28, 0], x: [0, -16, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-9rem] left-[-4rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.24)_0%,rgba(139,92,246,0.14)_45%,transparent_72%)] blur-3xl"
        animate={{ y: [0, -24, 0], x: [0, 24, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-noise opacity-60" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,6,18,0.65),rgba(4,6,18,0.98))]" />
    </div>
  );
};
