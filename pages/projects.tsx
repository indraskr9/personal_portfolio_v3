import {FeaturedProjectCard, Nav, OtherProjectCard} from 'components'
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
        <h1 className='text-4xl text-primary font-semibold mx-5 md:mx-0'>
          Projects
        </h1>

        <motion.section
          variants={ProjectItemVariants}
          className='mx-auto md:w-11/12 w-full px-5 md:px-0'
          id='featured-projects'>
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
          <button className='mt-5 bg-primary text-primaryDark px-5 py-2 rounded-full font-medium mx-auto block'>
            <Link href='#'>Show All</Link>
          </button>
        </motion.section>
      </motion.div>
    </>
  )
}

export default projects
