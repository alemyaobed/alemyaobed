import { SKILL_GROUPS, SKILL_ICONS, SKILLS_HEADING } from '../content'
import { Section } from './Section'

/**
 * Technologies as one large card: boxy logo chips grouped under small
 * labels, each group separated by a rule inside the card.
 * @returns The skills section element.
 */
export function Skills() {
  return (
    <Section id="skills" title={SKILLS_HEADING}>
      <div className="rounded-xl border border-line p-5 sm:p-7">
        <div className="divide-y divide-line max-md:divide-y-0">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label} className="py-4 first:pt-0 last:pb-0 max-md:py-3 max-md:first:pt-0 max-md:last:pb-0">
              <p className="m-0 hidden text-xs font-medium uppercase tracking-widest text-muted md:block">
                {group.label}
              </p>
              <ul className="mt-0 flex list-none flex-wrap gap-2.5 p-0 md:mt-3">
                {group.skills.map((skill) => {
                  const slug = SKILL_ICONS[skill]
                  return (
                    <li
                      key={skill}
                      className="flex items-center gap-2 rounded-lg border border-line bg-pill px-3 py-2 text-sm text-ink"
                    >
                      {slug && (
                        <img
                          src={`https://cdn.simpleicons.org/${slug}`}
                          alt=""
                          width={18}
                          height={18}
                          loading="lazy"
                          className="h-[18px] w-[18px]"
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
