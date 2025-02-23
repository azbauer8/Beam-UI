"use client"
import { Avatar } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <Avatar.Image src='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80' />
      <Avatar.Fallback>LT</Avatar.Fallback>
    </Avatar>
  )
}
