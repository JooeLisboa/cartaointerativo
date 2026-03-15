export type ServiceItem = {
  label: string;
  icon: string;
  message: string;
};

export type Profile = {
  name: string;
  headline: string;
  description: string;
  location: string;
  whatsapp: string;
  email: string;
  primaryCtaMessage: string;
  services: ServiceItem[];
  stack: string[];
  profileImage: string;
};
