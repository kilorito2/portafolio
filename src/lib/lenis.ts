import Lenis from 'lenis'

let lenis: Lenis | null = null
let rafId: number | null = null

/**
 * Starts the single, page-wide smooth-scroll instance. No-ops if it's
 * already running or the visitor prefers reduced motion (native
 * `scroll-behavior: smooth` from index.css covers that case instead).
 */
export function initLenis() {
  if (lenis || typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  lenis = new Lenis({ duration: 1.1, smoothWheel: true })

  const raf = (time: number) => {
    lenis?.raf(time)
    rafId = requestAnimationFrame(raf)
  }
  rafId = requestAnimationFrame(raf)
}

/** Pauses inertia scrolling — used while the project modal is open. */
export function stopLenis() {
  lenis?.stop()
}

/** Resumes inertia scrolling after the modal closes. */
export function startLenis() {
  lenis?.start()
}

export function destroyLenis() {
  if (rafId !== null) cancelAnimationFrame(rafId)
  lenis?.destroy()
  lenis = null
  rafId = null
}
