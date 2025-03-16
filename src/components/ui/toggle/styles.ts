import { tv } from "tailwind-variants"

const toggleStyles = tv({
  slots: {
    toggleGroup: "bg-bg1 flex gap-px rounded-md border p-0.5",
    toggle:
      "text-neutral9 hover:bg-neutral2 data-[pressed]:bg-neutral3 data-[pressed]:text-neutral10 inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&>svg]:size-4"
  }
})

export { toggleStyles }
