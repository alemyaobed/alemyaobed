import { HERO, SITE } from '../content'
import { cvRequestHref } from '../utils'
import { CodeCard } from './CodeCard'

/**
 * The opening section, following the reference layout: centered
 * greeting, name and role, pill buttons, status pills, then the framed
 * portrait beside the developer.js code card.
 * @returns The hero section element.
 */
export function Hero() {
  return (
    <section id="home" className="px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-accent">{SITE.greeting}</p>
        <h1 className="my-4">{SITE.name}</h1>
        <p className="text-xl text-ink">{SITE.role}</p>
        <p className="mx-auto mt-4 max-w-md text-muted">{SITE.tagline}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#work"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {HERO.viewWorkCta}
          </a>
          <a
            href={cvRequestHref()}
            className="rounded-full border border-accent/50 bg-accent/10 px-6 py-3 text-sm text-accent transition-colors hover:bg-accent/20"
          >
            {HERO.requestCvCta}
          </a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-sm text-accent">
            {SITE.availability}
          </span>
        </div>
        <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
          <img
            src={HERO.portraitSrc}
            alt={HERO.portraitAlt}
            width={256}
            height={320}
            className="mx-auto aspect-[4/5] w-48 rounded-3xl border border-line object-cover shadow-lg md:w-64"
          />
          <CodeCard />
        </div>
      </div>
    </section>
  )
}
