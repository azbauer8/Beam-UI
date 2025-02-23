import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function resolveClassName<T>(
  className: string | ((state: T) => string) | undefined,
  state: T
) {
  return className
    ? typeof className === 'string'
      ? className
      : className(state)
    : ''
}
