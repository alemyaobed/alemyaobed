// Shared types for site content and components.

/** A labelled link used by navigation, contact buttons and the footer. */
export interface LinkItem {
  label: string
  href: string
}

/** One coloured chunk of text inside the developer.js editor card. */
export interface CodeToken {
  text: string
  tone: 'plain' | 'key' | 'string' | 'keyword' | 'boolean' | 'comment'
}

/** One numbered line of the developer.js editor card. */
export type CodeLine = CodeToken[]

/** A featured project card. */
export interface Project {
  title: string
  description: string
  tags: string[]
  href: string
}

/** A titled group of skill pills. */
export interface SkillGroup {
  label: string
  skills: string[]
}

/** An experience or education timeline entry. */
export interface ExperienceEntry {
  period: string
  title: string
  organization: string
  description: string
}
