import Link from 'next/link';

import { CinematicBackground } from '@/components/cinematic-background';
import { PremiumParticles } from '@/components/premium-particles';
import { NicheCtaBanner } from '@/components/portfolio/niche-cta-banner';
import { NicheGrid } from '@/components/portfolio/niche-grid';
import { NichePreview } from '@/components/portfolio/niche-preview';
import { PortfolioHero } from '@/components/portfolio/portfolio-hero';
import { portfolioContent } from '@/data/portfolio';

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-bgDeep px-4 py-8 text-textStrong sm:px-6">
      <CinematicBackground />
      <PremiumParticles />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-5">
        <div className="flex justify-between text-sm text-textSoft">
          <Link href="/" className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
            Voltar para Home
          </Link>
        </div>
        <PortfolioHero heading={portfolioContent.heading} subheading={portfolioContent.subheading} />
        <NicheGrid items={portfolioContent.items} />
        <NichePreview />
        <NicheCtaBanner />
      </div>
    </main>
  );
}
