import { buttonStyles } from "@/components/ui/button/styles"
import { twc, TwcComponentProps } from "react-twc"
import { VariantProps } from "tailwind-variants"

type ButtonProps = TwcComponentProps<"button"> &
  VariantProps<typeof buttonStyles>

const Button = twc.button<ButtonProps>(({ variant, size }) =>
  buttonStyles({ variant, size })
)

export { Button }
