import { HERO, SITE } from '../content'
import { cvRequestHref } from '../utils'
import { CodeCard } from './CodeCard'

/**
 * The opening section: greeting, name, role and tagline on the left and
 * the developer.js code card on the right, with the primary calls to
 * action and the status pills.
 * @returns The hero section element.
 */
export function Hero() {
  return (
    <section id="home" className="px-5 py-16 sm:py-24">
      <div className="mx-auto grid max-w-4xl items-center gap-12 lg:grid-cols-[3fr_2fr]">
        <div>
          <p className="text-accent">{SITE.greeting}</p>
          <h1 className="my-4">{SITE.name}</h1>
          <p className="text-xl text-ink">{SITE.role}</p>
          <p className="mt-4 max-w-md text-muted">{SITE.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {HERO.viewWorkCta}
            </a>
            <a
              href={cvRequestHref()}
              className="rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:border-accent/50 hover:text-accent"
            >
              {HERO.requestCvCta}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-sm text-accent">
              {SITE.availability}
            </span>
            <span className="rounded-full border border-line bg-pill px-3 py-1 text-sm text-muted">
              {SITE.location}
            </span>
          </div>
        </div>
        <CodeCard />
      </div>
    </section>
  )
}
