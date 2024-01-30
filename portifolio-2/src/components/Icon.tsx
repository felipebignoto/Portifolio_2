import Link from 'next/link'
import { ElementType } from 'react'

interface IconProps {
  icon: ElementType
  url: string
}

export default function Icon({ icon: Icon, url }: IconProps) {
  return (
    <Link
      className="hover:text-secondary-light"
      href={url}
      prefetch={false}
      target="_blank"
    >
      <Icon />
    </Link>
  )
}
