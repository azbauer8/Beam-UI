import { tv } from "tailwind-variants"

const buttonStyles = tv({
  base: "inline-flex items-center justify-center gap-2 rounded-md border border-transparent text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      neutral: "bg-accent border-border text-fg hover:bg-selected",
      primary: "bg-accent border-border text-primary hover:bg-selected",
      danger: "bg-accent border-border text-danger hover:bg-selected",
      success: "bg-accent border-border text-success hover:bg-selected",
      warning: "bg-accent border-border text-warning hover:bg-selected",
      outline: "border-border text-fg hover:bg-selected",
      ghost: "text-accent-fg hover:text-fg hover:bg-selected",
      link: "text-primary decoration-primary/50 hover:decoration-primary underline underline-offset-4"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-8 px-2",
      xs: "h-7 px-2 text-xs [&_svg]:size-3.5 [&_svg]:shrink-0",
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
