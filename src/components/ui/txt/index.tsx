import { txtStyles } from "@/components/ui/txt/styles"
import { twc } from "react-twc"

const { p, h1, h2, h3, h4, large, small, muted, link, codeBlock, kbd } =
  txtStyles()

const P = twc.p`${p()}`

const H1 = twc.h1`${h1()}`
const H2 = twc.h2`${h2()}`
const H3 = twc.h3`${h3()}`
const H4 = twc.h4`${h4()}`

const Large = twc.h3`${large()}`
const Small = twc.span`${small()}`
const Muted = twc.span`${muted()}`
const Link = twc.a`${link()}`
const CodeBlock = twc.code`${codeBlock()}`
const Kbd = twc.kbd`${kbd()}`

const Txt = {
  P,
  H1,
  H2,
  H3,
  H4,
  Large,
  Small,
  Muted,
  Link,
  CodeBlock,
  Kbd
}

export { Txt }
