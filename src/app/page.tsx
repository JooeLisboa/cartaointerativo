import { CinematicBackground } from '@/components/cinematic-background';
import { HeroIdentity } from '@/components/hero-identity';
import { MagneticActionButtons } from '@/components/magnetic-action-buttons';
import { PremiumFooter } from '@/components/premium-footer';
import { PremiumParticles } from '@/components/premium-particles';
import { TechSignature } from '@/components/tech-signature';
import { profile } from '@/data/profile';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-bgDeep px-4 py-6 text-textStrong sm:px-6 sm:py-8">
      <CinematicBackground />
      <PremiumParticles />
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col gap-8 sm:gap-10">
        <HeroIdentity profile={profile} />

        <section className="space-y-3">
          <h2 className="text-[10px] uppercase tracking-[0.24em] text-textSoft">Serviços</h2>
          <MagneticActionButtons profile={profile} />
        </section>

        <TechSignature profile={profile} />
        <PremiumFooter profile={profile} />
      </div>
    </main>
  );
}
