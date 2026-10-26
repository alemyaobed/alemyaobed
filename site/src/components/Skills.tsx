import { SKILL_GROUPS, SKILL_ICONS, SKILLS_HEADING, STATS } from '../content'
import { Section } from './Section'

/**
 * Skills as a grid of cards: one per group with logo chips, plus an
 * At a glance card carrying the headline numbers.
 * @returns The skills section element.
 */
export function Skills() {
  return (
    <Section id="skills" title={SKILLS_HEADING}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label} className="rounded-xl border border-line p-6">
            <h3 className="m-0 text-base font-medium text-ink">{group.label}</h3>
            <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
              {group.skills.map((skill) => {
                const slug = SKILL_ICONS[skill]
                return (
                  <li
                    key={skill}
                    className="flex items-center gap-2 rounded-full border border-line bg-pill px-3 py-1.5 text-sm text-muted"
                  >
                    {slug && (
                      <img
                        src={`https://cdn.simpleicons.org/${slug}`}
                        alt=""
                        width={16}
                        height={16}
                        loading="lazy"
                        className="h-4 w-4"
                      />
                    )}
                    {skill}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
        <div className="rounded-xl border border-line p-6">
          <h3 className="m-0 text-base font-medium text-ink">At a glance</h3>
          <dl className="mt-4 grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="m-0 text-2xl font-medium text-emerald-500 dark:text-emerald-400">
                  {stat.value}
                </dd>
                <p className="m-0 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
