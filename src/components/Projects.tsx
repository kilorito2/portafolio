import { useState } from 'react'
import { ProjectCard } from '@/components/ProjectCard'
import { ProjectModal } from '@/components/ProjectModal'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import type { Project, ProjectCategory } from '@/data/portfolio'
import { portfolio, PROJECT_CATEGORIES } from '@/data/portfolio'

type Filter = 'all' | ProjectCategory

const FILTERS = [
  { id: 'all', label: 'Todos' },
  ...(Object.entries(PROJECT_CATEGORIES) as [ProjectCategory, string][]).map(([id, label]) => ({ id, label })),
] as { id: Filter; label: string }[]

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [filter, setFilter] = useState<Filter>('all')

  if (portfolio.projects.length === 0) return null

  const visible =
    filter === 'all' ? portfolio.projects : portfolio.projects.filter((project) => project.category === filter)
  const countFor = (id: Filter) =>
    id === 'all' ? portfolio.projects.length : portfolio.projects.filter((project) => project.category === id).length

  return (
    <section id="proyectos" className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          index="04"
          eyebrow="Work"
          title="Proyectos"
          description="Una selección de trabajos recientes, con el problema que resuelven y cómo los construí."
        />

        <div role="group" aria-label="Filtrar proyectos por categoría" className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map(({ id, label }) => {
            const active = filter === id
            return (
              <button
                key={id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                  active
                    ? 'border-electric-soft bg-electric-dim text-bone'
                    : 'border-line text-mist hover:border-line-strong hover:text-bone'
                }`}
              >
                {label}
                <span className="font-mono text-[0.65rem] text-mist-dim">{countFor(id)}</span>
              </button>
            )
          })}
        </div>

        {/* La key reinicia la animación de entrada al cambiar de filtro. */}
        <div
          key={filter}
          className="mt-8 grid auto-rows-[15rem] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-flow-row-dense lg:grid-cols-3"
        >
          {visible.map((project, index) => (
            <Reveal
              key={project.id}
              delay={(index % 3) * 0.08}
              className={filter === 'all' && project.featured ? 'sm:col-span-2 sm:row-span-2' : ''}
            >
              <ProjectCard project={project} onSelect={setSelected} featured={filter === 'all' && project.featured} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
