import { STATS } from '../content'

/**
 * The stats bar under the work section: four highlight numbers in a
 * responsive grid, each traced to real evidence.
 * @returns The stats bar element.
 */
export function Stats() {
  return (
    <section className="border-t border-line px-5 py-12">
      <dl className="mx-auto grid max-w-4xl grid-cols-2 gap-8 text-center md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <dt className="sr-only">{stat.label}</dt>
            <dd className="m-0 text-3xl font-medium text-ink">{stat.value}</dd>
            <p className="m-0 mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </dl>
    </section>
  )
}
