import { numberFieldStyles } from "@/components/ui/number-field/styles"
import { resolveClassName } from "@/lib/utils"
import { NumberField as NumberFieldPrimitive } from "@base-ui-components/react/number-field"
import { MinusIcon, PlusIcon } from "lucide-react"

const { root, group, decrement, increment, input } = numberFieldStyles()

function NumberField({
  className,
  ...props
}: NumberFieldPrimitive.Root.Props & {
  ref?: React.Ref<HTMLInputElement>
}) {
  return (
    <NumberFieldPrimitive.Root
      {...props}
      className={state =>
        root({
          className: resolveClassName(className, state)
        })
      }
    >
      <NumberFieldPrimitive.Group className={group()}>
        <NumberFieldPrimitive.Decrement className={decrement()}>
          <MinusIcon className='size-4' />
        </NumberFieldPrimitive.Decrement>
        <NumberFieldPrimitive.Input className={input()} />
        <NumberFieldPrimitive.Increment className={increment()}>
          <PlusIcon className='size-4' />
        </NumberFieldPrimitive.Increment>
      </NumberFieldPrimitive.Group>
    </NumberFieldPrimitive.Root>
  )
}

export { NumberField }
