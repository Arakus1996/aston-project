import { PropsWithChildren } from 'react'

import { ReactComponent as FavoriteIcon } from '../../assets/favorite.svg'

import style from './FavoriteButton.module.css'

interface Props {
  handleClick?: () => void
  isActive: boolean
}

export const FavoriteButton = (props: PropsWithChildren<Props>) => {
  return (
    <div onClick={props.handleClick}>
      <FavoriteIcon
        className={
          props.isActive ? style.favoriteIcon__active : style.favoriteIcon
        }
      />
    </div>
  )
}
