import { useContext } from 'react'

import { ThemeContext } from '../app/theme/Context'

export const useChekTheme = (style: string) => {
  const { isLight } = useContext(ThemeContext)
  const theme = isLight ? style : ''
  return theme
}
