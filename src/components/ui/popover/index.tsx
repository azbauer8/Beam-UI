import { resolveClassName } from "@/lib/utils"
import { VariantProps } from "tailwind-variants"

import { buttonStyles } from "@/components/ui/button/styles"
import { Popover as PopoverPrimitive } from "@base-ui-components/react/popover"
import * as React from "react"
import { popoverStyles } from "./styles"

const { popup, positioner, arrow, title, description } = popoverStyles()

function Popover(props: PopoverPrimitive.Root.Props) {
  return <PopoverPrimitive.Root {...props} />
}

function PopoverTrigger({
  children,
  size,
  variant,
  className,
  ...props
}: PopoverPrimitive.Trigger.Props &
  VariantProps<typeof buttonStyles> & {
    ref?: React.Ref<HTMLButtonElement>
  }) {
  return (
    <PopoverPrimitive.Trigger
      {...props}
      className={state =>
        buttonStyles({
          size,
          variant,
          className: resolveClassName(className, state)
        })
      }
    >
      {children}
    </PopoverPrimitive.Trigger>
  )
}

function PopoverPopup({
  children,
  className,
  withArrow = true,
  align,
  alignOffset,
  side,
  sideOffset = 8,
  positionerProps,
  ...props
}: PopoverPrimitive.Popup.Props & {
  ref?: React.Ref<HTMLDivElement>
  children: React.ReactNode
  withArrow?: boolean
  align?: PopoverPrimitive.Positioner.Props["align"]
  alignOffset?: PopoverPrimitive.Positioner.Props["alignOffset"]
  side?: PopoverPrimitive.Positioner.Props["side"]
  sideOffset?: PopoverPrimitive.Positioner.Props["sideOffset"]
  positionerProps?: PopoverPrimitive.Positioner.Props & {
    ref?: React.Ref<HTMLDivElement>
  }
}) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner
        {...positionerProps}
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className={state =>
          positioner({
            className: resolveClassName(positionerProps?.className, state)
          })
        }
      >
        <PopoverPrimitive.Popup
          {...props}
          className={state =>
            popup({
              className: resolveClassName(className, state)
            })
          }
        >
          {withArrow && (
            <PopoverPrimitive.Arrow className={arrow()}>
              <ArrowSvg />
            </PopoverPrimitive.Arrow>
          )}
          {children}
        </PopoverPrimitive.Popup>
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  )
}

function PopoverTitle({
  className,
  ...props
}: PopoverPrimitive.Title.Props & {
  ref?: React.Ref<HTMLHeadingElement>
}) {
  return (
    <PopoverPrimitive.Title
      {...props}
      className={state =>
        title({
          className: resolveClassName(className, state)
        })
      }
    />
  )
}

function PopoverDescription({
  className,
  ...props
}: PopoverPrimitive.Description.Props & {
  ref?: React.Ref<HTMLParagraphElement>
}) {
  return (
    <PopoverPrimitive.Description
      {...props}
      className={state =>
        description({
          className: resolveClassName(className, state)
        })
      }
    />
  )
}

function PopoverClose({
  size,
  variant,
  className,
  ...props
}: PopoverPrimitive.Close.Props &
  VariantProps<typeof buttonStyles> & {
    ref?: React.Ref<HTMLButtonElement>
  }) {
  return (
    <PopoverPrimitive.Close
      {...props}
      className={state =>
        buttonStyles({
          size,
          variant,
          className: resolveClassName(className, state)
        })
      }
    />
  )
}

function ArrowSvg(props: React.ComponentProps<"svg">) {
  return (
    <svg width='20' height='10' viewBox='0 0 20 10' fill='none' {...props}>
      <path
        d='M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z'
        className='fill-bg1'
      />
      <path
        d='M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z'
        className='fill-neutral4'
      />
    </svg>
  )
}

Popover.Trigger = PopoverTrigger
Popover.Popup = PopoverPopup
Popover.Title = PopoverTitle
Popover.Description = PopoverDescription
Popover.Close = PopoverClose

export { Popover }
