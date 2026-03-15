'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, MessageCircle, PhoneCall, ShieldCheck, Stethoscope, Star, Users } from 'lucide-react';

import { buildWhatsAppLink } from '@/lib/whatsapp';

const whatsappMessage = 'Olá! Vi o cartão da Clínica Vivace e gostaria de agendar um atendimento.';
const whatsappHref = buildWhatsAppLink('5514999995544', whatsappMessage);

const proofChips = ['5,0 no Google', 'Equipe especializada', 'Atendimento com hora marcada', '+ de 2 mil pacientes atendidos'];

const actionButtons = [
  { label: 'Especialidades', href: '#especialidades', icon: Stethoscope },
  { label: 'Corpo clínico', href: '#corpo-clinico', icon: Users },
  { label: 'Como chegar', href: 'https://maps.google.com/?q=Rua+Rio+Branco+410+Bauru', icon: MapPin },
  { label: 'Ligar agora', href: 'tel:+551432145880', icon: PhoneCall },
  { label: 'Ver avaliações', href: '#avaliacoes', icon: Star },
  { label: 'WhatsApp', href: whatsappHref, icon: MessageCircle },
];

const units = [
  {
    name: 'Vivace Prime',
    address: 'Rua Rio Branco, 410 – Centro',
    city: 'Bauru/SP',
    support: 'Atendimento com hora marcada • ambiente acolhedor',
    mapHref: 'https://maps.google.com/?q=Rua+Rio+Branco+410+Bauru',
  },
  {
    name: 'Vivace Select',
    address: 'Av. Getúlio Vargas, 1220 – Jardim América',
    city: 'Bauru/SP',
    support: 'Equipe especializada • estacionamento próximo',
    mapHref: 'https://maps.google.com/?q=Av+Getulio+Vargas+1220+Bauru',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
};

export const ClinicaPremiumDemo = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07131A] px-4 py-8 pb-24 text-[#EAF7FA] sm:px-6">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: [0.48, 0.7, 0.52], scale: [1, 1.04, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at 15% 14%, rgba(143,215,227,0.15), transparent 42%), radial-gradient(circle at 80% 22%, rgba(88,149,164,0.14), transparent 34%), radial-gradient(circle at 52% 86%, rgba(143,215,227,0.1), transparent 46%)',
        }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: [0.2, 0.35, 0.22] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at 50% 8%, rgba(143,215,227,0.18), transparent 25%), radial-gradient(circle at 50% 96%, rgba(13,34,42,0.4), transparent 55%)',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col gap-4">
        <div className="flex gap-2 text-xs text-[#8EB2BA]">
          <Link href="/" className="rounded-full border border-[rgba(143,205,216,0.16)] bg-[rgba(12,29,36,0.7)] px-4 py-2 backdrop-blur-xl">
            Home
          </Link>
          <Link
            href="/portfolio"
            className="rounded-full border border-[rgba(143,205,216,0.16)] bg-[rgba(12,29,36,0.7)] px-4 py-2 backdrop-blur-xl"
          >
            Portfólio
          </Link>
        </div>

        <motion.section
          {...fadeUp}
          className="rounded-[2rem] border border-[rgba(143,205,216,0.16)] bg-[rgba(13,34,42,0.72)] p-5 shadow-[0_28px_65px_-38px_rgba(143,215,227,0.35)] backdrop-blur-2xl"
        >
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[rgba(143,205,216,0.3)] bg-[#0C1D24] p-1 shadow-[0_0_48px_rgba(143,215,227,0.18)]">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image src="/profile.jpg" alt="Equipe da Clínica Vivace" fill className="object-cover" priority />
            </div>
          </div>

          <div className="mt-5 text-center">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#8EB2BA]">Clínica premium</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Clínica Vivace</h1>
            <p className="mt-3 text-base text-[#B7D6DC]">Cuidado, confiança e excelência em cada atendimento</p>
            <p className="mt-4 text-sm leading-relaxed text-[#B7D6DC]">
              Atendimento humanizado, estrutura moderna e uma experiência pensada para oferecer segurança e bem-estar em cada
              etapa.
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-[rgba(143,205,216,0.2)] bg-[#0C1D24]/80 px-4 py-3 text-center text-xs text-[#EAF7FA]">
            Atendimento humanizado e estrutura premium
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {proofChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[rgba(143,205,216,0.2)] bg-[#0C1D24]/80 px-3 py-1 text-xs text-[#B7D6DC]"
              >
                {chip}
              </span>
            ))}
          </div>

          <motion.a
            whileHover={{ y: -1, scale: 1.01 }}
            whileTap={{ scale: 0.995 }}
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#8FD7E3] px-4 py-3 text-sm font-semibold text-[#082028] shadow-[0_16px_38px_-24px_rgba(143,215,227,0.9)] transition"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar pelo WhatsApp
          </motion.a>
        </motion.section>

        <motion.section
          {...fadeUp}
          transition={{ delay: 0.08 }}
          className="rounded-[1.8rem] border border-[rgba(143,205,216,0.16)] bg-[rgba(12,29,36,0.72)] p-3 backdrop-blur-xl"
        >
          <div className="grid gap-2">
            {actionButtons.map(({ label, href, icon: Icon }, index) => (
              <motion.a
                key={label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14 + index * 0.04 }}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center justify-between rounded-xl border border-[rgba(143,205,216,0.14)] bg-[#0C1D24]/90 px-4 py-3 text-sm text-[#EAF7FA] transition hover:-translate-y-0.5 hover:border-[rgba(143,215,227,0.36)]"
              >
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[#8FD7E3]" />
                  {label}
                </span>
                <ChevronRight className="h-4 w-4 text-[#8EB2BA]" />
              </motion.a>
            ))}
          </div>
        </motion.section>

        <motion.section id="unidades" {...fadeUp} transition={{ delay: 0.16 }} className="space-y-3">
          <h2 className="px-1 text-sm uppercase tracking-[0.18em] text-[#8EB2BA]">Unidades e contato</h2>
          {units.map((unit, index) => (
            <motion.article
              key={unit.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 + index * 0.05 }}
              className="rounded-[1.6rem] border border-[rgba(143,205,216,0.16)] bg-[rgba(13,34,42,0.72)] p-4 backdrop-blur-xl"
            >
              <p className="text-lg font-semibold">{unit.name}</p>
              <p className="mt-1 text-sm text-[#B7D6DC]">{unit.address}</p>
              <p className="text-sm text-[#B7D6DC]">{unit.city}</p>
              <p className="mt-2 text-xs leading-relaxed text-[#8EB2BA]">{unit.support}</p>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-[rgba(143,205,216,0.24)] bg-[#8FD7E3]/95 px-3 py-2 text-center text-xs font-semibold text-[#082028]"
                >
                  WhatsApp
                </a>
                <a
                  href={unit.mapHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-[rgba(143,205,216,0.2)] bg-[#0C1D24]/85 px-3 py-2 text-center text-xs text-[#EAF7FA]"
                >
                  Como chegar
                </a>
              </div>
            </motion.article>
          ))}
        </motion.section>

        <motion.footer
          {...fadeUp}
          transition={{ delay: 0.22 }}
          className="rounded-2xl border border-[rgba(143,205,216,0.16)] bg-[#0C1D24]/75 px-4 py-3 text-center text-xs text-[#B7D6DC]"
        >
          <span className="inline-flex items-center gap-1 text-[#EAF7FA]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#8FD7E3]" />
            Clínica Vivace
          </span>{' '}
          • Cuidado premium com acolhimento, organização e confiança desde o primeiro contato.
        </motion.footer>
      </div>
    </main>
  );
};
