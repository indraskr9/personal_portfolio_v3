import {MDXComponents} from 'components'
import {motion} from 'framer-motion'
import {getFileBySlug, getFiles} from 'lib/mdx'
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import hydrate from 'next-mdx-remote/hydrate'

const BlogPost = ({
  mdxSource,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })
  return (
    <motion.div exit='exit'>
      <div>
        <h1>{frontMatter.title}</h1>
        {frontMatter.summary && <p>{frontMatter.summary}</p>}
      </div>
      <main>{content}</main>
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
