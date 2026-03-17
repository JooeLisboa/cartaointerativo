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
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden bg-[#1B120B]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/profile.jpg')", filter: 'blur(2px)', transform: 'scale(1.08)', opacity: 0.24 }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(165deg,rgba(27,18,11,0.95)_8%,rgba(42,23,12,0.93)_46%,rgba(18,10,6,0.96)_92%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.24),transparent_46%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(245,158,11,0.2),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(15,8,5,0),rgba(15,8,5,0.65)_72%)]" />

      <motion.div
        className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.3),rgba(32,18,10,0)_72%)] blur-3xl"
        animate={{ opacity: [0.35, 0.62, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-15%] top-[24%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(242,178,51,0.2),rgba(24,12,7,0)_72%)] blur-3xl"
        animate={{ x: [0, -18, 0], opacity: [0.24, 0.5, 0.24] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[-10%] top-[45%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(246,197,107,0.16),rgba(22,12,7,0)_75%)] blur-3xl"
        animate={{ x: [0, 16, 0], opacity: [0.22, 0.42, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute -top-20 left-1/2 h-[35rem] w-px -translate-x-1/2 bg-gradient-to-b from-amber-300/35 via-amber-300/10 to-transparent"
        animate={{ opacity: [0.15, 0.48, 0.2] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-16 h-44 w-[160%] -rotate-12 bg-[radial-gradient(ellipse,rgba(246,197,107,0.18),transparent_70%)]"
        animate={{ x: ['-18%', '0%', '-10%'], opacity: [0.08, 0.22, 0.08] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {diamondNodes.map((node, idx) => (
        <motion.div
          key={`${node.top}-${node.left}`}
          className="absolute h-2.5 w-2.5 rotate-45 border border-amber-200/55 bg-amber-100/20"
          style={{ top: node.top, left: node.left }}
          animate={{ opacity: [0.15, 0.55, 0.15], scale: [0.8, 1.15, 0.8] }}
          transition={{ duration: 4 + idx, repeat: Infinity, delay: node.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};
