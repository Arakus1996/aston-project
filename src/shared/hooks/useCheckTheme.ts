import { useContext } from 'react'

import { ThemeContext } from '../context/Context'

export const useChekTheme = (style: string) => {
  const { isLight } = useContext(ThemeContext)
  const theme = isLight ? style : ''
  return theme
}
