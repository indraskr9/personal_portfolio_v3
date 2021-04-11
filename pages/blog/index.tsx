import {BlogPostCard} from 'components'
import {BlogLayout} from 'layouts'
import Head from 'next/head'
import {FiSearch} from 'react-icons/fi'

const MAX_FEATURED_POSTS = 2

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Indrajit Sarkar</title>
      </Head>
      <BlogLayout>
        <h1 className='mt-10 text-6xl tracking-wide text-white md:text-8xl'>
          BLOGS
        </h1>
        <div
          id='searchBar'
          className='flex items-center justify-start w-5/6 px-5 my-10 transition-all duration-300 bg-white border border-white bg-opacity-10 md:w-5/12 border-opacity-30 focus-within:border-opacity-90'>
          <FiSearch size='18px' />
          <input
            className='w-full py-3 ml-2 placeholder-white bg-transparent outline-none placeholder-opacity-70'
            type='text'
            placeholder='Search blogs or press /'
          />
        </div>

        <section className='grid w-11/12 gap-4 my-5 md:w-full md:max-w-5xl lg:gap-6 md:grid-cols-5'>
          <BlogPostCard
            featured
            className='md:col-span-2'
            title='How to become a 10X developer?'
            summary='Lorem ipsum dolor sit amet, consectetur adipng elit. Amet adipiscing
          montes, non non risus tempus elementum nulla.'
          />
          <BlogPostCard
            className='md:col-span-3'
            featured
            title='How to become a 10X developer?'
            summary='Lorem ipsum dolor sit amet, consectetur adipng elit. Amet adipiscing
          montes, non non risus tempus elementum nulla.'
          />

          <BlogPostCard
            title='How to become a 10X developer?'
            summary='Lorem ipsum dolor sit amet, consectetur adipng elit. Amet adipiscing
          montes, non non risus tempus elementum nulla.'
          />
          <BlogPostCard
            title='How to become a 10X developer?'
            summary='Lorem ipsum dolor sit amet, consectetur adipng elit. Amet adipiscing
          montes, non non risus tempus elementum nulla.'
          />
        </section>
      </BlogLayout>
    </>
  )
}

export default Blog
