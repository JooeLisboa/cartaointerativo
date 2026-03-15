import { Profile } from '@/types/profile';

export const profile: Profile = {
  name: 'Jhonatan Tiburcio',
  role: 'Criador de experiências digitais premium',
  headline: 'Landing Pages e Cartões Interativos com visual premium',
  description: 'Projetos pensados para destacar marcas e transformar visitas em contato.',
  location: 'Bauru/SP, Brasil',
  email: 'lisboatiburcio@gmail.com',
  whatsapp: '+55 14 99124-2019',
  profileImage: '/profile.jpg',
  premiumChips: ['Design premium', 'Conversão estratégica', 'Experiência mobile-first'],
  credibilityPoints: ['+6 anos em produtos digitais', 'Entrega com foco em conversão', 'Fluxo premium para negócios locais e especialistas'],
  primaryCtaMessage:
    'Olá Jhonatan, vi sua apresentação premium e quero iniciar um projeto para meu negócio.',
  portfolioLabel: 'Ver Modelos Premium',
  stack: ['Next.js 14', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
  serviceActions: [
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
      label: 'Dashboards e Automação',
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
