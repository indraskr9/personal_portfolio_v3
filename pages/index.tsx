import {Nav} from 'components'
import {motion, Variants} from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import {MAILTO_MY_EMAIL_ID} from 'utils/constants'

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
    scale: 1.3,
    y: '250%',
    transition: {},
  },
  end: {
    opacity: 1,
    y: '0%',
    scale: 1,
    transition: {type: 'spring', stiffness: 70, damping: 12, duration: 0.5},
  },
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Indrajit Sarkar.</title>
      </Head>
      <Nav />
      <motion.div
        exit='exit'
        variants={ContainerVariants}
        initial='start'
        animate='end'
        className={`container mx-auto w-screen min-h-screen flex flex-col justify-center items-center`}>
        <motion.img
          variants={ItemVariants}
          className='h-28 w-2h-28 rounded-full mb-3'
          src='/images/me.jpg'
          alt='Indrajit Sarkar'
        />
        <motion.p variants={ItemVariants} className='text-primary font-mono'>
          Hello, my name is
        </motion.p>
        <motion.h1
          variants={ItemVariants}
          className='font-bold text-5xl mb-3 tracking-normal select-text opacity-100'>
          Indrajit Sarkar.
        </motion.h1>
        <motion.p
          variants={ItemVariants}
          className='opacity-50 text-center w-10/12 max-w-screen-sm'>
          I’m a student, currently pursuing BCA. I love building/designing
          websites and applications. Currently working with various web
          technologies.
        </motion.p>

        <motion.button
          variants={ItemVariants}
          className='mt-5 bg-primary text-primaryDark px-3 py-2 rounded-full font-medium'>
          <Link href={MAILTO_MY_EMAIL_ID}>Get in touch</Link>
        </motion.button>
      </motion.div>
    </>
  )
}
