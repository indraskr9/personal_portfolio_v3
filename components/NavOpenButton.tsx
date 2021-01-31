import {UiContext} from 'context/ui'
import {motion} from 'framer-motion'
import {useContext} from 'react'

const NavOpenButton = () => {
  const {isNavOpen, setIsNavOpen} = useContext(UiContext)

  return (
    <motion.div
      initial={{opacity: 0, x: 10}}
      animate={{
        opacity: 1,
        x: 0,
      }}
      whileTap={{
        scale: 0.8,
      }}
      className='absolute right-0 w-10 h-10 bg-primary flex justify-center items-center cursor-pointer hover:bg-primaryDark transition'
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
          d='M21 5.28571L7.875 18.5L21 31.7143L18.375 37L-8.08661e-07 18.5L18.375 -1.14742e-07L21 5.28571Z'
          fill='#EDF0F9'
        />
      </svg>
    </motion.div>
  )
}

export default NavOpenButton
