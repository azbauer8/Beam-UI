"use client"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldDemo() {
  return (
    <Field>
      <Field.Label>Name</Field.Label>
      <Input required placeholder='Required' />
      <Field.Error>Please enter your name</Field.Error>
      <Field.Description>Visible on your profile</Field.Description>
    </Field>
  )
}

export const fieldCodeBlock = `import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldDemo() {
  return (
    <Field>
      <Field.Label>Name</Field.Label>
      <Input required placeholder='Required' />
      <Field.Error>Please enter your name</Field.Error>
      <Field.Description>Visible on your profile</Field.Description>
    </Field>
  )
}`

export const fieldUsageBlock = `import { Field } from "@/components/ui/field"

<Field>
  <Field.Label/>
  {/* Some compatible input component */}
  <Field.Error/>
  <Field.Description/>
</Field>`
