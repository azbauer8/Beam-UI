import { switchStyles } from "@/components/ui/switch/styles"
import { resolveClassName } from "@/lib/utils"
import { Switch as SwitchPrimitive } from "@base-ui-components/react/switch"

const { root, thumb } = switchStyles()

function Switch({
  className,
  ...props
}: SwitchPrimitive.Root.Props & {
  ref?: React.Ref<HTMLButtonElement>
}) {
  return (
    <SwitchPrimitive.Root
      {...props}
      className={state =>
        root({ className: resolveClassName(className, state) })
      }
    >
      <SwitchPrimitive.Thumb className={thumb()} />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
