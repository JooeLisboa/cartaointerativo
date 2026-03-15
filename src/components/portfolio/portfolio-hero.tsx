'use client';

import { motion } from 'framer-motion';

export const PortfolioHero = ({ heading, subheading }: { heading: string; subheading: string }) => (
  <motion.section
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="rounded-[2rem] border border-white/15 bg-white/[0.05] p-8 backdrop-blur-2xl sm:p-10"
  >
    <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">Showcase premium</p>
    <h1 className="mt-3 font-['Inter_Tight',sans-serif] text-4xl font-semibold tracking-tight sm:text-5xl">{heading}</h1>
    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-textSoft sm:text-base">{subheading}</p>
  </motion.section>
);
