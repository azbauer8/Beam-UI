import { Select as SelectPrimitive } from "@base-ui-components/react/select"
import { CheckIcon, ChevronDownIcon } from "lucide-react"

import { selectStyles } from "@/components/ui/select/styles"
import { cn } from "@/lib/utils"

const { item, popup, positioner, trigger, groupLabel, separator } =
  selectStyles()

const SelectGroup = SelectPrimitive.Group

const Select = <T,>(props: SelectPrimitive.Root.Props<T>) => (
  <SelectPrimitive.Root alignItemToTrigger={false} {...props} />
)

function SelectTrigger({
  children,
  className,
  withChevron = true,
  ...props
}: SelectPrimitive.Trigger.Props & {
  ref?: React.Ref<HTMLDivElement>
  withChevron?: boolean
}) {
  return (
    <SelectPrimitive.Trigger
      {...props}
      className={state =>
        trigger({
          className: cn({ className, state })
        })
      }
    >
      {children}
      {withChevron && <ChevronDownIcon className='size-4 stroke-3' />}
    </SelectPrimitive.Trigger>
  )
}

function SelectValue(
  props: SelectPrimitive.Value.Props & {
    ref?: React.Ref<HTMLSpanElement>
  }
) {
  return <SelectPrimitive.Value {...props} />
}

function SelectPopup({
  children,
  className,
  align,
  alignOffset,
  side,
  sideOffset = 4,
  positionerProps,
  ...props
}: SelectPrimitive.Popup.Props & {
  ref?: React.Ref<HTMLDivElement>
  align?: SelectPrimitive.Positioner.Props["align"]
  alignOffset?: SelectPrimitive.Positioner.Props["alignOffset"]
  side?: SelectPrimitive.Positioner.Props["side"]
  sideOffset?: SelectPrimitive.Positioner.Props["sideOffset"]
  positionerProps?: SelectPrimitive.Positioner.Props & {
    ref?: React.Ref<HTMLDivElement>
  }
}) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        {...positionerProps}
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className={positioner()}
      >
        <SelectPrimitive.ScrollUpArrow />
        <SelectPrimitive.Popup
          className={state => popup({ className: cn({ className, state }) })}
          {...props}
        >
          {children}
        </SelectPrimitive.Popup>
        <SelectPrimitive.ScrollDownArrow />
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}

function SelectItem({
  className,
  children,
  ...props
}: SelectPrimitive.Item.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <SelectPrimitive.Item
      {...props}
      className={state => item({ className: cn({ className, state }) })}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className='size-3.5 stroke-4' />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

function SelectGroupLabel({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <SelectPrimitive.GroupLabel
      {...props}
      className={state => groupLabel({ className: cn({ className, state }) })}
    />
  )
}

function SelectSeparator({
  className,
  ...props
}: SelectPrimitive.Separator.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <SelectPrimitive.Separator
      {...props}
      className={state => separator({ className: cn({ className, state }) })}
    />
  )
}

Select.Popup = SelectPopup
Select.Group = SelectGroup
Select.GroupLabel = SelectGroupLabel
Select.Item = SelectItem
Select.Separator = SelectSeparator
Select.Trigger = SelectTrigger
Select.Value = SelectValue

export { Select }
