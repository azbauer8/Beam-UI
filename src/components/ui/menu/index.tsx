import { cn } from "@/lib/utils"
import { VariantProps } from "tailwind-variants"

import { buttonStyles } from "@/components/ui/button/styles"
import { Menu as MenuPrimitive } from "@base-ui-components/react/menu"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CircleIcon
} from "lucide-react"
import * as React from "react"
import { menuStyles } from "./styles"

const {
  popup,
  positioner,
  arrow,
  separator,
  item,
  groupLabel,
  selectableItem,
  submenuTrigger
} = menuStyles()

function Menu(props: MenuPrimitive.Root.Props) {
  return <MenuPrimitive.Root {...props} />
}

function MenuTrigger({
  children,
  size,
  variant,
  className,
  withChevron = false,
  ...props
}: MenuPrimitive.Trigger.Props &
  VariantProps<typeof buttonStyles> & {
    ref?: React.Ref<HTMLButtonElement>
    withChevron?: boolean
  }) {
  return (
    <MenuPrimitive.Trigger
      {...props}
      className={state =>
        buttonStyles({
          size,
          variant,
          className: cn({ className, state })
        })
      }
    >
      {children}
      {withChevron && <ChevronDownIcon className='-mr-1' />}
    </MenuPrimitive.Trigger>
  )
}

function MenuPopup({
  children,
  className,
  withArrow = true,
  align,
  alignOffset,
  side,
  sideOffset = 8,
  positionerProps,
  ...props
}: MenuPrimitive.Popup.Props & {
  ref?: React.Ref<HTMLDivElement>
  withArrow?: boolean
  align?: MenuPrimitive.Positioner.Props["align"]
  alignOffset?: MenuPrimitive.Positioner.Props["alignOffset"]
  side?: MenuPrimitive.Positioner.Props["side"]
  sideOffset?: MenuPrimitive.Positioner.Props["sideOffset"]
  positionerProps?: MenuPrimitive.Positioner.Props & {
    ref?: React.Ref<HTMLDivElement>
  }
}) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        {...positionerProps}
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className={state =>
          positioner({
            className: cn({ className: positionerProps?.className, state })
          })
        }
      >
        <MenuPrimitive.Popup
          {...props}
          className={state =>
            popup({
              className: cn({ className, state })
            })
          }
        >
          {withArrow && (
            <MenuPrimitive.Arrow className={arrow()}>
              <ArrowSvg />
            </MenuPrimitive.Arrow>
          )}
          {children}
        </MenuPrimitive.Popup>
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  )
}

function MenuItem({
  className,
  ...props
}: MenuPrimitive.Item.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <MenuPrimitive.Item
      {...props}
      className={state => item({ className: cn({ className, state }) })}
    />
  )
}

function MenuSeparator({
  className,
  ...props
}: MenuPrimitive.Separator.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <MenuPrimitive.Separator
      {...props}
      className={state => separator({ className: cn({ className, state }) })}
    />
  )
}

const MenuGroup = MenuPrimitive.Group

function MenuGroupLabel({
  className,
  ...props
}: MenuPrimitive.GroupLabel.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <MenuPrimitive.GroupLabel
      {...props}
      className={state => groupLabel({ className: cn({ className, state }) })}
    />
  )
}

const MenuRadioGroup = MenuPrimitive.RadioGroup

function MenuRadioItem({
  className,
  children,
  ...props
}: MenuPrimitive.RadioItem.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <MenuPrimitive.RadioItem
      {...props}
      className={state =>
        selectableItem({ className: cn({ className, state }) })
      }
    >
      {children}
      <MenuPrimitive.RadioItemIndicator>
        <CircleIcon className='fill-fg size-3 stroke-3' />
      </MenuPrimitive.RadioItemIndicator>
    </MenuPrimitive.RadioItem>
  )
}

function MenuCheckboxItem({
  className,
  children,
  ...props
}: MenuPrimitive.CheckboxItem.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <MenuPrimitive.CheckboxItem
      {...props}
      className={state =>
        selectableItem({ className: cn({ className, state }) })
      }
    >
      {children}
      <MenuPrimitive.CheckboxItemIndicator>
        <CheckIcon className='size-3.5 stroke-4' />
      </MenuPrimitive.CheckboxItemIndicator>
    </MenuPrimitive.CheckboxItem>
  )
}

function MenuSubmenuTrigger({
  className,
  children,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <MenuPrimitive.SubmenuTrigger
      {...props}
      className={state =>
        cn(
          selectableItem(),
          submenuTrigger({ className: cn({ className, state }) })
        )
      }
    >
      {children}
      <ChevronRightIcon className='size-4' />
    </MenuPrimitive.SubmenuTrigger>
  )
}

const MenuSubMenu = MenuPrimitive.Root

function MenuSubMenuPopup({
  withArrow = false,
  sideOffset = 1,
  ...props
}: React.ComponentProps<typeof MenuPopup>) {
  return <MenuPopup withArrow={withArrow} sideOffset={sideOffset} {...props} />
}

function ArrowSvg(props: React.ComponentProps<"svg">) {
  return (
    <svg width='20' height='10' viewBox='0 0 20 10' fill='none' {...props}>
      <path
        d='M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z'
        className='fill-overlay'
      />
      <path
        d='M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z'
        className='fill-border dark:fill-none'
      />
      <path
        d='M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z'
        className='dark:fill-border fill-none'
      />
    </svg>
  )
}

Menu.Item = MenuItem
Menu.Trigger = MenuTrigger
Menu.Popup = MenuPopup
Menu.Separator = MenuSeparator
Menu.Submenu = MenuSubMenu
Menu.SubmenuTrigger = MenuSubmenuTrigger
Menu.SubmenuPopup = MenuSubMenuPopup
Menu.Group = MenuGroup
Menu.GroupLabel = MenuGroupLabel
Menu.RadioGroup = MenuRadioGroup
Menu.RadioItem = MenuRadioItem
Menu.CheckboxItem = MenuCheckboxItem

export { Menu }
