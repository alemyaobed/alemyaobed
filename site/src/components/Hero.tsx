import { HERO, SITE } from '../content'
import { cvRequestHref } from '../utils'
import { CodeCard } from './CodeCard'

/**
 * The opening section as one desktop row of three: the compact name and
 * story block, the portrait fading into the background, and the
 * engineer.js card. Mobile stacks the three vertically.
 * @returns The hero section element.
 */
export function Hero() {
  return (
    <section id="home" className="px-5 py-14 sm:py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[5fr_4fr_5fr]">
        <div>
          <p className="m-0 text-sm font-medium uppercase tracking-[0.07em] text-accent">
            {SITE.role}
          </p>
          <h1 className="mb-3 mt-2 text-3xl leading-tight tracking-tight sm:text-4xl">
            {SITE.fullName}
          </h1>
          <p className="m-0 max-w-md leading-7 text-muted">{SITE.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-4">
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
          <div className="mt-6 flex items-center gap-2.5">
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
          style={{
            maskImage:
              'radial-gradient(115% 115% at 50% 42%, black 58%, transparent 82%)',
            WebkitMaskImage:
              'radial-gradient(115% 115% at 50% 42%, black 58%, transparent 82%)',
          }}
          className="mx-auto aspect-[4/5] w-44 object-cover sm:w-56 lg:w-full"
        />
        <CodeCard />
      </div>
    </section>
  )
}
