import { ReactNode, useState } from 'react'

import { ThemeContext } from '../context/Context'

type Props = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  const [isLight, setIsLight] = useState(false)
  const contexValue = { isLight, setIsLight }
  return (
    <ThemeContext.Provider value={contexValue}>
      {children}
    </ThemeContext.Provider>
  )
}
