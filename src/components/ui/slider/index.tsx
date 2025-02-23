import { sliderStyles } from "@/components/ui/slider/styles"
import { Slider as SliderPrimitive } from "@base-ui-components/react/slider"

const { control, track, indicator, thumb } = sliderStyles()

function Slider({
  children,
  ...props
}: SliderPrimitive.Root.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <SliderPrimitive.Root {...props}>
      <SliderPrimitive.Control className={control()}>
        <SliderPrimitive.Track className={track()}>
          <SliderPrimitive.Indicator className={indicator()} />
          <SliderPrimitive.Thumb className={thumb()} />
        </SliderPrimitive.Track>
      </SliderPrimitive.Control>
      {children}
    </SliderPrimitive.Root>
  )
}

Slider.Value = SliderPrimitive.Value

export { Slider }
