import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import {motion} from 'framer-motion'
import {FrontMatterData} from 'lib/mdx'
import Link from 'next/link'

dayjs.extend(localizedFormat)

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
        <div className='h-52'>
          <img
            loading='lazy'
            src={image}
            alt={title}
            className='object-cover w-full h-full rounded-sm'
          />
        </div>
      )}
      <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
        <div className='px-3 py-5 cursor-pointer'>
          <p className='text-sm text-white text-opacity-90'>
            {dayjs(publishedAt).format('ll')} | {readingTime.text}
          </p>
          <h1 className='mb-2 text-3xl font-bold'>{title}</h1>
          <p className='mb-3 opacity-95 line-clamp-2'>{summary}</p>
        </div>
      </Link>
    </motion.div>
  )
}
