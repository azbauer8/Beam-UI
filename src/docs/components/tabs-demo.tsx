"use client"

import { Tabs } from "@/components/ui/tabs"
import {
  CircleUserRoundIcon,
  LayoutDashboardIcon,
  PresentationIcon
} from "lucide-react"

export function TabsDemo() {
  return (
    <Tabs defaultValue='overview'>
      <Tabs.List>
        <Tabs.Tab value='overview'>Overview</Tabs.Tab>
        <Tabs.Tab value='projects'>Projects</Tabs.Tab>
        <Tabs.Tab value='account'>Account</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value='overview'>
        <LayoutDashboardIcon />
      </Tabs.Panel>
      <Tabs.Panel value='projects'>
        <PresentationIcon />
      </Tabs.Panel>
      <Tabs.Panel value='account'>
        <CircleUserRoundIcon />
      </Tabs.Panel>
    </Tabs>
  )
}
