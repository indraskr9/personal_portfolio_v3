import {UiContext} from 'context/ui'
import {motion, Variants} from 'framer-motion'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useContext} from 'react'
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
    x: '90%',
    transition: {stiffness: 40, staggerChildren: 0.4},
  },
}

const ItemVariants: Variants = {
  hide: {
    opacity: 0,
    x: '150%',
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

  const NavLink = ({title, link}: {title: string; link: string}) => (
    <motion.h1
      animate={isNavOpen ? 'show' : 'hide'}
      variants={ItemVariants}
      whileTap='tap'
      whileHover='hover'
      className='cursor-pointer my-14'>
      <Link href={link}>{title}</Link>
    </motion.h1>
  )

  return (
    <motion.div
      onPanStart={e => setIsNavOpen(!isNavOpen)}
      initial={false}
      animate={isNavOpen ? 'show' : 'hide'}
      variants={ContainerVariants}
      id='nav-drawar'
      className='fixed right-0 z-10 w-full bg-primary sm:w-2/4 md:w-1/4'>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <div
          className='absolute cursor-pointer top-2 right-2 md:left-2 max-w-min'
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
          className='text-5xl font-semibold text-center select-none text-primaryDark'
          onClick={() => setIsNavOpen(!isNavOpen)}>
          {router.pathname !== '/' && <NavLink title='Home' link='/' />}
          {router.pathname !== '/about' && (
            <NavLink title='About' link='/about' />
          )}
          {router.pathname !== '/projects' && (
            <NavLink title='Projects' link='/projects' />
          )}
          {router.pathname !== '/blog' && <NavLink title='Blog' link='/blog' />}
          {router.pathname !== '/contact' && (
            <NavLink title='Contact' link='/contact' />
          )}
        </div>

        <motion.div
          animate={isNavOpen ? 'show' : 'hide'}
          variants={ItemVariants}
          className='absolute flex flex-row justify-around w-1/2 bottom-5'>
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
