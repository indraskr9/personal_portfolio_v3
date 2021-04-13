import {motion, Variants} from 'framer-motion'
import {FrontMatterData} from 'lib/mdx'
import Image from 'next/image'
import Link from 'next/link'
import {formatDate} from 'utils/format-date'

type Props = FrontMatterData & {
  className?: string
  featured?: boolean
}

const ItemVariants: Variants = {
  start: {
    y: '100%',
    transition: {},
  },
  end: {
    y: '0%',
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 12,
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
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
      variants={ItemVariants}
      className={`h-full rounded-md bg-primaryDark bg-opacity-10 hover:bg-opacity-20 hover:shadow-lg transition-all duration-500 border border-white border-opacity-10 hover:border-opacity-50 p-1 ${className} ${
        !featured && 'flex flex-col md:flex-row md:col-span-5'
      }`}>
      {image && (
        <div
          className={`relative w-full h-52 ${!featured && 'w-full md:w-2/4'}`}>
          <Image src={image} alt={title} objectFit='cover' layout='fill' />
        </div>
      )}
      <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
        <div className={`px-3 py-5 cursor-pointer ${!featured && 'px-5'}`}>
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
