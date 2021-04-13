import {BiUpArrowAlt} from 'react-icons/bi'
import {useScrollValue} from 'utils/hooks'

export const ScrollToTop = () => {
  const {scrolledHeader} = useScrollValue()
  return scrolledHeader ? (
    <button
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      className='fixed z-20 flex uppercase right-5 md:right-10 bottom-5 md:bottom-10 btn-white'>
      <BiUpArrowAlt size={25} />{' '}
      <p className='hidden font-medium tracking-wider md:block'>go up</p>
    </button>
  ) : null
}
