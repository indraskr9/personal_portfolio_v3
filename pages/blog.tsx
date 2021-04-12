import {BlogPostCard} from 'components'
import {BlogLayout} from 'layouts'
import {getAllFilesFrontMatter} from 'lib/mdx'
import {InferGetStaticPropsType} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {useState} from 'react'
import {BiSad} from 'react-icons/bi'
import {FiSearch} from 'react-icons/fi'

const MAX_FEATURED_POSTS = 2

const Blog = ({posts}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchValue, setSearchValue] = useState('')

  // TODO: debounce search
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter(frontMatter =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    )

  return (
    <>
      <Head>
        <title>Blog | Indrajit Sarkar</title>
      </Head>
      <BlogLayout>
        <Link href='/blog'>
          <h1 className='mt-10 text-6xl tracking-wide text-white cursor-pointer md:text-8xl'>
            BLOGS
          </h1>
        </Link>
        <div
          id='searchBar'
          className='flex items-center justify-start w-5/6 px-5 my-10 transition-all duration-300 bg-white border border-white bg-opacity-10 md:w-6/12 border-opacity-30 focus-within:border-opacity-90'>
          <FiSearch size='18px' />
          <input
            onChange={e => setSearchValue(e.target.value)}
            value={searchValue}
            className='w-full py-3 ml-2 placeholder-white bg-transparent outline-none placeholder-opacity-70'
            type='text'
            placeholder='Search blogs or press /'
          />
        </div>

        <section className='grid gap-4 lg:gap-6 md:grid-cols-5'>
          {!filteredBlogPosts.length && (
            <div className='absolute flex flex-col items-center justify-start text-center transform -translate-x-1/2 left-1/2'>
              <BiSad
                className='mb-2 text-center text-white text-opacity-50 animate-pulse'
                size={40}
              />
              <p className='text-lg line-clamp-1'>
                No Posts found with keyword:{' '}
                <em className='font-semibold'>{searchValue}</em>
              </p>
            </div>
          )}
          {filteredBlogPosts.map((post, idx) => {
            if (idx < MAX_FEATURED_POSTS) {
              return (
                <BlogPostCard
                  key={post.slug}
                  featured
                  className={idx % 2 === 0 ? 'md:col-span-2' : 'md:col-span-3'}
                  {...post}
                />
              )
            }
            return <BlogPostCard key={post.slug} {...post} />
          })}
        </section>
      </BlogLayout>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllFilesFrontMatter('blog')
  return {props: {posts}}
}

export default Blog
