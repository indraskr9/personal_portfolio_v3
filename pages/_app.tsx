import {UiProvider} from 'context/ui'
import {AppProps} from 'next/app'
import 'tailwindcss/tailwind.css'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <UiProvider>
      <Component {...pageProps} />
    </UiProvider>
  )
}

export default MyApp
