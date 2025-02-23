import { tv } from "tailwind-variants"

const switchStyles = tv({
  slots: {
    root: "from-primary to-selected relative flex h-6 w-10 rounded-full bg-gradient-to-r from-35% to-65% bg-[length:6.5rem_100%] bg-[100%_0%] bg-no-repeat p-px shadow-[inset_0_1.5px_2px] shadow-gray-200 transition-[background-position,box-shadow] duration-[125ms] ease-[cubic-bezier(0.26,0.75,0.38,0.45)] before:absolute before:rounded-full before:outline-blue-800 focus-visible:ring-2 focus-visible:outline-none disabled:pointer-events-none data-[checked]:bg-[0%_0%] dark:shadow-black/75 dark:data-[checked]:shadow-none",
    thumb:
      "aspect-square h-full rounded-full bg-white shadow-[0_0_1px_1px,0_1px_1px,1px_2px_4px_-1px] shadow-gray-100 transition-transform duration-150 data-[checked]:translate-x-4 dark:shadow-black/25"
  }
})

export { switchStyles }
