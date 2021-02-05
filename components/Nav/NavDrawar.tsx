import {UiContext} from 'context/ui'
import {motion, Variants} from 'framer-motion'
import {useContext} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const ContainerVariants: Variants = {
  hide: {
    opacity: 0,
    x: 100,
    transition: {stiffness: 40, staggerChildren: 0.4},
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {type: 'spring', stiffness: 50, staggerChildren: 0.2},
  },
}

const ItemVariants: Variants = {
  hide: {
    opacity: 0,
    x: 100,
    y: 10,
    transition: {},
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {type: 'spring', duration: 1},
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
      className={`fixed right-0 z-20 bg-primary w-full sm:w-2/4 md:w-1/4 ${
        !isNavOpen && 'invisible'
      }`}>
      <div className='flex justify-center items-center flex-col min-h-screen'>
        <div
          className='absolute top-2 right-2 cursor-pointer'
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

        <div className='absolute bottom-5 flex flex-row justify-around w-1/2'>
          <svg
            className='cursor-pointer'
            width='30'
            height='30'
            viewBox='0 0 50 49'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M25.0028 2.09491e-06C11.1887 -0.00559235 0 11.1945 0 25.0184C0 35.9499 6.99922 45.2423 16.7467 48.6549C18.0594 48.985 17.8583 48.0507 17.8583 47.4129V43.0772C10.2782 43.9667 9.97095 38.9429 9.46263 38.1038C8.43481 36.3471 6.00492 35.8996 6.73109 35.0604C8.45716 34.1709 10.2167 35.2842 12.2556 38.2996C13.7303 40.487 16.6071 40.1178 18.065 39.7541C18.3834 38.4394 19.0649 37.2646 20.0034 36.3527C12.1495 34.9429 8.8761 30.1429 8.8761 24.4365C8.8761 21.6673 9.78662 19.1218 11.5741 17.0687C10.4346 13.684 11.6803 10.7861 11.8478 10.3553C15.0933 10.0644 18.4672 12.6826 18.7297 12.8896C20.5731 12.3917 22.679 12.1288 25.0363 12.1288C27.4048 12.1288 29.5163 12.4029 31.3764 12.9064C32.0076 12.4253 35.1357 10.1763 38.1522 10.4504C38.3142 10.8812 39.5319 13.712 38.4594 17.0519C40.2692 19.1106 41.1909 21.6785 41.1909 24.4533C41.1909 30.1708 37.8952 34.9765 30.019 36.3639C30.6936 37.0283 31.2293 37.8208 31.5947 38.6949C31.9601 39.569 32.1479 40.5072 32.1472 41.4548V47.7486C32.1919 48.2521 32.1472 48.75 32.9851 48.75C42.8779 45.4101 50 36.0506 50 25.024C50 11.1945 38.8057 2.09491e-06 25.0028 2.09491e-06Z'
              fill='#3E56A8'
              fillOpacity='0.69'
            />
          </svg>
          <svg
            className='cursor-pointer'
            width='30'
            height='30'
            viewBox='0 0 50 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M48 0H2C0.89375 0 0 0.89375 0 2V48C0 49.1063 0.89375 50 2 50H48C49.1063 50 50 49.1063 50 48V2C50 0.89375 49.1063 0 48 0ZM14.8312 42.6063H7.4125V18.7437H14.8312V42.6063ZM11.125 15.4813C10.2745 15.4813 9.44318 15.2291 8.73605 14.7566C8.02892 14.2841 7.47777 13.6125 7.15232 12.8268C6.82686 12.0411 6.74171 11.1765 6.90762 10.3424C7.07354 9.50824 7.48308 8.74206 8.08444 8.14069C8.68581 7.53932 9.45199 7.12979 10.2861 6.96387C11.1202 6.79796 11.9848 6.88311 12.7705 7.20857C13.5563 7.53402 14.2278 8.08517 14.7003 8.7923C15.1728 9.49943 15.425 10.3308 15.425 11.1812C15.4187 13.5562 13.4937 15.4813 11.125 15.4813ZM42.6063 42.6063H35.1937V31C35.1937 28.2313 35.1438 24.675 31.3375 24.675C27.4813 24.675 26.8875 27.6875 26.8875 30.8V42.6063H19.4813V18.7437H26.5938V22.0063H26.6937C27.6812 20.1313 30.1 18.15 33.7125 18.15C41.225 18.15 42.6063 23.0938 42.6063 29.5187V42.6063Z'
              fill='#3E56A8'
              fillOpacity='0.69'
            />
          </svg>
          <svg
            className='cursor-pointer'
            width='30'
            height='30'
            viewBox='0 0 50 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M33.4375 25C33.4375 20.3125 29.6875 16.5625 25 16.5625C20.3125 16.5625 16.5625 20.3125 16.5625 25C16.5625 29.6875 20.3125 33.4375 25 33.4375C29.6875 33.4375 33.4375 29.6875 33.4375 25ZM37.8125 25C37.8125 32.1875 32.1875 37.8125 25 37.8125C17.8125 37.8125 12.1875 32.1875 12.1875 25C12.1875 17.8125 17.8125 12.1875 25 12.1875C32.1875 12.1875 37.8125 17.8125 37.8125 25ZM41.25 11.5625C41.25 13.4375 40 14.6875 38.125 14.6875C36.25 14.6875 35 13.4375 35 11.5625C35 9.6875 36.25 8.4375 38.125 8.4375C40 8.4375 41.25 10 41.25 11.5625ZM25 4.375C21.25 4.375 13.4375 4.0625 10.3125 5.3125C8.125 6.25 6.25 8.125 5.625 10.3125C4.375 13.4375 4.6875 21.25 4.6875 25C4.6875 28.75 4.375 36.5625 5.625 39.6875C6.25 41.875 8.125 43.75 10.3125 44.375C13.4375 45.625 21.5625 45.3125 25 45.3125C28.4375 45.3125 36.5625 45.625 39.6875 44.375C41.875 43.4375 43.4375 41.875 44.375 39.6875C45.625 36.25 45.3125 28.4375 45.3125 25C45.3125 21.5625 45.625 13.4375 44.375 10.3125C43.75 8.125 41.875 6.25 39.6875 5.625C36.5625 4.0625 28.75 4.375 25 4.375ZM50 25V35.3125C50 39.0625 48.75 42.8125 45.9375 45.9375C43.125 48.75 39.375 50 35.3125 50H14.6875C10.9375 50 7.1875 48.75 4.0625 45.9375C1.5625 43.125 0 39.375 0 35.3125V25V14.6875C0 10.625 1.5625 6.875 4.0625 4.0625C7.1875 1.5625 10.9375 0 14.6875 0H35.3125C39.0625 0 42.8125 1.25 45.9375 4.0625C48.4375 6.875 50 10.625 50 14.6875V25Z'
              fill='#3E56A8'
              fillOpacity='0.69'
            />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

export default NavDrawar
