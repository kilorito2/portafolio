import { CodeSimple } from '@phosphor-icons/react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { portfolio } from '@/data/portfolio'
import { TECH_ICONS } from '@/lib/techIcons'

export function Skills() {
  if (portfolio.skills.length === 0) return null

  return (
    <section id="habilidades" className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading index="03" eyebrow="Stack" title="Tech Stack" description="Con qué trabajo día a día." />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {portfolio.skills.map((group, groupIndex) => (
            <Reveal key={group.label} delay={groupIndex * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-carbon/40 p-6">
                <h3 className="font-mono text-xs tracking-[0.15em] text-mist-dim uppercase">{group.label}</h3>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) => {
                    const Icon = TECH_ICONS[item] ?? CodeSimple
                    return (
                      <li key={item}>
                        <span className="group inline-flex items-center gap-2 rounded-xl border border-line bg-ink-2 px-3 py-2 text-sm text-bone transition-all duration-300 hover:-translate-y-0.5 hover:border-electric-soft hover:bg-electric-dim">
                          <Icon
                            className="h-4 w-4 text-mist transition-colors duration-300 group-hover:text-electric-soft"
                          />
                          {item}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
