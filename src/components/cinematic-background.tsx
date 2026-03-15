'use client';

import { motion } from 'framer-motion';

export const CinematicBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050714]" />
      <motion.div
        className="absolute -top-48 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.22)_0%,rgba(56,189,248,0.08)_42%,transparent_72%)] blur-3xl"
        animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.72, 0.5] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-8rem] top-1/3 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.16)_0%,rgba(34,211,238,0.05)_50%,transparent_72%)] blur-3xl"
        animate={{ y: [0, -18, 0], x: [0, -10, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-10rem] left-[-7rem] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.16)_0%,rgba(139,92,246,0.08)_46%,transparent_72%)] blur-3xl"
        animate={{ y: [0, -16, 0], x: [0, 14, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-noise opacity-25" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,7,20,0.66),rgba(5,7,20,0.97))]" />
    </div>
  );
};
