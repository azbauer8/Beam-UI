"use client"
import { toggleStyles } from "@/components/ui/toggle/styles"
import { Tooltip } from "@/components/ui/tooltip"
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

export function TooltipDemo() {
  return (
    <Tooltip.Provider>
      <div className='bg-accent flex gap-px rounded-md border p-0.5'>
        <Tooltip>
          <Tooltip.Trigger className={toggleStyles().toggle}>
            <BoldIcon />
          </Tooltip.Trigger>
          <Tooltip.Popup>Bold</Tooltip.Popup>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger className={toggleStyles().toggle}>
            <ItalicIcon />
          </Tooltip.Trigger>
          <Tooltip.Popup>Italic</Tooltip.Popup>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger className={toggleStyles().toggle}>
            <UnderlineIcon />
          </Tooltip.Trigger>
          <Tooltip.Popup>Underline</Tooltip.Popup>
        </Tooltip>
      </div>
    </Tooltip.Provider>
  )
}
