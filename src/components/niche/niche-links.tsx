import { BookOpen, CalendarCheck2, CalendarDays, CircleDot, Download, Droplets, Eye, FileCheck2, Handshake, HeartPulse, Images, Instagram, MapPin, MessageCircle, Music2, PlayCircle, ScanSearch, ShieldCheck, Sparkle, Tag, Users, type LucideIcon } from 'lucide-react';

import { NicheLink } from '@/types/niche';

const iconMap: Record<string, LucideIcon> = {
  CalendarDays,
  Eye,
  Tag,
  MapPin,
  MessageCircle,
  Instagram,
  BookOpen,
  Download,
  Handshake,
  PlayCircle,
  Music2,
  CalendarCheck2,
  HeartPulse,
  Users,
  FileCheck2,
  ShieldCheck,
  Sparkle,
  CircleDot,
  Droplets,
  Images,
  ScanSearch,
};

export const NicheLinks = ({ title, links }: { title: string; links: NicheLink[] }) => (
  <section className="rounded-3xl border border-white/15 bg-white/[0.05] p-5 backdrop-blur-xl">
    <h2 className="text-xs uppercase tracking-[0.24em] text-textSoft">{title}</h2>
    <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
      {links.map((link) => {
        const Icon = iconMap[link.icon] ?? MessageCircle;
        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-textSoft transition hover:border-white/25 hover:text-white"
          >
            <span className="inline-flex items-center gap-2">
              <Icon className="h-4 w-4" />
              {link.label}
            </span>
            <span className="text-xs">Abrir</span>
          </a>
        );
      })}
    </div>
  </section>
);
