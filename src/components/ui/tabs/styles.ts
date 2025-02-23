import { tv } from "tailwind-variants"

const tabsStyles = tv({
  slots: {
    root: "rounded-md border",
    list: "relative z-0 flex gap-1 border-b px-1",
    indicator:
      "bg-selected absolute top-1/2 left-0 z-[-1] h-6 w-[var(--active-tab-width)] -translate-y-1/2 translate-x-[var(--active-tab-left)] rounded-sm transition-all duration-200 ease-in-out",
    tab: "text-accent-fg hover:text-fg data-[selected]:text-fg before:-ring-offset-1 flex h-8 items-center justify-center border-0 px-2 text-sm font-medium transition-colors outline-none select-none before:inset-x-0 before:inset-y-1 before:rounded-sm focus-visible:relative focus-visible:before:absolute focus-visible:before:ring-2",
    panel:
      "relative flex h-32 items-center justify-center focus-visible:rounded-md focus-visible:ring-2 focus-visible:outline-none disabled:pointer-events-none"
  }
})

export { tabsStyles }
