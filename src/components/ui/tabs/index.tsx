"use client"

import { tabsStyles } from "@/components/ui/tabs/styles"
import { cn } from "@/lib/utils"
import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs"

const { root, list, indicator, tab, panel } = tabsStyles()

function Tabs({
  className,
  ...props
}: TabsPrimitive.Root.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <TabsPrimitive.Root
      {...props}
      className={state => root({ className: cn({ className, state }) })}
    />
  )
}

function TabsList({
  className,
  children,
  ...props
}: TabsPrimitive.List.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <TabsPrimitive.List
      {...props}
      className={state => list({ className: cn({ className, state }) })}
    >
      {children}
      <TabsPrimitive.Indicator
        className={state => indicator({ className: cn({ className, state }) })}
      />
    </TabsPrimitive.List>
  )
}

function TabsTab({
  className,
  ...props
}: TabsPrimitive.Tab.Props & {
  ref?: React.Ref<HTMLButtonElement>
}) {
  return (
    <TabsPrimitive.Tab
      {...props}
      className={state => tab({ className: cn({ className, state }) })}
    />
  )
}

function TabsPanel({
  className,
  ...props
}: TabsPrimitive.Panel.Props & {
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <TabsPrimitive.Panel
      {...props}
      className={state => panel({ className: cn({ className, state }) })}
    />
  )
}

Tabs.List = TabsList
Tabs.Tab = TabsTab
Tabs.Panel = TabsPanel

export { Tabs }
