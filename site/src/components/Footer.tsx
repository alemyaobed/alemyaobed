import { FOOTER } from '../content'

/**
 * Site footer with the tagline, build note and copyright line.
 * @returns The footer element.
 */
export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 text-center">
      <p className="m-0 text-ink">{FOOTER.tagline}</p>
      <p className="mt-2 text-sm text-muted">{FOOTER.stack}</p>
      <p className="mt-4 text-sm text-muted">{FOOTER.rights}</p>
    </footer>
  )
}
