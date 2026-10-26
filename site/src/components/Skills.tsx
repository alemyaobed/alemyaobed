import { SKILL_GROUPS, SKILL_ICONS, SKILLS_HEADING } from '../content'
import { Section } from './Section'

/**
 * Skills as left-flowing chips, each carrying its brand icon from
 * simple-icons where one exists.
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
                        src={`https://cdn.simpleicons.org/${slug}/9ca3af`}
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
    </Section>
  )
}
