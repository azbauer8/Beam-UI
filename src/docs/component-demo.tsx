import { cn } from "@/lib/utils"
import { Tab } from "fumadocs-ui/components/tabs"

function ComponentDemoPreview({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Tab>) {
  return (
    <Tab
      value='Preview'
      className={cn(
        "not-prose flex min-h-32 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </Tab>
  )
}

export { ComponentDemoPreview }
