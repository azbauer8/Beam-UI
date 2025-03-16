"use client"
import { Tooltip } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

export function ColorPaletteDemo() {
  return (
    <div className='not-prose flex flex-col gap-6'>
      {colors.map(group => (
        <div
          key={group.header}
          className='flex flex-col items-start gap-2 md:flex-row md:items-center'
        >
          <h2 className='w-[100px] flex-shrink-0 text-sm font-medium'>
            {group.header}
          </h2>
          <div className='flex w-full flex-wrap gap-2'>
            {group.items.map(item => (
              <ColorSwatch
                key={item.color}
                color={item.color}
                className={item.className}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const colors = [
  {
    header: "Backgrounds",
    items: [
      {
        color: "bg1",
        className: "bg-bg1"
      },
      {
        color: "bg2",
        className: "bg-bg2"
      }
    ]
  },
  {
    header: "Neutral",
    items: [
      {
        color: "neutral1",
        className: "bg-neutral1"
      },
      {
        color: "neutral2",
        className: "bg-neutral2"
      },
      {
        color: "neutral3",
        className: "bg-neutral3"
      },
      {
        color: "neutral4",
        className: "bg-neutral4"
      },
      {
        color: "neutral5",
        className: "bg-neutral5"
      },
      {
        color: "neutral6",
        className: "bg-neutral6"
      },
      {
        color: "neutral7",
        className: "bg-neutral7"
      },
      {
        color: "neutral8",
        className: "bg-neutral8"
      },
      {
        color: "neutral9",
        className: "bg-neutral9"
      },
      {
        color: "neutral10",
        className: "bg-neutral10"
      }
    ]
  },
  {
    header: "Info",
    items: [
      {
        color: "info1",
        className: "bg-info1"
      },
      {
        color: "info2",
        className: "bg-info2"
      },
      {
        color: "info3",
        className: "bg-info3"
      },
      {
        color: "info4",
        className: "bg-info4"
      },
      {
        color: "info5",
        className: "bg-info5"
      },
      {
        color: "info6",
        className: "bg-info6"
      },
      {
        color: "info7",
        className: "bg-info7"
      },
      {
        color: "info8",
        className: "bg-info8"
      },
      {
        color: "info9",
        className: "bg-info9"
      },
      {
        color: "info10",
        className: "bg-info10"
      }
    ]
  },
  {
    header: "Danger",
    items: [
      {
        color: "danger1",
        className: "bg-danger1"
      },
      {
        color: "danger2",
        className: "bg-danger2"
      },
      {
        color: "danger3",
        className: "bg-danger3"
      },
      {
        color: "danger4",
        className: "bg-danger4"
      },
      {
        color: "danger5",
        className: "bg-danger5"
      },
      {
        color: "danger6",
        className: "bg-danger6"
      },
      {
        color: "danger7",
        className: "bg-danger7"
      },
      {
        color: "danger8",
        className: "bg-danger8"
      },
      {
        color: "danger9",
        className: "bg-danger9"
      },
      {
        color: "danger10",
        className: "bg-danger10"
      }
    ]
  },
  {
    header: "Warning",
    items: [
      {
        color: "warning1",
        className: "bg-warning1"
      },
      {
        color: "warning2",
        className: "bg-warning2"
      },
      {
        color: "warning3",
        className: "bg-warning3"
      },
      {
        color: "warning4",
        className: "bg-warning4"
      },
      {
        color: "warning5",
        className: "bg-warning5"
      },
      {
        color: "warning6",
        className: "bg-warning6"
      },
      {
        color: "warning7",
        className: "bg-warning7"
      },
      {
        color: "warning8",
        className: "bg-warning8"
      },
      {
        color: "warning9",
        className: "bg-warning9"
      },
      {
        color: "warning10",
        className: "bg-warning10"
      }
    ]
  },
  {
    header: "Success",
    items: [
      {
        color: "success1",
        className: "bg-success1"
      },
      {
        color: "success2",
        className: "bg-success2"
      },
      {
        color: "success3",
        className: "bg-success3"
      },
      {
        color: "success4",
        className: "bg-success4"
      },
      {
        color: "success5",
        className: "bg-success5"
      },
      {
        color: "success6",
        className: "bg-success6"
      },
      {
        color: "success7",
        className: "bg-success7"
      },
      {
        color: "success8",
        className: "bg-success8"
      },
      {
        color: "success9",
        className: "bg-success9"
      },
      {
        color: "success10",
        className: "bg-success10"
      }
    ]
  }
]

export function ColorSwatch({
  color,
  className
}: {
  color: string
  className?: string
}) {
  return (
    <Tooltip>
      <Tooltip.Trigger
        className={cn(
          "shadow-border-inset border-neutral1 flex aspect-square h-10 w-full max-w-[68px] grow items-center justify-center rounded-sm border",
          className
        )}
      />
      <Tooltip.Popup>{color}</Tooltip.Popup>
    </Tooltip>
  )
}
