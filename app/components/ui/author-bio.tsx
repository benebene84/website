import beneImage from 'app/images/bene.jpg'
import { authorPath, authorTagline, siteName } from 'app/utils/metadata'
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
        <p className="text-text-primary font-medium">
          <Link
            href={authorPath}
            rel="author"
            className="hover:text-accent transition-colors"
          >
            {siteName}
          </Link>
        </p>
        <p className="text-text-secondary mt-0.5 text-sm">{authorTagline}</p>
      </div>
    </div>
  )
}
