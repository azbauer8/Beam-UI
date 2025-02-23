import { tv } from "tailwind-variants"

const collapsibleStyles = tv({
  slots: {
    root: "flex min-h-36 w-56 flex-col justify-center",
    trigger:
      "group flex items-center gap-2 rounded-sm bg-accent px-2 py-1 text-sm font-medium hover:bg-selected",
    chevron: "size-3 transition-all ease-out group-data-[panel-open]:rotate-90",
    panel:
      "h-[var(--collapsible-panel-height)] overflow-hidden transition-all ease-out data-[ending-style]:h-0 data-[starting-style]:h-0",
    content:
      "flex flex-col text-sm mt-1 cursor-text gap-2 rounded-sm py-2 pl-7 bg-accent"
  }
})

export { collapsibleStyles }
