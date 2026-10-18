import { useEffect, useRef } from 'react'
import { ArrowSquareOut, CodeSimple, X } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'motion/react'
import type { Project } from '@/data/portfolio'
import { startLenis, stopLenis } from '@/lib/lenis'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

/** Premium detail view for a project, opened from ProjectCard. Fades and scales in over a dimmed, blurred backdrop. */
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return

    stopLenis()
    document.documentElement.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      startLenis()
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.button
            type="button"
            aria-label="Cerrar"
            onClick={onClose}
            className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative z-10 flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-line-strong bg-carbon"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Cerrar detalle del proyecto"
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-ink/70 text-mist backdrop-blur-sm transition-colors duration-300 hover:border-electric-soft hover:text-electric-soft"
            >
              <X size={18} weight="bold" />
            </button>

            <div className="overflow-y-auto">
              {project.image ? (
                <div className="aspect-video w-full overflow-hidden bg-ink-2">
                  <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
                </div>
              ) : null}

              <div className="p-6 sm:p-8">
                {project.featured ? (
                  <span className="mb-3 inline-flex w-fit rounded-full border border-electric-soft/40 bg-electric-dim px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.1em] text-electric-soft uppercase">
                    Destacado
                  </span>
                ) : null}

                <h3
                  id="project-modal-title"
                  className="font-display text-2xl font-semibold text-bone sm:text-3xl"
                >
                  {project.name}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-mist">{project.description}</p>

                {project.tags.length > 0 ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-mist"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {project.href || project.repo ? (
                  <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-line pt-6">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-bone px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-electric-soft"
                      >
                        Ver demo
                        <ArrowSquareOut size={16} weight="bold" />
                      </a>
                    ) : null}
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-bone transition-colors duration-300 hover:border-electric-soft hover:text-electric-soft"
                      >
                        Código
                        <CodeSimple size={16} weight="bold" />
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
