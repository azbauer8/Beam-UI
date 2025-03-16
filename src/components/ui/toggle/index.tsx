import { toggleStyles } from "@/components/ui/toggle/styles"
import { cn } from "@/lib/utils"
import { Toggle as TogglePrimitive } from "@base-ui-components/react/toggle"
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui-components/react/toggle-group"

const { toggleGroup, toggle } = toggleStyles()

function Toggle({
  className,
  ...props
}: TogglePrimitive.Props & {
  ref?: React.Ref<HTMLButtonElement>
}) {
  return (
    <TogglePrimitive
      {...props}
      className={state => toggle({ className: cn({ className, state }) })}
    />
  )
}

function ToggleGroup({
  className,
  ...props
}: ToggleGroupPrimitive.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <ToggleGroupPrimitive
      {...props}
      className={state => toggleGroup({ className: cn({ className, state }) })}
    />
  )
}

Toggle.Group = ToggleGroup

export { Toggle }
