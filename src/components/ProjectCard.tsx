import { ArrowUpRight, CodeSimple } from '@phosphor-icons/react'
import type { Project } from '@/data/portfolio'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasLinks = Boolean(project.href || project.repo)

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors duration-300 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700">
      <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-3 left-3 font-display text-8xl font-bold text-zinc-200 select-none dark:text-zinc-800"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            {project.name}
          </h3>
          {project.featured ? (
            <span className="shrink-0 rounded-full border border-orange-200 px-2.5 py-0.5 text-xs font-medium text-orange-600 dark:border-orange-900 dark:text-orange-400">
              Destacado
            </span>
          ) : null}
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        {project.tags.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-zinc-100 px-2.5 py-1 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        {hasLinks ? (
          <div className="mt-5 flex items-center gap-5 border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-orange-600 dark:text-zinc-300 dark:hover:text-orange-400"
              >
                Ver demo
                <ArrowUpRight size={15} weight="bold" />
              </a>
            ) : null}
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-orange-600 dark:text-zinc-300 dark:hover:text-orange-400"
              >
                Código
                <CodeSimple size={15} weight="bold" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  )
}
