import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { portfolio } from '@/data/portfolio'

export function About() {
  const { paragraphs, stats } = portfolio.about

  return (
    <section id="sobre-mi" className="py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <SectionHeading title="Sobre mí" />
        </Reveal>

        <Reveal delay={0.08} className="mt-8 max-w-[65ch] space-y-5">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {paragraph}
            </p>
          ))}
        </Reveal>

        {stats.length > 0 ? (
          <Reveal
            delay={0.14}
            className="mt-14 grid grid-cols-2 gap-8 border-t border-zinc-200 pt-10 sm:grid-cols-3 dark:border-zinc-800"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-semibold text-zinc-900 sm:text-4xl dark:text-zinc-50">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
