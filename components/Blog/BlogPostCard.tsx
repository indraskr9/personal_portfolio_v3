import dayjs from 'dayjs'
import {motion} from 'framer-motion'
import {FrontMatterData} from 'lib/mdx'
import Image from 'next/image'
import Link from 'next/link'
import {formatDate} from 'utils/format-date'

type Props = FrontMatterData & {
  className?: string
  featured?: boolean
}

export const BlogPostCard: React.FC<Props> = ({
  title,
  summary,
  image,
  publishedAt,
  featured,
  className,
  readingTime,
  slug,
}) => {
  return (
    <motion.div
      exit='exit'
      className={`h-full rounded-sm bg-primaryDark bg-opacity-10 ${className} ${
        !featured && 'md:col-span-5'
      }`}>
      {featured && (
        <div className='relative w-full h-52'>
          <Image src={image} alt={title} objectFit='cover' layout='fill' />
        </div>
      )}
      <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
        <div className='px-3 py-5 cursor-pointer'>
          <p className='text-sm text-white text-opacity-90'>
            {formatDate(publishedAt)} | {readingTime.text}
          </p>
          <h1 className='mb-2 text-3xl font-bold'>{title}</h1>
          <p className='mb-3 opacity-95 line-clamp-2'>{summary}</p>
        </div>
      </Link>
    </motion.div>
  )
}
