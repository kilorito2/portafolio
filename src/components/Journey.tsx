import { useReducedMotion, motion } from 'motion/react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { portfolio } from '@/data/portfolio'

interface TimelineEntry {
  id: string
  kind: 'education' | 'experience'
  title: string
  org: string
  period?: string
  detail?: string[]
}

const entries: TimelineEntry[] = [
  ...portfolio.education.map((item) => ({
    id: `edu-${item.title}`,
    kind: 'education' as const,
    title: item.title,
    org: item.institution,
    period: item.period,
  })),
  ...portfolio.experience.map((item) => ({
    id: `exp-${item.role}-${item.company}`,
    kind: 'experience' as const,
    title: item.role,
    org: item.company,
    period: item.period,
    detail: item.highlights,
  })),
]

const KIND_LABEL: Record<TimelineEntry['kind'], string> = {
  education: 'Formación',
  experience: 'Experiencia',
}

export function Journey() {
  const reduce = useReducedMotion()

  if (entries.length === 0) return null

  return (
    <section id="trayectoria" className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          index="02"
          eyebrow="Trayectoria"
          title="Educación y experiencia"
          description="El camino hasta acá: lo que estudio y los roles donde apliqué lo aprendido."
        />

        <div className="relative mt-16 pl-8 sm:pl-10">
          <div
            className="absolute top-1 bottom-1 left-[3px] w-px bg-line sm:left-[5px]"
            aria-hidden="true"
          />
          <motion.div
            className="absolute top-1 left-[3px] w-px origin-top bg-gradient-to-b from-electric-soft to-electric/20 sm:left-[5px]"
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: 'calc(100% - 0.5rem)' }}
          />

          <ol className="space-y-10">
            {entries.map((entry, index) => (
              <Reveal key={entry.id} delay={index * 0.08}>
                <li className="group relative">
                  <span
                    className="absolute top-1.5 -left-8 h-[7px] w-[7px] rounded-full bg-mist-dim transition-colors duration-300 group-hover:bg-electric-soft sm:-left-10"
                    aria-hidden="true"
                  />

                  <div className="-mx-4 rounded-xl border border-transparent px-4 py-3 transition-colors duration-300 group-hover:border-line group-hover:bg-carbon/50">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[0.7rem] tracking-[0.12em] text-mist-dim uppercase">
                      <span className="text-electric-soft">{KIND_LABEL[entry.kind]}</span>
                      {entry.period ? (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{entry.period}</span>
                        </>
                      ) : null}
                    </div>

                    <h3 className="mt-2 font-display text-lg font-semibold text-bone">{entry.title}</h3>
                    <p className="mt-0.5 text-sm text-mist">{entry.org}</p>

                    {entry.detail && entry.detail.length > 0 ? (
                      <ul className="mt-3 space-y-1.5">
                        {entry.detail.map((line) => (
                          <li key={line} className="text-sm leading-relaxed text-mist-dim">
                            {line}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
