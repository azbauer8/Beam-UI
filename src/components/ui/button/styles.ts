import { tv } from "tailwind-variants"

const buttonStyles = tv({
  base: [
    "inline-flex items-center justify-center gap-2 rounded-md border border-transparent text-sm font-medium whitespace-nowrap transition-colors",
    // icon
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    // focus
    "focus-visible:ring focus-visible:outline-none",
    // disabled
    "disabled:bg-neutral2 disabled:pointer-events-none disabled:opacity-50"
  ],
  variants: {
    variant: {
      neutral: "bg-neutral1 border-neutral4 text-neutral10 hover:bg-neutral2",
      primary: "bg-neutral1 border-neutral4 text-info7 hover:bg-neutral2",
      danger: "bg-neutral1 border-neutral4 text-danger7 hover:bg-neutral2",
      success: "bg-neutral1 border-neutral4 text-success7 hover:bg-neutral2",
      warning: "bg-neutral1 border-neutral4 text-warning7 hover:bg-neutral2",
      outline: "border-neutral4 text-neutral10 hover:bg-neutral2",
      ghost: "text-neutral9 hover:text-neutral10 hover:bg-neutral2",
      link: "text-info7 decoration-info7/50 hover:decoration-info7 underline underline-offset-4"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-8 px-2",
      xs: "h-7 px-2 text-xs [&_svg]:size-3.5",
      lg: "h-11 px-8",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "neutral",
    size: "default"
  }
})

export { buttonStyles }
