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

const ItemVariants: Variants = {
  start: {
    opacity: 0,
    y: '100%',
    transition: {},
  },
  end: {
    opacity: 1,
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
        className='container mx-auto w-screen min-h-screen py-5 px-3 sm:px-1'>
        <motion.h1
          variants={ItemVariants}
          className='text-4xl text-primary font-semibold'>
          About me
        </motion.h1>
        <motion.div
          variants={ItemVariants}
          className='description py-3 opacity-90 md:w-3/4'>
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
        <motion.div
          variants={ItemVariants}
          id='techs'
          className='flex sm:w-3/6'>
          <motion.div className='mr-10 font-mono' variants={ItemVariants}>
            <TechListElement title='JavaScript' />
            <TechListElement title='TypeScript' />
            <TechListElement title='React' />
            <TechListElement title='Node.JS' />
          </motion.div>
          <motion.div className='font-mono' variants={ItemVariants}>
            <TechListElement title='HTML/(S)CSS' />
            <TechListElement title='GraphQL' />
            <TechListElement title='Electron.JS' />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default about
