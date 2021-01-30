import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import {AppProps} from 'next/app'
import {theme} from 'styles/theme'
import 'styles/globals.scss'
import {AnimatePresence, motion} from 'framer-motion'

function MyApp({Component, pageProps, router}: AppProps) {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial='pageInitial'
          animate='pageAnimate'
          exit='pageExit'
          variants={{
            pageInitial: {
              opacity: 0,
              y: 10,
            },
            pageAnimate: {
              opacity: 1,
              y: 0,
              transition: {
                ease: 'linear',
                duration: 0.5,
              },
            },
            pageExit: {
              y: -10,
              opacity: 0,
            },
          }}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
