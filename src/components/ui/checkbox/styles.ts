import { tv } from "tailwind-variants"

const checkboxStyles = tv({
  slots: {
    wrapper: "flex items-center gap-2 text-base",
    root: "flex size-5 items-center justify-center rounded-sm bg-accent border data-[checked]:bg-primary",
    indicator:
      "flex data-[unchecked]:hidden text-primary-fg [&_svg]:size-3.5 [&_svg]:stroke-[4]",
    group: "flex flex-col items-start gap-1"
  }
})

export { checkboxStyles }
