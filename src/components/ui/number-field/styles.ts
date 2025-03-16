import { tv } from "tailwind-variants"

const numberFieldStyles = tv({
  slots: {
    root: "flex flex-col items-start gap-1",
    group: "flex",
    decrement:
      "bg-neutral1 hover:bg-neutral2 flex size-10 items-center justify-center rounded-tl-md rounded-bl-md border bg-clip-padding select-none",
    increment:
      "bg-neutral1 hover:bg-neutral2 flex size-10 items-center justify-center rounded-tr-md rounded-br-md border bg-clip-padding select-none",
    input: [
      "bg-bg1 h-10 w-24 border-t border-b text-center text-base tabular-nums disabled:pointer-events-none",
      // focus
      "focus:z-1 focus-visible:ring-2 focus-visible:outline-none"
    ]
  }
})

export { numberFieldStyles }
