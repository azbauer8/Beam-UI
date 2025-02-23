"use client"
import { Radio } from "@/components/ui/radio"

export function RadioDemo() {
  return (
    <Radio>
      <p className='font-medium'>Best apple</p>
      <Radio.Item value='fuji-apple'>Fuji</Radio.Item>
      <Radio.Item value='gala-apple'>Gala</Radio.Item>
      <Radio.Item value='granny-smith-apple'>Granny Smith</Radio.Item>
    </Radio>
  )
}
