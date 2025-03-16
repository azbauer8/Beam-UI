import { tv } from "tailwind-variants"

const fieldStyles = tv({
  slots: {
    root: "flex w-full flex-col items-start gap-1",
    label: "text-sm font-medium",
    description: "text-neutral9 text-sm",
    error: "text-danger9 text-sm",
    fieldset: "flex w-full flex-col gap-4",
    fieldsetLegend: "border-b pb-3 text-lg font-medium"
  }
})

export { fieldStyles }
