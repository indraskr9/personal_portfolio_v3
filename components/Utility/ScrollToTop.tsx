import {BiUpArrowAlt} from 'react-icons/bi'
import {useScrollValue} from 'utils/hooks'

export const ScrollToTop = () => {
  const {scrolledHeader} = useScrollValue()
  return scrolledHeader ? (
    <div
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      className='fixed z-20 flex px-2 py-2 uppercase bg-white rounded-full cursor-pointer md:px-3 md:rounded-md text-dark right-5 md:right-10 bottom-5 md:bottom-10'>
      <BiUpArrowAlt size={25} />{' '}
      <p className='hidden font-medium tracking-wider md:block'>go up</p>
    </div>
  ) : null
}
