import { SKILL_GROUPS, SKILLS_HEADING } from '../content'
import { Section } from './Section'

/**
 * Skills rendered as the reference's chip grid, grouped under subtle
 * labels with everything centered.
 * @returns The skills section element.
 */
export function Skills() {
  return (
    <Section id="skills" title={SKILLS_HEADING}>
      <div className="space-y-8">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label}>
            <p className="m-0 font-mono text-xs uppercase tracking-widest text-accent">
              {group.label}
            </p>
            <ul className="mt-3 flex list-none flex-wrap justify-center gap-2 p-0">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line bg-pill px-3 py-1.5 text-sm text-muted"
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
