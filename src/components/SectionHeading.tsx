interface SectionHeadingProps {
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance text-zinc-900 sm:text-4xl dark:text-zinc-50">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>
      ) : null}
    </div>
  )
}
