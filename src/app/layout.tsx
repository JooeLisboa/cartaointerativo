import type { Metadata } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const interTight = Inter_Tight({ subsets: ['latin'], variable: '--font-inter-tight' });

export const metadata: Metadata = {
  title: 'Jhonatan Tiburcio | Portfólio Premium de Landing Pages e Cartões Interativos',
  description:
    'Sistema premium de apresentação pessoal e demos por nicho para vender landing pages e cartões interativos com alta conversão.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${interTight.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
