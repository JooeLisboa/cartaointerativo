import { Mail, MapPin } from 'lucide-react';

import { Profile } from '@/types/profile';

type PremiumFooterProps = {
  profile: Profile;
};

export const PremiumFooter = ({ profile }: PremiumFooterProps) => {
  return (
    <footer className="mt-10 rounded-2xl border border-white/10 bg-[#111827]/60 px-5 py-4 backdrop-blur-md">
      <div className="flex flex-col gap-2 text-xs text-textSoft sm:flex-row sm:items-center sm:justify-between">
        <p className="inline-flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" />
          {profile.location}
        </p>
        <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 transition hover:text-cyan-100">
          <Mail className="h-3.5 w-3.5" />
          {profile.email}
        </a>
      </div>
      <p className="mt-3 text-[11px] tracking-[0.14em] text-textSoft/70">
        Crafted for premium digital positioning.
      </p>
    </footer>
  );
};
