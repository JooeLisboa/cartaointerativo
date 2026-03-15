'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, MessageCircle, PhoneCall, Star, Wrench } from 'lucide-react';

import { buildWhatsAppLink } from '@/lib/whatsapp';

const whatsappMessage = 'Olá! Vi o cartão da Black Diamond Detail e gostaria de solicitar um orçamento.';
const whatsappHref = buildWhatsAppLink('5514999995544', whatsappMessage);

const proofChips = ['5,0 no Google', 'Vitrificação premium', 'Atendimento agendado', '+ de 1.500 veículos atendidos'];

const actionButtons = [
  { label: 'Ver serviços', href: '#servicos', icon: Wrench },
  { label: 'Galeria', href: '#galeria', icon: Star },
  { label: 'Como chegar', href: 'https://maps.google.com/?q=Av+Comendador+José+da+Silva+Martha+510+Bauru', icon: MapPin },
  { label: 'Chamar no WhatsApp', href: whatsappHref, icon: MessageCircle },
  { label: 'Ver avaliações', href: '#avaliacoes', icon: Star },
  { label: 'Ligar agora', href: 'tel:+551432100550', icon: PhoneCall },
];

const services = ['vitrificação', 'polimento técnico', 'higienização interna', 'revitalização de pintura', 'proteção de interiores'];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export const EsteticaAutomotivaPremiumDemo = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050608] px-4 py-8 pb-24 text-[#EEF2F7] sm:px-6">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: [0.38, 0.62, 0.4], scale: [1, 1.04, 1], backgroundPosition: ['0% 40%', '100% 60%', '0% 40%'] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at 14% 16%, rgba(221,227,234,0.12), transparent 40%), radial-gradient(circle at 78% 20%, rgba(117,129,146,0.17), transparent 36%), radial-gradient(circle at 50% 100%, rgba(221,227,234,0.08), transparent 44%), linear-gradient(130deg, #050608 0%, #0B0E12 45%, #090C10 100%)',
          backgroundSize: '140% 140%',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_56%)] opacity-70" />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col gap-4">
        <div className="flex gap-2 text-xs text-[#8D97A8]">
          <Link href="/" className="rounded-full border border-[rgba(153,163,178,0.16)] bg-[rgba(19,24,31,0.55)] px-4 py-2 backdrop-blur-xl">
            Home
          </Link>
          <Link
            href="/portfolio"
            className="rounded-full border border-[rgba(153,163,178,0.16)] bg-[rgba(19,24,31,0.55)] px-4 py-2 backdrop-blur-xl"
          >
            Portfólio
          </Link>
        </div>

        <motion.section
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="rounded-[2rem] border border-[rgba(153,163,178,0.16)] bg-[rgba(19,24,31,0.74)] p-5 shadow-[0_32px_80px_-42px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
        >
          <motion.div variants={fadeUp} className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[rgba(184,193,207,0.22)] bg-[#0D1117] p-1 shadow-[0_0_36px_rgba(221,227,234,0.14)]">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image src="/profile.jpg" alt="Black Diamond Detail" fill className="object-cover" priority />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-5 text-center">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#8D97A8]">Black Diamond Detail</p>
            <h1 className="mt-2 text-[1.72rem] font-semibold leading-tight tracking-tight">
              Acabamento impecável, proteção premium e brilho de alto padrão
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-[#B8C1CF]">
              Serviços especializados para valorizar cada detalhe do seu veículo com estética refinada, proteção e apresentação premium.
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-4 rounded-2xl border border-[rgba(153,163,178,0.16)] bg-[rgba(11,14,18,0.76)] px-4 py-3 text-center text-xs text-[#EEF2F7]"
          >
            Estética automotiva premium e acabamento de alto nível
          </motion.p>

          <motion.div variants={fadeUp} className="mt-4 flex flex-wrap justify-center gap-2">
            {proofChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[rgba(153,163,178,0.16)] bg-[rgba(11,14,18,0.82)] px-3 py-1 text-xs text-[#B8C1CF]"
              >
                {chip}
              </span>
            ))}
          </motion.div>

          <motion.a
            variants={fadeUp}
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#DDE3EA] px-4 py-3 text-sm font-semibold text-[#11161D] shadow-[0_16px_36px_-24px_rgba(221,227,234,0.82)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-22px_rgba(221,227,234,0.65)]"
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar Orçamento
          </motion.a>
        </motion.section>

        <motion.section
          variants={stagger}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.08 }}
          className="rounded-[1.8rem] border border-[rgba(153,163,178,0.16)] bg-[rgba(19,24,31,0.68)] p-3 backdrop-blur-xl"
        >
          <div className="grid gap-2">
            {actionButtons.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                variants={fadeUp}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center justify-between rounded-xl border border-[rgba(153,163,178,0.14)] bg-[rgba(11,14,18,0.82)] px-4 py-3 text-sm text-[#EEF2F7] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(184,193,207,0.32)]"
              >
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[#B8C1CF]" />
                  {label}
                </span>
                <ChevronRight className="h-4 w-4 text-[#8D97A8]" />
              </motion.a>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="servicos"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="rounded-[1.8rem] border border-[rgba(153,163,178,0.16)] bg-[rgba(19,24,31,0.72)] p-4 backdrop-blur-xl"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#8D97A8]">Serviços de alto padrão</p>
          <h2 className="mt-2 text-lg font-semibold">Precisão técnica com apresentação premium</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-[rgba(153,163,178,0.16)] bg-[rgba(11,14,18,0.76)] px-3 py-1.5 text-xs text-[#B8C1CF]"
              >
                {service}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[#8D97A8]">
            Cada etapa é executada com controle de acabamento, produtos premium e padrão visual pensado para elevar o valor percebido do veículo.
          </p>
        </motion.section>

        <footer className="rounded-2xl border border-[rgba(153,163,178,0.16)] bg-[rgba(11,14,18,0.82)] px-4 py-3 text-center text-xs text-[#8D97A8]">
          Black Diamond Detail • Estética automotiva premium para marcas e proprietários que exigem brilho, proteção e presença impecável.
        </footer>
      </div>
    </main>
  );
};
