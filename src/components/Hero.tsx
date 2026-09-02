import { ArrowRight } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { Button } from '@/components/Button'
import { portfolio } from '@/data/portfolio'
import { getInitials } from '@/lib/text'

export function Hero() {
  const reduce = useReducedMotion()

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  })

  return (
    <section id="inicio" className="flex min-h-[100dvh] items-center pt-20">
      <div className="container-page grid grid-cols-1 items-center gap-16 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            {portfolio.availability}
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50"
          >
            {portfolio.name}
          </motion.h1>

          <motion.p
            {...fadeUp(0.14)}
            className="mt-2 text-xl font-medium text-zinc-500 sm:text-2xl dark:text-zinc-400"
          >
            {portfolio.role}
          </motion.p>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
          >
            {portfolio.heroSubtext}
          </motion.p>

          <motion.div {...fadeUp(0.26)} className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#proyectos" variant="primary">
              Ver proyectos
              <ArrowRight size={16} weight="bold" />
            </Button>
            <Button href="#contacto" variant="secondary">
              Contactar
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-sm lg:mx-0"
        >
          <div
            className="absolute -inset-4 -z-10 rounded-[2rem] border border-zinc-200 dark:border-zinc-800"
            aria-hidden="true"
          />
          <div
            className="absolute -right-8 -top-8 -z-10 h-40 w-40 rounded-full bg-orange-400/20 blur-3xl dark:bg-orange-500/10"
            aria-hidden="true"
          />
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            {portfolio.avatarUrl ? (
              <img
                src={portfolio.avatarUrl}
                alt={portfolio.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-display text-7xl font-semibold text-zinc-300 dark:text-zinc-700">
                  {getInitials(portfolio.name)}
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
