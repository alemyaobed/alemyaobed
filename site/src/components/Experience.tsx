import { EXPERIENCE_ENTRIES, EXPERIENCE_HEADING } from '../content'
import { Section } from './Section'

/**
 * Experience and education rendered as a vertical timeline.
 * @returns The experience section element.
 */
export function Experience() {
  return (
    <Section id="experience" title={EXPERIENCE_HEADING}>
      <ol className="relative ms-2 list-none space-y-10 border-s border-line p-0">
        {EXPERIENCE_ENTRIES.map((entry) => (
          <li key={entry.title} className="relative ps-6">
            <span
              className="absolute -start-[5px] mt-2 size-2.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            <p className="m-0 font-mono text-xs uppercase tracking-wider text-muted">
              {entry.period}
            </p>
            <h3 className="mt-1 text-lg font-medium text-ink">{entry.title}</h3>
            <p className="m-0 text-sm text-accent">{entry.organization}</p>
            <p className="mt-2 max-w-xl text-sm text-muted">{entry.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
