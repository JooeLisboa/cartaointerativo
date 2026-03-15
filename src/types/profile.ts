export type ServiceAction = {
  label: string;
  message: string;
  icon: string;
  kind: 'whatsapp' | 'mailto';
};

export type Profile = {
  name: string;
  role: string;
  headline: string;
  description: string;
  location: string;
  email: string;
  whatsapp: string;
  profileImage: string;
  premiumChips: string[];
  credibilityPoints: string[];
  primaryCtaMessage: string;
  portfolioLabel: string;
  stack: string[];
  serviceActions: ServiceAction[];
};
