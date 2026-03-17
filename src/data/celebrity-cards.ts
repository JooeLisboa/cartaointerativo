import { CelebrityCard } from '@/types/celebrity';

const chaianyCommercialEmail = 'chaiany_comercial@g.globo';
const chaianyCommercialHref = `mailto:${chaianyCommercialEmail}`;

export const celebrityCards: Record<string, CelebrityCard> = {
  chaianydeandrade: {
    slug: 'chaianydeandrade',
    name: 'Chaiany Andrade',
    displayName: 'Chaiany Andrade 💎',
    handle: '@chaianydeandrade',
    subtitle: 'Perfil oficial • BBB26 • presença digital premium',
    description:
      'Participante do BBB26, com presença de alto alcance, canais oficiais centralizados e espaço dedicado para publicidade, parcerias e contato comercial.',
    profileImage: '/profile.jpg',
    commercialEmail: chaianyCommercialEmail,
    infoLines: [
      'PERFIL OFICIAL',
      'Participante do #BBB26 | #TeamChai',
      '💌 chaiany_comercial@g.globo',
      '📬 Caixa Postal: 7310 | Cep: 72220972',
    ],
    badges: ['2,7 mi seguidores', '#BBB26', '#TeamChai', 'Perfil oficial'],
    metrics: [
      { label: 'Posts', value: '532' },
      { label: 'Seguidores', value: '2,7 mi' },
      { label: 'Seguindo', value: '1.431' },
      { label: 'Status', value: 'Perfil oficial' },
      { label: 'Reality', value: 'Participante do BBB26' },
      { label: 'Comunidade', value: '#TeamChai' },
    ],
    spotlightTitle: 'Conecte-se com Chaiany',
    spotlightText:
      'Acesse os canais oficiais, acompanhe conteúdos e entre em contato para publicidade e parcerias.',
    actions: [
      {
        label: 'Contato Comercial',
        href: chaianyCommercialHref,
        icon: 'Mail',
        description: 'Abrir e-mail para propostas e negociações',
        variant: 'primary',
      },
      {
        label: 'Publicidade e Parcerias',
        href: chaianyCommercialHref,
        icon: 'TrendingUp',
        description: 'Campanhas, ativações e collabs com marcas',
        variant: 'secondary',
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/chaianydeandrade',
        icon: 'Instagram',
        description: 'Canal principal com conteúdos e bastidores',
        external: true,
      },
      {
        label: 'TikTok',
        href: 'https://www.tiktok.com/@chaianydeandrade',
        icon: 'Music2',
        description: 'Vídeos curtos oficiais e trends da rotina',
        external: true,
      },
      {
        label: 'X / Twitter',
        href: 'https://x.com/chaiany_andrade',
        icon: 'Twitter',
        description: 'Atualizações em tempo real e interação',
        external: true,
      },
      {
        label: 'Kwai',
        href: 'https://www.kwai.com/@chaianyandrade',
        icon: 'MessageCircleMore',
        description: 'Conteúdo oficial em formato social-first',
        external: true,
      },
      {
        label: 'Facebook',
        href: 'https://bio.site/chaianydeandrade',
        icon: 'Facebook',
        description: 'Acesso via central oficial de links',
        external: true,
      },
      {
        label: 'Grupo Oficial',
        href: 'https://bio.site/chaianydeandrade',
        icon: 'MessageCircleMore',
        description: 'Entrada para o Grupo Oficial | WhatsApp',
        external: true,
      },
    ],
  },
};
