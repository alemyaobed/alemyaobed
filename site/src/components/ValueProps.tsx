import { VALUE_PROPS } from '../content'
import { Section } from './Section'

/**
 * The three-column working story (Build, Ship, Measure) shown between
 * the skills and experience sections.
 * @returns The value propositions element.
 */
export function ValueProps() {
  return (
    <Section id="how-i-work" title="What I do">
      <div className="grid gap-10 md:grid-cols-3">
        {VALUE_PROPS.map((prop) => (
          <div key={prop.title}>
            <h3 className="m-0 text-lg font-medium text-accent">{prop.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{prop.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
