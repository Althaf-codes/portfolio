export const categories = ['All', 'Flutter / Mobile', 'Full Stack', 'Web / Frontend', 'AI / Automation'] as const;
export type Category = typeof categories[number];
export interface ProjectMedia {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  source: string;
}
export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  summary: string;
  description: string;
  dateRange: string | null;
  status: 'Independent project' | 'Independent recreation' | 'Academic project';
  role: string;
  projectType: string;
  categories: Category[];
  capabilities: string[];
  stack: string[];
  featured: boolean;
  featuredOrder?: number;
  archiveOrder?: number;
  ownership: string;
  implemented: string[];
  planned: string[];
  media: ProjectMedia[];
  links: { label: string; href: string }[];
  caseStudy: { context: string; architecture: { title: string; detail: string }[]; reflection?: string; flow?: { label: string; detail: string }[]; evidence?: string; limitation?: string };
}
