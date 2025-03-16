import { tv } from "tailwind-variants"

const checkboxStyles = tv({
  slots: {
    wrapper: "flex items-center gap-2 text-base",
    root: "bg-neutral3 data-[checked]:bg-info8 flex size-5 items-center justify-center rounded-sm border",
    indicator:
      "flex text-white data-[unchecked]:hidden [&_svg]:size-3.5 [&_svg]:stroke-[4]",
    group: "flex flex-col items-start gap-1"
  }
})

export { checkboxStyles }
