"use client"
import { Collapsible } from "@/components/ui/collapsible"

export function CollapsibleDemo() {
  return (
    <Collapsible>
      <Collapsible.Trigger>Recovery keys</Collapsible.Trigger>
      <Collapsible.Panel>
        <div>alien-bean-pasta</div>
        <div>wild-irish-burrito</div>
        <div>horse-battery-staple</div>
      </Collapsible.Panel>
    </Collapsible>
  )
}
