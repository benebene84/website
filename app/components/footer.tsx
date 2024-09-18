function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

const footerLinks = [
  {
    href: '/rss',
    label: 'rss',
    target: '_blank',
    icon: true
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
      <ul className="font-sm mt-8 flex flex-col space-y-2 space-x-0 text-neutral-600 md:flex-row md:space-y-0 md:space-x-4 dark:text-neutral-300">
        {footerLinks.map((link) => (
          <li key={link.href}>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target={link.target}
              href={link.href}
            >
              {link.icon && <ArrowIcon />}
              <p className="ml-2 h-7">{link.label}</p>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
