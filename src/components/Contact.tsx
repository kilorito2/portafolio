import { ArrowUpRight, DownloadSimple } from '@phosphor-icons/react'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { SocialIconLink } from '@/components/SocialIconLink'
import { portfolio } from '@/data/portfolio'

export function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div
        className="glow-orb top-1/2 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 bg-electric/[0.08]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-mist-dim uppercase">05 — Contact</p>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-bone sm:text-6xl">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-mist">
            Estoy abierto a nuevas oportunidades y colaboraciones. Escríbeme y conversamos.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href={`mailto:${portfolio.email}`} variant="primary">
              Escribir un correo
              <ArrowUpRight size={16} weight="bold" />
            </Button>
            {portfolio.resumeUrl ? (
              <Button href={portfolio.resumeUrl} variant="secondary" download>
                Descargar CV
                <DownloadSimple size={16} weight="bold" />
              </Button>
            ) : null}
          </div>

          {portfolio.social.length > 0 ? (
            <div className="mt-10 flex items-center justify-center gap-3">
              {portfolio.social.map((link) => (
                <SocialIconLink key={link.label} link={link} />
              ))}
            </div>
          ) : null}

          <p className="mt-10 font-mono text-xs tracking-[0.08em] text-mist-dim">
            {portfolio.location} · {portfolio.availability}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
