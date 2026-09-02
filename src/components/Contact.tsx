import { DownloadSimple } from '@phosphor-icons/react'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { SocialIconLink } from '@/components/SocialIconLink'
import { portfolio } from '@/data/portfolio'

export function Contact() {
  return (
    <section
      id="contacto"
      className="border-t border-zinc-200 bg-zinc-100/70 py-24 sm:py-32 dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <div className="container-page">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Estoy abierto a nuevas oportunidades y colaboraciones. Escríbeme y conversamos.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={`mailto:${portfolio.email}`} variant="primary">
              Escribir un correo
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

          <p className="mt-10 text-sm text-zinc-500 dark:text-zinc-500">
            {portfolio.location} · {portfolio.availability}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
