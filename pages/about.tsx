import {Nav, TechListElement} from 'components'
import {motion, Variants} from 'framer-motion'
import Head from 'next/head'

const ContainerVariants: Variants = {
  start: {
    opacity: 0,
    transition: {staggerChildren: 0.2},
  },
  end: {
    opacity: 1,
    transition: {staggerChildren: 0.3},
  },
  exit: {
    y: '100%',
    opacity: 0,
    transition: {
      type: 'spring',
    },
  },
}

const about = () => {
  return (
    <>
      <Head>
        <title>About | Indrajit Sarkar.</title>
      </Head>
      <Nav />
      <motion.div
        variants={ContainerVariants}
        initial='start'
        animate='end'
        exit='exit'
        className='container mx-auto w-screen min-h-screen py-5 px-3 sm:px-0'>
        <motion.h1 className='text-4xl text-primary font-semibold'>
          About me
        </motion.h1>
        <motion.div className='description py-3 opacity-90 md:w-3/4'>
          <p>Hello, I’m Indrajit Sarkar, a student from Kolkata.</p>
          <p>
            I love designing and building things for web and mobile. I enjoy
            exploring, learning new technologies and try to make something fun
            or/and useful.
          </p>
          <p className='pt-3'>
            Here are a few technologies I’ve been working with recently:
          </p>
        </motion.div>
        <div id='techs' className='flex sm:w-3/6'>
          <div className='mr-10'>
            <TechListElement title='JavaScript' />
            <TechListElement title='TypeScript' />
            <TechListElement title='React' />
            <TechListElement title='Node.JS' />
          </div>
          <div className=''>
            <TechListElement title='HTML/(S)CSS' />
            <TechListElement title='GraphQL' />
            <TechListElement title='Electron.JS' />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default about
