import { tv } from "tailwind-variants"

const radioStyles = tv({
  slots: {
    group: "flex flex-col items-start gap-1",
    label: "flex items-center gap-2",
    item: [
      "bg-neutral3 flex size-5 items-center justify-center rounded-full border disabled:pointer-events-none",
      // checked
      "data-[checked]:bg-info8 data-[checked]:border-info8",
      // focused
      "focus-visible:ring-2 focus-visible:outline-none"
    ],
    indicator:
      "flex translate-x-[0.25px] translate-y-[0.25px] before:size-[9px] before:rounded-full before:bg-white data-[unchecked]:hidden"
  }
})

export { radioStyles }
