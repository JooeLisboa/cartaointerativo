export type NicheLink = {
  label: string;
  href: string;
  icon: string;
  kind: 'whatsapp' | 'external' | 'map';
};

export type NicheProofItem = {
  label: string;
  value: string;
};

export type NicheCard = {
  slug: string;
  nicheName: string;
  headline: string;
  subheadline: string;
  description: string;
  featuredNote: string;
  footerNote: string;
  locationText: string;
  primaryCtaMessage: string;
  contactLabels: {
    whatsapp: string;
    email: string;
  };
  chips: string[];
  serviceLinks: NicheLink[];
  socialLinks: NicheLink[];
  proofItems: NicheProofItem[];
  theme: {
    base: string;
    accent: string;
    glow: string;
  };
};
