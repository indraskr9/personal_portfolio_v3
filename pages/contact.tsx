import {ContactForm, Nav, BlurryBg} from 'components'
import {motion, Variants} from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import {MAILTO_MY_EMAIL_ID} from 'utils/constants'

const ContactContainerVariants: Variants = {
  start: {
    opacity: 0,
    y: 500,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {type: 'spring', stiffness: 70, damping: 12, duration: 0.5},
  },

  exit: {
    y: 1000,
    opacity: 0,
    transition: {},
  },
}

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Indrajit Sarkar.</title>
      </Head>
      <Nav />

      <motion.div
        exit='exit'
        className='container mx-auto flex justify-center items-center w-screen min-h-screen'>
        <BlurryBg
          className='left-32'
          style={{
            background:
              'linear-gradient(160.41deg, rgba(96, 131, 255, 0.25) 5.08%, rgba(212, 94, 253, 0.35) 80.5%)',
          }}
        />
        <BlurryBg className='right-60 top-10' />
        <motion.div
          variants={ContactContainerVariants}
          initial='start'
          animate='end'
          exit='exit'
          className='w-full md:w-3/5 mx-5 p-8 shadow-md rounded-md flex flex-col lg:flex-row lg:justify-between overflow-hidden bg-white bg-opacity-5 hover:bg-white hover:bg-opacity-10 border border-blue-100 border-opacity-5 hover:border-blue-100 hover:border-opacity-20 transition-colors duration-500'>
          <section className='flex flex-col justify-between mb-2 md:mb-0'>
            <div className=''>
              <h1 className='text-3xl md:text-5xl'>Let's talk</h1>
              <p className='font-mono mt-1 text-sm md:text-base'>
                Ask me anything or just say hi.
              </p>
            </div>
            <Link href={MAILTO_MY_EMAIL_ID}>
              <div
                className='flex cursor-pointer invisible lg:visible'
                title='Mail me'>
                <svg
                  className='transform translate-y-1'
                  height='18'
                  width='18'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z'
                    clipRule='evenodd'
                  />
                </svg>
                <p className='ml-2'>
                  {MAILTO_MY_EMAIL_ID.replace('mailto:', '')}
                </p>
              </div>
            </Link>
          </section>
          <section>
            <ContactForm />
          </section>
        </motion.div>
        <Link href={MAILTO_MY_EMAIL_ID}>
          <motion.div
            initial={{y: 10, scale: 0.5, opacity: 0}}
            animate={{y: 0, scale: 1, opacity: 1}}
            className='flex fixed right-3 bottom-3 text-primary bg-primaryDark bg-opacity-20 hover:bg-opacity-40 transition-all ease-in-out duration-500 p-3 rounded-full cursor-pointer lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z'
                clipRule='evenodd'
              />
            </svg>
          </motion.div>
        </Link>
      </motion.div>
    </>
  )
}

export default contact
