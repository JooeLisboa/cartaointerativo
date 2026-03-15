import { PortfolioItem } from '@/types/portfolio';

import { NicheCard } from './niche-card';

export const NicheGrid = ({ items }: { items: PortfolioItem[] }) => (
  <section className="grid gap-4 md:grid-cols-2">
    {items.map((item, index) => (
      <NicheCard key={item.slug} item={item} index={index} />
    ))}
  </section>
);
