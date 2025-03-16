import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn<T>(
  ...inputs: (
    | ClassValue
    | { className: string | ((state: T) => string); state: T }
  )[]
) {
  return twMerge(
    clsx(
      inputs.map(input => {
        if (
          input !== null &&
          typeof input === "object" &&
          "className" in input
        ) {
          return typeof input.className === "string"
            ? input.className
            : input.className(input.state)
        }
        return input
      })
    )
  )
}
