export interface ShowcaseSubTab {
  id: string;
  label: string;
  urlPath?: string;
  img: string;
  alt: string;
}

export interface ShowcaseItem {
  id: string;
  badge: string;
  title: string;
  desc: string;
  img: string;
  fallbackImg?: string;
  alt: string;
  tabs?: ShowcaseSubTab[];
  switchLabel?: string;
  keyPoints?: string[];
}

export interface QuickHighlight {
  title: string;
  desc: string;
  icon?: string;
  colorClass?: string; // e.g. "text-primary", "text-secondary", "text-accent"
}

export interface ArchitecturePillar {
  icon: string;
  title: string;
  desc: string;
}

export interface SubPageFeature {
  name: string;
  route: string;
  badge: string;
  desc: string;
  features: string[];
}

export interface SubPageCategory {
  title: string;
  icon: string;
  badge: string;
  pages: SubPageFeature[];
}

export interface DetailedViewsSection {
  title: string;
  subtitle: string;
  stockSection: SubPageCategory;
  etfSection: SubPageCategory;
}

export interface CaseStudyLocale {
  breadcrumb: {
    backToProjects: string;
  };
  hero: {
    badge: string;
    productionBadge?: string;
    title: string;
    subtitle: string;
    liveTerminalBtn?: string;
    githubBtn?: string;
  };
  quickHighlights: QuickHighlight[];
  gallery: {
    title: string;
    subtitle: string;
    items: ShowcaseItem[];
  };
  detailedViews?: DetailedViewsSection;
  architecture?: {
    title: string;
    subtitle: string;
    pillars: ArchitecturePillar[];
  };
  footer: {
    backToAllProjects: string;
    githubBtn?: string;
    liveTerminalBtn?: string;
  };
}
