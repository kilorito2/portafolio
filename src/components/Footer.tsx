import { SocialIconLink } from '@/components/SocialIconLink'
import { portfolio } from '@/data/portfolio'
import { stripBrackets } from '@/lib/text'

export function Footer() {
  const year = new Date().getFullYear()
  const cleanName = stripBrackets(portfolio.name)

  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-mist-dim">
          © {year} {cleanName} — {portfolio.alias}. Hecho con React, TypeScript y Tailwind CSS.
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
