import { tv } from "tailwind-variants"

const tooltipStyles = tv({
  slots: {
    positioner: "outline-none",
    popup: [
      "bg-bg1 flex origin-[var(--transform-origin)] flex-col rounded-md border px-2 py-1 text-xs",
      // opening transition
      "transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[instant]:duration-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0"
    ],
    arrow:
      "data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180"
  }
})

export { tooltipStyles }
