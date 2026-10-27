import { NAV_ITEMS } from '../content'
import { useActiveSection } from '../hooks/useActiveSection'
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
 * The fixed bottom tab bar on mobile carrying the section navigation,
 * with the current section highlighted.
 * @returns The bottom tab bar element.
 */
export function BottomNav() {
  const active = useActiveSection(NAV_ITEMS.map((item) => item.href))
  return (
    <nav
      aria-label="Primary"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-6 border-t border-line bg-page/95 backdrop-blur-lg lg:hidden"
    >
      {NAV_ITEMS.map((item) => {
        const Icon = SECTION_ICONS[item.href] ?? IconHome
        const isActive = item.href === active
        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            className={`flex flex-col items-center gap-1 py-2.5 text-[0.6rem] font-medium uppercase tracking-wider transition-colors ${
              isActive ? 'text-accent' : 'text-muted hover:text-accent'
            }`}
          >
            <Icon className="h-4 w-4" />
            <span>{item.label}</span>
          </a>
        )
      })}
    </nav>
  )
}
