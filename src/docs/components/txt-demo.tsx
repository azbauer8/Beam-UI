import { Txt } from "@/components/ui/txt"

export function TxtDemo() {
  return (
    <div className='grid grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-3'>
      <div className='space-y-1'>
        <Txt.H1>Heading 1</Txt.H1>
        <Txt.H2>Heading 2</Txt.H2>
        <Txt.H3>Heading 3</Txt.H3>
      </div>
      <div className='space-y-2'>
        <Txt.P>Paragraphy</Txt.P>
        <Txt.Large>Large</Txt.Large>
        <Txt.Muted asChild>
          <p>Muted</p>
        </Txt.Muted>
        <Txt.Link href='#'>Link</Txt.Link>
      </div>
      <div className='space-y-2'>
        <Txt.Code asChild>
          <p>Code</p>
        </Txt.Code>
        <Txt.CodeBlock asChild>
          <p>Code Block</p>
        </Txt.CodeBlock>
        <Txt.Kbd asChild>
          <p>Kbd</p>
        </Txt.Kbd>
      </div>
    </div>
  )
}

export const txtCodeBlock = `import { Txt } from "@/components/ui/txt"

export function TxtDemo() {
  return (
    <div className='grid grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-3'>
      <div className='space-y-1'>
        <Txt.H1>Heading 1</Txt.H1>
        <Txt.H2>Heading 2</Txt.H2>
        <Txt.H3>Heading 3</Txt.H3>
      </div>
      <div className='space-y-2'>
        <Txt.P>Paragraphy</Txt.P>
        <Txt.Large>Large</Txt.Large>
        <Txt.Muted asChild>
          <p>Muted</p>
        </Txt.Muted>
        <Txt.Link href='#' asChild>
          <p>Link</p>
        </Txt.Link>
      </div>
      <div className='space-y-2'>
        <Txt.Code asChild>
          <p>Code</p>
        </Txt.Code>
        <Txt.CodeBlock asChild>
          <p>Code Block</p>
        </Txt.CodeBlock>
        <Txt.Kbd asChild>
          <p>Kbd</p>
        </Txt.Kbd>
      </div>
    </div>
  )
}`

export const txtUsageBlock = `import { Txt } from "@/components/ui/txt"

<Txt.H1/>
<Txt.H2/>
<Txt.H3/>
<Txt.P/>
<Txt.Large/>
<Txt.Muted/>
<Txt.Link/>
<Txt.Code/>
<Txt.CodeBlock/>
<Txt.Kbd/>`
