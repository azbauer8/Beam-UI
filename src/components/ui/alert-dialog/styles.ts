import { tv } from "tailwind-variants"

const alertDialogStyles = tv({
  slots: {
    backdrop:
      "fixed inset-0 bg-black opacity-60 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70",
    popup:
      "fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-overlay p-4 border transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 flex flex-col gap-3",
    header: "flex flex-col gap-0.5",
    title: "text-lg font-medium",
    description: "text-base text-accent-fg",
    content: "",
    footer: ""
  }
})

export { alertDialogStyles }
