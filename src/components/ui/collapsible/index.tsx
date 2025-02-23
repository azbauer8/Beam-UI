import { collapsibleStyles } from "@/components/ui/collapsible/styles"
import { resolveClassName } from "@/lib/utils"
import { Collapsible as CollapsiblePrimitive } from "@base-ui-components/react/collapsible"
import { ChevronRightIcon } from "lucide-react"

const { root, trigger, chevron, panel, content } = collapsibleStyles()

function Collapsible({
  className,
  ...props
}: CollapsiblePrimitive.Root.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <CollapsiblePrimitive.Root
      {...props}
      className={state =>
        root({ className: resolveClassName(className, state) })
      }
    />
  )
}

function CollapsibleTrigger({
  children,
  className,
  ...props
}: CollapsiblePrimitive.Trigger.Props & {
  ref?: React.Ref<HTMLButtonElement>
}) {
  return (
    <CollapsiblePrimitive.Trigger
      {...props}
      className={state =>
        trigger({ className: resolveClassName(className, state) })
      }
    >
      <ChevronRightIcon className={chevron()} />
      {children}
    </CollapsiblePrimitive.Trigger>
  )
}

function CollapsiblePanel({
  children,
  className,
  contentClassName,
  ...props
}: CollapsiblePrimitive.Panel.Props & {
  ref?: React.Ref<HTMLButtonElement>
  contentClassName?: string
}) {
  return (
    <CollapsiblePrimitive.Panel
      {...props}
      className={state =>
        panel({ className: resolveClassName(className, state) })
      }
    >
      <div className={content({ className: contentClassName })}>{children}</div>
    </CollapsiblePrimitive.Panel>
  )
}

Collapsible.Trigger = CollapsibleTrigger
Collapsible.Panel = CollapsiblePanel

export { Collapsible }
