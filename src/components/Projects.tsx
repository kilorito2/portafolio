import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ProjectCard } from '@/components/ProjectCard'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { portfolio, type Project } from '@/data/portfolio'

type Filter = 'Todos' | Project['category']

export function Projects() {
  const [filter, setFilter] = useState<Filter>('Todos')

  const filters = useMemo<Filter[]>(() => {
    const categories = Array.from(new Set(portfolio.projects.map((p) => p.category)))
    return ['Todos', ...categories]
  }, [])

  const visible = useMemo(
    () => (filter === 'Todos' ? portfolio.projects : portfolio.projects.filter((p) => p.category === filter)),
    [filter],
  )

  if (portfolio.projects.length === 0) return null

  return (
    <section id="proyectos" className="border-t border-zinc-200 py-24 sm:py-32 dark:border-zinc-800">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            title="Proyectos"
            description="Una selección de trabajos recientes, con el problema que resuelven y cómo los construí."
          />
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar proyectos por categoría">
          {filters.map((f) => {
            const count = f === 'Todos' ? portfolio.projects.length : portfolio.projects.filter((p) => p.category === f).length
            const active = f === filter
            return (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f)}
                className={
                  'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-300 ' +
                  (active
                    ? 'border-orange-500 bg-orange-500 text-white'
                    : 'border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100')
                }
              >
                {f}
                <span className={'ml-2 font-mono text-xs ' + (active ? 'text-orange-100' : 'text-zinc-400')}>{count}</span>
              </button>
            )
          })}
        </div>

        <motion.div layout className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
