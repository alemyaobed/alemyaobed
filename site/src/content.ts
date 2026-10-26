// All display text, links and configuration values for the site.
// Types live in types.ts, helpers live in utils.ts.
import type {
  CodeLine,
  ExperienceEntry,
  LinkItem,
  Project,
  ResumeRole,
  ResumeSkills,
  SkillGroup,
  Stat,
  ValueProp,
} from './types'

// --- Identity ---

export const SITE = {
  name: 'Obed Alemya',
  shortName: 'obed',
  role: 'Software Engineer',
  location: 'Kumasi, Ghana',
  greeting: "Hello, I'm",
  tagline: 'I build scalable backend systems, APIs and real-time applications.',
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
  portraitAlt: 'Portrait of Obed Alemya',
  portraitSrc: '/avatar-256.png',
} as const

// --- Stats bar ---

/** Highlight numbers under the hero, each traced to evidence. */
export const STATS: Stat[] = [
  { value: '3+', label: 'Years of experience' },
  { value: '85%', label: 'Cloud cost reduction' },
  { value: '20%', label: 'Fewer deployment errors' },
  { value: '48', label: 'Public repositories' },
]

/** The three-line working story shown as columns. */
export const VALUE_PROPS: ValueProp[] = [
  {
    title: 'Build',
    text: 'Backend systems, APIs and real-time features that hold up in production.',
  },
  {
    title: 'Ship',
    text: 'CI/CD, Playwright tests and cost-aware infrastructure around everything I build.',
  },
  {
    title: 'Measure',
    text: 'Numbers before claims: evaluation harnesses, retention analytics, cost tracking.',
  },
]

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
    { text: "'Render'", tone: 'string' },
    { text: ', ', tone: 'plain' },
    { text: "'AWS'", tone: 'string' },
    { text: ', ', tone: 'plain' },
    { text: "'Docker'", tone: 'string' },
    { text: ', ', tone: 'plain' },
    { text: "'GitHub Actions'", tone: 'string' },
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
    "I'm a software engineer from Kumasi, Ghana. I hold a First Class BSc in Computer Science from KNUST (2019 - 2023) and completed the ALX Software Engineering Program with a backend specialisation. At Amazéthu I grew from intern to junior engineer to my current role in cloud and infrastructure, where I led the assessment and migration of our production infrastructure from AWS to Render.",
    'Along the way I drove QA automation with Playwright that cut deployment errors by 20%, built TekNotify (Django, RabbitMQ, Celery) at KNUST University IT Services, and took 2nd place at the 2023 DIGILOG hackathon. My toolkit spans Python and TypeScript backends, React frontends, PostgreSQL, MongoDB and MySQL, shipped with GitHub Actions and Docker.',
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
    title: 'Craftsman Locator',
    description:
      'A live product: find shops and craftsmen in Sunyani, Ghana. Deployed and running in production on a custom domain.',
    tags: ['TypeScript', 'Vite', 'Vercel'],
    href: 'https://craftsmangh.com',
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'Real-time chat over WebSockets with Node.js, Express and MongoDB.',
    tags: ['Node.js', 'Express.js', 'MongoDB'],
    href: 'https://github.com/alemyaobed/Real-Time_Chat_Application',
  },
  {
    title: 'cu.rl',
    description:
      'URL shortener with platform, OS and location analytics. Django, DRF and PostgreSQL.',
    tags: ['Django', 'DRF', 'PostgreSQL'],
    href: 'https://github.com/alemyaobed/cu.rl',
  },
  {
    title: 'Pocket Bank',
    description:
      'Banking app with Django REST: accounts, transactions, loans and financial reporting.',
    tags: ['Django', 'DRF', 'SQLite'],
    href: 'https://github.com/alemyaobed/Pocket_Bank',
  },
  {
    title: 'Automated Fish Feeder System',
    description:
      'IoT final-year project: a sensor-driven control system for feeding and water management that cut manual labor by about 40% on small-scale farms.',
    tags: ['IoT', 'Automation', 'Sensors'],
  },
  {
    title: 'Inventory Management System',
    description:
      'Stock-level tracking service built with FastAPI and PostgreSQL.',
    tags: ['FastAPI', 'PostgreSQL', 'Python'],
    href: 'https://github.com/alemyaobed/Inventory_Management_System',
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
      'Led a project assessing our production infrastructure and its cost: documented the AWS estate, researched and compared providers, and executed the phased migration to Render, starting with the most resource-intensive service, with tag-based GitHub Actions deploys, a keep-warm workflow, DNS and SSL cutover, and end-to-end validation. Beyond infrastructure, I run the team hiring end to end, from designing the candidate questionnaire through filtering 90 applicants to technical interviews, and I build the product retention analytics.',
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

/** Standalone resume page link, used in the sidebar navigation. */
export const RESUME_NAV: LinkItem = { label: 'Resume', href: '/resume/' }

/** simple-icons slugs for skills that have a brand icon. */
export const SKILL_ICONS: Record<string, string> = {
  Python: 'python',
  TypeScript: 'typescript',
  JavaScript: 'javascript',
  C: 'c',
  Django: 'django',
  Flask: 'flask',
  FastAPI: 'fastapi',
  'Node.js': 'nodedotjs',
  'Express.js': 'express',
  React: 'react',
  Redux: 'redux',
  jQuery: 'jquery',
  Bootstrap: 'bootstrap',
  'Tailwind CSS': 'tailwindcss',
  'ASP.NET Core': 'dotnet',
  PostgreSQL: 'postgresql',
  MySQL: 'mysql',
  MongoDB: 'mongodb',
  SQLite: 'sqlite',
  Docker: 'docker',
  'GitHub Actions': 'githubactions',
  Nginx: 'nginx',
  Puppet: 'puppet',
  Linux: 'linux',
  Git: 'git',
  Firebase: 'firebase',
  RabbitMQ: 'rabbitmq',
  Celery: 'celery',
  Sphinx: 'sphinx',
}

// --- Resume page ---

/** Browser tab title for the resume page. */
export const RESUME_PAGE_TITLE = 'Obed Alemya, Resume'

/** Contact line and summary on the resume page. */
export const RESUME = {
  pageTitle: RESUME_PAGE_TITLE,
  heading: 'Obed Alemya',
  contact: 'Kumasi, Ghana · alemyaobed@gmail.com · github.com/alemyaobed · linkedin.com/in/alemyaobed',
  printCta: 'Save as PDF',
  printHint: 'Opens your browser print dialog; choose Save as PDF.',
  summary:
    'Software engineer working across backend systems, cloud infrastructure and applied LLM work. Three years of growing ownership on a production AI language-learning product: I started as an intern, and now I run its cloud infrastructure after leading a project that assessed the estate, cut its cost by roughly 85% and migrated it from AWS to Render. I build evaluation systems for AI output, I treat cost, quality and latency as engineering trade-offs, and I measure before I claim anything is done. First Class BSc in Computer Science from KNUST.',
  rolesHeading: 'Experience',
  skillsHeading: 'Skills',
  researchHeading: 'Research and projects',
  educationHeading: 'Education',
} as const

/** Work history on the resume page. */
export const RESUME_ROLES: ResumeRole[] = [
  {
    period: 'January 2026 - Present',
    title: 'Software Engineer, Cloud & Infrastructure',
    organization: 'Amazethu (Remote)',
    bullets: [
      'Led a project assessing the production infrastructure and its cost: documented the AWS estate, built the provider comparison and decision framework, and executed the phased migration to Render (heaviest service first) with tag-based GitHub Actions deploys, DNS and SSL cutover, and end-to-end validation.',
      'Runs staging and production at roughly one sixth of the previous AWS cost, balancing cost against spin-up latency with a keep-warm setup and explicit trade-off notes.',
      'Built evaluation systems for the LLM tutor: a local testbed with simulated students, content review pipelines and quality control workflows.',
      'Directs hiring strategy (questionnaire to 90 candidates, two-stage filtering, interviews) and retention analytics; found and fixed a signup event design flaw.',
    ],
  },
  {
    period: 'April 2025 - January 2026',
    title: 'Junior Software Engineer',
    organization: 'Amazethu (Remote)',
    bullets: [
      'Shipped features across React, Node.js/Express and Python (FastAPI), including a Google Calendar reminder feature with recurrence rules.',
      'Drove QA automation with Playwright user-flow tests and automated failure alerts, cutting deployment errors by 20%.',
      'Mentored interns, ran technical interviews and standardised code quality with ESLint, Black and JSDoc.',
    ],
  },
  {
    period: 'December 2024 - April 2025',
    title: 'Software Engineer Intern',
    organization: 'Amazethu (Remote)',
    bullets: [
      'Shipped React features: Firebase Authentication with custom hooks, calendar sync, responsive Tailwind UI.',
      'Contributed to Express and FastAPI services and supported CI/CD with Playwright tests.',
    ],
  },
  {
    period: 'November 2023 - January 2025',
    title: 'Software Engineer, National Service then ICT Assistant',
    organization: 'KNUST University IT Services',
    bullets: [
      'Built TekNotify, a bulk messaging system with Django, RabbitMQ, Celery and Paystack payments, plus a C#/ASP.NET endowment system.',
      'Handled database modelling, stored procedures and Sphinx documentation.',
    ],
  },
]

/** Skills rows on the resume page. */
export const RESUME_SKILLS: ResumeSkills[] = [
  { label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'C', 'C#', 'SQL'] },
  {
    label: 'Frameworks',
    items: ['Django', 'DRF', 'Flask', 'FastAPI', 'Node.js', 'Express.js', 'React', 'Tailwind CSS', 'ASP.NET Core'],
  },
  { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'MSSQL'] },
  { label: 'Cloud & DevOps', items: ['AWS', 'Render', 'Docker', 'GitHub Actions', 'Nginx', 'HAProxy', 'Linux', 'Firebase'] },
  { label: 'AI & Quality', items: ['LLM evaluation harnesses', 'Simulated-user testing', 'Prompt and content pipelines', 'Playwright', 'TDD', 'CI/CD'] },
]

/** Research and project highlights on the resume page. */
export const RESUME_RESEARCH: string[] = [
  'The Perfectionism Trap (2025): measured how iterative AI suggestions drift from original intent over fifty rounds (semantic similarity fell from 1.0 to -0.13). Built the experimental pipeline with alternating LLMs and Sentence Transformer metrics. github.com/alemyaobed/ai-perfectionism-and-semantic-drift',
  'Automated Fish Feeder System (final-year project): IoT control system with sensor feedback for feeding and water management; about 40% less manual labor on small-scale farms.',
  'cu.rl: a URL shortener with platform, OS and location analytics. Django, DRF and PostgreSQL.',
]

/** Education and honors lines on the resume page. */
export const RESUME_EDUCATION: string[] = [
  'BSc Computer Science, First Class Honours, KNUST, 2019 - 2023. ALX Software Engineering Program, backend specialisation, 2023 - 2024.',
  'Second place, DIGILOG Hackathon 2023.',
]
