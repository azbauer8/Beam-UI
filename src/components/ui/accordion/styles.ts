import { tv } from "tailwind-variants"

const accordionStyles = tv({
  slots: {
    root: "flex flex-col justify-center",
    trigger:
      "group flex w-full cursor-pointer items-center justify-between gap-4 py-2 text-left font-medium",
    triggerIndicator: [
      "mr-2 size-5 shrink-0",
      // opening transition
      "transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45"
    ],
    panel: [
      "text-neutral9 overflow-hidden pb-3 text-base",
      // opening transition
      "transition-[height] ease-out",
      // height transition
      "h-[var(--accordion-panel-height)] data-[ending-style]:h-0 data-[starting-style]:h-0"
    ],
    item: "border-b"
  }
})

export { accordionStyles }
