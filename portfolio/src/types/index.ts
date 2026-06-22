export type Theme = 'dark' | 'light'
export type Lang = 'es' | 'en'

export interface MetaItem {
  label: string
  value: string
}

export interface SkillCategory {
  title: string
  tags: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  bullets: string[]
}

export interface Project {
  title: string
  description: string
  stack: string[]
  githubUrl?: string
}

export interface Translations {
  nav: {
    about: string
    skills: string
    experience: string
    projects: string
    contact: string
  }
  hero: {
    eyebrow: string
    description: string
    btnProjects: string
    btnContact: string
    typedPhrases: string[]
  }
  about: {
    label: string
    title: string
    paragraphs: string[]
    meta: MetaItem[]
  }
  skills: {
    label: string
    title: string
    categories: SkillCategory[]
  }
  experience: {
    label: string
    title: string
    items: ExperienceItem[]
  }
  projects: {
    label: string
    title: string
    items: Project[]
    viewOnGithub: string
  }
  contact: {
    label: string
    title: string
    description: string
  }
  footer: string
}
