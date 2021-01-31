import NavDrawar from 'components/NavDrawar'
import NavOpenButton from 'components/NavOpenButton'
import {UiContext} from 'context/ui'
import {motion, Variants} from 'framer-motion'
import Head from 'next/head'
import {useContext} from 'react'

export default function Home() {
  const {isNavOpen, setIsNavOpen} = useContext(UiContext)

  const ContainerVariants: Variants = {
    start: {
      opacity: 0,
      transition: {staggerChildren: 0.2},
    },
    end: {
      opacity: 1,
      transition: {staggerChildren: 0.3},
    },
  }

  const ItemVariants: Variants = {
    start: {
      opacity: 0,
      y: '250%',
      transition: {},
    },
    end: {
      opacity: 1,
      y: '0%',
      transition: {type: 'tween', duration: 0.7},
    },
  }

  return (
    <>
      <Head>
        <title>Indrajit Sarkar.</title>
      </Head>
      <NavOpenButton />
      <NavDrawar />

      <div
        className={`${
          isNavOpen && 'opacity-20 transition duration-500 ease-in-out'
        } select-none`}
        onClick={() => {
          isNavOpen && setIsNavOpen(!isNavOpen)
        }}>
        <motion.div
          variants={ContainerVariants}
          initial='start'
          animate='end'
          className={`container mx-auto w-screen min-h-screen flex flex-col justify-center items-center`}>
          <motion.img
            variants={ItemVariants}
            className='h-28 w-2h-28 rounded-full mb-3'
            src='/images/profile.jpg'
            alt='Indrajit Sarkar'
          />
          <motion.p variants={ItemVariants} className='text-primary font-mono'>
            Hello, my name is
          </motion.p>
          <motion.h1
            variants={ItemVariants}
            className='font-bold text-5xl mb-3 tracking-normal select-text'>
            Indrajit Sarkar.
          </motion.h1>
          <motion.p
            variants={ItemVariants}
            className='text-center w-10/12 max-w-screen-sm opacity-80'>
            I’m a student, currently pursuing BCA. I love building/designing
            websites and applications. Currently working with various web
            technologies.
          </motion.p>

          <motion.button
            variants={ItemVariants}
            className='mt-5 bg-primary text-primaryDark px-3 py-2 rounded-full font-medium'>
            Get in touch
          </motion.button>
        </motion.div>
      </div>
    </>
  )
}
