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
        className='bg-primary p-5 text-dark flex items-center'>
        <div className=''>
          <h1 className='text-2xl'>Something went wrong :(</h1>
          <p className='text-dark2'>Could not fetch project list.</p>
        </div>
        <Link href='/'>
          <button className='ml-auto bg-primaryDark text-white px-3 py-2 rounded-full bg-opacity-60 hover:bg-opacity-80 transition-all duration-500'>
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
        className='container mx-auto py-5'>
        <motion.h1
          initial={{y: 50, opacity: 0}}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
          className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider text-center text-white font-semibold my-20 md:mx-0 uppercase'
          style={{
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.671)',
          }}>
          Projects
        </motion.h1>

        <motion.section
          variants={ProjectItemVariants}
          className='mx-auto md:w-11/12 w-full px-5 md:px-0'
          id='featured-projects'>
          <BlurryBg className='right-0 w-72 h-72' />
          <BlurryBg
            className='left-0 bottom-0 w-80 h-80'
            style={{
              background:
                'linear-gradient(160.41deg, rgba(96, 131, 255, 0.25) 5.08%, rgba(212, 94, 253, 0.35) 80.5%)',
            }}
          />
          {featuredProjects?.map(({name, photoUrl}, index) => (
            <FeaturedProjectCard
              key={name}
              title={name}
              image={photoUrl}
              imageOnLeft={index % 2 !== 0}
            />
          ))}
        </motion.section>

        <motion.section variants={ProjectItemVariants}>
          <BlurryBg className='right-0' />
          <BlurryBg
            className='left-0 bottom-0'
            style={{
              background:
                'linear-gradient(160.41deg, rgba(96, 131, 255, 0.25) 5.08%, rgba(212, 94, 253, 0.35) 80.5%)',
            }}
          />
          <h2 className='uppercase text-primary text-center font-semibold tracking-wider mt-24'>
            Other Projects
          </h2>
          <div className='mt-5 mx-auto w-full md:w-11/12 max-w-screen-xl px-5 md:px-0 flex flex-wrap'>
            {otherProjects?.map(({name, description}) => (
              <OtherProjectCard
                key={name}
                title={name}
                description={description}
              />
            ))}
          </div>
          <Link href='#'>
            <button className='mt-5 border border-opacity-40 border-white hover:bg-white hover:bg-opacity-10 hover:border-opacity-70 transition-all text-white text-opacity-70 hover:text-opacity-95 duration-500 px-5 py-2 rounded-full font-medium mx-auto block'>
              Show All
            </button>
          </Link>
        </motion.section>
      </motion.div>
    </>
  )
}

export default projects
