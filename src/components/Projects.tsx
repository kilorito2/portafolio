import { ProjectCard } from '@/components/ProjectCard'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { portfolio } from '@/data/portfolio'

export function Projects() {
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

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.projects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 0.08}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
