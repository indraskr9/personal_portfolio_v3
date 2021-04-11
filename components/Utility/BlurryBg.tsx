import {motion} from 'framer-motion'
import {CSSProperties} from 'react'
import styles from './styles/BlurryBg.module.css'

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
        opacity: 0.3,
        transition: {
          delay,
        },
      }}
      id={styles.blurry_bg}
      className={`w-52 h-52 absolute -z-10 md:bg-gradient-to-br from-grad1 to-grad2 ${className}`}
    />
  )
}
