import { MDXContent } from '@content-collections/mdx/react'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { highlight } from 'sugar-high'
import {
  KeyframeDemo,
  RafDemo,
  TransitionDemo,
  WaapiDemo,
} from './mdx-demos-lazy'
import { Switch } from './ui/switch'

function Table({
  data,
}: {
  data?: { headers: string[]; rows: (string | React.ReactNode)[][] }
}) {
  if (!data?.headers) {
    return undefined
  }
  const headers = data.headers.map((header) => (
    <th
      key={header}
      className="border-border-default text-text-primary border-b px-4 py-3 text-left font-semibold"
    >
      {header}
    </th>
  ))
  const rows = data.rows.map((row, index) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: <we only have the index as key>
    <tr key={index}>
      {row.map((cell: string | React.ReactNode, rowIndex) => (
        <td
          // biome-ignore lint/suspicious/noArrayIndexKey: <we only have the index as key>
          key={rowIndex}
          className={`border-border-subtle text-text-secondary border-b px-4 py-3 ${
            index === data.rows.length - 1 ? 'border-b-0' : ''
          }`}
        >
          {cell}
        </td>
      ))}
    </tr>
  ))

  return (
    <table className="my-6 w-full border-collapse">
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink({
  href,
  children,
  ...props
}: {
  href: string
  children: React.ReactNode
}) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...props}>
      {children}
    </a>
  )
}

function RoundedImage({ alt, ...props }: { alt: string } & ImageProps) {
  return <Image alt={alt} className="rounded-lg" {...props} />
}

function Code({
  children,
  className,
  ...props
}: { children: string } & React.HTMLAttributes<HTMLElement>) {
  const isInline = !className?.includes('language-') && !children.includes('\n')

  if (isInline) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }

  const codeHTML = highlight(children)
  return (
    <code
      className={className}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: highlighted code from sugar-high
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
    />
  )
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}

function Heading({
  level,
  children,
}: {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: string
}) {
  const slug = slugify(children)
  return React.createElement(
    `h${level}`,
    { id: slug },
    children,
    React.createElement('a', {
      href: `#${slug}`,
      className: 'anchor',
    }),
  )
}

function H1({ children }: { children: string }) {
  return <Heading level={1}>{children}</Heading>
}

function H2({ children }: { children: string }) {
  return <Heading level={2}>{children}</Heading>
}

function H3({ children }: { children: string }) {
  return <Heading level={3}>{children}</Heading>
}

function H4({ children }: { children: string }) {
  return <Heading level={4}>{children}</Heading>
}

function H5({ children }: { children: string }) {
  return <Heading level={5}>{children}</Heading>
}

function H6({ children }: { children: string }) {
  return <Heading level={6}>{children}</Heading>
}

function CustomList({ children }: { children: React.ReactNode }) {
  return <ul className="my-4 list-disc pl-6">{children}</ul>
}

function CustomListItem({ children }: { children: React.ReactNode }) {
  return <li className="mb-1">{children}</li>
}

function CustomOrderedList({ children }: { children: React.ReactNode }) {
  return <ol className="my-4 list-decimal pl-6">{children}</ol>
}

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  Switch,
  ul: CustomList,
  ol: CustomOrderedList,
  li: CustomListItem,
  TransitionDemo,
  KeyframeDemo,
  RafDemo,
  WaapiDemo,
}

export function CustomMDX({ code }: { code: string }) {
  return <MDXContent code={code} components={components} />
}
