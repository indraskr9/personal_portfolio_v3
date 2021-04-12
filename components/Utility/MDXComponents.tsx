import Link from 'next/link'

const CustomLink = (props: any) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    )
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />
}

export const MDXComponents = {
  // Image,
  // a: CustomLink,
}