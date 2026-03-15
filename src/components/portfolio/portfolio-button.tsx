import Link from 'next/link';

export const PortfolioButton = ({ label }: { label: string }) => (
  <Link
    href="/portfolio"
    className="inline-flex items-center justify-center rounded-full border border-violet-200/40 bg-gradient-to-r from-fuchsia-500/35 via-violet-500/35 to-cyan-500/30 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_70px_-35px_rgba(168,85,247,0.8)] transition hover:scale-[1.01]"
  >
    {label}
  </Link>
);
