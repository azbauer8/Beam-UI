import { buttonStyles } from "@/components/ui/button/styles"
import { dialogStyles } from "@/components/ui/dialog/styles"
import { resolveClassName } from "@/lib/utils"
import { Dialog as DialogPrimitive } from "@base-ui-components/react/dialog"
import * as React from "react"
import { VariantProps } from "tailwind-variants"

const { popup, backdrop, header, description, title, content, footer } =
  dialogStyles()

function Dialog(props: DialogPrimitive.Root.Props) {
  return <DialogPrimitive.Root {...props} />
}

function DialogTrigger({
  size,
  variant,
  className,
  ...props
}: DialogPrimitive.Trigger.Props &
  VariantProps<typeof buttonStyles> & {
    ref?: React.Ref<HTMLButtonElement>
  }) {
  return (
    <DialogPrimitive.Trigger
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

function DialogPopup({
  className,
  ...props
}: DialogPrimitive.Popup.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Backdrop className={backdrop()} />
      <DialogPrimitive.Popup
        {...props}
        className={state =>
          popup({
            className: resolveClassName(className, state)
          })
        }
      />
    </DialogPrimitive.Portal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={header({
        className
      })}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: DialogPrimitive.Title.Props & {
  ref?: React.Ref<HTMLHeadingElement>
}) {
  return (
    <DialogPrimitive.Title
      {...props}
      className={state =>
        title({
          className: resolveClassName(className, state)
        })
      }
    />
  )
}

function DialogDescription({
  className,
  ...props
}: DialogPrimitive.Description.Props & {
  ref?: React.Ref<HTMLParagraphElement>
}) {
  return (
    <DialogPrimitive.Description
      {...props}
      className={state =>
        description({
          className: resolveClassName(className, state)
        })
      }
    />
  )
}

function DialogContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={content({
        className
      })}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={footer({
        className
      })}
    />
  )
}

function DialogClose({
  size,
  variant,
  className,
  ...props
}: DialogPrimitive.Close.Props &
  VariantProps<typeof buttonStyles> & {
    ref?: React.Ref<HTMLButtonElement>
  }) {
  return (
    <DialogPrimitive.Close
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

Dialog.Trigger = DialogTrigger
Dialog.Popup = DialogPopup
Dialog.Header = DialogHeader
Dialog.Title = DialogTitle
Dialog.Description = DialogDescription
Dialog.Content = DialogContent
Dialog.Footer = DialogFooter
Dialog.Close = DialogClose

export { Dialog }
