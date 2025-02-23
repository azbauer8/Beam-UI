import { tv } from "tailwind-variants"

const radioStyles = tv({
  slots: {
    group: "flex flex-col items-start gap-1",
    label: "flex items-center gap-2",
    item: "data-[checked]:bg-primary data-[checked]:border-primary flex size-5 items-center justify-center rounded-full border-2 focus-visible:ring-2 focus-visible:outline-none disabled:pointer-events-none",
    indicator:
      "flex translate-x-[0.25px] translate-y-[0.25px] before:size-[9px] before:rounded-full before:bg-white data-[unchecked]:hidden"
  }
})

export { radioStyles }
