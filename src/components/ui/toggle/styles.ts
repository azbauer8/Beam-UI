import { tv } from "tailwind-variants"

const toggleStyles = tv({
  slots: {
    toggleGroup: "bg-accent flex gap-px rounded-md border p-0.5",
    toggle:
      "text-accent-fg hover:bg-selected data-[pressed]:bg-selected data-[pressed]:text-fg inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&>svg]:size-4"
  }
})

export { toggleStyles }
