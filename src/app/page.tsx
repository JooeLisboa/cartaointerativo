import { CinematicBackground } from '@/components/cinematic-background';
import { HeroIdentity } from '@/components/hero-identity';
import { MagneticActionButtons } from '@/components/magnetic-action-buttons';
import { PremiumFooter } from '@/components/premium-footer';
import { PremiumParticles } from '@/components/premium-particles';
import { TechSignature } from '@/components/tech-signature';
import { profile } from '@/data/profile';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-bgDeep px-4 py-8 text-textStrong sm:px-6">
      <CinematicBackground />
      <PremiumParticles />

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col gap-5">
        <HeroIdentity profile={profile} />
        <MagneticActionButtons profile={profile} />
        <TechSignature profile={profile} />
        <PremiumFooter profile={profile} />
      </div>
    </main>
  );
}
