import { SocialIconLink } from '@/components/SocialIconLink'
import { portfolio } from '@/data/portfolio'
import { stripBrackets } from '@/lib/text'

export function Footer() {
  const year = new Date().getFullYear()
  const cleanName = stripBrackets(portfolio.name)

  return (
    <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
      <div className="container-page flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          © {year} {cleanName}. Hecho con React, TypeScript y Tailwind CSS.
        </p>
        {portfolio.social.length > 0 ? (
          <div className="flex items-center gap-2">
            {portfolio.social.map((link) => (
              <SocialIconLink key={link.label} link={link} size="sm" />
            ))}
          </div>
        ) : null}
      </div>
    </footer>
  )
}
