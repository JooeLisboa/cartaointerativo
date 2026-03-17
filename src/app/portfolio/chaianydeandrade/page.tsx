import type { Metadata } from 'next';
import Link from 'next/link';

import { CelebrityActionList } from '@/components/celebrity/celebrity-action-list';
import { CelebrityBackground } from '@/components/celebrity/celebrity-background';
import { CelebrityFooter } from '@/components/celebrity/celebrity-footer';
import { CelebrityHero } from '@/components/celebrity/celebrity-hero';
import { CelebrityHighlightBanner } from '@/components/celebrity/celebrity-highlight-banner';
import { CelebrityStats } from '@/components/celebrity/celebrity-stats';
import { celebrityCards } from '@/data/celebrity-cards';

const chaianyCard = celebrityCards.chaianydeandrade;

export const metadata: Metadata = {
  title: 'Chaiany Andrade | Cartão premium BBB26',
  description: 'Hub oficial premium de Chaiany Andrade com foco em presença digital e contato comercial.',
};

export default function ChaianyAndradePortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1B120B] px-4 py-7 pb-20 text-[#FFF4DA] sm:px-6">
      <CelebrityBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col gap-4">
        <div className="flex gap-2 text-xs text-[#F6D8A4]">
          <Link
            href="/"
            className="rounded-full border border-[rgba(245,158,11,0.22)] bg-[rgba(41,24,12,0.74)] px-4 py-2 backdrop-blur-xl transition hover:border-[rgba(245,158,11,0.4)]"
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="rounded-full border border-[rgba(245,158,11,0.22)] bg-[rgba(41,24,12,0.74)] px-4 py-2 backdrop-blur-xl transition hover:border-[rgba(245,158,11,0.4)]"
          >
            Portfólio
          </Link>
        </div>

        <CelebrityHero profile={chaianyCard} />
        <CelebrityActionList actions={chaianyCard.actions} />
        <CelebrityStats metrics={chaianyCard.metrics} />
        <CelebrityHighlightBanner title={chaianyCard.spotlightTitle} text={chaianyCard.spotlightText} />
        <CelebrityFooter lines={chaianyCard.infoLines} />
      </div>
    </main>
  );
}
