import { separatorStyles } from "@/components/ui/separator/styles"
import { resolveClassName } from "@/lib/utils"
import { Separator as SeparatorPrimitive } from "@base-ui-components/react/separator"
import { VariantProps } from "tailwind-variants"

function Separator({
  className,
  orientation,
  ...props
}: SeparatorPrimitive.Props &
  VariantProps<typeof separatorStyles> & {
    ref?: React.Ref<HTMLDivElement>
  }) {
  return (
    <SeparatorPrimitive
      {...props}
      className={state =>
        separatorStyles({
          orientation,
          className: resolveClassName(className, state)
        })
      }
    />
  )
}

export { Separator }
