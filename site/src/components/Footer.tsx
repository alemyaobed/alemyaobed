import { FOOTER, NAV_ITEMS } from '../content'

/**
 * Site footer with the section links, tagline and copyright, centered
 * like the reference.
 * @returns The footer element.
 */
export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 text-center">
      <nav aria-label="Footer" className="mb-4">
        <ul className="m-0 flex list-none flex-wrap justify-center gap-5 p-0">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-muted hover:text-ink">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p className="m-0 text-ink">{FOOTER.tagline}</p>
      <p className="mt-2 text-sm text-muted">
        <a href={FOOTER.resumeLink.href} className="text-accent hover:underline">
          {FOOTER.resumeLink.label}
        </a>{' '}
        · {FOOTER.stack}
      </p>
      <p className="mt-4 text-sm text-muted">{FOOTER.rights}</p>
    </footer>
  )
}
