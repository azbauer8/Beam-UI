import { tv } from "tailwind-variants"

const sliderStyles = tv({
  slots: {
    control: "flex w-56 touch-none items-center py-3 select-none",
    track: "bg-neutral3 h-1 w-full rounded select-none",
    indicator: "bg-info7 rounded select-none",
    thumb:
      "ring-neutral4 size-4 rounded-full bg-white shadow ring select-none focus-visible:ring"
  }
})

export { sliderStyles }
