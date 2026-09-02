import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps extends ComponentPropsWithoutRef<'a'> {
  variant?: ButtonVariant
  children: ReactNode
}

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ease-out active:scale-[0.98]'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-zinc-900 text-zinc-50 hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200',
  secondary:
    'border border-zinc-300 text-zinc-900 hover:border-zinc-900 hover:bg-zinc-900 hover:text-zinc-50 dark:border-zinc-700 dark:text-zinc-50 dark:hover:border-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900',
}

/** Every call-to-action on the site renders through here, so shape and motion stay identical. */
export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
