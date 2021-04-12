import {MDXComponents} from 'components'
import {motion} from 'framer-motion'
import {BlogLayout} from 'layouts'
import {getFileBySlug, getFiles} from 'lib/mdx'
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import hydrate from 'next-mdx-remote/hydrate'
import Image from 'next/image'
import {formatDate} from 'utils/format-date'

const BlogPost = ({
  mdxSource,
  frontMatter: {title, summary, image, publishedAt, readingTime},
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })
  return (
    <motion.div exit='exit'>
      <BlogLayout>
        <div className='flex flex-col items-center mt-10 mb-28'>
          <h1 className='mb-5 text-3xl font-semibold text-center md:text-5xl line-clamp-2 lg:text-7xl'>
            {title}
          </h1>
          {summary && (
            <p className='w-full text-lg text-center text-white md:w-3/4 md:text-xl text-opacity-90 line-clamp-3'>
              {summary}
            </p>
          )}
          <p className='mt-2 mb-5 font-mono text-sm font-bold text-white text-opacity-90'>
            {formatDate(publishedAt)} | {readingTime.text}
          </p>
          <div className='relative w-full h-80 md:h-[500px]'>
            <Image src={image} alt={title} objectFit='cover' layout='fill' />
          </div>
        </div>

        <article className='prose lg:prose-xl'>{content}</article>
      </BlogLayout>
    </motion.div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = await getFiles('blog')
  const paths = files.map(file => ({params: {slug: file.replace(/\.mdx/, '')}}))
  return {paths, fallback: false}
}

export const getStaticProps = async ({params}: GetStaticPropsContext) => {
  const post = await getFileBySlug('blog', `${params?.slug}`)
  return {props: post}
}

export default BlogPost
