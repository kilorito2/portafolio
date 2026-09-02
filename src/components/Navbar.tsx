import { useState } from 'react'
import { List, Moon, SunDim, X } from '@phosphor-icons/react'
import { portfolio } from '@/data/portfolio'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useTheme } from '@/hooks/useTheme'
import { getInitials } from '@/lib/text'

const ALL_LINKS = [
  { id: 'sobre-mi', label: 'Sobre mí', show: true },
  { id: 'habilidades', label: 'Habilidades', show: portfolio.skills.length > 0 },
  { id: 'proyectos', label: 'Proyectos', show: portfolio.projects.length > 0 },
  {
    id: 'trayectoria',
    label: 'Trayectoria',
    show: portfolio.experience.length > 0 || portfolio.education.length > 0,
  },
  { id: 'contacto', label: 'Contacto', show: true },
]

const NAV_LINKS = ALL_LINKS.filter((link) => link.show)

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.id))

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-zinc-50/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#inicio"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-900 font-display text-sm font-semibold text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900"
          aria-label="Ir al inicio"
        >
          {getInitials(portfolio.name)}
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeId === link.id
                  ? 'text-orange-600 dark:text-orange-400'
                  : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 transition-colors duration-300 hover:bg-zinc-200/70 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/70 dark:hover:text-zinc-50"
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {theme === 'dark' ? (
              <SunDim size={18} weight="regular" />
            ) : (
              <Moon size={18} weight="regular" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 transition-colors duration-300 hover:bg-zinc-200/70 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/70 dark:hover:text-zinc-50 md:hidden"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} weight="regular" /> : <List size={18} weight="regular" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav
          className="border-t border-zinc-200/80 bg-zinc-50 px-6 py-4 dark:border-zinc-800/80 dark:bg-zinc-950 md:hidden"
          aria-label="Navegación móvil"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-zinc-700 hover:bg-zinc-200/60 dark:text-zinc-300 dark:hover:bg-zinc-800/60"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
