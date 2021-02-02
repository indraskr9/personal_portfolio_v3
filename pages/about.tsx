import {Nav} from 'components'
import {motion, Variants} from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'

const ContainerVariants: Variants = {
  start: {
    opacity: 0,
    y: '100%',
    transition: {staggerChildren: 0.2},
  },
  end: {
    opacity: 1,
    y: 0,
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
        className='container mx-auto w-screen min-h-screen'>
        <Link href='/'>
          <motion.button className='mt-5 bg-primary text-primaryDark px-3 py-2 rounded-full font-medium'>
            Hello world
          </motion.button>
        </Link>
      </motion.div>
    </>
  )
}

export default about
