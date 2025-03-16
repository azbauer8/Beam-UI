import { avatarStyles } from "@/components/ui/avatar/styles"
import { cn } from "@/lib/utils"
import { Avatar as AvatarPrimitive } from "@base-ui-components/react/avatar"

const { root, image, fallback } = avatarStyles()

function Avatar({
  className,
  ...props
}: AvatarPrimitive.Root.Props & {
  ref?: React.Ref<HTMLSpanElement>
}) {
  return (
    <AvatarPrimitive.Root
      {...props}
      className={state => root({ className: cn({ className, state }) })}
    />
  )
}

function AvatarImage({
  className,
  height = 48,
  width = 48,
  ...props
}: AvatarPrimitive.Image.Props & {
  ref?: React.Ref<HTMLImageElement>
}) {
  return (
    <AvatarPrimitive.Image
      className={state => image({ className: cn({ className, state }) })}
      height={height}
      width={width}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: AvatarPrimitive.Fallback.Props & {
  ref?: React.Ref<HTMLSpanElement>
}) {
  return (
    <AvatarPrimitive.Fallback
      {...props}
      className={state => fallback({ className: cn({ className, state }) })}
    />
  )
}

Avatar.Image = AvatarImage
Avatar.Fallback = AvatarFallback

export { Avatar }
