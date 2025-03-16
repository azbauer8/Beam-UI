import { checkboxStyles } from "@/components/ui/checkbox/styles"
import { cn } from "@/lib/utils"
import { Checkbox as CheckboxPrimitive } from "@base-ui-components/react/checkbox"
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui-components/react/checkbox-group"
import { CheckIcon } from "lucide-react"

const { wrapper, root, indicator, group } = checkboxStyles()

function Checkbox({
  className,
  wrapperClassName,
  children,
  ...props
}: CheckboxPrimitive.Root.Props & {
  ref?: React.Ref<HTMLButtonElement>
  wrapperClassName?: string
}) {
  return (
    <label className={wrapper({ className: wrapperClassName })}>
      <CheckboxPrimitive.Root
        {...props}
        className={state => root({ className: cn({ className, state }) })}
      >
        <CheckboxPrimitive.Indicator className={indicator()}>
          <CheckIcon />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {children}
    </label>
  )
}

function CheckboxGroup({
  className,
  ...props
}: CheckboxGroupPrimitive.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <CheckboxGroupPrimitive
      {...props}
      className={state => group({ className: cn({ className, state }) })}
    />
  )
}

Checkbox.Group = CheckboxGroup

export { Checkbox }
