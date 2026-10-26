import {
  PROJECTS,
  WORK_CARD_CTA,
  WORK_HEADING,
  WORK_VIEW_ALL,
} from '../content'
import { Section } from './Section'

/**
 * Featured work grid in the reference's card shape: a gradient tile
 * with the project's initial, title, description, tech chips and an
 * arrow link.
 * @returns The work section element.
 */
export function Work() {
  return (
    <Section id="work" title={WORK_HEADING}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-line transition-shadow hover:shadow-lg"
          >
            <div className="flex aspect-video items-center justify-center rounded-t-xl border-b border-line bg-gradient-to-br from-accent/25 via-panel to-accent/5">
              <span className="font-mono text-4xl text-accent">
                {project.title.slice(0, 1)}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="m-0 text-lg font-medium text-ink">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted">{project.description}</p>
              <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-panel px-3 py-1 font-mono text-xs text-ink"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 text-sm text-accent hover:underline"
              >
                {WORK_CARD_CTA} →
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-10 text-left">
        <a
          href={WORK_VIEW_ALL.href}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-accent hover:underline"
        >
          {WORK_VIEW_ALL.label} →
        </a>
      </p>
    </Section>
  )
}
