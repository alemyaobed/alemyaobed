import { CONTACT, NAV_ITEMS, RESUME_NAV, SITE, SOCIALS } from '../content'
import { useActiveSection } from '../hooks/useActiveSection'
import {
  IconBriefcase,
  IconClock,
  IconFileText,
  IconGitHub,
  IconHome,
  IconLinkedIn,
  IconMail,
  IconUser,
  IconWrench,
} from './icons'
import type { ComponentType } from 'react'
import type { IconProps } from './icons'

/** Icon lookup keyed by navigation href. */
const SECTION_ICONS: Record<string, ComponentType<IconProps>> = {
  '#home': IconHome,
  '#about': IconUser,
  '#work': IconBriefcase,
  '#skills': IconWrench,
  '#experience': IconClock,
  '#contact': IconMail,
}

/** Shared classes for the small round contact icon buttons. */
const ICON_BUTTON =
  'inline-flex items-center justify-center rounded-full border border-line p-2 text-muted transition-colors hover:border-accent/50 hover:text-accent'

/**
 * The fixed left sidebar shown on desktop, following the reference:
 * identity block, vertical icon-and-label links with uppercase tracked
 * text, and contact icon buttons at the bottom.
 * @returns The sidebar element.
 */
export function Sidebar() {
  const active = useActiveSection(NAV_ITEMS.map((item) => item.href))
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 flex-col justify-between border-r border-line bg-page py-6 lg:flex">
      <div>
        <div className="px-5 pb-6">
          <p className="m-0 font-medium text-ink">{SITE.name}</p>
          <p className="m-0 mt-1 text-xs text-muted">{SITE.role}</p>
        </div>
        <nav aria-label="Primary" className="flex flex-col gap-0.5">
          {NAV_ITEMS.map((item) => {
            const Icon = SECTION_ICONS[item.href] ?? IconHome
            const isActive = item.href === active
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative flex items-center gap-3 px-5 py-3 text-xs font-medium uppercase tracking-[0.07em] transition-colors ${
                  isActive ? 'bg-accent/10 text-accent' : 'text-muted hover:text-accent'
                }`}
              >
                {isActive && (
                  <span
                    className="absolute inset-y-0 left-0 w-[3px] bg-accent"
                    aria-hidden="true"
                  />
                )}
                <Icon className="h-[15px] w-[15px] shrink-0" />
                <span>{item.label}</span>
              </a>
            )
          })}
        </nav>
        <nav aria-label="Documents" className="mt-2 flex flex-col gap-0.5 border-t border-line pt-2">
          <a
            href={RESUME_NAV.href}
            className="flex items-center gap-3 px-5 py-3 text-xs font-medium uppercase tracking-[0.07em] text-muted transition-colors hover:text-accent"
          >
            <IconFileText className="h-[15px] w-[15px] shrink-0" />
            <span>{RESUME_NAV.label}</span>
          </a>
        </nav>
      </div>
      <div className="flex gap-3 px-5">
        <a href={`mailto:${CONTACT.email}`} aria-label="Email" className={ICON_BUTTON}>
          <IconMail className="h-4 w-4" />
        </a>
        <a
          href={SOCIALS[0]?.href ?? '#'}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className={ICON_BUTTON}
        >
          <IconGitHub className="h-4 w-4" />
        </a>
        <a
          href={SOCIALS[1]?.href ?? '#'}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className={ICON_BUTTON}
        >
          <IconLinkedIn className="h-4 w-4" />
        </a>
      </div>
    </aside>
  )
}
