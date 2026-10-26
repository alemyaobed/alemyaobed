import { HERO, SITE } from '../content'
import { cvRequestHref } from '../utils'

/**
 * The opening section: full name, role and story on the left, portrait
 * on the right, with the actions and a live availability status.
 * @returns The hero section element.
 */
export function Hero() {
  return (
    <section id="home" className="px-5 py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[3fr_2fr]">
        <div>
          <p className="m-0 text-sm font-medium uppercase tracking-[0.07em] text-accent">
            {SITE.role}
          </p>
          <h1 className="mb-4 mt-2 text-4xl leading-tight tracking-tight sm:text-5xl">
            {SITE.fullName}
          </h1>
          <p className="m-0 max-w-lg leading-7 text-muted">{SITE.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
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
          <div className="mt-8 flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm text-muted">{SITE.availability}</span>
          </div>
        </div>
        <img
          src={HERO.portraitSrc}
          alt={HERO.portraitAlt}
          width={256}
          height={320}
          className="mx-auto aspect-[4/5] w-52 rounded-3xl border border-line object-cover shadow-lg sm:w-64"
        />
      </div>
    </section>
  )
}
