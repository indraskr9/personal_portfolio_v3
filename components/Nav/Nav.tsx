import {UiContext} from 'context/ui'
import {useContext} from 'react'
import NavDrawar from './NavDrawar'
import NavOpenButton from './NavOpenButton'

export const Nav = () => {
  const {isNavOpen, setIsNavOpen} = useContext(UiContext)

  return (
    <>
      <NavOpenButton />
      <div
        id='nav-overlay'
        style={{zIndex: 5}}
        className={`${
          isNavOpen &&
          'bg-dark opacity-80 absolute w-screen min-h-screen transition duration-500 ease-in-out'
        }`}
        onClick={() => {
          isNavOpen && setIsNavOpen(!isNavOpen)
        }}
      />
      <NavDrawar />
    </>
  )
}
