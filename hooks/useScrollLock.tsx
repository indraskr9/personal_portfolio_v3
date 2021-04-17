import {useLayoutEffect} from 'react'

export const useScrollLock = (isNavOpen: boolean) => {
  useLayoutEffect((): (() => void) => {
    const originalStyle: string = window.getComputedStyle(document.body)
      .overflow
    if (isNavOpen) document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = originalStyle)
  }, [isNavOpen])
}
