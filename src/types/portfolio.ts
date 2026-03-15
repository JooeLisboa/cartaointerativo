export type PortfolioItem = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  ctaLabel: string;
};

export type PortfolioContent = {
  heading: string;
  subheading: string;
  items: PortfolioItem[];
};
