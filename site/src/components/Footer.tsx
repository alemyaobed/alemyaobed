import { SITE } from '../content'

/**
 * The minimal footer: a single centered copyright line whose year is
 * computed from the clock so it never goes stale.
 * @returns The footer element.
 */
export function Footer() {
  return (
    <footer className="border-t border-line px-5 pb-28 pt-10 lg:pb-10">
      <p className="m-0 text-center text-sm text-muted">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </p>
    </footer>
  )
}
