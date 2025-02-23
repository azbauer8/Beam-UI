import { tv } from "tailwind-variants"

const separatorStyles = tv({
  base: "bg-border",
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
