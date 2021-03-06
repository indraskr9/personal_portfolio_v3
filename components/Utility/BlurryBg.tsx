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
      animate={{
        opacity: 1,
        transition: {
          delay,
        },
      }}
      className={`w-52 h-52 absolute -z-10 ${className}`}
      style={{
        background:
          'linear-gradient(160.41deg, rgba(96, 131, 255, 0.45) 5.08%, rgba(212, 94, 253, 0.35) 80.5%)',
        filter: 'blur(100px)',
        ...style,
      }}
    />
  )
}
