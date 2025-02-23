import { inputStyles } from "@/components/ui/input/styles"
import { resolveClassName } from "@/lib/utils"
import { Input as InputPrimitive } from "@base-ui-components/react/input"

import * as React from "react"

function Input({
  className,
  ...props
}: InputPrimitive.Props & {
  ref?: React.Ref<HTMLInputElement>
}) {
  return (
    <InputPrimitive
      {...props}
      className={state =>
        inputStyles({
          className: resolveClassName(className, state)
        })
      }
    />
  )
}

export { Input }
