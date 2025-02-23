import { radioStyles } from "@/components/ui/radio/styles"
import { resolveClassName } from "@/lib/utils"
import { Radio as RadioPrimitive } from "@base-ui-components/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui-components/react/radio-group"
import { VariantProps } from "tailwind-variants"

const { indicator, group, item, label } = radioStyles()

function Radio({
  className,
  ...props
}: RadioGroupPrimitive.Props &
  VariantProps<typeof radioStyles> & {
    ref?: React.Ref<HTMLDivElement>
  }) {
  return (
    <RadioGroupPrimitive
      {...props}
      className={state =>
        group({ className: resolveClassName(className, state) })
      }
    />
  )
}

function RadioItem({
  className,
  wrapperClassName,
  children,
  ...props
}: RadioPrimitive.Root.Props &
  VariantProps<typeof radioStyles> & {
    ref?: React.Ref<HTMLButtonElement>
    wrapperClassName?: string
  }) {
  return (
    <label className={label({ className: wrapperClassName })}>
      <RadioPrimitive.Root
        {...props}
        className={state =>
          item({ className: resolveClassName(className, state) })
        }
      >
        <RadioPrimitive.Indicator className={indicator()} />
      </RadioPrimitive.Root>
      {children}
    </label>
  )
}

Radio.Item = RadioItem

export { Radio }
