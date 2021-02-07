import {motion} from 'framer-motion'

type Props = {
  message: string
  showIcon?: boolean
  action?: () => void
  delay?: number
}

export const Alert: React.FC<Props> = ({
  message,
  showIcon,
  action,
  delay = 5,
}) => {
  return (
    <motion.div
      onClick={action}
      initial={{x: 200, scale: 0.5}}
      animate={{
        x: 0,
        scale: 1,
        transition: {delay, type: 'spring', stiffness: 100, damping: 20},
      }}
      className='flex justify-center items-center absolute right-4 bottom-4 py-2 px-3 bg-primary bg-opacity-20 text-primary rounded-full cursor-pointer hover:bg-opacity-40 transition-all duration-300'>
      <motion.div className='mr-2 text-sm'>{message}</motion.div>

      {/* TODO: Change Icon */}
      <svg
        className={`${!showIcon && 'hidden'}`}
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 20 20'
        fill='currentColor'>
        <motion.path
          fillRule='evenodd'
          d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
          clipRule='evenodd'
        />
      </svg>
    </motion.div>
  )
}
