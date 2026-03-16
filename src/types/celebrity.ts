export type CelebrityActionVariant = 'primary' | 'secondary' | 'social';

export type CelebrityIconKey =
  | 'Mail'
  | 'TrendingUp'
  | 'Instagram'
  | 'Music2'
  | 'Twitter'
  | 'MessageCircleMore'
  | 'Facebook';

export interface CelebrityMetric {
  label: string;
  value: string;
}

export interface CelebrityAction {
  label: string;
  href: string;
  icon: CelebrityIconKey;
  description: string;
  external?: boolean;
  variant?: CelebrityActionVariant;
}

export interface CelebrityCard {
  slug: string;
  name: string;
  displayName: string;
  handle: string;
  subtitle: string;
  description: string;
  profileImage: string;
  commercialEmail: string;
  infoLines: string[];
  badges: string[];
  metrics: CelebrityMetric[];
  spotlightTitle: string;
  spotlightText: string;
  actions: CelebrityAction[];
}
