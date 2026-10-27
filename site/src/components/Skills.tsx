import { SKILL_GROUPS, SKILL_ICONS, SKILLS_HEADING } from '../content'
import { Section } from './Section'

/**
 * Technologies as one large card: each group carries a monospace
 * bracketed label and its chips flow left to right inside the card.
 * @returns The skills section element.
 */
export function Skills() {
  return (
    <Section id="skills" title={SKILLS_HEADING}>
      <div className="rounded-xl border border-line p-4 sm:p-6">
        <div className="grid gap-4 md:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label} className="rounded-lg border border-line p-4 sm:p-5">
              <p className="m-0 font-mono text-sm text-accent">
                {`[ ${group.label} ]`}
              </p>
              <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
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
        </div>
      </div>
    </Section>
  )
}
