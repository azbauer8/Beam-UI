import { tv } from "tailwind-variants"

const txtStyles = tv({
  slots: {
    h1: "text-3xl font-bold text-balance",
    h2: "text-2xl font-semibold text-balance",
    h3: "text-xl font-medium text-balance",
    large: "text-lg font-medium text-balance",
    p: "text-balance",
    muted: "text-accent-fg text-balance",
    link: "text-primary underline-offset-4 underline decoration-primary/50 hover:decoration-primary transition-colors",
    code: "font-mono tracking-tighter",
    codeBlock:
      "font-mono tracking-tighter px-1 -mx-1 border  bg-accent rounded size-fit",
    kbd: "font-mono font-medium text-sm tracking-tighter px-1.5 -mx-1.5 py-[1px] -my-[1px] border bg-accent rounded size-fit"
  }
})

export { txtStyles }
