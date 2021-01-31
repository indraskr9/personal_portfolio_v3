import {createContext, Dispatch, SetStateAction, useState} from 'react'

export interface UiContextType {
  isNavOpen: boolean
  setIsNavOpen: Dispatch<SetStateAction<boolean>>
}

export const UiContext = createContext<UiContextType>({})

function useUiProvider(): UiContextType {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return {isNavOpen, setIsNavOpen}
}

export const UiProvider: React.FC = ({children}) => {
  return (
    <UiContext.Provider value={useUiProvider()}>{children}</UiContext.Provider>
  )
}
