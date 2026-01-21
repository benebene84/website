import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc'
import React from 'react'
import { highlight } from 'sugar-high'
import { KeyframeDemo } from '../blog/demos/keyframe-demo'
import { RafDemo } from '../blog/demos/raf-demo'
import { TransitionDemo } from '../blog/demos/transition-demo'
import { WaapiDemo } from '../blog/demos/waapi-demo'
import { Switch } from './ui/switch'

function Table({
  data,
}: {
  data: { headers: string[]; rows: (string | React.ReactNode)[][] }
}) {
  const headers = data.headers.map((header) => (
    <th
      key={header}
      className="border-border-default border-b px-4 py-3 text-left font-semibold text-text-primary"
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
          className={`border-border-subtle border-b px-4 py-3 text-text-secondary ${
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
  ...props
}: { children: string } & React.HTMLAttributes<HTMLDivElement>) {
  const codeHTML = highlight(children)
  // biome-ignore lint/security/noDangerouslySetInnerHtml: <i am passing the code>
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove all non-word characters except for -
    .replace(/--+/g, '-') // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: string }) => {
    const slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children,
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
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
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
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

export function CustomMDX({ ...props }: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
