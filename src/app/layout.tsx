import type { Metadata } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const interTight = Inter_Tight({ subsets: ['latin'], variable: '--font-inter-tight' });

export const metadata: Metadata = {
  title: 'Jhonatan Tiburcio | Automações e Sistemas Premium',
  description:
    'Automações, sistemas web, landing pages e dashboards com execução premium para negócios modernos.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${interTight.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
