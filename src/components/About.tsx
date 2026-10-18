import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { portfolio } from '@/data/portfolio'

const infoRows = [
  { label: 'Ubicación', value: portfolio.location },
  { label: 'Disponibilidad', value: portfolio.availability },
  { label: 'Stack principal', value: portfolio.skills[0]?.items.slice(0, 3).join(' · ') ?? '—' },
]

export function About() {
  const { paragraphs, stats } = portfolio.about
  const [lead, ...rest] = paragraphs

  return (
    <section id="sobre-mi" className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading index="01" eyebrow="About" title="Sobre mí" />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div>
            {lead ? (
              <Reveal delay={0.06}>
                <p className="text-balance font-display text-2xl leading-snug text-bone sm:text-3xl">
                  {lead}
                </p>
              </Reveal>
            ) : null}

            {rest.map((paragraph, i) => (
              <Reveal key={paragraph} delay={0.1 + i * 0.06}>
                <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-mist">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16}>
            <div className="divide-y divide-line rounded-2xl border border-line bg-carbon/60 px-6">
              {infoRows.map((row) => (
                <div key={row.label} className="py-5 first:pt-6 last:pb-6">
                  <p className="font-mono text-[0.7rem] tracking-[0.15em] text-mist-dim uppercase">
                    {row.label}
                  </p>
                  <p className="mt-1.5 text-sm text-bone">{row.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {stats.length > 0 ? (
          <Reveal delay={0.2} className="mt-16 grid grid-cols-2 gap-8 border-t border-line pt-10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-semibold text-bone font-tabular sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-mist-dim">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
