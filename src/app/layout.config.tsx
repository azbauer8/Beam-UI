import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='28'
          height='28'
          viewBox='0 0 48 48'
        >
          <path
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21.786 43.411c-1.248-.134-3.342-.577-4.394-.93c-2.9-.97-5.54-3.712-6.586-6.839c-.765-2.288-.791-2.868-.791-17.59V4.5h7.718c6.113.001 7.984.044 8.996.208c2.338.38 4.209 1.104 5.64 2.183c2.992 2.258 4.418 5.257 4.256 8.953c-.119 2.704-1.034 4.704-2.99 6.533l-.909.85l.663.527c1.918 1.522 3.546 3.75 4.218 5.77c.33.995.375 1.352.378 3.03c.003 1.719-.034 2.012-.385 3.016c-1.219 3.495-4.02 6.177-7.451 7.135c-2.332.652-5.997.96-8.363.706m2.993-8.319c2.254-.292 3.463-1.54 3.483-3.594c.015-1.604-.693-2.9-1.919-3.51c-.73-.365-.759-.367-4.103-.367h-3.368L18.88 30c.005 1.299.19 2.583.284 2.876c.394 1.228 1.543 2.013 3.236 2.211c1.306.153 1.247.152 2.38.005Zm.282-15.16c.878-.366 1.406-.872 1.859-1.778c.762-1.525.557-3.108-.548-4.212c-.898-.898-1.3-.983-4.637-.983h-2.839v7.19h2.824c2.217 0 2.936-.047 3.341-.216'
          />
        </svg>
        Beam UI
      </>
    )
  },
  githubUrl: "https://github.com/azbauer8/beam-ui",
  links: [
    {
      text: "Docs",
      url: "/docs/overview/quick-start",
      active: "nested-url"
    },
    {
      text: "Components",
      url: "/docs",
      active: "nested-url"
    },
    {
      text: "Blocks",
      url: "/docs",
      active: "nested-url"
    },
    {
      text: "Themes",
      url: "/docs",
      active: "nested-url"
    },
    {
      text: "Colors",
      url: "/docs",
      active: "nested-url"
    }
  ]
}
