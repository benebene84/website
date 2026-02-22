# AGENTS.md

This is a personal portfolio and blog site built with Next.js 16 (App Router), React 19, and TypeScript. It uses a macOS-inspired design system with light and dark (Tokyo Night) themes.

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19 and React Compiler
- **Language:** TypeScript (strict mode, strictNullChecks)
- **Styling:** Tailwind CSS v4 (configured via CSS, no tailwind.config file)
- **Content:** Content Collections with MDX, validated by Zod v4
- **Linting/Formatting:** Biome (no ESLint or Prettier)
- **Icons:** Lucide React
- **UI:** @base-ui/react (headless components for tooltips)
- **Runtime:** Bun (for dev/build/start)
- **Package Manager:** bun
- **Deployment:** Vercel

## Build / Lint / Test Commands

```bash
bun dev              # Start dev server (uses Bun runtime)
bun build            # Production build
bun start            # Start production server

bun lint             # Run Biome linter
bun format           # Format all files with Biome
bun check            # Run all Biome checks (lint + format + organize imports)
bun check:fix        # Auto-fix all Biome issues (safe fixes)
bun check:fix:unsafe # Auto-fix including unsafe fixes
```

There is no test framework configured. No unit tests, integration tests, or e2e tests exist.

## Project Structure

```
app/                        # Next.js App Router
  blog/
    [slug]/page.tsx         # Dynamic blog post page
    posts/*.mdx             # MDX blog posts (date-prefixed: YYYY-MM-DD-slug.mdx)
    demos/*.tsx             # Interactive blog demos (client components)
  components/
    ui/                     # Design system primitives (Window, Dock, MenuBar, etc.)
      index.ts              # Barrel export for UI components
    mdx.tsx                 # MDX rendering components
    theme-provider.tsx      # Theme context provider
  utils/
    cx.ts                   # classname merge utility (simple filter+join)
    mdx.ts                  # Date formatting helpers
  global.css                # Tailwind imports + design tokens + theme variables
  layout.tsx                # Root layout
  page.tsx                  # Home page
content-collections.ts      # Content Collections config (Zod schema + MDX transform)
biome.json                  # Biome linter/formatter config
```

## Code Style

### Formatting (enforced by Biome)

- **Indentation:** 2 spaces
- **Semicolons:** omit where possible (`asNeeded`)
- **Quotes:** single quotes
- **Trailing commas:** always (in arrays, objects, function params)
- **Tailwind classes:** sorted automatically (`useSortedClasses` rule)
- **Imports:** auto-organized by Biome

Always run `bun check:fix` before committing to ensure formatting compliance.

### Imports

- Use `import type { ... }` for type-only imports (separate from value imports)
- Use absolute imports from project root (`app/components/...`, `app/utils/...`)
- Use relative imports only for sibling/child files within the same directory
- `content-collections` is a path alias to `.content-collections/generated`
- Import order (handled by Biome): external packages first, then internal modules
- UI components have a barrel export at `app/components/ui/index.ts`

```ts
// Correct import style
import { Window } from 'app/components/ui/window'
import { cx } from 'app/utils/cx'
import { allPosts } from 'content-collections'
import type { Metadata } from 'next'
import { Comments } from './comments'
```

### TypeScript

- Strict mode with `strictNullChecks` enabled
- Target: ESNext
- Use `interface` for component props, `type` for unions and aliases
- Props interfaces extend HTML element attributes when wrapping native elements:
  `interface WindowProps extends HTMLAttributes<HTMLElement> { ... }`
- Use `PropsWithChildren<T>` from React for components that accept children
- Use `React.ReactNode` for the `children` type in inline prop types

### React Components

- **Server Components by default.** Only add `'use client'` when the component needs interactivity (event handlers, hooks, browser APIs)
- Use `function` declarations for React components (not arrow functions)
- Use `export function ComponentName` (named exports), not `export default`
- Exception: Next.js page/layout components use `export default function`
- Arrow functions are used for utilities and callbacks, not components
- Destructure props in the function signature
- Use the `as` prop pattern for polymorphic semantic HTML elements:
  ```ts
  type SemanticElement = 'section' | 'article' | 'aside' | 'div' | 'main'
  ```

### Naming Conventions

- **Files:** kebab-case (`theme-provider.tsx`, `skip-link.tsx`)
- **Components:** PascalCase (`Window`, `ThemeToggle`, `MenuBar`)
- **Functions/variables:** camelCase (`formatDate`, `baseUrl`)
- **Types/interfaces:** PascalCase (`WindowProps`, `WindowVariant`)
- **CSS custom properties:** kebab-case with semantic names (`--color-text-primary`, `--color-bg-secondary`)
- **Blog post files:** date-prefixed MDX (`YYYY-MM-DD-slug.mdx`)

### Styling

- Use Tailwind CSS v4 utility classes exclusively (no CSS modules, no styled-components)
- Use the custom `cx()` utility from `app/utils/cx` for conditional classnames (not clsx or classnames)
- Use semantic CSS custom properties for colors (defined in `global.css`), not raw Tailwind color values
- Tailwind classes are auto-sorted by Biome
- Dark mode: class-based strategy (`.dark` / `.light` classes on `<html>`)
- Theme variables are defined in `global.css` under `@theme` blocks
- Support `prefers-reduced-motion` for animations
- Support `pointer-coarse` / `pointer-fine` for touch vs mouse interactions

### Accessibility

- Use semantic HTML elements (`<main>`, `<nav>`, `<article>`, `<section>`, `<footer>`, `<header>`)
- Add `aria-label` to interactive elements without visible text labels
- Add `aria-hidden="true"` to decorative elements (icons, window controls)
- Include skip links for keyboard navigation
- Use `focus-visible` styles (not `focus`) for keyboard-only focus indicators
- Respect `prefers-reduced-motion` for all animations

### Error Handling

- Use Next.js `notFound()` for missing content (returns 404)
- Use `not-found.tsx` for custom 404 pages
- Wrap risky browser API calls in try-catch (e.g., localStorage access)

### MDX Blog Posts

Blog posts live in `app/blog/posts/` as `.mdx` files with this frontmatter schema:

```yaml
---
title: 'Post Title'
publishedAt: 'YYYY-MM-DD'
summary: 'A brief description of the post.'
image: '/optional/og-image.png'  # optional, falls back to auto-generated OG
---
```

The schema is validated by Zod in `content-collections.ts`. The `content` field is auto-populated.

### Biome Lint Suppressions

When suppressing a Biome rule, always include a reason:
```ts
// biome-ignore lint/security/noDangerouslySetInnerHtml: <reason>
```

### SEO

- Every page should have appropriate `metadata` export (title, description, openGraph)
- Blog posts auto-generate JSON-LD structured data (`BlogPosting` schema)
- OG images are auto-generated via `app/og/route.tsx` using Next.js `ImageResponse`
- Sitemap (`app/sitemap.ts`) and robots (`app/robots.ts`) are configured
- RSS feed is available at `app/rss/route.ts`
