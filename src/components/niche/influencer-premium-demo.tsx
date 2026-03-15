'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Handshake, Instagram, LayoutGrid, MessageCircle, Music2, Sparkles, TrendingUp } from 'lucide-react';

import { buildWhatsAppLink } from '@/lib/whatsapp';

const whatsappMessage = 'Olá! Vi o cartão da Ayla Monteiro e gostaria de falar sobre parceria e presença digital.';
const whatsappHref = buildWhatsAppLink('5514999995544', whatsappMessage);

const proofChips = ['+ de 120 mil seguidores', 'Parcerias com marcas', 'Conteúdo autoral', 'Alta taxa de engajamento'];

const actionButtons = [
  { label: 'Ver Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'Ver TikTok', href: 'https://tiktok.com', icon: Music2 },
  { label: 'Mídia Kit', href: '#midia-kit', icon: LayoutGrid },
  { label: 'Parcerias', href: '#parcerias', icon: Handshake },
  { label: 'Últimos conteúdos', href: '#conteudos', icon: Sparkles },
  { label: 'WhatsApp', href: whatsappHref, icon: MessageCircle },
];

const partnershipPillars = ['Moda', 'Beleza', 'Lifestyle', 'Campanhas comerciais', 'Conteúdo UGC'];

const metrics = [
  { label: 'Alcance médio mensal', value: '2.1M' },
  { label: 'Taxa média de engajamento', value: '7.4%' },
  { label: 'Conversão em campanhas', value: '38%' },
];

export const InfluencerPremiumDemo = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#120A12] px-4 py-8 pb-24 text-[#F8EAF3] sm:px-6">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: [0.55, 0.84, 0.6], scale: [1, 1.05, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at 12% 15%, rgba(241,180,214,0.2), transparent 40%), radial-gradient(circle at 82% 22%, rgba(196,143,174,0.18), transparent 44%), radial-gradient(circle at 50% 96%, rgba(241,180,214,0.11), transparent 52%)',
        }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full"
        animate={{ opacity: [0.35, 0.52, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(circle, rgba(241,180,214,0.22) 0%, rgba(241,180,214,0) 70%)',
          filter: 'blur(18px)',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col gap-4">
        <div className="flex gap-2 text-xs text-[#C48FAE]">
          <Link href="/" className="rounded-full border border-[rgba(241,180,214,0.16)] bg-[rgba(26,15,27,0.72)] px-4 py-2 backdrop-blur-xl">
            Home
          </Link>
          <Link
            href="/portfolio"
            className="rounded-full border border-[rgba(241,180,214,0.16)] bg-[rgba(26,15,27,0.72)] px-4 py-2 backdrop-blur-xl"
          >
            Portfólio
          </Link>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2rem] border border-[rgba(241,180,214,0.16)] bg-[rgba(43,24,42,0.72)] p-5 shadow-[0_32px_80px_-44px_rgba(241,180,214,0.55)] backdrop-blur-2xl"
        >
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[rgba(241,180,214,0.24)] bg-[#1A0F1B] p-1 shadow-[0_0_40px_rgba(241,180,214,0.24)]">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image src="/profile.jpg" alt="Ayla Monteiro em ensaio editorial" fill className="object-cover" priority />
            </div>
          </div>

          <div className="mt-5 text-center">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#C48FAE]">Premium influencer identity</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Ayla Monteiro</h1>
            <p className="mt-2 text-base text-[#E1BCD2]">Conteúdo, presença e parcerias com identidade premium</p>
            <p className="mt-4 text-sm leading-relaxed text-[#E1BCD2]">
              Uma presença digital pensada para valorizar sua imagem, organizar seus canais e fortalecer oportunidades comerciais.
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-[rgba(241,180,214,0.16)] bg-[#1A0F1B]/80 px-4 py-3 text-center text-xs text-[#F8EAF3]">
            Parcerias, mídia kit e presença digital premium
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {proofChips.map((chip, index) => (
              <motion.span
                key={chip}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.05 }}
                className="rounded-full border border-[rgba(241,180,214,0.18)] bg-[#1A0F1B]/75 px-3 py-1 text-xs text-[#E1BCD2]"
              >
                {chip}
              </motion.span>
            ))}
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F1B4D6] px-4 py-3 text-sm font-semibold text-[#2D1225] shadow-[0_14px_35px_-20px_rgba(241,180,214,0.9)] transition hover:-translate-y-0.5 hover:brightness-105"
          >
            <MessageCircle className="h-4 w-4" />
            Contato Comercial
          </a>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="rounded-[1.8rem] border border-[rgba(241,180,214,0.16)] bg-[rgba(43,24,42,0.62)] p-3 backdrop-blur-xl"
        >
          <div className="grid gap-2">
            {actionButtons.map(({ label, href, icon: Icon }, index) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + index * 0.04 }}
                className="flex items-center justify-between rounded-xl border border-[rgba(241,180,214,0.14)] bg-[#1A0F1B]/85 px-4 py-3 text-sm text-[#F8EAF3] transition hover:-translate-y-0.5 hover:border-[rgba(241,180,214,0.34)]"
              >
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[#F1B4D6]" />
                  {label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-[#C48FAE]" />
              </motion.a>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="parcerias"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="rounded-[1.8rem] border border-[rgba(241,180,214,0.16)] bg-[rgba(43,24,42,0.72)] p-4 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm uppercase tracking-[0.2em] text-[#C48FAE]">Posicionamento comercial</h2>
            <TrendingUp className="h-4 w-4 text-[#F1B4D6]" />
          </div>

          <p className="mt-3 text-sm leading-relaxed text-[#E1BCD2]">
            Estrutura para campanhas de alto valor com entregas editoriais alinhadas a branding, performance e narrativa social.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {partnershipPillars.map((pillar) => (
              <span
                key={pillar}
                className="rounded-full border border-[rgba(241,180,214,0.14)] bg-[#1A0F1B]/75 px-3 py-1 text-xs text-[#E1BCD2]"
              >
                {pillar}
              </span>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-[rgba(241,180,214,0.14)] bg-[#1A0F1B]/80 p-2 text-center">
                <p className="text-sm font-semibold text-[#F8EAF3]">{metric.value}</p>
                <p className="mt-1 text-[10px] leading-tight text-[#C48FAE]">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <footer className="rounded-2xl border border-[rgba(241,180,214,0.16)] bg-[#1A0F1B]/75 px-4 py-3 text-center text-xs text-[#E1BCD2]">
          Cartão premium para creators que querem presença aspiracional e processo comercial pronto para marcas.
        </footer>
      </div>
    </main>
  );
};
