import { scrollAreaStyles } from "@/components/ui/scroll-area/styles"
import { cn } from "@/lib/utils"
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui-components/react/scroll-area"
import { VariantProps } from "tailwind-variants"

const { root, viewport, scrollbar, scrollbarThumb } = scrollAreaStyles()

function ScrollArea({
  className,
  ...props
}: ScrollAreaPrimitive.Root.Props &
  VariantProps<typeof ScrollAreaPrimitive.Root> & {
    ref?: React.Ref<HTMLDivElement>
  }) {
  return (
    <ScrollAreaPrimitive.Root
      {...props}
      className={state => root({ className: cn({ className, state }) })}
    >
      <ScrollAreaPrimitive.Viewport className={viewport()}>
        {props.children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar className={scrollbar()}>
        <ScrollAreaPrimitive.Thumb className={scrollbarThumb()} />
      </ScrollAreaPrimitive.Scrollbar>
    </ScrollAreaPrimitive.Root>
  )
}

export { ScrollArea }
