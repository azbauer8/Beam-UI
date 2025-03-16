import { tv } from "tailwind-variants"

const collapsibleStyles = tv({
  slots: {
    root: "flex min-h-36 w-56 flex-col justify-center",
    trigger:
      "group bg-neutral1 hover:bg-neutral2 flex items-center gap-2 rounded-sm px-2 py-1 text-sm font-medium",
    chevron: "size-3 transition-all ease-out group-data-[panel-open]:rotate-90",
    panel:
      "h-[var(--collapsible-panel-height)] overflow-hidden transition-all ease-out data-[ending-style]:h-0 data-[starting-style]:h-0",
    content:
      "bg-neutral1 mt-1 flex cursor-text flex-col gap-2 rounded-sm py-2 pl-7 text-sm"
  }
})

export { collapsibleStyles }
