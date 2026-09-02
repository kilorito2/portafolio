import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { portfolio } from '@/data/portfolio'

export function Skills() {
  if (portfolio.skills.length === 0) return null

  return (
    <section id="habilidades" className="border-t border-zinc-200 py-24 sm:py-32 dark:border-zinc-800">
      <div className="container-page">
        <Reveal>
          <SectionHeading title="Habilidades" description="Con qué trabajo día a día." />
        </Reveal>

        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-8 gap-y-10">
          {portfolio.skills.map((group, index) => (
            <Reveal key={group.label} delay={index * 0.06} className="border-t border-zinc-200 pt-6 dark:border-zinc-800">
              <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-zinc-200 px-3 py-1.5 font-mono text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
