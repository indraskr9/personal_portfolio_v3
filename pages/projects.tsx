import {BlurryBg, FeaturedProjectCard, Nav, OtherProjectCard} from 'components'
import {
  ProjectContainerVariants,
  ProjectItemVariants,
} from 'components/Project/animation'
import {motion} from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr'
import {fetcherFn} from 'swr/dist/types'
import {ProjectType} from 'utils/project-data'

const fetcher: fetcherFn<ProjectType[]> = url =>
  fetch(url).then(res => res.json())

const projects = () => {
  const {data, error} = useSWR<ProjectType[]>('/api/projects', fetcher)
  const featuredProjects = data?.filter(item => item.featured && item)
  const otherProjects = data?.filter(item => !item.featured && item)

  if (error)
    return (
      <motion.div
        exit='exit'
        variants={ProjectContainerVariants}
        initial='start'
        animate='end'
        className='flex items-center p-5 bg-primary text-dark'>
        <div className=''>
          <h1 className='text-2xl'>Something went wrong :(</h1>
          <p className='text-dark2'>Could not fetch project list.</p>
        </div>
        <Link href='/'>
          <button className='px-3 py-2 ml-auto text-white transition-all duration-500 rounded-full bg-primaryDark bg-opacity-60 hover:bg-opacity-80'>
            Home
          </button>
        </Link>
      </motion.div>
    )
  if (!data) return <h1>Loading....</h1>

  return (
    <>
      <Head>
        <title>Projects | Indrajit Sarkar.</title>
      </Head>

      <Nav />

      <motion.div
        exit='exit'
        variants={ProjectContainerVariants}
        initial='start'
        animate='end'
        className='container py-5 mx-auto'>
        <motion.h1
          initial={{y: 50, opacity: 0}}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
          className='my-20 text-5xl font-semibold tracking-wider text-center text-white uppercase sm:text-7xl md:text-8xl lg:text-9xl md:mx-0'
          style={{
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.671)',
          }}>
          Projects
        </motion.h1>

        <motion.section
          variants={ProjectItemVariants}
          className='w-full px-5 mx-auto md:w-11/12 md:px-0'
          id='featured-projects'>
          <BlurryBg
            className='right-0 w-72 h-72 md:bg-gradient-to-bl'
            delay={0.7}
          />
          <BlurryBg className='bottom-0 left-0 w-80 h-80' delay={1.5} />
          {featuredProjects?.map((project, index) => (
            <FeaturedProjectCard
              key={project.name}
              project={project}
              imageOnLeft={index % 2 !== 0}
            />
          ))}
        </motion.section>

        <motion.section variants={ProjectItemVariants}>
          <BlurryBg className='right-0' />
          <BlurryBg className='bottom-0 left-0' />
          <h2 className='mt-24 font-semibold tracking-wider text-center uppercase text-primary'>
            Other Projects
          </h2>
          <div className='flex flex-wrap w-full max-w-screen-xl px-5 mx-auto mt-5 md:w-11/12 md:px-0'>
            {otherProjects?.map(project => (
              <OtherProjectCard key={project.name} project={project} />
            ))}
          </div>
          <Link href='#'>
            <button className='block px-5 py-2 mx-auto mt-5 font-medium text-white transition-all duration-500 border border-white rounded-full border-opacity-40 hover:bg-white hover:bg-opacity-10 hover:border-opacity-70 text-opacity-70 hover:text-opacity-95'>
              Show more
            </button>
          </Link>
        </motion.section>
      </motion.div>
    </>
  )
}

export default projects
