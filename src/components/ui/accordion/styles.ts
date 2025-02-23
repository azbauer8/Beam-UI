import { tv } from "tailwind-variants"

const accordionStyles = tv({
  slots: {
    root: "flex flex-col justify-center",
    trigger:
      "group flex w-full cursor-pointer items-center justify-between gap-4 py-2 text-left font-medium",
    triggerIndicator:
      "mr-2 size-5 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45",
    panel:
      "h-[var(--accordion-panel-height)] overflow-hidden text-base text-accent-fg transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0 pb-3",
    item: "border-b"
  }
})

export { accordionStyles }
