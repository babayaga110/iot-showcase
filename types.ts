
export type SlideType = 'title' | 'intro' | 'game' | 'tech' | 'closing';

export interface GameDetails {
  duration: string;
  howItWorks: string[];
  technology: string;
  benefit: string;
  iconName: string;
}

export interface SlideData {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  content?: string[];
  gameDetails?: GameDetails;
}
