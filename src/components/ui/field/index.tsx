import { fieldStyles } from "@/components/ui/field/styles"
import { resolveClassName } from "@/lib/utils"
import { Field as FieldPrimitive } from "@base-ui-components/react/field"
import { Fieldset as FieldsetPrimitive } from "@base-ui-components/react/fieldset"

import * as React from "react"

const { description, error, label, root, fieldset, fieldsetLegend } =
  fieldStyles()

function Field({
  className,
  ...props
}: FieldPrimitive.Root.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <FieldPrimitive.Root
      {...props}
      className={state =>
        root({
          className: resolveClassName(className, state)
        })
      }
    />
  )
}

function FieldLabel({
  className,
  ...props
}: FieldPrimitive.Label.Props & {
  ref?: React.Ref<HTMLLabelElement>
}) {
  return (
    <FieldPrimitive.Label
      {...props}
      className={state =>
        label({
          className: resolveClassName(className, state)
        })
      }
    />
  )
}

function FieldDescription({
  className,
  ...props
}: FieldPrimitive.Description.Props & {
  ref?: React.Ref<HTMLParagraphElement>
}) {
  return (
    <FieldPrimitive.Description
      {...props}
      className={state =>
        description({
          className: resolveClassName(className, state)
        })
      }
    />
  )
}

function FieldError({
  className,
  ...props
}: FieldPrimitive.Error.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <FieldPrimitive.Error
      {...props}
      className={state =>
        error({
          className: resolveClassName(className, state)
        })
      }
    />
  )
}

function FieldValidity(props: FieldPrimitive.Validity.Props) {
  return <FieldPrimitive.Validity {...props} />
}

function Fieldset({
  className,
  ...props
}: FieldsetPrimitive.Root.Props & {
  ref?: React.Ref<HTMLFieldSetElement>
}) {
  return (
    <FieldsetPrimitive.Root
      {...props}
      className={state =>
        fieldset({
          className: resolveClassName(className, state)
        })
      }
    />
  )
}

function FieldsetLegend({
  className,
  ...props
}: FieldsetPrimitive.Legend.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <FieldsetPrimitive.Legend
      {...props}
      className={state =>
        fieldsetLegend({
          className: resolveClassName(className, state)
        })
      }
    />
  )
}

Fieldset.Legend = FieldsetLegend
Field.Label = FieldLabel
Field.Description = FieldDescription
Field.Error = FieldError
Field.Validity = FieldValidity
Field.Set = Fieldset

export { Field }
