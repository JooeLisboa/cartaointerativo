import Link from 'next/link';
import { notFound } from 'next/navigation';

import { CinematicBackground } from '@/components/cinematic-background';
import { NicheFloatingCta } from '@/components/niche/niche-floating-cta';
import { NicheFooter } from '@/components/niche/niche-footer';
import { NicheHero } from '@/components/niche/niche-hero';
import { InfluencerPremiumDemo } from '@/components/niche/influencer-premium-demo';
import { NicheLinks } from '@/components/niche/niche-links';
import { NicheProof } from '@/components/niche/niche-proof';
import { NicheServices } from '@/components/niche/niche-services';
import { OticaPremiumDemo } from '@/components/niche/otica-premium-demo';
import { PremiumParticles } from '@/components/premium-particles';
import { nicheCards } from '@/data/niche-cards';

export const generateStaticParams = async () => nicheCards.map((item) => ({ slug: item.slug }));

export default function NichePage({ params }: { params: { slug: string } }) {
  const niche = nicheCards.find((item) => item.slug === params.slug);

  if (!niche) {
    notFound();
  }
  if (params.slug === 'otica') {
    return <OticaPremiumDemo />;
  }

  if (params.slug === 'influencer') {
    return <InfluencerPremiumDemo />;
  }


  return (
    <main className="relative min-h-screen overflow-hidden bg-bgDeep px-4 py-8 pb-24 text-textStrong sm:px-6">
      <CinematicBackground />
      <PremiumParticles />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-5">
        <div className="flex gap-2 text-sm text-textSoft">
          <Link href="/" className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
            Home
          </Link>
          <Link href="/portfolio" className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
            Portfólio
          </Link>
        </div>
        <NicheHero niche={niche} />
        <NicheProof items={niche.proofItems} />
        <NicheServices niche={niche} />
        <NicheLinks title="Serviços e ações" links={niche.serviceLinks} />
        <NicheLinks title="Social e presença" links={niche.socialLinks} />
        <NicheFooter niche={niche} />
      </div>
      <NicheFloatingCta message={niche.primaryCtaMessage} />
    </main>
  );
}
