'use client';

import { motion } from 'framer-motion';

const particles = Array.from({ length: 24 }).map((_, id) => ({
  id,
  x: (id * 17) % 100,
  y: (id * 23) % 100,
  size: 1 + (id % 2),
  duration: 12 + (id % 9),
  delay: id * 0.15,
}));

export const PremiumParticles = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {particles.map((particle) => (
      <motion.span
        key={particle.id}
        className="absolute rounded-full bg-white/30"
        style={{
          left: `${particle.x}%`,
          top: `${particle.y}%`,
          width: particle.size,
          height: particle.size,
        }}
        animate={{ y: [0, -20, 0], x: [0, 8, 0], opacity: [0.04, 0.25, 0.04] }}
        transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}
  </div>
);
