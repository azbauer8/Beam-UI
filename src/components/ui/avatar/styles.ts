import { tv } from "tailwind-variants"

const avatarStyles = tv({
  slots: {
    root: "inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-selected align-middle text-base font-medium select-none",
    image: "size-full object-cover",
    fallback: "flex size-full items-center justify-center text-base"
  }
})

export { avatarStyles }
