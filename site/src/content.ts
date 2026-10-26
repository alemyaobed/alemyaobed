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
  role: 'Software Engineer',
  location: 'Kumasi, Ghana',
  greeting: "Hello, I'm",
  tagline:
    'I build scalable backend systems, APIs and real-time applications, and I am working my way toward data science.',
  availability: 'Open to opportunities',
  pageTitle: 'Obed Alemya, Software Engineer',
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

export const CODE_CARD_TITLE = 'engineer.js'

export const CODE_CARD_BANNER =
  'Open to new opportunities - let’s build something together!'

export const CODE_CARD_LINES: CodeLine[] = [
  [
    { text: 'const ', tone: 'keyword' },
    { text: 'engineer', tone: 'key' },
    { text: ' = {', tone: 'plain' },
  ],
  [
    { text: '  name: ', tone: 'plain' },
    { text: "'Obed Alemya'", tone: 'string' },
    { text: ',', tone: 'plain' },
  ],
  [
    { text: '  role: ', tone: 'plain' },
    { text: "'Software Engineer'", tone: 'string' },
    { text: ',', tone: 'plain' },
  ],
  [
    { text: '  location: ', tone: 'plain' },
    { text: "'Kumasi, Ghana'", tone: 'string' },
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
    { text: '  frontend: [', tone: 'plain' },
    { text: "'React'", tone: 'string' },
    { text: ', ', tone: 'plain' },
    { text: "'TypeScript'", tone: 'string' },
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
    { text: '  cloud: [', tone: 'plain' },
    { text: "'AWS'", tone: 'string' },
    { text: ', ', tone: 'plain' },
    { text: "'Docker'", tone: 'string' },
    { text: ', ', tone: 'plain' },
    { text: "'GitHub Actions'", tone: 'string' },
    { text: '],', tone: 'plain' },
  ],
  [
    { text: '  next: ', tone: 'plain' },
    { text: "'data science'", tone: 'string' },
    { text: ',', tone: 'plain' },
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
    "I'm a software engineer from Kumasi, Ghana. I hold a First Class BSc in Computer Science from KNUST (2019 - 2023) and completed the ALX Software Engineering Program with a backend specialisation. At Amazéthu I grew from intern to junior engineer to my current role in cloud and infrastructure, where I own cost optimization and platform decisions on a production AWS estate.",
    'Along the way I drove QA automation with Playwright that cut deployment errors by 20%, built TekNotify (Django, RabbitMQ, Celery) at KNUST University IT Services, and took 2nd place at the 2023 DIGILOG hackathon. My toolkit spans Python and TypeScript backends, React frontends, PostgreSQL, MongoDB and MySQL, shipped with AWS, Docker and GitHub Actions.',
    "Software engineer today, data scientist in the making: I've been working around AI-powered systems and cloud infrastructure, and I'm steadily building toward data science and analytics.",
  ],
} as const

// --- Work ---

export const WORK_HEADING = 'Featured work'
export const WORK_CARD_CTA = 'View project'

export const WORK_VIEW_ALL: LinkItem = {
  label: 'View all on GitHub',
  href: 'https://github.com/alemyaobed?tab=repositories',
}

export const PROJECTS: Project[] = [
  {
    title: 'cu.rl',
    description:
      'URL shortener with platform, OS and location analytics. Django, DRF and PostgreSQL.',
    tags: ['Django', 'DRF', 'PostgreSQL'],
    href: 'https://github.com/alemyaobed/cu.rl',
  },
  {
    title: 'Inventory Management System',
    description:
      'Stock-level tracking service built with FastAPI and PostgreSQL.',
    tags: ['FastAPI', 'PostgreSQL', 'Python'],
    href: 'https://github.com/alemyaobed/Inventory_Management_System',
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'Real-time chat over WebSockets with Node.js, Express and MongoDB.',
    tags: ['Node.js', 'Express.js', 'MongoDB'],
    href: 'https://github.com/alemyaobed/Real-Time_Chat_Application',
  },
  {
    title: 'Pocket Bank',
    description:
      'Banking app with Django REST: accounts, transactions, loans and financial reporting.',
    tags: ['Django', 'DRF', 'SQLite'],
    href: 'https://github.com/alemyaobed/Pocket_Bank',
  },
  {
    title: 'Billable Hours Invoicing',
    description:
      'Web app that generates invoices from employee timesheets based on billable hours.',
    tags: ['Django', 'Python'],
    href: 'https://github.com/alemyaobed/billable-hours-invoicing',
  },
  {
    title: 'Airbnb Clone',
    description:
      'ALX capstone: simplified Airbnb with Nginx load balancing, Puppet, Certbot and Datadog.',
    tags: ['Flask', 'Nginx', 'Puppet'],
    href: 'https://github.com/alemyaobed/AirBnB_clone_v4',
  },
]

// --- Skills ---

export const SKILLS_HEADING = 'Technologies I work with'

export const SKILL_GROUPS: SkillGroup[] = [
  { label: 'Languages', skills: ['Python', 'TypeScript', 'JavaScript', 'C', 'C#', 'SQL'] },
  {
    label: 'Frameworks & runtimes',
    skills: [
      'Django',
      'DRF',
      'Flask',
      'FastAPI',
      'Node.js',
      'Express.js',
      'React',
      'Redux',
      'jQuery',
      'Bootstrap',
      'Tailwind CSS',
      'ASP.NET Core',
    ],
  },
  { label: 'Data', skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'MSSQL'] },
  {
    label: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'GitHub Actions', 'Nginx', 'HAProxy', 'Puppet', 'Certbot', 'Linux', 'Git'],
  },
  {
    label: 'Practices & tooling',
    skills: ['TDD', 'Playwright', 'RabbitMQ', 'Celery', 'Firebase', 'Sphinx', 'JSDoc'],
  },
]

// --- Experience ---

export const EXPERIENCE_HEADING = 'Experience'

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    period: 'Jan 2026 - Present',
    title: 'Software Engineer, Cloud & Infrastructure',
    organization: 'Amazéthu (Remote)',
    description:
      'Own the low-cost infrastructure project: mapped the production AWS estate (ECS Fargate, ECR, S3, CloudWatch, API Gateway), drove cost optimization that reduced the monthly bill, authored the cloud migration analysis and validated new Render infrastructure. Also direct hiring strategy and retention analytics.',
  },
  {
    period: 'Apr 2025 - Jan 2026',
    title: 'Junior Software Engineer',
    organization: 'Amazéthu (Remote)',
    description:
      'Built features across React, Node.js/Express and FastAPI, including a Google Calendar reminder feature with recurrence rules. Drove QA automation with Playwright and automated failure alerts, cutting deployment errors by 20%.',
  },
  {
    period: 'Dec 2024 - Apr 2025',
    title: 'Software Engineer Intern',
    organization: 'Amazéthu (Remote)',
    description:
      'Shipped React features (Firebase Auth, responsive Tailwind UI), contributed to Express and FastAPI services, and supported CI/CD with Playwright user-flow tests.',
  },
  {
    period: 'Nov 2023 - Dec 2024',
    title: 'Software Engineer, National Service & ICT Assistant',
    organization: 'KNUST University IT Services',
    description:
      'Built TekNotify, a Django, RabbitMQ and Celery bulk-messaging system with Paystack payments; developed a C#/ASP.NET endowment system; modeled databases and wrote stored procedures.',
  },
  {
    period: 'Jul 2023 - Aug 2024',
    title: 'Software Engineering Program, Backend',
    organization: 'ALX (Holberton affiliated)',
    description:
      'Twelve-month intensive programme; ALX-backend portfolio including an Airbnb clone with Nginx, Puppet, Certbot and Datadog.',
  },
  {
    period: '2019 - 2023',
    title: 'BSc Computer Science, First Class',
    organization: 'KNUST',
    description: 'Kwame Nkrumah University of Science and Technology, Kumasi.',
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
]

export const CV_REQUEST_SUBJECT = 'CV request for Obed Alemya'
export const CV_REQUEST_BODY =
  'Hi Obed,\n\nI found your portfolio and would like to request your CV.\n\n'

// --- Footer ---

export const FOOTER = {
  tagline: 'Engineering today, data science tomorrow.',
  stack: 'Built with React, TypeScript and Tailwind CSS.',
  rights: '© 2026 Obed Alemya. All rights reserved.',
} as const
