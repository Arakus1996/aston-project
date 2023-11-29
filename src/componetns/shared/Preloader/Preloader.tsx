import { ReactComponent as LoadingSvg } from '../../../shared/assets/preload.svg'

import style from './Preloader.module.css'

export const Preloader = () => {
  return (
    <div className={style.exampleOverlay}>
      <LoadingSvg classname={style.loading} />
    </div>
  )
}
