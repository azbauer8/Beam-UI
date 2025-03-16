import { Txt } from "@/components/ui/txt"

export function TxtDemo() {
  return (
    <div className='flex w-full flex-col gap-2'>
      <Txt.H1>H1 Heading</Txt.H1>
      <Txt.H2>H2 Heading </Txt.H2>
      <Txt.H3>H3 Heading</Txt.H3>
      <Txt.H4>H4 Heading</Txt.H4>
      <Txt.P>Paragraph</Txt.P>
      <Txt.Large>Large</Txt.Large>
      <Txt.Small>Small</Txt.Small>
      <Txt.Muted>Muted</Txt.Muted>
      <Txt.Link href='#'>Link</Txt.Link>
      <Txt.CodeBlock>Code Block</Txt.CodeBlock>
      <Txt.Kbd>⌘K</Txt.Kbd>
    </div>
  )
}

export const txtCodeBlock = `import { Txt } from "@/components/ui/txt"

export function TxtDemo() {
  return (
    <div className='flex w-full flex-col gap-2'>
      <Txt.H1>H1 Heading</Txt.H1>
      <Txt.H2>H2 Heading </Txt.H2>
      <Txt.H3>H3 Heading</Txt.H3>
      <Txt.H4>H4 Heading</Txt.H4>
      <Txt.P>Paragraph</Txt.P>
      <Txt.Large>Large</Txt.Large>
      <Txt.Small>Small</Txt.Small>
      <Txt.Muted>Muted</Txt.Muted>
      <Txt.Link href='#'>Link</Txt.Link>
      <Txt.CodeBlock>Code Block</Txt.CodeBlock>
      <Txt.Kbd>⌘K</Txt.Kbd>
    </div>
  )
}`

export const txtUsageBlock = `import { Txt } from "@/components/ui/txt"

<Txt.H1/>
<Txt.H2/>
<Txt.H3/>
<Txt.H4/>
<Txt.P/>
<Txt.Large/>
<Txt.Small/>
<Txt.Muted/>
<Txt.Link/>
<Txt.Code/>
<Txt.CodeBlock/>
<Txt.Kbd/>`
