import {motion} from 'framer-motion'
import {CSSProperties} from 'react'

export const BlurryBg = ({
  className,
  style,
  delay = 0.6,
}: {
  className: string
  style?: CSSProperties
  delay?: number
}) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 0.2, transition: {delay}}}
      className={`w-64 h-64 rounded-md absolute -z-10 filter md:blur-2xl md:bg-gradient-to-br from-grad1 to-grad2 ${className}`}
    />
  )
}
