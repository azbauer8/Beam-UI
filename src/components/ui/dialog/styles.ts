import { tv } from "tailwind-variants"

const dialogStyles = tv({
  slots: {
    backdrop: [
      "fixed inset-0 bg-black transition-all duration-150",
      // opacity
      "opacity-70 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0"
    ],
    popup: [
      "bg-bg1 -mt-8 flex w-96 max-w-[calc(100vw-3rem)] flex-col gap-3 rounded-lg border p-4",
      // positioning
      "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      // transition
      "transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0"
    ],
    header: "flex flex-col gap-0.5",
    title: "text-lg font-medium",
    description: "text-neutral9 text-base",
    content: "",
    footer: ""
  }
})

export { dialogStyles }
