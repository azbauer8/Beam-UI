import { tv } from "tailwind-variants"

const switchStyles = tv({
  slots: {
    root: [
      "peer bg-neutral3 data-[checked]:bg-info7 inline-flex h-6 w-10 items-center rounded-full p-0.5 transition-colors duration-200",
      // focus
      "focus-visible:ring-1 focus-visible:outline-none",
      // disabled
      "disabled:cursor-not-allowed disabled:opacity-50"
    ],
    thumb:
      "top-0 left-0 aspect-square h-5 rounded-full bg-white transition-transform duration-300 ease-in-out data-[checked]:translate-x-4"
  }
})

export { switchStyles }
