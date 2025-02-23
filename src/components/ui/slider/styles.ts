import { tv } from "tailwind-variants"

const sliderStyles = tv({
  slots: {
    control: "flex w-56 touch-none items-center py-3 select-none",
    track: "h-1 w-full rounded bg-selected select-none",
    indicator: "rounded bg-accent-fg select-none",
    thumb:
      "size-4 rounded-full bg-white border-2 select-none focus-visible:border-2 focus-visible:border-ring"
  }
})

export { sliderStyles }
