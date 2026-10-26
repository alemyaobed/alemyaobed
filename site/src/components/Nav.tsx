import { HERO, SITE } from '../content'
import { cvRequestHref } from '../utils'

/**
 * The mobile top header, following the reference: name on the left and
 * the Request CV pill on the right, above the bottom tab bar.
 * @returns The mobile header element.
 */
export function Nav() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-line bg-page/90 px-5 backdrop-blur-lg lg:hidden">
      <a href="#home" className="font-mono text-lg text-ink">
        {SITE.shortName}
      </a>
      <a
        href={cvRequestHref()}
        className="rounded-full border border-accent/50 bg-accent/10 px-4 py-2 text-sm text-accent transition-colors hover:bg-accent/20"
      >
        {HERO.requestCvCta}
      </a>
    </header>
  )
}
