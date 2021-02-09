import {FeaturedProjectCard, Nav, OtherProjectCard} from 'components'
import {
  ProjectContainerVariants,
  ProjectItemVariants,
} from 'components/Project/animation'
import {motion} from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'

const projects = () => {
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
          <FeaturedProjectCard title='Exam Portal' image='project.jpg' />
          <FeaturedProjectCard
            title='Sad cat Maker'
            image='profile.jpg'
            imageOnLeft
          />
        </motion.section>

        <motion.section variants={ProjectItemVariants}>
          <h2 className='uppercase text-primary text-center font-semibold tracking-wider mt-24'>
            Other Projects
          </h2>
          <div className='mt-5 mx-auto w-full md:w-11/12 max-w-screen-xl px-5 md:px-0 flex flex-wrap'>
            <OtherProjectCard title='NCloud' />
            <OtherProjectCard title='Your Secrets' />
            <OtherProjectCard title='Markdown Note' />
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
