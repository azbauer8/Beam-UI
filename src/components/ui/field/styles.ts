import { tv } from "tailwind-variants"

const fieldStyles = tv({
  slots: {
    root: "flex w-full flex-col items-start gap-1",
    label: "text-sm font-medium",
    description: "text-sm text-accent-fg",
    error: "text-sm text-danger",
    fieldset: "flex w-full flex-col gap-4",
    fieldsetLegend: "border-b pb-3 text-lg font-medium"
  }
})

export { fieldStyles }
