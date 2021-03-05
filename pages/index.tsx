import {Alert, Nav} from 'components'
import {motion, Variants} from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'

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
    scale: 1.2,
    y: 150,
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
  const router = useRouter()
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
        className='container mx-auto w-screen min-h-screen flex flex-col justify-center items-center'>
        <motion.img
          // style={{boxShadow: '-25px -15px 68px 50px rgba(96, 131, 255, 0.1)'}}
          variants={ItemVariants}
          className='h-28 w-2h-28 rounded-full mb-3 transition-shadow duration-500'
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
        <Link href='/contact'>
          <motion.button
            variants={ItemVariants}
            className='mt-5 bg-primary text-primaryDark px-3 py-2 rounded-full font-medium'>
            Get in touch
          </motion.button>
        </Link>
      </motion.div>
      <Alert
        message='Download resume'
        showIcon
        action={() => router.push('/resume.pdf')}
      />
    </>
  )
}
