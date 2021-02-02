import {motion} from 'framer-motion'

export const TechListElement = ({title}: {title: string}) => (
  <motion.p className='my-1'>
    <span className='inline-block pr-2 transform -translate-y-0'>
      <svg
        width='10'
        height='10'
        viewBox='0 0 14 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M0 0L13.5 9.0675L0 18V0Z' fill='#6083FF' />
      </svg>
    </span>
    {title}
  </motion.p>
)
