import { VALUE_PROPS } from '../content'
import { IconChart, IconHammer, IconRocket } from './icons'
import { Section } from './Section'

/** Icon lookup keyed by value prop title. */
const PROP_ICONS: Record<string, typeof IconHammer> = {
  Build: IconHammer,
  Ship: IconRocket,
  Measure: IconChart,
}

/** Shared classes for the emerald value prop icons. */
const PROP_ICON = 'h-5 w-5 text-emerald-500 dark:text-emerald-400'

/**
 * The three-column working story (Build, Ship, Measure) with emerald
 * icons, between the skills and experience sections.
 * @returns The value propositions element.
 */
export function ValueProps() {
  return (
    <Section id="how-i-work" title="What I do">
      <div className="grid gap-10 md:grid-cols-3">
        {VALUE_PROPS.map((prop) => {
          const Icon = PROP_ICONS[prop.title]
          return (
            <div key={prop.title}>
              {Icon && <Icon className={PROP_ICON} />}
              <h3 className="mt-3 text-lg font-medium text-ink">{prop.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{prop.text}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
