import { ArrowRight, GithubLogo } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { Button } from '@/components/Button'
import { portfolio } from '@/data/portfolio'
import { getInitials } from '@/lib/text'

const github = portfolio.social.find((link) => link.icon === 'github')

export function Hero() {
  const reduce = useReducedMotion()

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  })

  return (
    <section id="inicio" className="relative flex min-h-[100dvh] items-center overflow-hidden pt-16">
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="glow-orb top-[-10%] right-[-5%] h-[28rem] w-[28rem] bg-electric/[0.14]"
        aria-hidden="true"
      />
      <div
        className="glow-orb bottom-[-15%] left-[-10%] h-[22rem] w-[22rem] bg-electric/[0.06]"
        aria-hidden="true"
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-16 py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          <motion.div {...fadeUp(0)} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-mist">
              <span
                className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-electric-soft"
                aria-hidden="true"
              />
              {portfolio.availability}
            </span>
            <span className="inline-flex items-center rounded-full border border-line px-3 py-1.5 font-mono text-xs tracking-[0.1em] text-mist-dim uppercase">
              @{portfolio.alias.toLowerCase()}
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-8 text-balance font-display text-[13vw] leading-[0.95] font-semibold tracking-tight text-bone sm:text-[9vw] lg:text-[5.4vw]"
          >
            {portfolio.name}
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-5 font-mono text-sm tracking-[0.1em] text-electric-soft uppercase"
          >
            {portfolio.role}
          </motion.p>

          <motion.p {...fadeUp(0.28)} className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-mist">
            {portfolio.heroSubtext}
          </motion.p>

          <motion.div {...fadeUp(0.36)} className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="#proyectos" variant="primary">
              Ver proyectos
              <ArrowRight size={16} weight="bold" />
            </Button>
            <Button href="#contacto" variant="secondary">
              Contactar
            </Button>
            {github ? (
              <Button href={github.href} target="_blank" rel="noreferrer" variant="secondary">
                <GithubLogo size={16} weight="bold" />
                GitHub
              </Button>
            ) : null}
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-xs lg:mx-0 lg:ml-auto lg:translate-x-4"
        >
          <div className="glow-orb -inset-6 bg-electric/[0.18]" aria-hidden="true" />
          <div className="relative aspect-4/5 overflow-hidden rounded-[1.75rem] border border-line bg-carbon">
            {portfolio.avatarUrl ? (
              <img
                src={portfolio.avatarUrl}
                alt={portfolio.name}
                className="h-full w-full object-cover grayscale-[15%]"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-display text-7xl font-semibold text-carbon-2">
                  {getInitials(portfolio.name)}
                </span>
              </div>
            )}
          </div>
          <div
            className="absolute -inset-px -z-10 translate-x-3 translate-y-3 rounded-[1.75rem] border border-line-strong"
            aria-hidden="true"
          />
          <p className="mt-4 font-mono text-[0.7rem] tracking-[0.15em] text-mist-dim uppercase">
            // {portfolio.location}
          </p>
        </motion.div>
      </div>

      {!reduce ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
          aria-hidden="true"
        >
          <span className="font-mono text-[0.65rem] tracking-[0.2em] text-mist-dim uppercase">Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="h-8 w-px bg-gradient-to-b from-line-strong to-transparent"
          />
        </motion.div>
      ) : null}
    </section>
  )
}
