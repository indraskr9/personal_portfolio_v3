import {useViewportScroll, useTransform, useSpring, motion} from 'framer-motion'
import {useState, useEffect} from 'react'

export const ScrollProgressAnimation = () => {
  const [isComplete, setIsComplete] = useState(false)
  const {scrollYProgress} = useViewportScroll()
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1])
  const pathLength = useSpring(yRange, {stiffness: 200, damping: 100})
  useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange])

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
          <stop stop-color='#60a5ff' />
          <stop offset='1' stop-color='#6508bd' />
        </linearGradient>
      </defs>
    </svg>
  )
}
