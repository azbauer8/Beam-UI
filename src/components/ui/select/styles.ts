import { tv } from "tailwind-variants"

const selectStyles = tv({
  slots: {
    trigger:
      "bg-bg hover:bg-selected active:bg-accent data-[popup-open]:bg-accent flex h-10 min-w-36 items-center justify-between gap-3 rounded-md border pr-3 pl-3.5 text-sm select-none focus-visible:ring-2 focus-visible:outline-none disabled:pointer-events-none",
    positioner: "outline-none",
    popup:
      "group bg-overlay w-[var(--anchor-width)] origin-[var(--transform-origin)] rounded-md py-1 outline transition-[transform,scale,opacity] data-[ending-style]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none dark:-outline-offset-1",
    item: "data-[highlighted]:before:bg-selected flex cursor-default items-center justify-between gap-2 px-2.5 py-2 text-sm leading-4 outline-none select-none group-data-[side=none]:text-base data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm",
    groupLabel: "text-accent-fg px-2 py-1.5 text-sm font-medium",
    separator: "bg-border mx-3 my-1 h-px"
  }
})

export { selectStyles }
