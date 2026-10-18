import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'motion/react'
import { portfolio } from '@/data/portfolio'
import { useActiveSection } from '@/hooks/useActiveSection'

const ALL_LINKS = [
  { id: 'inicio', label: 'Home', show: true },
  { id: 'sobre-mi', label: 'About', show: true },
  { id: 'habilidades', label: 'Stack', show: portfolio.skills.length > 0 },
  { id: 'proyectos', label: 'Projects', show: portfolio.projects.length > 0 },
  {
    id: 'trayectoria',
    label: 'Trayectoria',
    show: portfolio.experience.length > 0 || portfolio.education.length > 0,
  },
  { id: 'contacto', label: 'Contact', show: true },
]

const NAV_LINKS = ALL_LINKS.filter((link) => link.show)

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.id))

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/75 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#inicio"
          className="flex items-center gap-2 font-display text-sm font-semibold tracking-[0.15em] text-bone uppercase"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-electric" />
          {portfolio.alias}
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="relative rounded-full px-4 py-2 font-mono text-xs tracking-[0.08em] text-mist uppercase transition-colors duration-300 hover:text-bone"
            >
              {activeId === link.id ? (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-carbon-2"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              ) : null}
              <span className={`relative ${activeId === link.id ? 'text-bone' : ''}`}>{link.label}</span>
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-mist transition-colors duration-300 hover:bg-carbon-2 hover:text-bone md:hidden"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} weight="regular" /> : <List size={18} weight="regular" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-ink md:hidden"
            aria-label="Navegación móvil"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-3 py-2.5 font-display text-lg font-medium text-bone hover:text-electric-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
