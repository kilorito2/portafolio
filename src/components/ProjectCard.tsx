import { ArrowUpRight } from '@phosphor-icons/react'
import type { Project } from '@/data/portfolio'

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
  /** Large bento treatment; the parent turns this off when a category filter is active. */
  featured?: boolean
}

/**
 * Full-bleed image tile with a bottom scrim for text. Sizing (how much of the
 * bento grid a card occupies) is decided by the parent via grid classes —
 * this component only adjusts type scale when the `featured` prop is set.
 */
export function ProjectCard({ project, onSelect, featured = false }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group relative flex h-full min-h-[15rem] w-full flex-col overflow-hidden rounded-2xl border border-line bg-carbon text-left transition-colors duration-300 hover:border-line-strong"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <span className="pointer-events-none absolute -bottom-4 left-4 font-display text-8xl font-bold text-carbon-2 select-none">
            {project.id.slice(0, 2).toUpperCase()}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <div className="absolute inset-0 bg-electric/0 transition-colors duration-500 group-hover:bg-electric/[0.05]" />
      </div>

      {featured ? (
        <span className="relative mt-4 ml-4 w-fit rounded-full border border-electric-soft/40 bg-ink/70 px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.1em] text-electric-soft uppercase backdrop-blur-sm">
          Destacado
        </span>
      ) : null}

      <div className="relative mt-auto flex flex-col gap-2.5 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`font-display font-semibold text-bone ${featured ? 'text-2xl sm:text-3xl' : 'text-lg'}`}
          >
            {project.name}
          </h3>
          <ArrowUpRight
            size={18}
            weight="bold"
            className="mt-1 shrink-0 text-mist transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric-soft"
          />
        </div>

        {featured ? (
          <p className="max-w-md text-sm leading-relaxed text-mist">{project.description}</p>
        ) : null}

        {project.tags.length > 0 ? (
          <ul className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.slice(0, featured ? 4 : 3).map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line-strong/50 bg-ink/60 px-2 py-0.5 font-mono text-[0.65rem] text-mist"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </button>
  )
}
