import {motion, useSpring} from 'framer-motion'
import {useScrollValue} from 'utils/hooks'

export const ScrollProgressAnimation = () => {
  const {yRange} = useScrollValue()
  const pathLength = useSpring(yRange, {stiffness: 200, damping: 100})

  return (
    <svg className='fixed top-0 z-10' viewBox='0 0 146 4' fill='none'>
      <motion.path
        d='M0 2H146'
        stroke='url(#paint0_linear)'
        style={{
          pathLength,
          translateY: -2,
        }}
      />
      <defs>
        <linearGradient
          id='paint0_linear'
          x1='-16.5'
          y1='2.00016'
          x2='176'
          y2='11.5002'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#60a5ff' />
          <stop offset='1' stopColor='#6508bd' />
        </linearGradient>
      </defs>
    </svg>
  )
}
