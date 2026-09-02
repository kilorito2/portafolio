/** Strips the `[placeholder]` bracket markers used in src/data/portfolio.ts. */
export function stripBrackets(value: string): string {
  return value.replace(/[[\]]/g, '').trim()
}

/** Up to two initials from a display name, for the logo mark and avatar fallback. */
export function getInitials(name: string): string {
  const clean = stripBrackets(name)
  const initials = clean
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
  return initials || '••'
}
