import { EXPERIENCE_ENTRIES, EXPERIENCE_HEADING } from '../content'
import { Section } from './Section'

/**
 * Experience and education as centered entries with period pills, in
 * keeping with the reference's centered layout.
 * @returns The experience section element.
 */
export function Experience() {
  return (
    <Section id="experience" title={EXPERIENCE_HEADING}>
      <div className="mx-auto max-w-2xl space-y-8">
        {EXPERIENCE_ENTRIES.map((entry) => (
          <article key={entry.title}>
            <span className="rounded-full border border-line bg-pill px-3 py-1 font-mono text-xs text-muted">
              {entry.period}
            </span>
            <h3 className="mt-3 text-lg font-medium text-ink">{entry.title}</h3>
            <p className="m-0 text-sm text-accent">{entry.organization}</p>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted">
              {entry.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
