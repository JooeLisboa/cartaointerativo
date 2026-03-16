'use client';

import { motion } from 'framer-motion';

const diamondNodes = [
  { top: '18%', left: '12%', delay: 0.1 },
  { top: '30%', left: '85%', delay: 0.45 },
  { top: '67%', left: '15%', delay: 0.75 },
  { top: '75%', left: '80%', delay: 1.1 },
];

export const CelebrityBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,#02040f_8%,#050d23_43%,#02040f_92%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.14),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(56,189,248,0.09)_0%,rgba(167,139,250,0.06)_30%,rgba(2,6,23,0)_58%)]" />

      <motion.div
        className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.35),rgba(11,15,35,0)_72%)] blur-3xl"
        animate={{ opacity: [0.35, 0.65, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-15%] top-[24%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.22),rgba(4,8,24,0)_72%)] blur-3xl"
        animate={{ x: [0, -18, 0], opacity: [0.24, 0.5, 0.24] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[-10%] top-[45%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(192,208,222,0.18),rgba(9,12,29,0)_75%)] blur-3xl"
        animate={{ x: [0, 16, 0], opacity: [0.22, 0.46, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute -top-20 left-1/2 h-[35rem] w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/30 via-cyan-300/5 to-transparent"
        animate={{ opacity: [0.15, 0.5, 0.2] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-16 h-44 w-[160%] -rotate-12 bg-[radial-gradient(ellipse,rgba(250,250,255,0.16),transparent_70%)]"
        animate={{ x: ['-18%', '0%', '-10%'], opacity: [0.08, 0.22, 0.08] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-cyan-200/15"
        animate={{ scale: [0.92, 1.06, 0.92], opacity: [0.12, 0.3, 0.12] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {diamondNodes.map((node, idx) => (
        <motion.div
          key={`${node.top}-${node.left}`}
          className="absolute h-2.5 w-2.5 rotate-45 border border-cyan-100/50 bg-cyan-100/15"
          style={{ top: node.top, left: node.left }}
          animate={{ opacity: [0.15, 0.55, 0.15], scale: [0.8, 1.15, 0.8] }}
          transition={{ duration: 4 + idx, repeat: Infinity, delay: node.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};
