import { Mail, MapPin } from 'lucide-react';

import { Profile } from '@/types/profile';

export const PremiumFooter = ({ profile }: { profile: Profile }) => (
  <footer className="rounded-2xl border border-white/10 bg-slate-950/45 px-5 py-4 backdrop-blur-xl">
    <div className="flex flex-col gap-2 text-xs text-textSoft sm:flex-row sm:items-center sm:justify-between">
      <p className="inline-flex items-center gap-1.5">
        <MapPin className="h-3.5 w-3.5" />
        {profile.location}
      </p>
      <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-cyan-100">
        <Mail className="h-3.5 w-3.5" />
        {profile.email}
      </a>
    </div>
    <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-textSoft/70">Premium portfolio & sales system.</p>
  </footer>
);
