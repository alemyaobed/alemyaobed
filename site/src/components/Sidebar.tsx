import { CONTACT, NAV_ITEMS, SITE } from '../content'
import {
  IconBriefcase,
  IconClock,
  IconHome,
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

/**
 * The fixed left sidebar shown on desktop, following the reference:
 * identity block, vertical icon-and-label links with uppercase tracked
 * text, and the email at the bottom.
 * @returns The sidebar element.
 */
export function Sidebar() {
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
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-5 py-3 text-xs font-medium uppercase tracking-[0.07em] text-muted transition-colors hover:text-accent"
              >
                <Icon className="h-[15px] w-[15px] shrink-0" />
                <span>{item.label}</span>
              </a>
            )
          })}
        </nav>
      </div>
      <p className="m-0 px-5 text-xs text-muted">
        <a href={`mailto:${CONTACT.email}`} className="hover:text-accent">
          {CONTACT.email}
        </a>
      </p>
    </aside>
  )
}
