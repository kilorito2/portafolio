import { Reveal } from '@/components/Reveal'

interface SectionHeadingProps {
  index: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

/** Editorial section header: a mono index/eyebrow line over an oversized display title. */
export function SectionHeading({ index, eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Reveal>
        <div
          className={`flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-mist-dim uppercase ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <span className="text-electric-soft">{index}</span>
          <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
          <span>{eyebrow}</span>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-bone sm:text-5xl">
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-pretty text-mist">{description}</p>
        </Reveal>
      ) : null}
    </div>
  )
}
