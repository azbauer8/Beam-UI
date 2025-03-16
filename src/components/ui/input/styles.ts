import { tv } from "tailwind-variants"

const inputStyles = tv({
  base: [
    "h-10 w-full max-w-64 rounded-md border pl-3.5 text-base",
    // focus
    "focus-visible:ring-2 focus-visible:outline-none disabled:pointer-events-none"
  ]
})

export { inputStyles }
