'use client';

import { motion } from 'framer-motion';

export const CinematicBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#040612]" />

      <motion.div
        className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.35)_0%,_rgba(56,189,248,0.08)_40%,_transparent_70%)] blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 0.95, 0.7], x: ['-50%', '-44%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute right-[-8rem] top-1/4 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(103,232,249,0.28)_0%,_rgba(56,189,248,0.12)_40%,_transparent_72%)] blur-3xl"
        animate={{ y: [0, -35, 0], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-[-7rem] left-[-5rem] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.24)_0%,_rgba(14,165,233,0.1)_45%,_transparent_70%)] blur-3xl"
        animate={{ x: [0, 35, 0], y: [0, -20, 0], opacity: [0.3, 0.65, 0.3] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute inset-0 bg-noise opacity-70"
        animate={{ opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,6,18,0.7),rgba(4,6,18,0.98))]" />
    </div>
  );
};
