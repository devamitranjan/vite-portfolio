export interface AboutMeData {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  categoryName: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveLink?: string;
  repoLink?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  achievements: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  iconClass: string; // e.g., "fab fa-linkedin", "fab fa-github"
}

export interface ResumeData {
  url: string; // e.g., "/resume.pdf"
  downloadName: string; // e.g., "AmitRanjan-Resume.pdf"
}

export interface ContactPageData {
  scheduleLink: string;
}

export interface HeaderData {
  logoUrl: string;
}

export interface GauntletVisualData {
  profileImageUrl: string;
}

export interface PortfolioData {
  aboutMe: AboutMeData;
  skillCategories: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
  socialLinks: SocialLink[];
  resume: ResumeData;
  contact: ContactPageData;
  header: HeaderData;
  gauntletVisual: GauntletVisualData;
}
