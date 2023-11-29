import { ReactComponent as DarkTheme } from '../../../assets/theme.svg'

import style from './ButtonTheme.module.css'

type Props = {
  setIsLight: (isLight: boolean) => void
  isLight: boolean
}

export const ButtonTheme = ({ setIsLight, isLight }: Props) => {
  return (
    <button
      onClick={() => {
        setIsLight(!isLight)
      }}
      className={style.buttonTheme}
    >
      <DarkTheme className={isLight ? style.lightTheme : style.darkTheme} />
    </button>
  )
}
