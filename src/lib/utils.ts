import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

type ClassName<T> =
  | string
  | number
  | bigint
  | boolean
  | { className: string | ((state: T) => string) | undefined; state: T }
  | null
  | undefined

export function cn<T>(...inputs: (ClassName<T> | ClassName<T>[])[]) {
  return twMerge(
    clsx(
      inputs.map(input => {
        if (!!input && typeof input === "object" && "className" in input) {
          return typeof input.className === "function"
            ? input.className(input.state)
            : input.className
        }
        return input
      })
    )
  )
}
