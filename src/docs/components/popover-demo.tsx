"use client"
import { Popover } from "@/components/ui/popover"

export function PopoverDemo() {
  return (
    <Popover>
      <Popover.Trigger>Song</Popover.Trigger>
      <Popover.Popup>
        <Popover.Title>Notifications</Popover.Title>
        <Popover.Description>
          You are all caught up. Good job!
        </Popover.Description>
      </Popover.Popup>
    </Popover>
  )
}
