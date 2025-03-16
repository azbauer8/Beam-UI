import { tv } from "tailwind-variants"

const progressStyles = tv({
  slots: {
    track: "bg-neutral3 block h-1 w-48 overflow-hidden rounded",
    indicator: "bg-info7 block transition-all duration-500"
  }
})

export { progressStyles }
