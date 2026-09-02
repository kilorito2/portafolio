import { EnvelopeSimple, GithubLogo, Globe, LinkedinLogo, XLogo } from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'
import type { SocialIcon, SocialLink } from '@/data/portfolio'

const ICONS: Record<SocialIcon, Icon> = {
  github: GithubLogo,
  linkedin: LinkedinLogo,
  x: XLogo,
  mail: EnvelopeSimple,
  website: Globe,
}

const SIZES = {
  sm: { wrapper: 'h-9 w-9', icon: 16 },
  md: { wrapper: 'h-11 w-11', icon: 18 },
} as const

interface SocialIconLinkProps {
  link: SocialLink
  size?: keyof typeof SIZES
}

export function SocialIconLink({ link, size = 'md' }: SocialIconLinkProps) {
  const IconComponent = ICONS[link.icon]
  const isExternal = link.href.startsWith('http')
  const { wrapper, icon } = SIZES[size]

  return (
    <a
      href={link.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      aria-label={link.label}
      title={link.label}
      className={`flex ${wrapper} items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors duration-300 hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-50 dark:hover:text-zinc-50`}
    >
      <IconComponent size={icon} weight="regular" />
    </a>
  )
}
