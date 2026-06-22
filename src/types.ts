export interface PersonalInfo {
  name: string;
  title: string;
  email?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
}

export type SectionType = 'text' | 'experience' | 'projects' | 'list'; // Added 'list'

export interface Section {
  title: string;
  type: SectionType;
  content?: string;
  items?: (ExperienceItem | ProjectItem | ListItem)[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  dates: string;
  description: string;
  responsibilities?: string[];
}

export interface ProjectItem {
  title: string;
  description?: string;
  technologies?: string;
}

export type ListItem = { content: string };

export interface SkillsMatrixItem {
  category: string;
  tools: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  skillsMatrix?: SkillsMatrixItem[];
  sections: Section[];
}