"use client"

import { Accordion } from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion className='w-96'>
      <Accordion.Item>
        <Accordion.Trigger> What is Basic UI?</Accordion.Trigger>
        <Accordion.Panel>
          Base UI is a library of high-quality unstyled React components for
          design systems and web apps.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger> How do I get started?</Accordion.Trigger>
        <Accordion.Panel>
          Head to the “Quick start” guide in the docs. If you’ve used unstyled
          libraries before, you’ll feel at home.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>Can I use it for my project?</Accordion.Trigger>
        <Accordion.Panel>
          Of course! Base UI is free and open source.
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}
