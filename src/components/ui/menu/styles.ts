import { tv } from "tailwind-variants"

const menuStyles = tv({
  slots: {
    positioner: "outline-none",
    popup: [
      "bg-bg1 min-w-38 origin-[var(--transform-origin)] rounded-md py-1 shadow-sm outline-1",
      // opening transition
      "transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0"
    ],
    arrow:
      "data-[side=bottom]:top-[-9px] data-[side=left]:right-[-14px] data-[side=left]:rotate-90 data-[side=right]:left-[-14px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-9px] data-[side=top]:rotate-180",
    separator: "bg-neutral4 mx-3 my-1 h-px",
    item: [
      "flex cursor-default px-2.5 py-2 text-sm leading-4 outline-none select-none",
      // selected
      "data-[highlighted]:before:bg-neutral2 data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm"
    ],
    groupLabel:
      "text-neutral9 cursor-default px-2.5 py-2 text-sm leading-4 select-none",
    selectableItem: [
      "flex cursor-default items-center justify-between gap-2 px-2.5 py-2 text-sm leading-4 outline-none select-none",
      // selected
      "data-[highlighted]:before:bg-neutral2 data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm"
    ],
    submenuTrigger: [
      "data-[highlighted]:data-[popup-open]:before:bg-neutral2 gap-4",
      // open
      "data-[popup-open]:before:bg-neutral2 data-[popup-open]:relative data-[popup-open]:z-0 data-[popup-open]:before:absolute data-[popup-open]:before:inset-x-1 data-[popup-open]:before:inset-y-0 data-[popup-open]:before:z-[-1] data-[popup-open]:before:rounded-sm"
    ]
  }
})

export { menuStyles }
