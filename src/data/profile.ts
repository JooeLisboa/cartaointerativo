import { Profile } from '@/types/profile';

export const profile: Profile = {
  name: 'Jhonatan Tiburcio',
  role: 'Criador de experiências digitais premium',
  headline: 'Landing Pages • Cartões Interativos • Consultoria Tech para Conversão',
  description:
    'Projeto experiências digitais com estética premium, narrativa de autoridade e estrutura comercial para transformar presença online em vendas consistentes.',
  location: 'Bauru/SP, Brasil',
  email: 'lisboatiburcio@gmail.com',
  whatsapp: '+55 14 99124-2019',
  profileImage: '/profile.jpg',
  premiumChips: [
    'Posicionamento de Alto Valor',
    'Design Cinemático para Conversão',
    'Arquitetura Next.js Premium',
  ],
  credibilityPoints: [
    'Foco em páginas e cartões orientados à conversão',
    'Aplicação de motion design refinado para percepção premium',
    'Estrutura pronta para escalar demos por nicho e acelerar vendas',
  ],
  primaryCtaMessage:
    'Olá Jhonatan, vi sua apresentação premium e quero conversar sobre um projeto para meu negócio.',
  portfolioLabel: 'Ver Portfólio de Cartões por Nicho',
  stack: ['Next.js 14', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Automação e IA', 'Arquitetura de Conversão'],
  serviceActions: [
    {
      label: 'Ver Portfólio',
      message: '',
      icon: 'GalleryHorizontalEnd',
      kind: 'portfolio',
    },
    {
      label: 'Criar Landing Page',
      message: 'Olá, quero criar uma landing page premium de alta conversão para meu negócio.',
      icon: 'Rocket',
      kind: 'whatsapp',
    },
    {
      label: 'Criar Cartão Interativo',
      message: 'Olá, quero criar um cartão interativo premium para minha empresa.',
      icon: 'Badge',
      kind: 'whatsapp',
    },
    {
      label: 'Criar Site Profissional',
      message: 'Olá, quero criar um site profissional premium com foco em posicionamento.',
      icon: 'Globe',
      kind: 'whatsapp',
    },
    {
      label: 'Dashboards / Automação',
      message: 'Olá, quero implementar dashboards e automações para otimizar meu negócio.',
      icon: 'BarChart3',
      kind: 'whatsapp',
    },
    {
      label: 'Falar no WhatsApp',
      message: 'Olá Jhonatan, quero conversar sobre uma solução digital premium.',
      icon: 'MessageCircle',
      kind: 'whatsapp',
    },
    {
      label: 'Enviar E-mail',
      message: 'Contato comercial sobre projeto premium',
      icon: 'Mail',
      kind: 'mailto',
    },
  ],
};
