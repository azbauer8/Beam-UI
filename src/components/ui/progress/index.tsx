import { progressStyles } from "@/components/ui/progress/styles"
import { Progress as ProgressPrimitive } from "@base-ui-components/react/progress"
import { VariantProps } from "tailwind-variants"

const { indicator, track } = progressStyles()

function Progress(
  props: ProgressPrimitive.Root.Props &
    VariantProps<typeof progressStyles> & {
      ref?: React.Ref<HTMLDivElement>
    }
) {
  return (
    <ProgressPrimitive.Root {...props}>
      <ProgressPrimitive.Track className={track()}>
        <ProgressPrimitive.Indicator className={indicator()} />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  )
}

export { Progress }
