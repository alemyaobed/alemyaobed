import { SKILL_GROUPS, SKILL_ICONS, SKILLS_HEADING } from '../content'
import { Section } from './Section'

/**
 * Technologies as one large card holding a flat wrap of boxy chips,
 * each chip a small logo tile with its name, mirroring the reference.
 * @returns The skills section element.
 */
export function Skills() {
  const flat = SKILL_GROUPS.flatMap((group) => group.skills)
  return (
    <Section id="skills" title={SKILLS_HEADING}>
      <div className="rounded-xl border border-line p-5 sm:p-7">
        <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
          {flat.map((skill) => {
            const slug = SKILL_ICONS[skill]
            return (
              <li
                key={skill}
                className="flex items-center gap-2 rounded-lg border border-line bg-pill px-3 py-2 text-sm text-muted"
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
    </Section>
  )
}
