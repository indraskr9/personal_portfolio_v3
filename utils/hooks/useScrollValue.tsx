import {useTransform, useViewportScroll} from 'framer-motion'
import {useEffect, useState} from 'react'

export const useScrollValue = () => {
  const [isComplete, setIsComplete] = useState(false)
  const [scrolledHeader, setScrolledHeader] = useState(false)
  const {scrollYProgress} = useViewportScroll()
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1])
  useEffect(
    () =>
      yRange.onChange(v => {
        setIsComplete(v >= 1)
        setScrolledHeader(Math.round(v * 10) >= 3)
      }),
    [yRange]
  )
  return {yRange, isComplete, scrolledHeader}
}
