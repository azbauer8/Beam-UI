import { tv } from "tailwind-variants"

const scrollAreaStyles = tv({
  slots: {
    root: "max-h-96 max-w-[calc(100vw-8rem)]",
    viewport:
      "h-full overscroll-contain rounded-md outline -outline-offset-1 focus-visible:ring-2 focus-visible:outline-none",
    scrollbar: [
      "bg-neutral3 m-2 flex w-1 justify-center rounded opacity-0 transition-opacity delay-300",
      // hovering
      "data-[hovering]:opacity-100 data-[hovering]:delay-0 data-[hovering]:duration-75",
      // scrolling
      "data-[scrolling]:opacity-100 data-[scrolling]:delay-0 data-[scrolling]:duration-75"
    ],
    scrollbarThumb: "bg-neutral9 w-full rounded"
  }
})

export { scrollAreaStyles }
