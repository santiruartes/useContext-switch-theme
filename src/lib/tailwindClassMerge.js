import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge conflicting tailwind classes
 * @param inputs 
 * @returns 
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}