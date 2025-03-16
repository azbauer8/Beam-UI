import { tv } from "tailwind-variants"

const txtStyles = tv({
  slots: {
    h1: "text-4xl font-extrabold tracking-tight text-balance lg:text-5xl",
    h2: "text-3xl font-semibold tracking-tight text-balance",
    h3: "text-2xl font-semibold tracking-tight text-balance",
    h4: "text-xl font-semibold tracking-tight text-balance",
    p: "text-balance",
    muted: "text-neutral9 text-balance",
    large: "text-lg font-semibold text-balance",
    small: "text-sm font-medium",
    link: "text-info7 decoration-info7/50 hover:decoration-info7 w-fit underline underline-offset-4 transition-colors",
    codeBlock:
      "bg-neutral1 -mx-1 inline-flex size-fit rounded-md border px-1 font-mono tracking-tighter",
    kbd: "bg-neutral1 -mx-1 inline-flex size-fit rounded-md border px-1 text-sm tracking-widest"
  }
})

export { txtStyles }
