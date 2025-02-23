import { alertDialogStyles } from "@/components/ui/alert-dialog/styles"
import { buttonStyles } from "@/components/ui/button/styles"
import { resolveClassName } from "@/lib/utils"
import { AlertDialog as AlertDialogPrimitive } from "@base-ui-components/react/alert-dialog"
import * as React from "react"
import { VariantProps } from "tailwind-variants"

const { popup, backdrop, header, description, title, content, footer } =
  alertDialogStyles()

function AlertDialog(props: AlertDialogPrimitive.Root.Props) {
  return <AlertDialogPrimitive.Root {...props} />
}

function AlertDialogTrigger({
  size,
  variant,
  className,
  ...props
}: AlertDialogPrimitive.Trigger.Props &
  VariantProps<typeof buttonStyles> & {
    ref?: React.Ref<HTMLButtonElement>
  }) {
  return (
    <AlertDialogPrimitive.Trigger
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

function AlertDialogPopup({
  className,
  ...props
}: AlertDialogPrimitive.Popup.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Backdrop className={backdrop()} />
      <AlertDialogPrimitive.Popup
        {...props}
        className={state =>
          popup({
            className: resolveClassName(className, state)
          })
        }
      />
    </AlertDialogPrimitive.Portal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={header({
        className
      })}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: AlertDialogPrimitive.Title.Props & {
  ref?: React.Ref<HTMLHeadingElement>
}) {
  return (
    <AlertDialogPrimitive.Title
      {...props}
      className={state =>
        title({
          className: resolveClassName(className, state)
        })
      }
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: AlertDialogPrimitive.Description.Props & {
  ref?: React.Ref<HTMLParagraphElement>
}) {
  return (
    <AlertDialogPrimitive.Description
      {...props}
      className={state =>
        description({
          className: resolveClassName(className, state)
        })
      }
    />
  )
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={content({
        className
      })}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={footer({
        className
      })}
    />
  )
}

function AlertDialogClose({
  size,
  variant,
  className,
  ...props
}: AlertDialogPrimitive.Close.Props &
  VariantProps<typeof buttonStyles> & {
    ref?: React.Ref<HTMLButtonElement>
  }) {
  return (
    <AlertDialogPrimitive.Close
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

AlertDialog.Trigger = AlertDialogTrigger
AlertDialog.Popup = AlertDialogPopup
AlertDialog.Header = AlertDialogHeader
AlertDialog.Title = AlertDialogTitle
AlertDialog.Description = AlertDialogDescription
AlertDialog.Content = AlertDialogContent
AlertDialog.Footer = AlertDialogFooter
AlertDialog.Close = AlertDialogClose

export { AlertDialog }
