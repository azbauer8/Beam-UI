import { remarkInstall } from "fumadocs-docgen"
import { defineConfig, defineDocs } from "fumadocs-mdx/config"

export const docs = defineDocs({
  dir: "docs"
})

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [
      [
        remarkInstall,
        {
          persist: {
            id: "some-id"
          }
        }
      ]
    ]
  }
})
