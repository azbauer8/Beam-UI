import { resolveClassName } from "@/lib/utils"
import { Accordion as AccordionPrimitive } from "@base-ui-components/react/accordion"
import { PlusIcon } from "lucide-react"
import { accordionStyles } from "./styles"

const { root, item, trigger, triggerIndicator, panel } = accordionStyles()

function Accordion({
  className,
  ...props
}: AccordionPrimitive.Root.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <AccordionPrimitive.Root
      {...props}
      className={state =>
        root({ className: resolveClassName(className, state) })
      }
    />
  )
}

function AccordionItem({
  className,
  ...props
}: AccordionPrimitive.Item.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <AccordionPrimitive.Item
      {...props}
      className={state =>
        item({ className: resolveClassName(className, state) })
      }
    />
  )
}

function AccordionTrigger({
  children,
  className,
  ...props
}: AccordionPrimitive.Trigger.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <AccordionPrimitive.Trigger
      {...props}
      className={state =>
        trigger({
          className: resolveClassName(className, state)
        })
      }
    >
      {children}
      <PlusIcon className={triggerIndicator()} />
    </AccordionPrimitive.Trigger>
  )
}

function AccordionPanel({
  className,
  ...props
}: AccordionPrimitive.Panel.Props & {
  ref?: React.Ref<HTMLButtonElement>
}) {
  return (
    <AccordionPrimitive.Panel
      {...props}
      className={state =>
        panel({ className: resolveClassName(className, state) })
      }
    />
  )
}

Accordion.Item = AccordionItem
Accordion.Trigger = AccordionTrigger
Accordion.Panel = AccordionPanel

export { Accordion }
