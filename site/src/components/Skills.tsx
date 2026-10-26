import { SKILL_GROUPS, SKILLS_HEADING } from '../content'
import { Section } from './Section'

/**
 * Skills grouped as titled rows of pills.
 * @returns The skills section element.
 */
export function Skills() {
  return (
    <Section id="skills" title={SKILLS_HEADING}>
      <div className="space-y-8">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label}>
            <h3 className="m-0 text-lg font-medium text-ink">{group.label}</h3>
            <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line bg-pill px-3 py-1 text-sm text-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
