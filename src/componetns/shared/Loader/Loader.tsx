import classNames from 'classnames'

import { ReactComponent as LoadingSvg } from '../../../assets/preload.svg'
import { useChekTheme } from '../../../hooks/useCheckTheme'

import style from './Loader.module.css'

export const Loader = () => {
  const theme = useChekTheme(style.light)
  return (
    <div className={classNames(style.exampleOverlay, theme)}>
      <LoadingSvg classname={style.loading} />
    </div>
  )
}
