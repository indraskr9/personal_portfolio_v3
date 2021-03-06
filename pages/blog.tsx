import {BlogPostCard, Nav} from 'components'
import {motion, Variants} from 'framer-motion'
import {BlogLayout} from 'layouts'
import {FrontMatterData, getAllFilesFrontMatter} from 'lib/mdx'
import {debounce} from 'lodash'
import {InferGetStaticPropsType} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {useCallback, useState} from 'react'
import {BiSad} from 'react-icons/bi'
import {FiHome, FiSearch} from 'react-icons/fi'

const ContainerVariants: Variants = {
  start: {
    transition: {staggerChildren: 0.2},
  },
  end: {
    transition: {staggerChildren: 0.3},
  },
  exit: {
    y: '50%',
    opacity: 0,
    transition: {
      type: 'spring',
    },
  },
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

const Blog = ({posts}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchValue, setSearchValue] = useState('')
  const [filteredBlogPosts, setFilteredBlogPosts] = useState<FrontMatterData[]>(
    posts
  )
  const debouncedSearch = useCallback(
    debounce(s => searchPosts(s), 500),
    []
  )

  const searchPosts = (keyword: string) => {
    setFilteredBlogPosts(
      posts.filter(frontMatter =>
        frontMatter.title.toLowerCase().includes(keyword.toLowerCase())
      )
    )
  }

  return (
    <>
      <Head>
        <title>Blog | Indrajit Sarkar</title>
      </Head>
      <div className='fixed top-0 right-0 z-10 select-none md:hidden'>
        <Nav />
      </div>
      <Link href='/'>
        <motion.button
          title='Go home'
          exit={{display: 'none'}}
          initial={{translateX: -50}}
          animate={{translateX: 1, transition: {type: 'tween', delay: 2.5}}}
          className='fixed left-0 z-10 hidden px-3 py-2 rounded-r-lg md:block bottom-3 text-dark bg-primary'>
          <FiHome size={20} />
        </motion.button>
      </Link>
      <motion.div
        exit='exit'
        variants={ContainerVariants}
        initial='start'
        animate='end'>
        <BlogLayout>
          <motion.h1
            initial={{opacity: 0}}
            animate={{
              opacity: 1,
              transition: {delay: 0.7, ease: 'easeInOut'},
            }}
            variants={ItemVariants}
            className='mt-10 text-6xl font-semibold tracking-widest text-white select-none md:text-8xl'
            style={{
              WebkitTextFillColor: 'transparent',
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.671)',
            }}>
            BLOGS
          </motion.h1>

          <motion.div
            initial={{opacity: 0, scale: 0.5, translateY: 20}}
            animate={{
              opacity: 1,
              scale: 1,
              translateY: 0,
              transition: {delay: 0.6, ease: 'easeIn'},
            }}
            id='searchBar'
            className='flex items-center justify-start w-full px-5 my-10 transition-all duration-300 bg-white border border-white bg-opacity-10 md:w-6/12 border-opacity-30 focus-within:border-opacity-90'>
            <FiSearch size='18px' />
            <input
              onChange={e => {
                setSearchValue(e.target.value)
                debouncedSearch(e.target.value)
              }}
              value={searchValue}
              className='w-full py-3 ml-2 placeholder-white bg-transparent outline-none placeholder-opacity-70'
              type='text'
              placeholder='Search blogs'
            />
          </motion.div>

          <motion.section className='grid gap-4 lg:gap-6 md:grid-cols-5'>
            {!filteredBlogPosts.length && (
              <div className='absolute flex flex-col items-center justify-start w-full text-center transform -translate-x-1/2 left-1/2'>
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
              if (idx < 2) {
                return (
                  <BlogPostCard
                    className={
                      idx % 2 === 0 ? 'md:col-span-2' : 'md:col-span-3'
                    }
                    key={post.slug}
                    {...post}
                  />
                )
              }
              return <BlogPostCard key={post.slug} {...post} />
            })}
          </motion.section>
        </BlogLayout>
      </motion.div>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllFilesFrontMatter('blog')
  posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  )
  return {props: {posts}}
}

export default Blog
