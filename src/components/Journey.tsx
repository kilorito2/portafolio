import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { portfolio } from '@/data/portfolio'

export function Journey() {
  const hasExperience = portfolio.experience.length > 0
  const hasEducation = portfolio.education.length > 0

  if (!hasExperience && !hasEducation) return null

  return (
    <section id="trayectoria" className="border-t border-zinc-200 py-24 sm:py-32 dark:border-zinc-800">
      <div className="container-page">
        <Reveal>
          <SectionHeading title="Trayectoria" />
        </Reveal>

        <div
          className={`mt-12 grid grid-cols-1 gap-12 ${
            hasExperience && hasEducation ? 'lg:grid-cols-[1.6fr_1fr]' : ''
          }`}
        >
          {hasExperience ? (
            <Reveal delay={0.06}>
              <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Experiencia
              </h3>
              <ol className="mt-6 space-y-8">
                {portfolio.experience.map((item) => (
                  <li key={`${item.company}-${item.role}`} className="relative border-l border-zinc-200 pl-6 dark:border-zinc-800">
                    <span
                      className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-zinc-900 dark:bg-zinc-50"
                      aria-hidden="true"
                    />
                    <p className="font-semibold text-zinc-900 dark:text-zinc-50">{item.role}</p>
                    <p className="mt-0.5 font-mono text-sm text-zinc-500 dark:text-zinc-400">
                      {item.period ? `${item.company} · ${item.period}` : item.company}
                    </p>
                    {item.highlights.length > 0 ? (
                      <ul className="mt-2 space-y-1">
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ol>
            </Reveal>
          ) : null}

          {hasEducation ? (
            <Reveal delay={0.12}>
              <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Educación
              </h3>
              <ul className="mt-6 divide-y divide-zinc-200 dark:divide-zinc-800">
                {portfolio.education.map((item) => (
                  <li key={`${item.institution}-${item.title}`} className="py-4 first:pt-0">
                    <p className="font-medium text-zinc-900 dark:text-zinc-50">{item.title}</p>
                    <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
                      {item.institution} · {item.period}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  )
}
