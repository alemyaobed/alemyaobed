import { NAV_ITEMS, SITE } from '../content'

/**
 * The minimal footer: section links and a copyright line whose year is
 * computed from the clock so it never goes stale.
 * @returns The footer element.
 */
export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10">
      <nav aria-label="Footer" className="mb-4">
        <ul className="m-0 flex list-none flex-wrap justify-center gap-5 p-0">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-block py-2.5 text-sm text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p className="m-0 text-sm text-muted">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </p>
    </footer>
  )
}
