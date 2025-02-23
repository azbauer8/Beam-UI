"use client"
import { Select } from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <Select.Trigger>
        <Select.Value placeholder='Inter' />
      </Select.Trigger>
      <Select.Popup>
        <Select.Item value='times-new-roman'>Times New Roman</Select.Item>
        <Select.Item value='inter'>Inter</Select.Item>
        <Select.Separator />
        <Select.Group>
          <Select.GroupLabel>Monospace</Select.GroupLabel>
          <Select.Item value='consolas'>Consolas</Select.Item>
          <Select.Item value='jetbrains-mono'>Jetbrains Mono</Select.Item>
          <Select.Item value='fira-code'>Fira Code</Select.Item>
        </Select.Group>
      </Select.Popup>
    </Select>
  )
}
