import { cn } from "@/lib/utils"

import { txtStyles } from "@/components/ui/txt/styles"
import { PreviewCard as PreviewCardPrimitive } from "@base-ui-components/react/preview-card"
import * as React from "react"
import { previewCardStyles } from "./styles"

const { popup, arrow } = previewCardStyles()

function PreviewCard(props: PreviewCardPrimitive.Root.Props) {
  return <PreviewCardPrimitive.Root {...props} />
}

function PreviewCardTrigger({
  children,
  className,
  ...props
}: PreviewCardPrimitive.Trigger.Props & {
  ref?: React.Ref<HTMLAnchorElement>
}) {
  return (
    <PreviewCardPrimitive.Trigger
      {...props}
      className={state =>
        txtStyles().link({ className: cn({ className, state }) })
      }
    >
      {children}
    </PreviewCardPrimitive.Trigger>
  )
}

function PreviewCardPopup({
  children,
  className,
  withArrow = true,
  align,
  alignOffset,
  side,
  sideOffset = 8,
  positionerProps,
  ...props
}: PreviewCardPrimitive.Popup.Props & {
  ref?: React.Ref<HTMLDivElement>
  withArrow?: boolean
  align?: PreviewCardPrimitive.Positioner.Props["align"]
  alignOffset?: PreviewCardPrimitive.Positioner.Props["alignOffset"]
  side?: PreviewCardPrimitive.Positioner.Props["side"]
  sideOffset?: PreviewCardPrimitive.Positioner.Props["sideOffset"]
  positionerProps?: PreviewCardPrimitive.Positioner.Props & {
    ref?: React.Ref<HTMLDivElement>
  }
}) {
  return (
    <PreviewCardPrimitive.Portal>
      <PreviewCardPrimitive.Positioner
        {...positionerProps}
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className={state =>
          cn({ className: positionerProps?.className, state })
        }
      >
        <PreviewCardPrimitive.Popup
          {...props}
          className={state =>
            popup({
              className: cn({ className, state })
            })
          }
        >
          {withArrow && (
            <PreviewCardPrimitive.Arrow className={arrow()}>
              <ArrowSvg />
            </PreviewCardPrimitive.Arrow>
          )}
          {children}
        </PreviewCardPrimitive.Popup>
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
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

PreviewCard.Trigger = PreviewCardTrigger
PreviewCard.Popup = PreviewCardPopup

export { PreviewCard }
