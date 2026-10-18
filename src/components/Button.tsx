import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps extends ComponentPropsWithoutRef<'a'> {
  variant?: ButtonVariant
  children: ReactNode
}

const base =
  'group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-bone text-ink hover:bg-electric-soft hover:shadow-[0_0_0_1px_var(--color-electric-soft),0_12px_32px_-12px_var(--color-electric)]',
  secondary:
    'border border-line text-bone hover:border-electric-soft hover:bg-electric-dim hover:text-electric-soft',
}

/** Every call-to-action on the site renders through here, so shape and motion stay identical. */
export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
