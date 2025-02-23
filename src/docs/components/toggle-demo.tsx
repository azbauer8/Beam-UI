"use client"
import { Toggle } from "@/components/ui/toggle"
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  PinIcon
} from "lucide-react"

export function ToggleDemo() {
  return (
    <div className='flex flex-col items-center gap-2'>
      <Toggle>
        <PinIcon />
      </Toggle>
      <Toggle.Group>
        <Toggle>
          <AlignLeftIcon />
        </Toggle>
        <Toggle>
          <AlignCenterIcon />
        </Toggle>
        <Toggle>
          <AlignRightIcon />
        </Toggle>
      </Toggle.Group>
    </div>
  )
}
