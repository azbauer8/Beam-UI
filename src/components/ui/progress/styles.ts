import { tv } from "tailwind-variants"

const progressStyles = tv({
  slots: {
    track: "block h-1 w-48 overflow-hidden rounded bg-selected",
    indicator: "block bg-accent-fg transition-all duration-500"
  }
})

export { progressStyles }
