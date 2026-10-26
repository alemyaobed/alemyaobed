import { ABOUT } from '../content'
import { Section } from './Section'

/**
 * Short professional introduction drawn from the owner's real story.
 * @returns The about section element.
 */
export function About() {
  return (
    <Section id="about" title={ABOUT.heading}>
      <div className="mx-auto max-w-2xl space-y-4">
        {ABOUT.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="m-0 leading-7 text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  )
}
