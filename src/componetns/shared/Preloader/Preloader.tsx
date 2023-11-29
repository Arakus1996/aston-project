import { ReactComponent as LoadingSvg } from '../../../assets/preload.svg'

import style from './Preloader.module.css'

export const Preloader = () => {
  return (
    <div className={style.exampleOverlay}>
      <LoadingSvg />
    </div>
  )
}
