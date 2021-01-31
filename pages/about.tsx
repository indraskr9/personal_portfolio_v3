import Link from 'next/link'

const about = () => {
  return (
    <Link href='/'>
      <button className='mt-5 bg-primary text-primaryDark px-3 py-2 rounded-full font-medium'>
        Hello world
      </button>
    </Link>
  )
}

export default about
