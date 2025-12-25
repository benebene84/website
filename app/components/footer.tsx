import { Arrow } from './icons/Arrow'

const footerLinks = [
  {
    href: '/rss',
    label: 'rss',
    target: '_blank',
    icon: true,
  },
  {
    href: 'https://github.com/benebene84',
    label: 'github',
    target: '_blank',
    icon: true,
  },
  {
    href: 'https://www.linkedin.com/in/benedikt-sperl/',
    label: 'linkedin',
    target: '_blank',
    icon: true,
  },
  {
    href: '/imprint',
    label: 'imprint',
    target: '_self',
    icon: false,
  },
]

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="mt-8 flex flex-col space-x-0 space-y-2 font-sm text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a href="https://www.benedikt-sperl.de/" className="self-end">
            <p className="ml-2 h-7">
              {new Date().getFullYear()} | Benedikt Sperl
            </p>
          </a>
        </li>
        {footerLinks.map((link, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <might be needed for some href>
          <li key={link.href + index}>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target={link.target}
              href={link.href}
            >
              {link.icon && <Arrow />}
              <p className="ml-2 h-7">{link.label}</p>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
