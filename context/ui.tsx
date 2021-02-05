import {createContext, Dispatch, SetStateAction, useState} from 'react'

export type UiCtxType = {
  isNavOpen: boolean
  setIsNavOpen: Dispatch<SetStateAction<boolean>>
}

export const UiContext = createContext({} as UiCtxType)

export const UiProvider: React.FC = props => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  return (
    <UiContext.Provider value={{isNavOpen, setIsNavOpen}}>
      {props.children}
    </UiContext.Provider>
  )
}
