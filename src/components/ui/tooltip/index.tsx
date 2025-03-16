import { cn } from "@/lib/utils"
import { Tooltip as TooltipPrimitive } from "@base-ui-components/react/tooltip"
import * as React from "react"
import { tooltipStyles } from "./styles"

const { popup, positioner, arrow } = tooltipStyles()

function Tooltip({ delay = 0, ...props }: TooltipPrimitive.Root.Props) {
  return <TooltipPrimitive.Root delay={delay} {...props} />
}

const TooltipProvider = TooltipPrimitive.Provider

function TooltipTrigger(
  props: TooltipPrimitive.Trigger.Props & {
    ref?: React.Ref<HTMLButtonElement>
  }
) {
  return <TooltipPrimitive.Trigger {...props} />
}

function TooltipPopup({
  children,
  popupProps,
  positionerProps,
  withArrow = true
}: {
  children: React.ReactNode
  withArrow?: boolean
  popupProps?: TooltipPrimitive.Popup.Props & {
    ref?: React.Ref<HTMLDivElement>
  }
  positionerProps?: TooltipPrimitive.Positioner.Props & {
    ref?: React.Ref<HTMLDivElement>
  }
}) {
  const mergedPositionerProps = {
    sideOffset: 10,
    ...positionerProps
  }
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        {...mergedPositionerProps}
        className={state =>
          positioner({
            className: cn({ className: positionerProps?.className, state })
          })
        }
      >
        <TooltipPrimitive.Popup
          {...popupProps}
          className={state =>
            popup({
              className: cn({ className: popupProps?.className, state })
            })
          }
        >
          {withArrow && (
            <TooltipPrimitive.Arrow className={arrow()}>
              <ArrowSvg />
            </TooltipPrimitive.Arrow>
          )}
          {children}
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
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

Tooltip.Provider = TooltipProvider
Tooltip.Trigger = TooltipTrigger
Tooltip.Popup = TooltipPopup

export { Tooltip }
