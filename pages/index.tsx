import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Indrajit Sarkar.</title>
      </Head>

      <div className='container mx-auto w-screen min-h-screen flex flex-col justify-center items-center '>
        <img
          className='h-28 w-2h-28 rounded-full mb-3'
          src='/profile.jpg'
          alt='Indrajit Sarkar'
        />
        <p className='text-primary font-mono'>Hello my name is</p>
        <h1 className='font-bold text-5xl mb-3 tracking-normal'>
          Indrajit Sarkar.
        </h1>
        <p className='text-center w-10/12 max-w-screen-sm opacity-80'>
          I’m a student, currently pursuing BCA. I love building/designing
          websites and applications. Currently working with various web
          technologies.
        </p>

        <button className='mt-5 bg-primary text-primaryDark px-3 py-2 rounded-full font-medium'>
          Get in touch
        </button>
      </div>
    </>
  )
}
