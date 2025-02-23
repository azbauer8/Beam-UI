import { tv } from "tailwind-variants"

const menuStyles = tv({
  slots: {
    positioner: "outline-none",
    popup:
      "bg-overlay outline-border min-w-38 origin-[var(--transform-origin)] rounded-md py-1 shadow-sm outline-1 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0",
    arrow:
      "data-[side=bottom]:top-[-9px] data-[side=left]:right-[-14px] data-[side=left]:rotate-90 data-[side=right]:left-[-14px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-9px] data-[side=top]:rotate-180",
    separator: "bg-border mx-3 my-1 h-px",
    item: "data-[highlighted]:before:bg-selected flex cursor-default px-2.5 py-2 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm",
    groupLabel:
      "text-accent-fg cursor-default px-2.5 py-2 text-sm leading-4 select-none",
    selectableItem:
      "data-[highlighted]:before:bg-selected flex cursor-default items-center justify-between gap-2 px-2.5 py-2 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm",
    submenuTrigger:
      "data-[popup-open]:before:bg-selected data-[highlighted]:data-[popup-open]:before:bg-selected gap-4 data-[popup-open]:relative data-[popup-open]:z-0 data-[popup-open]:before:absolute data-[popup-open]:before:inset-x-1 data-[popup-open]:before:inset-y-0 data-[popup-open]:before:z-[-1] data-[popup-open]:before:rounded-sm"
  }
})

export { menuStyles }
