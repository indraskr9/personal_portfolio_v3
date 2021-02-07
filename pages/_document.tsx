import NextDocument, {Head, Html, Main, NextScript} from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&family=Inter:wght@400;600;800&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='bg-dark text-white overflow-x-hidden'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
