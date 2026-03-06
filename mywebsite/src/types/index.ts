export interface Work {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
  date: string;
  content?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface CareerItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  current?: boolean;
  jobType?: "intern" | "part-time-long" | "part-time-short" | "full-time";
  url?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}
