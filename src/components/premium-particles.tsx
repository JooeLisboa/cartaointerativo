'use client';

import { motion } from 'framer-motion';

const particles = Array.from({ length: 12 }).map((_, id) => ({
  id,
  x: (id * 21) % 100,
  y: (id * 31) % 100,
  size: 1,
  duration: 16 + (id % 6),
  delay: id * 0.2,
}));

export const PremiumParticles = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {particles.map((particle) => (
      <motion.span
        key={particle.id}
        className="absolute rounded-full bg-white/25"
        style={{
          left: `${particle.x}%`,
          top: `${particle.y}%`,
          width: particle.size,
          height: particle.size,
        }}
        animate={{ y: [0, -14, 0], x: [0, 5, 0], opacity: [0.03, 0.14, 0.03] }}
        transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}
  </div>
);
