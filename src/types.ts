export interface Project {
  id: number;
  title: string;
  category: 'Reels' | 'Events' | 'Trending' | 'Promotional';
  reelUrl: string;
  reelId: string;
  duration: string;
  skills: string[];
  software: string[];
  aspectRatio: '9:16' | '16:9';
  description: string;
  accentColor: string;
  thumbnail: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  level: number;
  iconName: string;
  description: string;
  tools: string;
}

export interface SoftwareItem {
  name: string;
  level: number;
  badge: string;
  color: string;
  role: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  badge?: string;
}

export interface TimelineClip {
  id: string;
  title: string;
  track: 'V3' | 'V2' | 'V1' | 'A1' | 'A2';
  startPercent: number;
  widthPercent: number;
  color: string;
  tag: string;
  details?: string;
}

export interface TimelineMarker {
  id: string;
  label: string;
  timecode: string;
  percent: number;
  color: string;
}
