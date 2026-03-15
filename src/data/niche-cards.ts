import { NicheCard } from '@/types/niche';

export const nicheCards: NicheCard[] = [
  {
    slug: 'otica',
    nicheName: 'Ótica Vision Prime',
    headline: 'Precisão visual com elegância premium.',
    subheadline: 'Armações selecionadas, lentes de alta performance e atendimento consultivo.',
    description:
      'Uma vitrine interativa para óticas que desejam transmitir confiança, sofisticação e praticidade no primeiro contato digital.',
    featuredNote: 'Campanha da semana: segunda lente com condição especial para armações premium.',
    footerNote: 'Design pensado para valorizar marca, confiança e retorno em atendimentos agendados.',
    locationText: 'Av. Nações Unidas, 1450 • Bauru/SP',
    primaryCtaMessage:
      'Olá, vi o modelo de cartão interativo para ótica e quero um parecido para meu negócio.',
    contactLabels: {
      whatsapp: 'Agendar atendimento no WhatsApp',
      email: 'contato@visionprime.com.br',
    },
    chips: ['Lentes Premium', 'Armações Exclusivas', 'Atendimento Personalizado'],
    serviceLinks: [
      { label: 'Agendar atendimento', href: '#', icon: 'CalendarDays', kind: 'whatsapp' },
      { label: 'Ver armações', href: '#', icon: 'Eye', kind: 'external' },
      { label: 'Promoções da semana', href: '#', icon: 'Tag', kind: 'external' },
      { label: 'Localização', href: '#', icon: 'MapPin', kind: 'map' },
      { label: 'Falar no WhatsApp', href: '#', icon: 'MessageCircle', kind: 'whatsapp' },
      { label: 'Instagram', href: 'https://instagram.com', icon: 'Instagram', kind: 'external' },
    ],
    socialLinks: [
      { label: 'Instagram', href: 'https://instagram.com', icon: 'Instagram', kind: 'external' },
      { label: 'Catálogo digital', href: '#', icon: 'BookOpen', kind: 'external' },
    ],
    proofItems: [
      { label: 'Atendimentos/mês', value: '+320' },
      { label: 'NPS médio', value: '96' },
      { label: 'Tempo de resposta', value: '< 5 min' },
    ],
    theme: { base: 'from-slate-500/20 via-cyan-400/15 to-blue-500/20', accent: 'cyan', glow: 'rgba(34,211,238,0.35)' },
  },
  {
    slug: 'influencer',
    nicheName: 'Luna Voss Creator',
    headline: 'Presença editorial para marcas que escolhem influência com direção.',
    subheadline: 'Mídia kit, colaborações e contato comercial em um fluxo de alto impacto.',
    description:
      'Um cartão vivo para creators que querem posicionamento premium e processo claro para fechar campanhas.',
    featuredNote: 'Última collab: campanha de lifestyle com alcance orgânico superior a 1.2M.',
    footerNote: 'Estrutura otimizada para transformar audiência em propostas comerciais qualificadas.',
    locationText: 'São Paulo/SP • Atendimento nacional',
    primaryCtaMessage:
      'Olá, vi o modelo de cartão interativo para influencer e quero criar o meu.',
    contactLabels: {
      whatsapp: 'Contato comercial imediato',
      email: 'business@lunavoss.com',
    },
    chips: ['Mídia Kit Premium', 'Creator Economy', 'Parcerias de Alto Valor'],
    serviceLinks: [
      { label: 'Baixar mídia kit', href: '#', icon: 'Download', kind: 'external' },
      { label: 'Parcerias', href: '#', icon: 'Handshake', kind: 'external' },
      { label: 'Últimos conteúdos', href: '#', icon: 'PlayCircle', kind: 'external' },
      { label: 'Instagram', href: 'https://instagram.com', icon: 'Instagram', kind: 'external' },
      { label: 'TikTok', href: 'https://tiktok.com', icon: 'Music2', kind: 'external' },
      { label: 'Contato comercial', href: '#', icon: 'MessageCircle', kind: 'whatsapp' },
    ],
    socialLinks: [
      { label: 'Instagram', href: 'https://instagram.com', icon: 'Instagram', kind: 'external' },
      { label: 'TikTok', href: 'https://tiktok.com', icon: 'Music2', kind: 'external' },
    ],
    proofItems: [
      { label: 'Campanhas fechadas', value: '84+' },
      { label: 'Média de alcance', value: '1.2M' },
      { label: 'Taxa de resposta', value: '98%' },
    ],
    theme: { base: 'from-fuchsia-500/20 via-violet-400/20 to-rose-500/20', accent: 'violet', glow: 'rgba(217,70,239,0.35)' },
  },
  {
    slug: 'clinica',
    nicheName: 'Clínica Harmonia',
    headline: 'Saúde com confiança, acolhimento e clareza profissional.',
    subheadline: 'Facilite agendamentos e entregue presença digital alinhada à credibilidade clínica.',
    description:
      'Experiência digital desenhada para clínicas que precisam inspirar tranquilidade e organização desde o primeiro toque.',
    featuredNote: 'Atendimento humanizado com time multidisciplinar e agenda online inteligente.',
    footerNote: 'Perfeito para clínicas que querem autoridade sem perder proximidade com o paciente.',
    locationText: 'Rua Batista de Carvalho, 330 • Bauru/SP',
    primaryCtaMessage:
      'Olá, vi o modelo de cartão interativo para clínica e quero um cartão assim.',
    contactLabels: {
      whatsapp: 'Agendar consulta via WhatsApp',
      email: 'agendamento@clinicaharmonia.com.br',
    },
    chips: ['Credibilidade Médica', 'Agenda Inteligente', 'Atendimento Humanizado'],
    serviceLinks: [
      { label: 'Agendar consulta', href: '#', icon: 'CalendarCheck2', kind: 'whatsapp' },
      { label: 'Especialidades', href: '#', icon: 'HeartPulse', kind: 'external' },
      { label: 'Equipe', href: '#', icon: 'Users', kind: 'external' },
      { label: 'Localização', href: '#', icon: 'MapPin', kind: 'map' },
      { label: 'Convênios e atendimento', href: '#', icon: 'FileCheck2', kind: 'external' },
      { label: 'WhatsApp', href: '#', icon: 'MessageCircle', kind: 'whatsapp' },
    ],
    socialLinks: [
      { label: 'Portal do paciente', href: '#', icon: 'ShieldCheck', kind: 'external' },
      { label: 'Instagram', href: 'https://instagram.com', icon: 'Instagram', kind: 'external' },
    ],
    proofItems: [
      { label: 'Pacientes ativos', value: '+2.4k' },
      { label: 'Avaliação média', value: '4.9/5' },
      { label: 'Tempo de retorno', value: '< 10 min' },
    ],
    theme: { base: 'from-emerald-400/15 via-cyan-400/15 to-sky-400/20', accent: 'emerald', glow: 'rgba(16,185,129,0.3)' },
  },
  {
    slug: 'estetica-automotiva',
    nicheName: 'Blackline Detail Studio',
    headline: 'Estética automotiva premium com acabamento de showroom.',
    subheadline: 'Serviços de alto padrão com apresentação digital à altura da sua entrega.',
    description:
      'Um cartão de presença visualmente impactante para estúdios que vendem cuidado técnico, brilho e proteção automotiva.',
    featuredNote: 'Pacote premium: vitrificação + polimento técnico com garantia estendida.',
    footerNote: 'Estrutura projetada para elevar ticket médio e agilizar pedidos de orçamento.',
    locationText: 'Distrito Industrial • Bauru/SP',
    primaryCtaMessage:
      'Olá, vi o modelo de cartão interativo para estética automotiva e quero solicitar um orçamento.',
    contactLabels: {
      whatsapp: 'Solicitar orçamento no WhatsApp',
      email: 'atendimento@blacklinedetail.com',
    },
    chips: ['Dark Chrome', 'Acabamento Premium', 'Precisão Técnica'],
    serviceLinks: [
      { label: 'Vitrificação', href: '#', icon: 'Sparkle', kind: 'external' },
      { label: 'Polimento', href: '#', icon: 'CircleDot', kind: 'external' },
      { label: 'Higienização interna', href: '#', icon: 'Droplets', kind: 'external' },
      { label: 'Galeria', href: '#', icon: 'Images', kind: 'external' },
      { label: 'Localização', href: '#', icon: 'MapPin', kind: 'map' },
      { label: 'Orçamento no WhatsApp', href: '#', icon: 'MessageCircle', kind: 'whatsapp' },
    ],
    socialLinks: [
      { label: 'Instagram', href: 'https://instagram.com', icon: 'Instagram', kind: 'external' },
      { label: 'Antes e depois', href: '#', icon: 'ScanSearch', kind: 'external' },
    ],
    proofItems: [
      { label: 'Carros finalizados/mês', value: '120+' },
      { label: 'Ticket premium', value: 'R$ 1.850' },
      { label: 'Clientes recorrentes', value: '67%' },
    ],
    theme: { base: 'from-zinc-500/25 via-slate-400/10 to-amber-300/20', accent: 'amber', glow: 'rgba(245,158,11,0.32)' },
  },
];
