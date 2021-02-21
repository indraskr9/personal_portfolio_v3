import {UiContext} from 'context/ui'
import {motion, Variants} from 'framer-motion'
import {useContext} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {AiFillGithub, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'
import {HiDocumentDownload} from 'react-icons/hi'

const ContainerVariants: Variants = {
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
      staggerChildren: 0.2,
      when: 'beforeChildren',
    },
  },
  hide: {
    opacity: 0,
    x: '100%',
    transition: {stiffness: 40, staggerChildren: 0.4},
  },
}

const ItemVariants: Variants = {
  hide: {
    opacity: 0,
    x: '100%',
    y: 10,
    transition: {},
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {type: 'spring', stiffness: 40, duration: 1},
  },
  hover: {
    scale: 1.2,
  },
  tap: {
    scale: 0.8,
  },
}

const NavDrawar = () => {
  const {isNavOpen, setIsNavOpen} = useContext(UiContext)
  const router = useRouter()

  return (
    <motion.div
      initial={false}
      animate={isNavOpen ? 'show' : 'hide'}
      variants={ContainerVariants}
      id='nav-drawar'
      className='z-10 fixed right-0 bg-primary w-full sm:w-2/4 md:w-1/4'>
      <div className='flex justify-center items-center flex-col min-h-screen'>
        <div
          className='absolute top-2 right-2 md:left-2 cursor-pointer max-w-min'
          onClick={() => {
            setIsNavOpen(!isNavOpen)
          }}>
          <svg
            width='20'
            height='20'
            viewBox='0 0 21 37'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M6.30315e-08 31.7143L13.125 18.5L3.78189e-07 5.28572L2.625 3.13028e-08L21 18.5L2.625 37L6.30315e-08 31.7143Z'
              fill='#3E56A8'
              fillOpacity='0.77'
            />
          </svg>
        </div>

        <div
          className='text-center font-semibold text-primaryDark text-5xl select-none'
          onClick={() => setIsNavOpen(!isNavOpen)}>
          {router.pathname !== '/' && (
            <motion.h1
              animate={isNavOpen ? 'show' : 'hide'}
              variants={ItemVariants}
              whileTap='tap'
              whileHover='hover'
              className='my-14 cursor-pointer'>
              <Link href='/'>Home</Link>
            </motion.h1>
          )}
          {router.pathname !== '/about' && (
            <motion.h1
              animate={isNavOpen ? 'show' : 'hide'}
              variants={ItemVariants}
              whileTap='tap'
              whileHover='hover'
              className='my-14 cursor-pointer'>
              <Link href='/about'>About</Link>
            </motion.h1>
          )}
          {router.pathname !== '/projects' && (
            <motion.h1
              animate={isNavOpen ? 'show' : 'hide'}
              variants={ItemVariants}
              whileTap='tap'
              whileHover='hover'
              className='my-14 cursor-pointer'>
              <Link href='/projects'>Projects</Link>
            </motion.h1>
          )}
          {router.pathname !== '/contact' && (
            <motion.h1
              animate={isNavOpen ? 'show' : 'hide'}
              variants={ItemVariants}
              whileTap='tap'
              whileHover='hover'
              className='my-14 cursor-pointer'>
              <Link href='/contact'>Contact</Link>
            </motion.h1>
          )}
        </div>

        <motion.div
          animate={isNavOpen ? 'show' : 'hide'}
          variants={ItemVariants}
          className='absolute bottom-5 flex flex-row justify-around w-1/2'>
          <a
            href='https://github.com/dni9'
            target='_blank'
            rel='noopener noreferrer'>
            <AiFillGithub size='35' color='#3E56A8' />
          </a>
          <a
            href='https://linkedin.com/in/indraskr'
            target='_blank'
            rel='noopener noreferrer'>
            <AiFillLinkedin size='35' color='#3E56A8' />
          </a>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <AiOutlineInstagram size='35' color='#3E56A8' />
          </a>
          <a
            href='/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            title='Download Resume'>
            <HiDocumentDownload size='35' color='#3E56A8' />
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default NavDrawar
