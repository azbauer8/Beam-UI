import { tv } from "tailwind-variants"

const tabsStyles = tv({
  slots: {
    root: "rounded-md border",
    list: "relative z-0 flex gap-1 border-b px-1",
    indicator: [
      "bg-neutral3 h-6 w-[var(--active-tab-width)] rounded-sm transition-all duration-200 ease-in-out",
      // positioning
      "absolute top-1/2 left-0 z-[-1] translate-x-[var(--active-tab-left)] -translate-y-1/2"
    ],
    tab: [
      "text-neutral9 hover:text-neutral10 data-[selected]:text-neutral10 before:-ring-offset-1 flex h-8 items-center justify-center border-0 px-2 text-sm font-medium transition-colors outline-none select-none before:inset-x-0 before:inset-y-1 before:rounded-sm",
      //focused
      "focus-visible:relative focus-visible:before:absolute focus-visible:before:ring-2"
    ],
    panel: [
      "relative flex h-32 items-center justify-center disabled:pointer-events-none",
      // focused
      "focus-visible:rounded-md focus-visible:ring-2 focus-visible:outline-none"
    ]
  }
})

export { tabsStyles }
