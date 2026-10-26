// All display text, links and configuration values for the site.
// Types live in types.ts, helpers live in utils.ts.
import type {
  CodeLine,
  ExperienceEntry,
  LinkItem,
  Project,
  SkillGroup,
} from './types'

// --- Identity ---

export const SITE = {
  name: 'Obed Alemya',
  shortName: 'obed',
  role: 'Backend Software Engineer',
  location: 'Ghana',
  greeting: "👋 Hello, I'm",
  tagline: 'I build scalable backend systems, APIs and real-time applications.',
  availability: 'Open to opportunities',
  pageTitle: 'Obed Alemya — Backend Software Engineer',
} as const

// --- Navigation ---

export const NAV_ITEMS: LinkItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

// --- Hero ---

export const HERO = {
  viewWorkCta: 'View my work',
  requestCvCta: 'Request CV',
} as const

export const CODE_CARD_TITLE = 'developer.js'

export const CODE_CARD_BANNER =
  'Open to new opportunities - let’s build something together!'

export const CODE_CARD_LINES: CodeLine[] = [
  [
    { text: 'const ', tone: 'keyword' },
    { text: 'developer', tone: 'key' },
    { text: ' = {', tone: 'plain' },
  ],
  [
    { text: '  name: ', tone: 'plain' },
    { text: "'Obed Alemya'", tone: 'string' },
    { text: ',', tone: 'plain' },
  ],
  [
    { text: '  role: ', tone: 'plain' },
    { text: "'Backend Engineer'", tone: 'string' },
    { text: ',', tone: 'plain' },
  ],
  [
    { text: '  location: ', tone: 'plain' },
    { text: "'Ghana'", tone: 'string' },
    { text: ',', tone: 'plain' },
  ],
  [
    { text: '  backend: [', tone: 'plain' },
    { text: "'Python'", tone: 'string' },
    { text: ', ', tone: 'plain' },
    { text: "'Django'", tone: 'string' },
    { text: ', ', tone: 'plain' },
    { text: "'FastAPI'", tone: 'string' },
    { text: ', ', tone: 'plain' },
    { text: "'Node.js'", tone: 'string' },
    { text: '],', tone: 'plain' },
  ],
  [
    { text: '  data: [', tone: 'plain' },
    { text: "'PostgreSQL'", tone: 'string' },
    { text: ', ', tone: 'plain' },
    { text: "'MongoDB'", tone: 'string' },
    { text: ', ', tone: 'plain' },
    { text: "'MySQL'", tone: 'string' },
    { text: '],', tone: 'plain' },
  ],
  [
    { text: '  ships: [', tone: 'plain' },
    { text: "'Docker'", tone: 'string' },
    { text: ', ', tone: 'plain' },
    { text: "'Jenkins'", tone: 'string' },
    { text: ', ', tone: 'plain' },
    { text: "'AWS'", tone: 'string' },
    { text: '],', tone: 'plain' },
  ],
  [
    { text: '  openToWork: ', tone: 'plain' },
    { text: 'true', tone: 'boolean' },
    { text: ',', tone: 'plain' },
  ],
  [{ text: '};', tone: 'plain' }],
]

// --- About ---

export const ABOUT = {
  heading: 'About',
  paragraphs: [
    "I'm a software engineer from Ghana who specialises in the backend: scalable services, REST APIs and real-time applications. I hold a BSc in Computer Science from KNUST and completed the ALX Software Engineering Program.",
    'Most days I write Python and Node.js across Django, Flask, FastAPI and Express, back them with PostgreSQL, MongoDB or MySQL, and ship them with Docker, Jenkins and AWS. Right now I am going deeper on Kubernetes, real-time systems and microservices - and I am always glad to collaborate on impactful projects and open source.',
  ],
} as const

// --- Work ---

export const WORK_HEADING = 'Featured work'
export const WORK_CARD_CTA = 'View project'

export const WORK_VIEW_ALL: LinkItem = {
  label: 'View all on GitHub',
  href: 'https://github.com/alemyaobed?tab=repositories',
}

// TODO(owner): replace these placeholder cards with real projects.
export const PROJECTS: Project[] = [
  {
    title: 'Project one',
    description:
      'Placeholder card. Replace with a real project, what it does and the outcome it delivered.',
    tags: ['Python', 'Django', 'PostgreSQL'],
    href: 'https://github.com/alemyaobed',
  },
  {
    title: 'Project two',
    description:
      'Placeholder card. Replace with a real project, what it does and the outcome it delivered.',
    tags: ['Node.js', 'Express.js', 'MongoDB'],
    href: 'https://github.com/alemyaobed',
  },
  {
    title: 'Project three',
    description:
      'Placeholder card. Replace with a real project, what it does and the outcome it delivered.',
    tags: ['FastAPI', 'Docker', 'AWS'],
    href: 'https://github.com/alemyaobed',
  },
]

// --- Skills ---

export const SKILLS_HEADING = 'Technologies I work with'

export const SKILL_GROUPS: SkillGroup[] = [
  { label: 'Languages', skills: ['Python', 'JavaScript', 'C', 'C++', 'SQL'] },
  {
    label: 'Frameworks & runtimes',
    skills: ['Django', 'Flask', 'FastAPI', 'Node.js', 'Express.js'],
  },
  { label: 'Databases', skills: ['PostgreSQL', 'MongoDB', 'MySQL'] },
  {
    label: 'DevOps & cloud',
    skills: ['Docker', 'HAProxy', 'Jenkins', 'AWS', 'Kubernetes', 'Git'],
  },
]

// --- Experience ---

export const EXPERIENCE_HEADING = 'Experience'

// TODO(owner): replace the placeholder role with real work history and periods.
export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    period: '—',
    title: 'Software Engineer',
    organization: 'Company to be added',
    description:
      'Placeholder entry. Replace with the most recent role, what was built and the measurable outcome.',
  },
  {
    period: '—',
    title: 'Software Engineering Program',
    organization: 'ALX',
    description: 'Completed the intensive ALX software engineering programme.',
  },
  {
    period: '—',
    title: 'BSc Computer Science',
    organization: 'KNUST',
    description: 'Degree in Computer Science.',
  },
]

// --- Contact ---

export const CONTACT = {
  heading: "Let's work together",
  lead: 'Have a project in mind? I am ready to help.',
  emailCta: 'Email me',
  email: 'alemyaobed@gmail.com',
} as const

export const SOCIALS: LinkItem[] = [
  { label: 'GitHub', href: 'https://github.com/alemyaobed' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alemyaobed/' },
  { label: 'X', href: 'https://x.com/lemyjay_' },
  { label: 'WhatsApp', href: 'https://wa.me/233531376875' },
]

export const CV_REQUEST_SUBJECT = 'CV request — Obed Alemya'
export const CV_REQUEST_BODY =
  'Hi Obed,\n\nI found your portfolio and would like to request your CV.\n\n'

// --- Footer ---

export const FOOTER = {
  tagline: 'Building backend systems that scale.',
  stack: 'Built with React, TypeScript and Tailwind CSS.',
  rights: '© 2026 Obed Alemya. All rights reserved.',
} as const
