import Link from 'next/link'

const links = [
  {
    href: 'https://github.com/benebene84',
    label: 'GitHub',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/benedikt-sperl/',
    label: 'LinkedIn',
    external: true,
  },
  {
    href: '/imprint',
    label: 'Imprint',
    external: false,
  },
]

export function Footer() {
  return (
    <footer className="border-border-subtle border-t">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-8 lg:px-8">
        <p className="text-sm text-text-muted">
          {new Date().getFullYear()} Benedikt Sperl
        </p>
        <div className="flex items-center gap-4">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </footer>
  )
}
