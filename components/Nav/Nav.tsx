import {UiContext} from 'context/ui'
import {useContext} from 'react'
import NavDrawer from './NavDrawer'
import NavOpenButton from './NavOpenButton'

export const Nav = () => {
  const {isNavOpen} = useContext(UiContext)

  return (
    <>
      <NavOpenButton />
      <div
        id='nav-overlay'
        style={{zIndex: 5}}
        className={`${
          isNavOpen &&
          'bg-dark opacity-80 absolute w-screen h-screen max-h-screen transition duration-500 ease-in-out'
        }`}
      />
      <NavDrawer />
    </>
  )
}
