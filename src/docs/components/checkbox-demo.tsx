"use client"
import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxDemo() {
  return (
    <div className='space-y-2'>
      <Checkbox>Enable notifications</Checkbox>
      <Checkbox.Group>
        <p className='font-medium'>Apples</p>
        <Checkbox>Fuji</Checkbox>
        <Checkbox>Gala</Checkbox>
        <Checkbox>Granny Smith</Checkbox>
      </Checkbox.Group>
    </div>
  )
}
