import beneImage from 'app/images/bene.jpg'
import { authorTagline, siteName } from 'app/utils/metadata'
import Image from 'next/image'
import Link from 'next/link'

export function AuthorBio() {
  return (
    <div className="flex gap-3">
      <Image
        src={beneImage}
        width={56}
        height={56}
        alt=""
        aria-hidden="true"
        className="size-14 shrink-0 rounded-sm object-cover"
        placeholder="blur"
      />
      <div className="min-w-0">
        <p className="font-medium text-text-primary">
          <Link
            href="/about-me"
            rel="author"
            className="transition-colors hover:text-accent"
          >
            {siteName}
          </Link>
        </p>
        <p className="mt-0.5 text-sm text-text-secondary">{authorTagline}</p>
      </div>
    </div>
  )
}
