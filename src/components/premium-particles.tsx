'use client';

import { motion } from 'framer-motion';

const particles = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  size: 1 + (i % 3),
  x: (i * 13) % 100,
  y: (i * 19) % 100,
  delay: i * 0.2,
  duration: 10 + (i % 8),
}));

export const PremiumParticles = () => {
  return (
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
          animate={{
            y: [0, -18, 0],
            x: [0, 6, 0],
            opacity: [0.05, 0.3, 0.05],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};
