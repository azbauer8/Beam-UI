"use client"
import { Menu } from "@/components/ui/menu"

export function MenuDemo() {
  return (
    <Menu>
      <Menu.Trigger>Song</Menu.Trigger>
      <Menu.Popup>
        <Menu.Item>Add to Library</Menu.Item>
        <Menu.Submenu>
          <Menu.SubmenuTrigger>Add to Playlist</Menu.SubmenuTrigger>
          <Menu.SubmenuPopup>
            <Menu.Item>Play Next</Menu.Item>
            <Menu.Item>Play Last</Menu.Item>
            <Menu.Separator />
            <Menu.Item>Favorite</Menu.Item>
            <Menu.Item>Share</Menu.Item>
          </Menu.SubmenuPopup>
        </Menu.Submenu>
        <Menu.Separator />
        <Menu.Group>
          <Menu.GroupLabel>Workspace</Menu.GroupLabel>
          <Menu.CheckboxItem>Minimap</Menu.CheckboxItem>
          <Menu.CheckboxItem>Search</Menu.CheckboxItem>
          <Menu.CheckboxItem>Sidebar</Menu.CheckboxItem>
        </Menu.Group>
        <Menu.Separator />
        <Menu.Group>
          <Menu.GroupLabel>Sort</Menu.GroupLabel>
          <Menu.RadioGroup>
            <Menu.RadioItem value='date'>Date</Menu.RadioItem>
            <Menu.RadioItem value='name'>Name</Menu.RadioItem>
            <Menu.RadioItem value='type'>Type</Menu.RadioItem>
          </Menu.RadioGroup>
        </Menu.Group>
      </Menu.Popup>
    </Menu>
  )
}
