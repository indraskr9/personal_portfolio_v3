import {UiProvider} from 'context/ui'
import {AnimatePresence} from 'framer-motion'
import {AppProps} from 'next/app'
import 'styles/globals.css'

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({top: 0})
  }
}

function MyApp({Component, pageProps, router}: AppProps) {
  return (
    <UiProvider>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </UiProvider>
  )
}

export default MyApp
