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

export interface ListItem {
  content: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  sections: Section[];
}