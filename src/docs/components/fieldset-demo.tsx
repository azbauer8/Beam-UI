"use client"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldsetDemo() {
  return (
    <Field.Set>
      <Field.Set.Legend>Billing details</Field.Set.Legend>
      <Field>
        <Field.Label>Company</Field.Label>
        <Input placeholder='Enter company name' />
      </Field>
      <Field>
        <Field.Label>Tax ID</Field.Label>
        <Input placeholder='Enter fiscal number' />
      </Field>
    </Field.Set>
  )
}
