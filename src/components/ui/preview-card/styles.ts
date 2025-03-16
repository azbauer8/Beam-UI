import { tv } from "tailwind-variants"

const previewCardStyles = tv({
  slots: {
    popup: [
      "bg-bg1 flex w-[240px] origin-[var(--transform-origin)] flex-col gap-2 rounded-lg p-2 outline-1 -outline-offset-1 dark:shadow-none",
      // opening transition
      "transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0"
    ],
    arrow:
      "data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180"
  }
})

export { previewCardStyles }
