import type { ComponentType, SVGProps } from 'react'
import { ArrowsLeftRight, GithubLogo } from '@phosphor-icons/react'

type IconProps = SVGProps<SVGSVGElement>

/**
 * Small, hand-drawn single-color marks for the real technologies listed in
 * `portfolio.ts`. Kept as inline SVG (no icon-library dependency) so every
 * mark can carry the accent color and scale crisply in the Tech Stack grid.
 */

function ReactMark({ ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="2.1" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.3">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  )
}

function TypeScriptMark({ ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.3" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="700"
        fill="currentColor"
        fontFamily="var(--font-mono)"
      >
        TS
      </text>
    </svg>
  )
}

function JavaScriptMark({ ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.3" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="700"
        fill="currentColor"
        fontFamily="var(--font-mono)"
      >
        JS
      </text>
    </svg>
  )
}

function NextJsMark({ ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M9 8v8M9 8l6.5 8.4M15.5 8v6.6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TailwindMark({ ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 6.4c-2.9 0-4.7 1.4-5.4 4.3.9-1.4 2-1.9 3.4-1.6.7.2 1.3.7 2 1.3.9.8 2 1.8 4 1.8 2.9 0 4.7-1.4 5.4-4.3-.9 1.4-2 1.9-3.4 1.6-.7-.2-1.3-.7-2-1.3-.9-.8-1.9-1.8-4-1.8Zm-5.4 6.5c-2.9 0-4.7 1.4-5.4 4.3.9-1.4 2-1.9 3.4-1.6.7.2 1.3.7 2 1.3.9.8 2 1.8 4 1.8 2.9 0 4.7-1.4 5.4-4.3-.9 1.4-2 1.9-3.4 1.6-.7-.2-1.3-.7-2-1.3-.9-.8-1.9-1.8-4-1.8Z" />
    </svg>
  )
}

function HtmlMark({ ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 3l1.6 17L12 22l6.4-2L20 3H4Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path
        d="M7 7h10l-.4 4H8l.2 2.4h9L16.6 18 12 19.3 7.4 18l-.3-3.4"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CssMark({ ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 3l1.6 17L12 22l6.4-2L20 3H4Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path
        d="M16.6 7H8l.3 3.2h8L15.9 17 12 18.2 8.1 17l-.2-2.3"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PythonMark({ ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 3c-3.6 0-3.4 1.6-3.4 1.6v1.7h3.5v.5H7.2S5 6.6 5 10.3s1.9 3.6 1.9 3.6h1.2v-1.7s-.1-1.9 1.9-1.9h3.4s1.8 0 1.8-1.8V4.9S15.5 3 12 3Zm-1.9 1.1a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2Z"
        fill="currentColor"
      />
      <path
        d="M12 21c3.6 0 3.4-1.6 3.4-1.6v-1.7h-3.5v-.5h4.9s2.2.2 2.2-3.5-1.9-3.6-1.9-3.6h-1.2v1.7s.1 1.9-1.9 1.9H10s-1.8 0-1.8 1.8v3.3S8.5 21 12 21Zm1.9-1.1a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  )
}

function SupabaseMark({ ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.6 2 4.8 13.6a1 1 0 0 0 .8 1.6H11l-.6 6.8a.7.7 0 0 0 1.3.5L19.2 10.4a1 1 0 0 0-.8-1.6H13l.6-6.8Z" />
    </svg>
  )
}

function ViteMark({ ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.4 4.3 12.6 21a.5.5 0 0 1-.9 0L3.9 4.3a.5.5 0 0 1 .5-.7l7.3 1.4a.5.5 0 0 0 .2 0l4.4-1a.5.5 0 0 1 .3.9l-2.4 2.3a.3.3 0 0 0 .3.5l3.4-.7a.5.5 0 0 1 .5.7Z" />
    </svg>
  )
}

function GitMark({ ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="7" cy="6" r="1.8" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="7" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="16" cy="12" r="1.8" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 7.8v8.4M7 9c0 3 3 3 7.5 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

/** Keyed by the exact `items` strings used in `portfolio.ts` skills groups. */
export const TECH_ICONS: Record<string, ComponentType<IconProps>> = {
  React: ReactMark,
  TypeScript: TypeScriptMark,
  JavaScript: JavaScriptMark,
  'Next.js': NextJsMark,
  'Tailwind CSS': TailwindMark,
  HTML: HtmlMark,
  CSS: CssMark,
  Python: PythonMark,
  Supabase: SupabaseMark,
  'APIs REST': ArrowsLeftRight,
  Git: GitMark,
  GitHub: GithubLogo,
  Vite: ViteMark,
}
