import { tv } from "tailwind-variants"

const separatorStyles = tv({
  base: "bg-neutral5",
  variants: {
    orientation: {
      horizontal: "h-px",
      vertical: "w-px"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
})

export { separatorStyles }
