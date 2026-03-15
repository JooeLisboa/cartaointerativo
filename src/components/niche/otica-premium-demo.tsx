'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Instagram, MapPin, MessageCircle, PhoneCall, Star, Store } from 'lucide-react';

import { buildWhatsAppLink } from '@/lib/whatsapp';

const whatsappMessage = 'Olá! Vi o cartão da Ótica Lumina e gostaria de saber mais sobre os modelos e o atendimento.';
const whatsappHref = buildWhatsAppLink('5514999995544', whatsappMessage);

const proofChips = ['5,0 no Google', '12x sem juros', '2 unidades premium', '+ de 3 mil clientes atendidas'];

const actionButtons = [
  { label: 'Ver Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'Como chegar', href: 'https://maps.google.com/?q=Rua+das+Orquídeas+218+Bauru', icon: MapPin },
  { label: 'Chamar no WhatsApp', href: whatsappHref, icon: MessageCircle },
  { label: 'Ligar agora', href: 'tel:+551432100445', icon: PhoneCall },
  { label: 'Ver avaliações', href: '#avaliacoes', icon: Star },
  { label: 'Conhecer unidades', href: '#unidades', icon: Store },
];

const units = [
  {
    name: 'Lumina Maison',
    address: 'Rua das Orquídeas, 218 – Jardim Europa',
    city: 'Bauru/SP',
    support: 'Atendimento com hora marcada, consultoria personalizada e estacionamento próximo.',
    mapHref: 'https://maps.google.com/?q=Rua+das+Orquídeas+218+Bauru',
  },
  {
    name: 'Lumina Atelier',
    address: 'Av. Independência, 945 – Centro',
    city: 'Bauru/SP',
    support: 'Seleção exclusiva para moda feminina, prova assistida e experiência reservada.',
    mapHref: 'https://maps.google.com/?q=Av+Independência+945+Bauru',
  },
];

export const OticaPremiumDemo = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#140B08] px-4 py-8 pb-24 text-[#F7E7D0] sm:px-6">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: [0.5, 0.8, 0.55], scale: [1, 1.06, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at 20% 10%, rgba(226,184,110,0.24), transparent 40%), radial-gradient(circle at 80% 24%, rgba(160,94,57,0.22), transparent 36%), radial-gradient(circle at 45% 90%, rgba(214,168,108,0.12), transparent 45%)',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col gap-4">
        <div className="flex gap-2 text-xs text-[#D9BE9C]">
          <Link href="/" className="rounded-full border border-[#d6a86c2e] bg-[#2A1A14]/70 px-4 py-2 backdrop-blur-xl">
            Home
          </Link>
          <Link href="/portfolio" className="rounded-full border border-[#d6a86c2e] bg-[#2A1A14]/70 px-4 py-2 backdrop-blur-xl">
            Portfólio
          </Link>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2rem] border border-[rgba(214,168,108,0.16)] bg-[rgba(52,30,22,0.72)] p-5 shadow-[0_28px_70px_-40px_rgba(226,184,110,0.45)] backdrop-blur-2xl"
        >
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#e2b86e40] bg-[#1A100D] p-1 shadow-[0_0_42px_rgba(226,184,110,0.22)]">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image src="/profile.jpg" alt="Consultora de estilo da Ótica Lumina" fill className="object-cover" priority />
            </div>
          </div>

          <div className="mt-5 text-center">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#B68F6D]">Ótica premium feminina</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Ótica Lumina</h1>
            <p className="mt-2 text-base text-[#D9BE9C]">Elegância, estilo e visão em cada detalhe</p>
            <p className="mt-4 text-sm leading-relaxed text-[#D9BE9C]">
              Atendimento premium, curadoria sofisticada e uma experiência completa para realçar sua beleza com autenticidade.
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-[#d6a86c2e] bg-[#1A100D]/80 px-4 py-3 text-center text-xs text-[#F7E7D0]">
            Atendimento premium e curadoria exclusiva
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {proofChips.map((chip) => (
              <span key={chip} className="rounded-full border border-[#d6a86c2e] bg-[#1A100D]/75 px-3 py-1 text-xs text-[#D9BE9C]">
                {chip}
              </span>
            ))}
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#E2B86E] px-4 py-3 text-sm font-semibold text-[#2A160C] shadow-[0_12px_35px_-20px_rgba(226,184,110,0.9)] transition hover:brightness-105"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="rounded-[1.8rem] border border-[rgba(214,168,108,0.16)] bg-[rgba(40,23,17,0.72)] p-3 backdrop-blur-xl"
        >
          <div className="grid gap-2">
            {actionButtons.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center justify-between rounded-xl border border-[#d6a86c2b] bg-[#21130F]/90 px-4 py-3 text-sm text-[#F7E7D0] transition hover:-translate-y-0.5 hover:border-[#e2b86e59]"
              >
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[#E2B86E]" />
                  {label}
                </span>
                <ChevronRight className="h-4 w-4 text-[#B68F6D]" />
              </a>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="unidades"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="space-y-3"
        >
          <h2 className="px-1 text-sm uppercase tracking-[0.18em] text-[#B68F6D]">Unidades premium</h2>
          {units.map((unit) => (
            <article
              key={unit.name}
              className="rounded-[1.6rem] border border-[rgba(214,168,108,0.16)] bg-[rgba(52,30,22,0.72)] p-4 backdrop-blur-xl"
            >
              <p className="text-lg font-semibold">{unit.name}</p>
              <p className="mt-1 text-sm text-[#D9BE9C]">{unit.address}</p>
              <p className="text-sm text-[#D9BE9C]">{unit.city}</p>
              <p className="mt-2 text-xs leading-relaxed text-[#B68F6D]">{unit.support}</p>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-[#e2b86e4a] bg-[#E2B86E]/95 px-3 py-2 text-center text-xs font-semibold text-[#2A160C]"
                >
                  WhatsApp
                </a>
                <a
                  href={unit.mapHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-[#d6a86c36] bg-[#1A100D]/80 px-3 py-2 text-center text-xs text-[#F7E7D0]"
                >
                  Como chegar
                </a>
              </div>
            </article>
          ))}
        </motion.section>

        <footer className="rounded-2xl border border-[rgba(214,168,108,0.16)] bg-[#1A100D]/75 px-4 py-3 text-center text-xs text-[#D9BE9C]">
          Ótica Lumina • Consultoria de imagem e atendimento personalizado para valorizar seu estilo com sofisticação.
        </footer>
      </div>
    </main>
  );
};
