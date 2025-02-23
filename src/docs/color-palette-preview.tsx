import { cn } from "@/lib/utils"

export function ColorPalettePreview() {
  return (
    <div className='not-prose grid gap-6 md:grid-cols-3'>
      {colors.map(group => (
        <div
          key={group.header}
          className='flex flex-col gap-4 rounded-md p-4 outline-2'
        >
          <h2 className='text-xl font-medium'>{group.header}</h2>
          <div className='flex flex-wrap items-center gap-2'>
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
        color: "bg",
        className: "bg-bg border"
      },
      {
        color: "accent",
        className: "bg-accent border"
      },
      {
        color: "selected",
        className: "bg-selected border"
      },
      {
        color: "overlay",
        className: "bg-overlay border"
      }
    ]
  },
  {
    header: "Foregrounds",
    items: [
      {
        color: "fg",
        className: "bg-fg"
      },
      {
        color: "accent-fg",
        className: "bg-accent-fg"
      }
    ]
  },
  {
    header: "Primary",
    items: [
      {
        color: "primary",
        className: "bg-primary"
      },
      {
        color: "primary-fg",
        className: "bg-primary-fg"
      }
    ]
  },
  {
    header: "Danger",
    items: [
      {
        color: "danger",
        className: "bg-danger"
      },
      {
        color: "danger-fg",
        className: "bg-danger-fg"
      }
    ]
  },
  {
    header: "Success",
    items: [
      {
        color: "success",
        className: "bg-success"
      },
      {
        color: "success-fg",
        className: "bg-success-fg"
      }
    ]
  },
  {
    header: "Warning",
    items: [
      {
        color: "warning",
        className: "bg-warning"
      },
      {
        color: "warning-fg",
        className: "bg-warning-fg"
      }
    ]
  }
]

function ColorSwatch({
  color,
  className
}: {
  color: string
  className?: string
}) {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className={cn(`size-16 rounded-md`, className)}></div>
      <p className='font-mono'>{color}</p>
    </div>
  )
}
